import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  old = "";
  new = "";
  confirm = "";
  constructor(private translate: TranslateService, private router: Router,private alertController: AlertController, private location: Location) { }

  ngOnInit() {
  }
  async save(){
    if (this.confirm != this.new){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: this.translate.instant("ALERTS.6.TITLE"),
        message: this.translate.instant("ALERTS.6.MESSAGE", {error: 'New passwords do not match'}),
        buttons: [{
            text: this.translate.instant("ALERTS.6.BUTTONS.0"),
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
      return;
    }
    let token = await get("token");
    let result : any = await call("http://127.0.0.1:3000/api/modifyPassword", {
      token: token,
      old: this.old,
      new: this.new 
    });
    this.location.back();
  }

}
