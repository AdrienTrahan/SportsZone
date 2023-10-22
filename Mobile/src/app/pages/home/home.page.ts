import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { trigger, transition, style, animate } from '@angular/animations';
import { HomePageRoutingModule } from './home-routing.module';
import { get, set, remove } from "../../functions/storage";
import { call, upload, logout } from "../../functions/call";
import { NewplayerPage } from '../newplayer/newplayer.page';
import { PopoverController } from '@ionic/angular';
import { RolepopoverComponent } from 'src/app/components/rolepopover/rolepopover.component';
import { RolechooserPage } from '../rolechooser/rolechooser.page';
import { SettingsPage } from '../settings/settings.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NewteamPage } from '../newteam/newteam.page';
import { JoinTeamPage } from '../join-team/join-team.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
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
export class HomePage implements OnInit {
  role = 10;
  state = "Players";
  loaded = false;
  roleName = "";
  invisible = false;
  state2 = "Teams";
  title = {"0": {Players: "Mes joueurs", Teams: "Mes équipes"}, "1":{Teams: "Mes équipes"}, "10": {Players: "", Teams: ""}}
  static players = [];
  players = HomePage.players;
  static teams = [];
  teams = HomePage.teams;
  static hostedTeams = [];
  hostedTeams = HomePage.hostedTeams;
  static currentEventInfo : any = {};
  
  static userInformation : any = {};
  userInformation = HomePage.userInformation;
  static updateInfo;
  constructor(private router: Router, private modal: ModalController, public popoverController: PopoverController, private nativePageTransitions: NativePageTransitions) {
    HomePage.updateInfo = async () => {await this.getUserInformation(true)};
  }
  async ionViewWillEnter(){
    await this.load();
  }
  async ionViewDidEnter(){
  }
  async load(){
    this.loaded = false;
    await this.getUserInformation();
    
    await this.getPlayers();
    await this.getTeams();
    
    this.loaded = true;
    
  }
  async getUserInformation(staticaly: boolean = false){
    this.role = await get("role");
    let token = await get("token");
    let information = await call("http://127.0.0.1:3000/api/getUserInformation", {token: token});
    try{
      
      information = JSON.parse(information);
      if ((information as any).error){throw (information as any).error;};
      HomePage.userInformation = information;
      if (!staticaly){
        this.userInformation = information;
        this.verifyInformation();
        set("home.userInfo", this.userInformation);
      }

      
      
    }catch(error){
      error = error + "";
      if (error.includes("[993]")){
        if (!staticaly){
          this.logout();
        }
      }
    }
    
  }
  showRoleChooser(){
    this.modal.create({component: RolechooserPage, componentProps: {obligated: true}}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then(()=>{
        this.load();
      })
    })
  }
  async verifyInformation(){
    let info = HomePage.userInformation as any;
    if (info.availableRoles.length == 0){
      this.showRoleChooser();
    }
    
    if (await get("role") == null || await get("role") == undefined){
      await set("role", parseInt(info.availableRoles[0]));
    }
    let role = await get("role");
    this.role = role;
    if (role == 1){
      this.getHostedTeams();
    }
  }
  async getPlayers(){
    let token = await get("token");
    let players = await call("http://127.0.0.1:3000/api/getPlayers", {token: token});
    try{
      players = JSON.parse(players);
      if ((players as any).error){throw "";};
      this.players = players as any;
      set("home.players", this.players);
      for (var i = 0; i < this.players.length; i++){
        let j = parseInt("" + i);
        toDataURL(this.players[j].image, (base64) => {
          set("image." + this.players[j].id, base64 + "");
        });
      }
      HomePage.players = players as any;
    }catch{}
    
  }
  async getHostedTeams(){
    let token = await get("token");
    let teams = await call("http://127.0.0.1:3000/api/getHostedTeams", {token: token});
    try{
      teams = JSON.parse(teams);
      if ((teams as any).error){throw (teams as any).error;};
      this.hostedTeams = teams as any;

      set("home.hostedTeams", this.hostedTeams);
      
      for (var i = 0; i < this.hostedTeams.length; i++){
        let j = parseInt("" + i);
        toDataURL(this.hostedTeams[j].image, (base64) => {
          set("image." + this.hostedTeams[j].id, base64 + "");
        });
      }
      HomePage.hostedTeams = teams as any;
      
    }catch(err){
    }
    
  }
  async getTeams(){
    let token = await get("token");
    let teams = await call("http://127.0.0.1:3000/api/getGlobalTeams", {token: token});
    try{
      teams = JSON.parse(teams);
      if ((teams as any).error){throw (teams as any).error;};
      this.teams = teams as any;
      set("home.teams", this.teams);
      for (var i = 0; i < this.teams.length; i++){
        let j = parseInt("" + i);
        toDataURL(this.teams[j].image, (base64) => {
          set("image." + this.teams[j].id, base64 + "");
        });
      }
      HomePage.teams = teams as any;
      
    }catch(err){
    }
    
  }
  async ngOnInit() {
    if (await get("home.userInfo")){
      HomePage.userInformation = await get("home.userInfo");
      this.userInformation = await get("home.userInfo");
    }
    if (await get("home.players")){
      HomePage.players = await get("home.players");
      this.players = await get("home.players");
      for (var i = 0; i < this.players.length; i++){
        this.players[i].image = await get("image." + this.players[i].id);
      }
    }
    if (await get("home.teams")){
      HomePage.teams = await get("home.teams");
      this.teams = await get("home.teams");
      for (var i = 0; i < this.teams.length; i++){
        this.teams[i].image = await get("image." + this.teams[i].id);
      }
    }
    if (await get("home.hostedTeams")){
      HomePage.hostedTeams = await get("home.hostedTeams");
      this.hostedTeams = await get("home.hostedTeams");
      for (var i = 0; i < this.hostedTeams.length; i++){
        this.hostedTeams[i].image = await get("image." + this.hostedTeams[i].id);
        
      }
    }
  }
  selectPlayer(index: Number){
    this.router.navigateByUrl(`/player?playerId=${this.players[index as any].id}`);
  }
  selectTeam(index: Number){
    for (var i = 0; i < this.players.length; i++){
      if (this.players[i].teams.includes(this.teams[index as any].id)){
        this.router.navigateByUrl(`/team/events?teamId=${this.teams[index as any].id}&playerId=${this.players[i].id}`);
        return;
      }
    }
  }
  selectHostedTeam(index: Number){
    this.router.navigateByUrl(`/team/events?teamId=${this.hostedTeams[index as any].id}`);
  }
  async logout(){
    await logout();
    this.players = [];
    HomePage.players = [];
    HomePage.userInformation = {};
    this.userInformation = {};
    this.router.navigateByUrl("/");
  }
  addPlayer(){
    this.modal.create({component: NewplayerPage}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if ((data.data != undefined || data.data != null) && data.data.first){
          this.players.push(data.data);
        }
      });
    });
  }
  async changeRole(ev: any) {
      const popover = await this.popoverController.create({
        component: RolepopoverComponent,
        cssClass: 'my-custom-class',
        event: ev,
        translucent: true,
        componentProps: {roles: HomePage.userInformation.availableRoles}
      });
      return await popover.present().then((pop) => {
        popover.onDidDismiss().then(() => {
          this.load();
        })
      });
  }
  settings(){

    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 200,
      slowdownfactor: -1,
      iosdelay: 100
    }
    this.nativePageTransitions.slide(options);
    this.router.navigateByUrl("/settings");
  }
  addTeam(){
    this.modal.create({component: NewteamPage}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        this.load();
      });
    });
  }
  ionViewWillLeave(){
    this.loaded = false;
  }
  async refresh(event){
    this.loaded = false;
    if (this.role == 0){
      if (this.state == 'Players'){
        await this.getPlayers();
        event.target.complete();
      }else if (this.state == "Teams"){
        await this.getTeams();
        event.target.complete();
      }
    }else if (this.role == 1){
      await this.getHostedTeams();
      event.target.complete();
    }
    this.loaded = true;
    
  }
  joinTeam(){
    this.modal.create({component: JoinTeamPage}).then((modal) => {
      modal.present();
      this.invisible = true;
      modal.onDidDismiss().then((data) => {
        this.invisible = false;
        if (data.data){
          this.teams.push(data.data)
        }
      });
    });
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