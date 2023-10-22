import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { call, logout } from 'src/app/functions/call';
import { get, set } from 'src/app/functions/storage';
import { HomePage } from '../../home/home.page';
import { ModalController } from '@ionic/angular';
import { ShareteamPage } from '../../shareteam/shareteam.page';
import { serialize } from 'src/app/functions/serializer';
import { CreateeventPage } from '../../createevent/createevent.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class TeamPage implements OnInit {
  section = ["Events", "Players", "Mail", "Settings"]
  selectedPage : Number = 0;
  static teamInfo : any = {};
  alias = TeamPage;
  parameters = "";
  deleting = false;
  private loadingObservable = new Subject<any>();
  private deletingObservable = new Subject<any>();
  private newMessageObservable = new Subject<any>();
  queryParams : any = {};
  constructor(private router: Router, private route: ActivatedRoute, private modal: ModalController, private nativePageTransitions: NativePageTransitions) {
    this.route.queryParams.subscribe((queryParams) => {
      this.parameters = serialize(queryParams);
      if (queryParams && queryParams.teamId){
        this.queryParams = queryParams;
        this.loadGeneralTeam(queryParams.teamId, queryParams.playerId);
      }
    })
    
  }
  finishLoading(data?: any) {
    this.loadingObservable.next(data);
  }

  getObservable(): Subject<any> {
    return this.loadingObservable;
  }
  getDeletingObservable(): Subject<any> {
    return this.deletingObservable;
  }
  getNewMessageObservable(): Subject<any>{
    return this.newMessageObservable;
  }
  async ngOnInit() {
    if (await get("controller." + (this.queryParams.playerId ? this.queryParams.playerId : "token") + "." + this.queryParams.teamId + ".teamInfo")){
      TeamPage.teamInfo = await get("controller." + (this.queryParams.playerId ? this.queryParams.playerId : "token") + "." + this.queryParams.teamId + ".teamInfo");
      for (var i = 0; i < TeamPage.teamInfo.players.length; i++){
        TeamPage.teamInfo.players[i].image = await get("image." + TeamPage.teamInfo.players[i].id);
      }
      
      this.finishLoading()
    }
  }
  selectPage(index: Number){
    this.selectedPage = index;
  }
  deleteEvents(){
    this.deletingObservable.next({});
    this.deleting = true;
  }
  deleteEventsTrash(){
    this.deletingObservable.next({execute: true});
    this.deleting = false;
  }
  cancelDeleteEvents(){
    this.deletingObservable.next({cancel: true});
    this.deleting = false;
  }
  async loadGeneralTeam(teamId, playerId){
    let token = await get("token");
    let obj : any = {token: token, id: teamId};
    if (playerId){
      obj.playerId = playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getGeneralTeamInfo", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      TeamPage.teamInfo = result;
      
      TeamPage.teamInfo.playerId = playerId;
      set("controller." + (this.queryParams.playerId ? this.queryParams.playerId : "token") + "." + this.queryParams.teamId + ".teamInfo", TeamPage.teamInfo);
      for (var i = 0; i < TeamPage.teamInfo.players.length; i++){
        let j = parseInt("" + i);
        toDataURL(TeamPage.teamInfo.players[j].image, (base64) => {
          set("image." + TeamPage.teamInfo.players[j].id, base64 + "");
        });
      }
      this.finishLoading()
      
    }catch(error){
      error = error + "";
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  async logout(){
    await logout();
    HomePage.userInformation = {};
    this.router.navigateByUrl("/");
  }
  shareTeam(){
    this.modal.create({component: ShareteamPage}).then((modal)=>{
      modal.present();
    }).catch((err)=> {

    })
  }
  newEvent(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 200,
      slowdownfactor: -1,
      iosdelay: 100
    }
    this.nativePageTransitions.slide(options);
    this.router.navigateByUrl("/createevent?" + this.parameters);
  }
  newMessageThread(){
    this.newMessageObservable.next();
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