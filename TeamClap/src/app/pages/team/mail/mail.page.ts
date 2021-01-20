import { Component, OnInit } from '@angular/core';
import { TeamPageModule } from '../controller/team.module';
import { TeamPage } from '../controller/team.page';
import { ModalController } from '@ionic/angular';
import { NewMessagePage } from '../../new-message/new-message.page';
import { get, set } from 'src/app/functions/storage';
import { call } from 'src/app/functions/call';
import { NavigationEnd, Router } from '@angular/router';
import { serialize } from 'src/app/functions/serializer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  alias = TeamPage;
  messages = [];
  subscription: Subscription;
  loaded = false;
  constructor(private router: Router, private ControllerObservable: TeamPage, private modalController: ModalController) {
    this.ControllerObservable.getNewMessageObservable().subscribe((data) => {
      this.createNewMessageThread();
    });
    this.ControllerObservable.getObservable().subscribe((data) => {
      this.loaded = true;
      this.onEnter();
    });
    

  }
  async ngOnInit() {
    if (await get("mail." + (this.alias.teamInfo.playerId? this.alias.teamInfo.playerId : "token") + "." + this.alias.teamInfo.id + ".messages")){
      this.messages = await get("mail." + (this.alias.teamInfo.playerId? this.alias.teamInfo.playerId : "token") + "." + this.alias.teamInfo.id + ".messages");
      this.messages = this.messages.sort(function(a, b){return (b.lastDate != undefined? b.lastDate: 0)-(a.lastDate != undefined? a.lastDate: 0)});
    }
    if (this.alias.teamInfo != {}){
      this.loaded = true;
    }
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url && event.url.startsWith('/team/mail')) {
          this.onEnter();
      }
    });
  }
  selectConvo(id){
    this.router.navigateByUrl("/messages?" + serialize({
      convoId: id,
    }));
  }
  createNewMessageThread(){
    this.modalController.create({component: NewMessagePage}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if (data.data){
          this.selectConvo(data.data)
        }else{

        }
        
      })
    })
  }
  async load(){
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getConversations", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (var i = 0; i < result.length; i++){
        if (!result[i].title){
          if (result[i].participants.length > 2){
            result[i].title = result[i].participants.map(function(elem){
              return elem.first;
            }).join(", ");
          }else{
            result[i].title = result[i].participants.map(function(elem){
              return elem.first + " " + elem.last;
            }).join(", ");
          }
        }
      }
      this.messages = result;
      set("mail." + (this.alias.teamInfo.playerId? this.alias.teamInfo.playerId : "token") + "." + this.alias.teamInfo.id + ".messages", this.messages);
      this.messages.sort(function(a, b){return (b.lastDate != undefined? b.lastDate: 0)-(a.lastDate != undefined? a.lastDate: 0)});
    }catch(error){
      
    }
  }
  public async onEnter(){
    this.load();
  }
  async refresh(event?){
    try{
      this.load();
      if (event.target != undefined){
        event.target.complete();
      }
    }catch(error){
    }
  }
}
