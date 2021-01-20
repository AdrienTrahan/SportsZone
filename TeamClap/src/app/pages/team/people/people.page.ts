import { Component, OnInit, Input } from '@angular/core';
import { HomePage } from '../../home/home.page';
import { TeamPage } from '../controller/team.page';
import { call, logout } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { serialize } from 'src/app/functions/serializer';
import { AlertController, PopoverController } from '@ionic/angular';
import { ExcludeuserComponent } from 'src/app/components/excludeuser/excludeuser.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  players : any = [];
  alias = TeamPage;
  filtered : any = JSON.parse(JSON.stringify(this.players));
  params : any = {};
  currentId = "";
  constructor(public translate: TranslateService, public popoverController: PopoverController, private router: Router, private route: ActivatedRoute, public alertCtrl: AlertController) {
    this.route.queryParams.subscribe((queryParams) => {
      this.params = queryParams
    });
  }

  async ngOnInit() {
    this.currentId = (await get("token")).split("-")[0];
  }
  async ionViewWillEnter(){
    this.load();
  }
  async load(){
    this.players = this.alias.teamInfo.players;
    this.filtered = JSON.parse(JSON.stringify(this.players));
  }
  search(data){
    this.filtered = this.players.filter((value) => {
      return value.first.toUpperCase().includes(data.toUpperCase()) ||
             value.last.toUpperCase().includes(data.toUpperCase())  ||
             (value.last + " " + value.first).toUpperCase().includes(data.toUpperCase()) ||
             (value.first + " " + value.last).toUpperCase().includes(data.toUpperCase()) ||
             (value.first + value.last).toUpperCase().includes(data.toUpperCase()) ||
             (value.last + value.first).toUpperCase().includes(data.toUpperCase());
    });
  }
  
  async logout(){
    await logout();
    HomePage.players = [];
    HomePage.userInformation = {};
    this.players = [];
    this.router.navigateByUrl("/");
  }
  async refresh(event){
    TeamPage.teamInfo.players = [];
    this.alias = TeamPage;

    TeamPage.teamInfo.nextPlayer = 0;
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    obj.nextPlayer = this.alias.teamInfo.nextPlayer;
    let result : any= await call("http://127.0.0.1:3000/api/getNextPlayers", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      TeamPage.teamInfo.players = result;
      this.filtered = TeamPage.teamInfo.players;
      this.players = this.filtered;
      this.alias = TeamPage;
      if (event){
        event.target.complete();
      }
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  async loadData(event){
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    obj.nextPlayer = this.alias.teamInfo.nextPlayer;
    let result : any= await call("http://127.0.0.1:3000/api/getNextPlayers", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (const player of result){
        TeamPage.teamInfo.players.push(player);
        this.filtered = TeamPage.teamInfo.players;
        this.players = this.filtered;
      }
      TeamPage.teamInfo.nextPlayer += result.length;
      this.alias = TeamPage;
      if (event){
        event.target.complete();
      }
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  async selectPlayer(index, target, event){
    if (!target.classList.contains("menu-button") && !target.classList.contains("menu-button-2")){
      let obj : any = {
        teamId: this.params.teamId,
        player: this.filtered[index as any].id
      };
      if (this.params.playerId && this.params.playerId != "undefined"){
        obj.playerId = this.params.playerId
      }
      this.router.navigateByUrl("/player-profile?" + serialize(obj))
    }else{
      let popover = await this.popoverController.create({
        component: ExcludeuserComponent,
        event: event,
        translucent: true
      });
      popover.present().then(() => {
        let confirmationAlert = async (data2) => {
          if (data2.data == "exclude"){
            let prompt = await this.alertCtrl.create({
              header: this.translate.instant("ALERTS.16.TITLE"),
              message: this.translate.instant("ALERTS.16.MESSAGE", {copy: this.filtered[index as any].first + " " + this.filtered[index as any].last}),
              inputs: [
                {
                  name: 'title',
                  cssClass: "confirmationInputExclude",
                  placeholder: this.filtered[index as any].first + " " + this.filtered[index as any].last,
                }
              ],
              buttons: [
                {
                  text: this.translate.instant("ALERTS.16.BUTTONS.0"),
                  handler: data => {
                  }
                },
                {
                  text: this.translate.instant("ALERTS.16.BUTTONS.1"),
                  handler: data => {
                    let text = ((document.getElementsByClassName("confirmationInputExclude")[0] as any).value);
                    if (text == this.filtered[index as any].first + " " + this.filtered[index as any].last){
                      this.excludePlayer(index);
                    }else{
                      confirmationAlert(data2);
                    }
                  }
                }
              ]
            });
            prompt.present();
          }
        };
        popover.onDidDismiss().then(confirmationAlert);
      });
      
    }
  }
  async excludePlayer(index){
    let token = await get("token");
    if (token.split("-")[0] != this.filtered[index].id){
      await call("http://127.0.0.1:3000/api/excludeParticipant", {token: token, id: this.alias.teamInfo.id, participant: this.filtered[index].id, role: this.filtered[index].role? true:false});
      this.refresh(undefined);
    }
  }
}
