import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { get } from 'src/app/functions/storage';
import { call } from 'src/app/functions/call';
import { serialize } from 'src/app/functions/serializer';

@Component({
  selector: 'app-presenceboard',
  templateUrl: './presenceboard.page.html',
  styleUrls: ['./presenceboard.page.scss'],
})
export class PresenceboardPage implements OnInit {
  state = "Present";
  params : any = {};
  maybe = [];
  present = [];
  absent = [];
  nextPresence = 0;
  nextAbsence = 0;
  nextMaybe = 0;
  exceededPres = false;
  exceededMay = false;
  exceededAbs = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams && queryParams.eventId){
        this.params = queryParams;
      }else{
      }
    })
  }

  ngOnInit() {
    this.load();
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
