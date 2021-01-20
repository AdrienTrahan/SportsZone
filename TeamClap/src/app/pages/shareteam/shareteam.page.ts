import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { TeamPage } from '../team/controller/team.page';
import { serialize } from '../../functions/serializer'
import { call } from 'src/app/functions/call';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Plugins } from '@capacitor/core';
import { get } from 'src/app/functions/storage';
import { TranslateService } from '@ngx-translate/core';
const { Share } = Plugins;
@Component({
  selector: 'app-shareteam',
  templateUrl: './shareteam.page.html',
  styleUrls: ['./shareteam.page.scss'],
})
export class ShareteamPage implements OnInit {
  url = "";
  screensize = 200;
  code = "";
  socialSharing = new SocialSharing();
  @ViewChild('canvas') canvas: ElementRef;
  constructor(private translate: TranslateService, public alertController: AlertController, private modal: ModalController, private platform: Platform, private clipboard: Clipboard, public toastController: ToastController) {
    let object =  {
      teamId: TeamPage.teamInfo.id,
      invitecode: TeamPage.teamInfo.invitecode + ""
    }
    let ending = serialize(object);
    this.url = "http://127.0.0.1:3000/api/joinTeam?" + ending;
    this.screensize = Math.min(this.platform.width() - 100, this.platform.height());
    this.code = TeamPage.teamInfo.id + "-" + TeamPage.teamInfo.invitecode;
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.screensize = (Math.min(this.canvas.nativeElement.getBoundingClientRect().width - 100, this.canvas.nativeElement.getBoundingClientRect().height - 250));
  }
  close(){
    this.modal.dismiss();
  }
  async copyUrl(){
    this.clipboard.copy(this.code);
    const toast = await this.toastController.create({
      message: this.translate.instant("ALERTS.15.MESSAGE"),
      duration: 1000
    });
    toast.present();
  }
  async shareUrl(){
    await Share.share({
      title: this.translate.instant("ALERTS.17.TITLE"),
      text: this.translate.instant("ALERTS.17.MESSAGE", {code: this.code}),
      dialogTitle: this.translate.instant("ALERTS.17.DIALOG")
    });
  }
  async inviteUrl(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.10.TITLE"),
      message: this.translate.instant("ALERTS.10.MESSAGE"),
      buttons: [
        {
          text: this.translate.instant("ALERTS.10.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'this.translate.instant("ALERTS.10.BUTTONS.1")',
          handler: async () => {
            let token = await get("token");
            let obj : any = {token: token, id: TeamPage.teamInfo.id};
            let result : any= await call("http://127.0.0.1:3000/api/generateNewInviteCode", obj);
            try{
              result = JSON.parse(result);
              if (result.error || !result.code){throw result.error;};
              TeamPage.teamInfo.invitecode = result.code;
              let object =  {
                teamId: TeamPage.teamInfo.id,
                invitecode: result.code + ""
              }
              let ending = serialize(object);
              this.url = "http://127.0.0.1:3000/api/joinTeam?" + ending;
              this.code = TeamPage.teamInfo.id + "-" + result.code;
              
            }catch(error){
            }
          }
        }
      ]
    });

    await alert.present();
    
  }
}
