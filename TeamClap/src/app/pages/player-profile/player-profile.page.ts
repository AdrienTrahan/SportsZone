import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { Clipboard } from '@ionic-native/clipboard/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.page.html',
  styleUrls: ['./player-profile.page.scss'],
})
export class PlayerProfilePage implements OnInit {
  playerInformation : any = {};
  params : any = {};
  constructor(private translate: TranslateService, private clipboard: Clipboard, private route: ActivatedRoute, private callNumber: CallNumber, public alertController: AlertController, private emailComposer: EmailComposer) {
    this.route.queryParams.subscribe((queryParams) => {
      this.params = queryParams;
    });
  }

  ngOnInit() {
    this.load();
  }
  async load(){
    await this.getPlayerInfo();
  }
  async getPlayerInfo(){
    let token = await get("token");
    let obj : any = {token: token, id: this.params.teamId, player: this.params.player};
    if (this.params.playerId && this.params.playerId != "undefined"){
      obj.playerId = this.params.playerId;
    }
    let result : any= await call("http://127.0.0.1:3000/api/getPlayerInformation", obj);
    
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      for (var i = 0; i < result.contacts.length; i++){
        if (result.contacts[i].type == "phone"){
          result.contacts[i].data = formatPhoneNumber(result.contacts[i].data.replace(/\D/g,''));
        }
      }
      for (var i = 0; i < result.playerContacts.length; i++){
        if (result.playerContacts[i].type == "phone"){
          result.playerContacts[i].data = formatPhoneNumber(result.playerContacts[i].data.replace(/\D/g,''));
        }
      }
      this.playerInformation = result;
      
    }catch(error){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: this.translate.instant("ALERTS.8.TITLE"),
        message: this.translate.instant("ALERTS.8.MESSAGE"),
        buttons: [
          {
            text: this.translate.instant("ALERTS.8.BUTTONS.0"),
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }
        ]
      });
      await alert.present();
    }
  }
  async callPhoneNumber(i, second){
    let phone = "";
    if (second){
      phone = this.playerInformation.playerContacts[i].data;
    }else{
      phone = this.playerInformation.contacts[i].data;
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.9.TITLE"),
      message: this.translate.instant("ALERTS.9.MESSAGE", {phone: phone}),
      buttons: [
        {
          text: this.translate.instant("ALERTS.9.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.translate.instant("ALERTS.9.BUTTONS.1"),
          handler: () => {
            this.callNumber.callNumber(phone.replace(/\D/g,''), true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
          }
        }
      ]
    });
    await alert.present();
    
  }
  async sendEmail(i, second){
    if (second){
      let email = {
        to: this.playerInformation.playerContacts[i].data
      };
      this.emailComposer.open(email);      
    }else{
      let email = {
        to: this.playerInformation.contacts[i].data
      };
  
      this.emailComposer.open(email);      
    }
    
  }

  copyData(i: any, second){
    if (second){
      this.clipboard.copy(this.playerInformation.playerContacts[i].data);
    }else{
      this.clipboard.copy(this.playerInformation.contacts[i].data);
    }
  }
}
function formatPhoneNumber(phoneNumberString) {
  if (!phoneNumberString){return}
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  if (cleaned.length > 10){
    let firstCharacters = cleaned.substring(0, 10);
    let lastCharacters = cleaned.substring(10, cleaned.length);
    var match = firstCharacters.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3] + " #" + lastCharacters;
    }
    return null
  }else{
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null
  }
}
