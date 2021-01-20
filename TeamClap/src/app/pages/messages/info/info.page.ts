import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { TeamPage } from '../../team/controller/team.page';
import { MessagesPage } from '../messages.page';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  alias = MessagesPage.conversationInfo;
  title = "";
  participants = [];
  enabledButton = true;
  constructor(private router: Router) { }

  ngOnInit() {
    if (!this.alias.inventedTitle){
      this.title = this.alias.title;
    }
    this.load()
  }
  async load(){
    let token = await get("token");
    let result : any = await call("http://127.0.0.1:3000/api/getParticipantsList", {token: token, id: TeamPage.teamInfo.id, convoId: this.alias.id});
    try{
      result = JSON.parse(result);
      if (!result.error){
        this.participants = result;
      }
    }catch{

    }
  }
  async save(){
    this.enabledButton = false;
    setTimeout(() => {
      this.enabledButton = true;
    }, 2000);
    let token = await get("token");
    let result = await call("http://127.0.0.1:3000/api/changeTitle", {token: token, title: this.title, id: TeamPage.teamInfo.id, convoId: this.alias.id});
  }
  openPlayerProfile(i){
    this.router.navigateByUrl(`/player-profile?teamId=${TeamPage.teamInfo.id}&player=${this.participants[i].id}`);
  }
}
