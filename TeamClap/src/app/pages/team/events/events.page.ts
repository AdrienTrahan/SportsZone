import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HomePage } from '../../home/home.page';
import { trigger, transition, style, animate } from '@angular/animations';
import { TeamPage } from '../controller/team.page';
import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import { call, logout } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { serialize } from 'src/app/functions/serializer';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  animations: [
    trigger(
      'enterLeft', 
      [
        transition(
          ':enter', 
          [
            style({ transform: "translateX(-100%)"}),
            animate('0.3s', 
                    style({ transform: "translateX(0px)"}))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ transform: "translateX(0%)"}),
            animate('0.3s', 
                    style({ transform: "translateX(-100%)"}))
          ]
        )
      ]
    ),trigger(
      'enterRight', 
      [
        transition(
          ':enter', 
          [
            style({ transform: "translateX(100%)"}),
            animate('0.3s', 
                    style({ transform: "translateX(0px)"}))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ transform: "translateX(0%)"}),
            animate('0.3s', 
                    style({ transform: "translateX(100%)"}))
          ]
        )
      ]
    )
  ]
})
export class EventsPage implements OnInit, OnDestroy{
  events = [];
  pastEvents = [];
  selectedEvents = [];
  subscription: Subscription;
  alias = TeamPage;
  params : any = {};
  loaded = false;
  deleting = false;
  state = "Futur";
  constructor(private translate: TranslateService, private router: Router, private route: ActivatedRoute, private ControllerObservable: TeamPage, private alertController: AlertController) {
    this.route.queryParams.subscribe((queryParams) => {
      this.params = queryParams
    });
    this.ControllerObservable.getObservable().subscribe((data) => {
      this.loaded = true;
      this.load();
    });
    this.ControllerObservable.getDeletingObservable().subscribe((data) => {
      if (data.cancel){
        this.cancelDeleteEvents();
      }else if (data.execute){
        this.deleteSelectedEvents();
        this.deleting = false;
      }else{
        this.deleteEvents();
      }
    });
  }
  selectDeletingEvent(index: any){
    this.selectedEvents[index] = !this.selectedEvents[index];
  }
  ngAfterViewInit() {
  }
  cancelDeleteEvents(){
    this.deleting = false;
  }
  deleteEvents(){
    this.deleting = true;
  }
  async ngOnInit(){
    await this.onEnter();

    this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url && event.url.startsWith('/team/events')) {
            this.onEnter();
        }
    });
  }

  public async onEnter(){
    if (this.loaded){
      this.alias.teamInfo.nextEvent = 0;
      this.alias.teamInfo.nextPastEvent = 0;
      this.load();
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  async load(){
    this.events = this.alias.teamInfo.events;
    this.pastEvents = this.alias.teamInfo.pastEvents;
    this.pastEvents.sort((a, b) => {return b.timestamp - a.timestamp});
    this.reloadDeletingSelection(true);
    this.serializeEvents();
    
  }
  ionViewDidAppear(){
  }
  async deleteSelectedEvents(){
    let count = 0;
    let events = [];
    for (var i = 0; i < this.selectedEvents.length; i ++){
      if (this.selectedEvents[i]){
        count ++;
        events.push(this.events[i].id);
      }
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.11.TITLE"),
      message: this.translate.instant("ALERTS.11.MESSAGE", {count: count}),
      buttons: [
        {
          text: this.translate.instant("ALERTS.11.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.translate.instant("ALERTS.11.BUTTONS.1"),
          cssClass: 'alertDanger',
          handler: async () => {
            try{
              let token = await get("token");
              await call("http://127.0.0.1:3000/api/deleteEvents", {
                token: token,
                id: this.params.teamId,
                events: JSON.stringify(events)
              });
              this.refresh();
              this.deleting = false;
            }catch(error){
              
            }
          }
        }
      ]
    });

    await alert.present();
  }
  serializeEvents(){
    for (var i = 0; i < this.events.length; i++){
      if (!this.events[i].placesString){
        if (!Array.isArray(this.events[i].places)){
          this.events[i].places = [];
        }
        this.events[i].placesString = JSON.stringify(this.events[i].places);
      }
    }
    for (var i = 0; i < this.pastEvents.length; i++){
      if (!this.pastEvents[i].placesString){
        if (!Array.isArray(this.pastEvents[i].places)){
          this.pastEvents[i].places = [];
        }
        this.pastEvents[i].placesString = JSON.stringify(this.pastEvents[i].places);
      }
    }
  }
  changePresence(event){
    if (this.events[event.index].presence == "NO" && event.presence != 2){
      this.events[event.index].presenceRatio[2] -= 1;
      this.events[event.index].presenceRatio[event.presence] += 1;
    }else if (this.events[event.index].presence == "MAYBE" && event.presence != 1){
      this.events[event.index].presenceRatio[1] -= 1;
      this.events[event.index].presenceRatio[event.presence] += 1;
    }else if (this.events[event.index].presence == "YES" && event.presence != 0){
      this.events[event.index].presenceRatio[0] -= 1;
      this.events[event.index].presenceRatio[event.presence] += 1;
    }
    let roles = ["YES", "MAYBE", "NO"];
    this.events[event.index].presence = roles[event.presence];
    this.events[event.index].late = event.late;
  }
  selectEvent(index: any){
    HomePage.currentEventInfo = this.events[index.index];
    let obj = {
      eventId: this.events[index.index].id,
      playerId: this.params.playerId,
      teamId: this.params.teamId
    };
    if (!this.params.playerId){
      delete obj.playerId
    }

    this.router.navigateByUrl("/event?" + serialize(obj));
  }
  async loadData(event){
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    obj.nextEvent = this.alias.teamInfo.nextEvent;
    let result : any= await call("http://127.0.0.1:3000/api/getNextEvents", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (const event of result){
        TeamPage.teamInfo.events.push(event);
        this.events = TeamPage.teamInfo.events;
        this.reloadDeletingSelection();

      }
      TeamPage.teamInfo.nextEvent += result.length;
      this.reloadDeletingSelection();
      this.alias = TeamPage;
      event.target.complete();
      
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  async loadDataPast(event){
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    
    obj.nextPastEvent = this.alias.teamInfo.nextPastEvent;
    let result : any= await call("http://127.0.0.1:3000/api/getNextPastEvents", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (const event of result){
        TeamPage.teamInfo.pastEvents.push(event);
        this.pastEvents = TeamPage.teamInfo.pastEvents;
      }
      this.pastEvents = this.pastEvents.sort((a, b) => {return b.timestamp - a.timestamp});
      TeamPage.teamInfo.nextPastEvent += result.length;
      this.alias = TeamPage;
      event.target.complete();
      
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  reloadDeletingSelection(reload?){
    if (reload){
      this.selectedEvents = [];
    }
    for (var i = 0; i < this.events.length; i++){
      this.selectedEvents.push(false);
    }
  }
  async logout(){
    await logout();
    HomePage.players = [];
    HomePage.userInformation = {};
    this.events = [];
    this.reloadDeletingSelection(true);
    this.router.navigateByUrl("/");
  }
  async refresh(event?){
    TeamPage.teamInfo.events = [];
    this.alias = TeamPage;
    TeamPage.teamInfo.nextEvent = 0;
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    obj.nextEvent = this.alias.teamInfo.nextEvent;
    let result : any= await call("http://127.0.0.1:3000/api/getNextEvents", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (const event of result){
        TeamPage.teamInfo.events.push(event);
        this.events = TeamPage.teamInfo.events;
        this.reloadDeletingSelection(true);
      }
      TeamPage.teamInfo.nextEvent += result.length;
      this.events = TeamPage.teamInfo.events;
      this.reloadDeletingSelection(true);
      
      this.alias = TeamPage;
      if (event.target != undefined){
        event.target.complete();
      }
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  async refreshPast(event?){
    TeamPage.teamInfo.pastEvents = [];
    this.alias = TeamPage;
    TeamPage.teamInfo.nextPastEvent = 0;
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    obj.nextPastEvent = this.alias.teamInfo.nextPastEvent;
    let result : any = await call("http://127.0.0.1:3000/api/getNextPastEvents", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (const event of result){
        TeamPage.teamInfo.pastEvents.push(event);
        this.pastEvents = TeamPage.teamInfo.pastEvents;
      }
      this.pastEvents = this.pastEvents.sort((a, b) => {return b.timestamp - a.timestamp});
      TeamPage.teamInfo.nextPastEvent += result.length;
      this.pastEvents = TeamPage.teamInfo.pastEvents;
      this.alias = TeamPage;
      if (event.target != undefined){
        event.target.complete();
      }
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  openPastEvent(index: any){
    HomePage.currentEventInfo = this.pastEvents[index];
    let obj = {
      eventId: this.pastEvents[index].id,
      playerId: this.params.playerId,
      teamId: this.params.teamId,
      past: true
    };
    if (!this.params.playerId){
      delete obj.playerId
    }

    this.router.navigateByUrl("/event?" + serialize(obj));
  }
}
