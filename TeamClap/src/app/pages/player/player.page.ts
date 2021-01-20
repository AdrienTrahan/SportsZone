import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { IonicRouteStrategy, ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { trigger, transition, style, animate } from '@angular/animations';
import { JoinTeamPage } from '../join-team/join-team.page';
import { LoadingController } from '@ionic/angular';
import { get, set } from 'src/app/functions/storage';
import { call } from 'src/app/functions/call';
import { serialize } from 'src/app/functions/serializer';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
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
export class PlayerPage implements OnInit {
  playerInfo : any = {
  };
  state = "Teams";
  invisible = false;
  teams = [];
  events : any = [];
  mustGoBack = false;
  loaded = false;
  params : any = {};
  nextEvent = 0;
  constructor(private router: Router, private route: ActivatedRoute, private modal: ModalController) {
    route.queryParams.subscribe(async (queryParams) => {
      this.params = queryParams;
      if (queryParams && queryParams.playerId){
        let filtered = HomePage.players.filter((el)=>{
          return el.id == queryParams.playerId;
        })
        if (filtered.length == 0){
          this.mustGoBack = true;
          return;
        }
        this.playerInfo = filtered[0];
        this.playerInfo.name = filtered[0].first + " " + filtered[0].last;
        this.load();
        
      }else{
        this.mustGoBack = true;
      }
    })
  }
  async ngOnInit() {
    if (await get("player." + this.playerInfo.id + ".teams")){
      this.teams = await get("player." + this.playerInfo.id + ".teams");
      for (var i = 0; i < this.teams.length; i++){
        this.teams[i].image = await get("image." + this.teams[i].id);
      }
    }
    if (await get("player." + this.playerInfo.id + ".upcomming")){
      this.events = await get("player." + this.playerInfo.id + ".upcomming");
    }
  }
  async ionViewDidEnter(){
    if (this.mustGoBack){
      this.router.navigateByUrl("/home");
      this.mustGoBack = false;
    }
    
    
  }
  async load(){
    if (this.playerInfo.teams.length != this.teams.length){
      await this.getTeams();
      await this.getUpcomming();
    }
    this.loaded = true;
  }
  async getTeams(){
    let token = await get("token");
    let teams = await call("http://127.0.0.1:3000/api/getTeams", {token: token, playerId: this.playerInfo.id});
    try{
      teams = JSON.parse(teams);
      if ((teams as any).error){throw (teams as any).error;};
      this.teams = teams as any;
      set("player." + this.playerInfo.id + ".teams", this.teams);
      for (var i = 0; i < this.teams.length; i++){
        let j = parseInt("" + i);
        toDataURL(this.teams[j].image, (base64) => {
          set("image." + this.teams[j].id, base64 + "");
        });
      }
    }catch(err){
    }
    
  }
  async getUpcomming(){
    this.nextEvent = 0;
    let token = await get("token");
    let events = await call("http://127.0.0.1:3000/api/getUpcommingEvents", {token: token, playerId: this.playerInfo.id, nextEvent: this.nextEvent});
    try{
      events = JSON.parse(events);
      if ((events as any).error){throw (events as any).error;};
      this.events = events;
      this.nextEvent += events.length;

      set("player." + this.playerInfo.id + ".upcomming", this.events);
    }catch(err){
      
    }
  }
  selectTeam(index: Number){
    this.router.navigateByUrl(`/team/events?teamId=${this.teams[index as any].id}&playerId=${this.playerInfo.id}`);
  }
  selectEvent(index: any){
    HomePage.currentEventInfo = this.events[index.index];
    let obj = {
      eventId: this.events[index.index].id,
      playerId: this.params.playerId,
      teamId: this.events[index.index].team
    };
    if (!this.params.playerId){
      delete obj.playerId
    }
    this.router.navigateByUrl("/event?" + serialize(obj));
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
  }
  joinTeam(){
    this.modal.create({component: JoinTeamPage}).then((modal) => {
      modal.present();
      this.invisible = true;
      modal.onDidDismiss().then((data) => {
        this.invisible = false;
        if (data.data && !this.teams.map((x) => x.id).includes(data.data.id)){
          this.teams.push(data.data)
        }
      });
    });
  }
  ionViewWillLeave(){
    this.loaded = false;
  }
  async refresh(event){
    if (this.state == 'Teams'){
      await this.getTeams();
      event.target.complete();
    }else{
      await this.getUpcomming();
      event.target.complete();
    }
  }
  async loadData(event){
    let token = await get("token");
    let events = await call("http://127.0.0.1:3000/api/getUpcommingEvents", {token: token, playerId: this.playerInfo.id, nextEvent: this.nextEvent});
    try{
      events = JSON.parse(events);
      if ((events as any).error){throw (events as any).error;};
      for (var i = 0; i < events.length; i++){
        this.events.push(events[i]);
      }
      this.nextEvent += events.length;
      event.target.complete();
    }catch(err){
      
    }

  }
}

function toDataURL(url, callback) {
  let image;
    image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', function() {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        try {
          callback(canvas.toDataURL('image/png'));
        } catch (err) {
            console.error(err)
        }
    });
    image.src = url;
}