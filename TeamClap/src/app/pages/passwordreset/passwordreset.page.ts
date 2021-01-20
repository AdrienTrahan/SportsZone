import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { call, upload, logout } from "../../functions/call";

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class PasswordresetPage implements OnInit {

  error = "";
  email = "";
  disabled = false;
  constructor(private translate: TranslateService, private alertController: AlertController, private router: Router, private route: ActivatedRoute) { 
    route.queryParams.subscribe(async (queryParams) => {
      if (queryParams.email){
        this.email = queryParams.email;
      }
    });
  }

  ngOnInit() {
  }


  back(){
    this.router.navigateByUrl("/auth");
  }
  async finish(){
    this.disabled = true;
    this.error = "";
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
      this.error = "email is not valid";
      return;
    }
    let result = await call("http://127.0.0.1:3000/api/resetEmail", {email: this.email});
    ;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.7.TITLE"),
      message: this.translate.instant("ALERTS.7.MESSAGE" + result == "done"? ".DONE" : ".ERROR", {result: result}),
      buttons: [this.translate.instant("ALERTS.7.BUTTONS.0")]
    });
    alert.present()
    this.disabled = true;

  }
}
