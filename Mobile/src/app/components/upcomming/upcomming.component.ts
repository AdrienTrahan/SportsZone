import { Component, OnInit, Input, EventEmitter, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { get } from 'src/app/functions/storage';
import { call } from 'src/app/functions/call';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
let months = [ "jan", "feb", "mar", "apr", "may", "jun", 
           "jul", "aug", "sep", "oct", "nov", "dec" ];

let symbole = {
  YES: "checkmark.png",
  NO: "x.png",
  MAYBE: "ellipsis.png"
}

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss'],
})
export class UpcommingComponent implements OnInit {

  @Input('name') name : string;
  @Input('place') places : string;
  @Input('date') date : string;
  @Input('id') id : string;
  @Input('teamId') teamId : string;
  @Input('playerId') playerId : string;
  @Input('late') late : string;
  @Input('presence') presence : string;
  @Input('index') index : string;
  @Input('deleting') deleting : string;
  @Input('selectedEvent') selectedEvent : string;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  @Output() presenceChanged: EventEmitter<string> = new EventEmitter();
  day : number = 0;
  month : string = "";
  hour : string = "";
  symbole = symbole;
  params = {day: "23", month: "asd"};
  translatedDate : any = "";
  constructor(private alertController: AlertController, private translate: TranslateService, private domSanitizer: DomSanitizer) {
    
  }
  selectEvent(event){
    if ((event.target as any).getAttribute("ignore") != "true" && !this.deleting){
      this.selected.emit({index: parseInt(this.index)} as any)
    }
  }
  ngOnInit() {
    this.day = parseInt(this.date.split("/")[0]);
    this.month = months[parseInt(this.date.split("/")[1])];
    this.hour = this.date.split("!")[1].replace(":", "h");
    
    this.translatedDate = this.translate.instant("UPCOMMING.DATE", {DAY: this.day, MONTH: this.translate.instant("ABREVIATIONS." + parseInt(this.date.split("/")[1]))});
    console.log(this.places, this.selectedEvent)
  }
  async changePresence(){
    if (this.deleting){return;}
    const alert = await this.alertController.create({
      cssClass: 'containerAlert',
      header: this.translate.instant("ALERTS.0.TITLE"),
      message: this.translate.instant("ALERTS.0.MESSAGE", {name: this.name}) ,
      buttons: [
        {
          text: this.translate.instant("ALERTS.0.BUTTONS.0"),
          cssClass: 'noButtonAlert',
          handler: (blah) => {
            this.changeRole(2);
          }
        } as any,{
          text: this.translate.instant("ALERTS.0.BUTTONS.1"),
          cssClass: "maybeButtonAlert",
          handler: (blah) => {
            this.changeRole(1);
          }
        } as any, {
          text: this.translate.instant("ALERTS.0.BUTTONS.2"),
          cssClass: 'yesButtonAlert',
          handler: () => {
            this.changeRole(0);
          }
        } as any, {
          text: this.translate.instant("ALERTS.0.BUTTONS.3"),
          cssClass: 'lateButtonAlert',
          handler: () => {
            this.lateByMinutes();
          }
        } as any
      ]
    });

    await alert.present();
  }
  async lateByMinutes(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.1.TITLE"),
      subHeader: this.translate.instant("ALERTS.1.MESSAGE"),
      inputs: [
        {
          name: 'minutes',
          id: 'minutes',
          type: 'number',
          placeholder: 'ex: 10 min'
        }
      ],
      buttons: [
        {
          text: this.translate.instant("ALERTS.1.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: this.translate.instant("ALERTS.1.BUTTONS.1"),
          handler: (alertData) => {
            this.changeRole(0, alertData.minutes);
          }
        }
      ]
    });

    await alert.present();
  }
  async changeRole(role, late?){
    try{
      let token = await get("token");
      let obj : any = {
        event: this.id,
        id: this.teamId,
        token: token,
        presence: role,
        playerId: this.playerId
      };
      if (!obj.playerId){
        delete obj.playerId;
      }
      if (late){
        obj.late = parseInt(late);
      }
      let result : any = await call("http://127.0.0.1:3000/api/changePresence", obj);
      result = JSON.parse(result);
      if (result.error){
        throw result.error;
      }
      let presence = parseInt(result.presence);
      let roles = ["YES", "MAYBE", "NO"];
      this.presence = roles[presence];
      this.late = result.late;
      
      
      this.presenceChanged.emit({index: this.index, presence: presence, late: late} as any)
    }catch(error){
      
    }
    
    
  }

}


@NgModule({
  imports: [CommonModule],
  declarations: [
    UpcommingComponent,
  ],
  exports: [
    UpcommingComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UpcommingModule { }
