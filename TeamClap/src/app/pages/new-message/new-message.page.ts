import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { TeamPage } from '../team/controller/team.page';
import { TagInputComponent } from 'src/app/components/tag-input/tag-input.component';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.page.html',
  styleUrls: ['./new-message.page.scss'],
})
export class NewMessagePage implements OnInit {
  @ViewChild(TagInputComponent) child;
  constructor(private modal: ModalController) { }
  tags = [];
  players : any = [];
  alias = TeamPage;
  recipients = [];
  filteredRecipients = [];
  searchEntryValue = "";
  selectedRecipients = [];
  ngOnInit() {
    this.load();
  }
  back(){
    this.modal.dismiss();
  }
  verify(data){
    
  }
  type(data){
    this.filteredRecipients = JSON.parse(JSON.stringify(this.recipients.filter((value) => {
      let extra = false;
      if (value.p_first != undefined){
        extra = value.p_first.toUpperCase().includes(data.toUpperCase()) ||
                value.p_last.toUpperCase().includes(data.toUpperCase())  ||
                (value.p_last + " " + value.p_first).toUpperCase().includes(data.toUpperCase()) ||
                (value.p_first + " " + value.p_last).toUpperCase().includes(data.toUpperCase()) ||
                (value.p_first + value.p_last).toUpperCase().includes(data.toUpperCase()) ||
                (value.p_last + value.p_first).toUpperCase().includes(data.toUpperCase());
      }
      return value.first.toUpperCase().includes(data.toUpperCase()) ||
             value.last.toUpperCase().includes(data.toUpperCase())  ||
             (value.last + " " + value.first).toUpperCase().includes(data.toUpperCase()) ||
             (value.first + " " + value.last).toUpperCase().includes(data.toUpperCase()) ||
             (value.first + value.last).toUpperCase().includes(data.toUpperCase()) ||
             (value.last + value.first).toUpperCase().includes(data.toUpperCase()) || extra;
    })));
  }
  deleted(data){
    this.selectedRecipients.splice(data, 1);
    this.child.searchElement.nativeElement.focus();
    
  }
  async load(){
    let token = await get("token");
    let obj : any = {token: token, id: this.alias.teamInfo.id};
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getAllRecipients", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      let id = token.split("-")[0];
      for (var i = result.length - 1; i >= 0; i--){
        if (result[i].id == id){
          result.splice(i, 1);
        }else if (result[i].p_id == id){
          result.splice(i, 1);
        }
      }
      this.recipients = JSON.parse(JSON.stringify(result));
      this.filteredRecipients = JSON.parse(JSON.stringify(result));
    }catch(error){
      if (error.includes("[993]")){
      }
    }
  }
  selectRecipient(index){
    let existingIndex = -1;
    for (var i = 0; i < this.selectedRecipients.length; i++){
      let extra1 = false;
      let extra2 = false;
      let extra3 = false;
      if (this.selectedRecipients[i].p_id){
        extra1 = this.selectedRecipients[i].p_id == this.filteredRecipients[index].id;
      }
      if (this.filteredRecipients[index].p_id){
        extra2 = this.selectedRecipients[i].id == this.filteredRecipients[index].p_id;
      }
      if (this.filteredRecipients[index].p_id && this.selectedRecipients[i].p_id){
        extra3 = this.selectedRecipients[i].p_id == this.filteredRecipients[index].p_id;
      }
      
      if (this.selectedRecipients[i].id == this.filteredRecipients[index].id || extra1 || extra2 || extra3){
        existingIndex = i;
        break;
      }
    }
    if (existingIndex == -1){
      this.selectedRecipients.push(this.filteredRecipients[index])
      if (this.filteredRecipients[index].p_first){
        this.tags.push(this.filteredRecipients[index].p_first + " " + this.filteredRecipients[index].p_last);
      }else{
        this.tags.push(this.filteredRecipients[index].first + " " + this.filteredRecipients[index].last);
      }
      this.searchEntryValue = "";
      this.child.clearField();
      this.filteredRecipients = JSON.parse(JSON.stringify(this.recipients));
    }else{
      this.tags.splice(existingIndex, 1);
      this.selectedRecipients.splice(existingIndex, 1);
      this.child.searchElement.nativeElement.focus();
    }
  }
  isRecipientSelected(recipient){
    let existingIndex = -1;
    for (var i = 0; i < this.selectedRecipients.length; i++){
      let extra1 = false;
      let extra2 = false;
      let extra3 = false;
      if (this.selectedRecipients[i].p_id){
        extra1 = this.selectedRecipients[i].p_id == recipient.id;
      }
      if (recipient.p_id){
        extra2 = this.selectedRecipients[i].id == recipient.p_id;
      }
      if (recipient.p_id && this.selectedRecipients[i].p_id){
        extra3 = this.selectedRecipients[i].p_id == recipient.p_id;
      }
      
      if (this.selectedRecipients[i].id == recipient.id || extra1 || extra2 || extra3){
        existingIndex = i;
        break;
      }
    }
    return (existingIndex != -1) ? 'selectedSelectionCircle' : '';
  }
  async finish(){
    let token = await get("token");
    let ids = this.selectedRecipients.map((element) => {
      if (element.p_id){
        return element.p_id
      }
      return element.id
    });
    let obj : any = {
      token: token,
      id: this.alias.teamInfo.id,
      recipients: JSON.stringify(ids)
    };
    if (this.alias.teamInfo.playerId){
      obj.playerId = this.alias.teamInfo.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/createConversation", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      this.modal.dismiss(result.id)
    }catch(error){
      if (error.includes("[993]")){
      }
    }
  }
}
