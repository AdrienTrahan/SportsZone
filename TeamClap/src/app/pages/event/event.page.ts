import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomePage } from '../home/home.page';
import { AlertController, Platform } from '@ionic/angular';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { serialize } from 'src/app/functions/serializer';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
let symbole = {
  YES: "checkmark.png",
  NO: "x.png",
  MAYBE: "ellipsis.png"
}
let presenceTitle = {
  YES: "Present",
  MAYBE: "Maybe",
  NO: "Absent"
}
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})


export class EventPage implements OnInit {
  eventInfo : any = {
    name: "Event",
    places: [],
  };
  state = "details";
  months = [ "janvier", "février", "mars", "avril", "mai", "juin", 
           "juillet", "août", "septembre", "octobre", "novembre", "décembre" ];
  presenceTitle = presenceTitle;
  symbole = symbole;
  params : any = {};
  owner = false;

  maybe = [];
  present = [];
  absent = [];
  nextPresence = 0;
  nextAbsence = 0;
  nextMaybe = 0;
  exceededPres = false;
  exceededMay = false;
  exceededAbs = false;
  static modifiable : any = {};
  constructor(private translate: TranslateService, private router: Router, private route: ActivatedRoute, public alertController: AlertController, public platform: Platform) {
    this.owner = HomePage.currentEventInfo.owner;
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams && queryParams.eventId){
        this.params = queryParams
        this.eventInfo = HomePage.currentEventInfo;
        this.eventInfo.hours = Math.floor(this.eventInfo.startTime / 60);
        this.eventInfo.minutes = ('0' + Math.floor(this.eventInfo.startTime % 60)).slice(-2);
        this.eventInfo.hours2 = Math.floor(this.eventInfo.endTime / 60);
        this.eventInfo.minutes2 = ('0' + Math.floor(this.eventInfo.endTime % 60)).slice(-2);
      }else{
      }
    })
  }
  showPresence(){
    this.router.navigateByUrl("/presenceboard?" + serialize({
      eventId: this.params.eventId,
      teamId: this.params.teamId,
      playerId: this.params.playerId
    }))
  }
  async deleteEvent(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.4.TITLE"),
      message: this.translate.instant("ALERTS.4.MESSAGE", {name: this.eventInfo.name}),
      buttons: [
        {
          text: this.translate.instant("ALERTS.4.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.translate.instant("ALERTS.4.BUTTONS.1"),
          cssClass: 'alertDanger',
          handler: async () => {
            try{
              let token = await get("token");
              await call("http://127.0.0.1:3000/api/deleteEvents", {
                token: token,
                id: this.params.teamId,
                events: JSON.stringify([this.params.eventId])
              });
              this.router.navigateByUrl("/team/events?" + serialize({
                teamId: this.params.teamId
              }));
        
            }catch(error){
              
            }
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {

    this.load();
  }
  modifyEvent(){
    EventPage.modifiable = this.eventInfo;
    this.router.navigateByUrl("/modifyevent?" + serialize({
      eventId: this.params.eventId,
      teamId: this.params.teamId
    }));
  }
  async changeRole(role, late?){
    try{
      let token = await get("token");
      let obj : any = {
        event: this.eventInfo.id,
        id: this.params.teamId,
        token: token,
        presence: role,
        playerId: this.params.playerId
      };
      if (!obj.playerId){
        delete obj.playerId;
      }
      if (late){
        obj.late = parseInt(late);
      }
      let result : any = await call("http://127.0.0.1:3000/api/changePresence", obj);
      result = JSON.parse(result);
      if (result.error){
        throw result.error;
      }
      let presence = parseInt(result.presence);
      if (this.eventInfo.presence == "NO" && presence != 2){
        this.eventInfo.presenceRatio[2] -= 1;
        this.eventInfo.presenceRatio[presence] += 1;
      }else if (this.eventInfo.presence == "MAYBE" && presence != 1){
        this.eventInfo.presenceRatio[1] -= 1;
        this.eventInfo.presenceRatio[presence] += 1;
      }else if (this.eventInfo.presence == "YES" && presence != 0){
        this.eventInfo.presenceRatio[0] -= 1;
        this.eventInfo.presenceRatio[presence] += 1;
      }
      let roles = ["YES", "MAYBE", "NO"];
      this.eventInfo.presence = roles[presence];
      this.eventInfo.late = result.late;
      HomePage.currentEventInfo = this.eventInfo;
    }catch(error){
      
    }
    
    
  }
  async changePresence(){
    const alert = await this.alertController.create({
      cssClass: 'containerAlert',
      header: this.translate.instant("ALERTS.0.TITLE"),
      message: this.translate.instant("ALERTS.1.TITLE", {name: this.eventInfo.name}) ,
      buttons: [
        {
          text: this.translate.instant("ALERTS.0.BUTTONS.0"),
          cssClass: 'noButtonAlert',
          handler: (blah) => {
            this.changeRole(2);
          }
        } as any,{
          text: this.translate.instant("ALERTS.0.BUTTONS.1"),
          cssClass: "maybeButtonAlert",
          handler: (blah) => {
            this.changeRole(1);
          }
        } as any, {
          text: this.translate.instant("ALERTS.0.BUTTONS.2"),
          cssClass: 'yesButtonAlert',
          handler: () => {
            this.changeRole(0);
          }
        } as any, {
          text: this.translate.instant("ALERTS.0.BUTTONS.3"),
          cssClass: 'lateButtonAlert',
          handler: () => {
            this.lateByMinutes();
          }
        } as any
      ]
    });

    await alert.present();
  }
  async lateByMinutes(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.1.TITLE"),
      subHeader: this.translate.instant("ALERTS.1.MESSAGE"),
      inputs: [
        {
          name: 'minutes',
          id: 'minutes',
          type: 'number',
          placeholder: 'ex: 10 min'
        }
      ],
      buttons: [
        {
          text: this.translate.instant("ALERTS.1.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: this.translate.instant("ALERTS.1.BUTTON.1"),
          handler: (alertData) => {
            this.changeRole(0, alertData.minutes);
          }
        }
      ]
    });

    await alert.present();
  }

  async getPresentPlayers(){
    let token = await get("token");
    let obj : any = {token: token, id: this.params.teamId, eventId: this.params.eventId, nextPresence: this.nextPresence};
    if (this.params.playerId && this.params.playerId != "undefined"){
      obj.playerId = this.params.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getPresence", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (var i = 0; i < result.length; i++){
        this.present.push(result[i]);
      }
      if (result.length == 0){
        this.nextMaybe = 0;
        this.maybe = [];
        await this.getMaybePlayers();
        this.exceededPres = true;
      }else{
        this.nextPresence += result.length;
      }
      
    }catch(error){
    }
  }
  async getAbsentPlayers(){
    let token = await get("token");
    let obj : any = {token: token, id: this.params.teamId, eventId: this.params.eventId, nextAbsence: this.nextAbsence};
    if (this.params.playerId && this.params.playerId != "undefined"){
      obj.playerId = this.params.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getAbsence", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (var i = 0; i < result.length; i++){
        this.absent.push(result[i]);
      }
      this.nextAbsence += result.length;
    }catch(error){
      
    }
  }
  async getMaybePlayers(){
    let token = await get("token");
    let obj : any = {token: token, id: this.params.teamId, eventId: this.params.eventId, nextMaybe: this.nextMaybe};
    if (this.params.playerId && this.params.playerId != "undefined"){
      obj.playerId = this.params.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getMaybe", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (var i = 0; i < result.length; i++){
        this.maybe.push(result[i]);
      }
      
      if (result.length == 0){
        this.nextAbsence = 0;
        this.absent = [];
        await this.getAbsentPlayers();
        this.exceededMay = true;
      }else{
        this.nextMaybe += result.length;
      }
    }catch(error){
      
    }
  }
  async loadData(event){
    if (!this.exceededPres){
      await this.getPresentPlayers();
    }else if (!this.exceededMay){
      await this.getMaybePlayers();
    }else if (!this.exceededAbs){
      await this.getAbsentPlayers();
    }
    event.target.complete();
  }
  async refresh(event){
    this.load();
    event.target.complete();
  }

  async load(){

    this.exceededPres = false;
    this.exceededMay = false;
    this.exceededAbs = false;
    this.nextPresence = 0;
    this.present = [];
    await this.getPresentPlayers();
    this.nextMaybe = 0;
    this.maybe = [];
    if (this.present.length  < 15){
      await this.getMaybePlayers();
    }
    this.nextAbsence = 0;
    this.absent = [];
    if (this.present.length + this.maybe.length < 15){
      await this.getAbsentPlayers();
    }
  }
  selectPlayer(pres, index){
    let obj : any = {
      teamId: this.params.teamId
    };
    if (this.params.playerId && this.params.playerId != "undefined"){
      obj.playerId = this.params.playerId
    }
    if (pres == 0){
      obj.player = this.present[index].id;
    }else if (pres == 1){
      obj.player = this.maybe[index].id;
    }else if (pres == 2){
      obj.player = this.absent[index].id;
    }
    this.router.navigateByUrl("/player-profile?" + serialize(obj));
  }
}
