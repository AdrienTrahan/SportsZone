import { Component, OnInit } from '@angular/core';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { TeamPage } from '../../controller/team.page';

@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.page.html',
  styleUrls: ['./pendinglist.page.scss'],
})
export class PendinglistPage implements OnInit {
  alias = TeamPage;
  pendinglist : any = [];
  constructor() {
    this.loadCoaches();
  }

  ngOnInit() {
  }
  async loadCoaches(){
    let token = await get("token");
    let pendinglist = await call("http://127.0.0.1:3000/api/getPendingList", {token: token, id: this.alias.teamInfo.id});
    try{
      pendinglist = JSON.parse(pendinglist);
      this.pendinglist = pendinglist;
      
    }catch{

    }
  }
  async refuse(i){
    let userId = this.pendinglist[i].id;
    let token = await get("token");
    let refuse = await call("http://127.0.0.1:3000/api/refuseCoachFromPendingList", {token: token, id: this.alias.teamInfo.id, coach: userId});
    this.pendinglist.splice(i, 1);
  }
  async accept(i){
    let userId = this.pendinglist[i].id;
    let token = await get("token");
    let accept = await call("http://127.0.0.1:3000/api/acceptCoachFromPendingList", {token: token, id: this.alias.teamInfo.id, coach: userId});
    this.pendinglist.splice(i, 1);
  }
}
