import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { TeamPage } from '../controller/team.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  loaded = false;
  subscription: Subscription;
  alias = TeamPage;
  constructor(private translate: TranslateService, private ControllerObservable: TeamPage, private router: Router, private alertController: AlertController) {
    this.ControllerObservable.getObservable().subscribe((data) => {
      this.loaded = true;
      this.onEnter();
    });
  }

  ngOnInit() {
    if (this.alias.teamInfo != {}){
      this.loaded = true;
    }
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url && event.url.startsWith('/team/settings')) {
          this.onEnter();
      }
    });
  }
  public async onEnter(){
  }
  async quitTeam(){
    let prompt = await this.alertController.create({
      header: this.translate.instant("ALERTS.12.TITLE"),
      message: this.translate.instant("ALERTS.12.MESSAGE"),
      inputs: [
        {
          name: 'title',
          cssClass: "confirmationInputExclude",
          placeholder: this.translate.instant("ALERTS.12.WORD"),
        }
      ],
      buttons: [
        {
          text: this.translate.instant("ALERTS.12.BUTTONS.0"),
          handler: async data => {
            
          }
        },
        {
          text: this.translate.instant("ALERTS.12.BUTTONS.1"),
          handler: async data => {
            let text = ((document.getElementsByClassName("confirmationInputExclude")[0] as any).value);
            if (text == this.translate.instant("ALERTS.12.WORD")){
              let token = await get("token");
              let obj = {token: token, id: this.alias.teamInfo.id, playerId: this.alias.teamInfo.playerId};
              if (!this.alias.teamInfo.playerId){
                delete obj.playerId
              }
              await call("http://127.0.0.1:3000/api/quitTeam", obj);
              this.router.navigateByUrl("/home")
            }else{
              const alert = await this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.6.TITLE"),
                message: this.translate.instant("ALERTS.6.TITLE", {error: 'Please enter word correctly'}),
                buttons: [
                  {
                    text: this.translate.instant("ALERTS.6.BUTTONS.0"),
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                      this.quitTeam();
                    }
                  }
                ]
              });
          
              await alert.present();
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
