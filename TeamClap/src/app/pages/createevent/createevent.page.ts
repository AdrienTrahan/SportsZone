import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { serialize } from 'src/app/functions/serializer';
import { ModalController, AlertController } from '@ionic/angular';
import { FindplacePage } from '../findplace/findplace.page';
import { CalendarComponent } from 'ionic2-calendar';
import { FindmomentPage } from '../findmoment/findmoment.page';
import { call, logout } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.page.html',
  styleUrls: ['./createevent.page.scss'],
})
export class CreateeventPage implements OnInit {
  parameters = "";
  addingPlace = false;
  newPlace;
  teamId = "";
  placeData : any = {};
  eventInfo : any = {
    name: "",
    adversary: "",
    places: [],
    moments: []
  }
  addingSpec = false;
  newSpec = {
    name: "",
    data: ""
  }
  specifications = [];
  modifyingPlace = false;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  constructor(private translate: TranslateService, public alertController: AlertController, private modal: ModalController, private router: Router, private nativePageTransitions: NativePageTransitions, private route: ActivatedRoute) {
    this.eventInfo = {
      name: "",
      adversary: "",
      places: [],
      moments: []
    };
    this.specifications = [];
    this.newSpec = {name: "", data: ""};
    this.newPlace = undefined;
    this.addingPlace = false;
    this.placeData = {};
    this.modifyingPlace = false;
    this.teamId = "";
    this.route.queryParams.subscribe((queryParams) => {
      this.teamId = queryParams.teamId;
      this.parameters = serialize(queryParams);
    })
  }

  ngOnInit() {
    
  }
  back(){

    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 200,
      slowdownfactor: -1,
      iosdelay: 100
    }
    this.nativePageTransitions.slide(options);
    this.router.navigateByUrl("/team/events?" + this.parameters);
  }
  addPlace(){
    this.addingPlace = true;
    this.newPlace = {name: "", address: ""};
  }
  modifyPlace(index){
    this.addingPlace = true;
    this.placeData = JSON.parse(JSON.stringify(this.eventInfo.places[index]));
    this.newPlace = this.eventInfo.places[index];
    this.eventInfo.places.splice(index, 1);
    this.modifyingPlace = true;
  }
  choosePlace(){
    this.modal.create({component: FindplacePage}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if (data.data){
          this.newPlace.address = data.data.title
        }
      })
    })
  }
  insertPlace(){
    this.eventInfo.places.push(this.newPlace);
    this.newPlace = undefined;
    this.addingPlace = false;
    this.modifyingPlace = false;
  }
  async deletePlace(index){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.2.TITLE"),
      message: this.translate.instant("ALERTS.2.MESSAGE", {name: this.eventInfo.places[index].name}),
      buttons: [
        {
          text: this.translate.instant("ALERTS.2.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.translate.instant("ALERTS.2.BUTTONS.1"),
          cssClass: 'alertDanger',
          handler: () => {
            this.eventInfo.places.splice(index, 1);
          }
        }
      ]
    });

    await alert.present();
  }
  
  async deleteMoment(index){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant("ALERTS.3.TITLE"),
      message: this.translate.instant("ALERTS.3.MESSAGE"),
      buttons: [
        {
          text: this.translate.instant("ALERTS.3.BUTTONS.0"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.translate.instant("ALERTS.3.BUTTONS.1"),
          cssClass: 'alertDanger',
          handler: () => {
            this.eventInfo.moments.splice(index, 1);
          }
        }
      ]
    });

    await alert.present();
  }
  closePlace(){
    this.addingPlace = false;
    if (this.modifyingPlace){
      this.eventInfo.places.push(this.placeData);
      this.newPlace = undefined;
      this.modifyingPlace = false;
    }
  }
  
  modifyMoment(index: any){
    this.modal.create({component: FindmomentPage, componentProps: {
      eventSource: this.eventInfo.moments[index].dates,
      currentPickerDateNow: this.eventInfo.moments[index].start,
      currentPickerDateAfter: this.eventInfo.moments[index].end,

    }}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data)=>{
        if (data.data){
          this.eventInfo.moments.splice(index, 1);
          data.data.datesString = [];
          for (var i = 0; i < data.data.dates.length; i++){
            let date = data.data.dates[i].date as Date;
            let monthIndex = -1;
            for (var j = 0; j < data.data.datesString.length; j++){
              if (data.data.datesString[j][0] == date.getMonth() && data.data.datesString[j][1] == date.getFullYear()){
                monthIndex = j;
              }
            }
            if (monthIndex == -1){
              data.data.datesString.push(JSON.parse(JSON.stringify([date.getMonth(), date.getFullYear(), []])));
              monthIndex = data.data.datesString.length - 1;
            }
            data.data.datesString[monthIndex][2].push(JSON.parse(JSON.stringify(date.getDate())));
          }
          this.eventInfo.moments.push(data.data);
          for (var i = 0; i < this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString.length; i++){
            let array = this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2];
            array.sort(function(a, b){return a - b});
            this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2] = array;
          }
        }
      })
    }).catch(() => {

    })
  }
  addMoment(){
    this.modal.create({component: FindmomentPage}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data)=>{
        if (data.data){
          data.data.datesString = [];
          for (var i = 0; i < data.data.dates.length; i++){
            let date = data.data.dates[i].date as Date;
            let monthIndex = -1;
            for (var j = 0; j < data.data.datesString.length; j++){
              if (data.data.datesString[j][0] == date.getMonth() && data.data.datesString[j][1] == date.getFullYear()){
                monthIndex = j;
              }
            }
            if (monthIndex == -1){
              data.data.datesString.push(JSON.parse(JSON.stringify([date.getMonth(), date.getFullYear(), []])));
              monthIndex = data.data.datesString.length - 1;
            }
            data.data.datesString[monthIndex][2].push(JSON.parse(JSON.stringify(date.getDate())));
          }
          this.eventInfo.moments.push(data.data);
          for (var i = 0; i < this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString.length; i++){
            let array = this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2];
            array.sort(function(a, b){return a - b});
            this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2] = array;
          }
        }
      })
    }).catch(() => {

    })
  }
  ionViewWillLeave(){
    this.eventInfo = {
      name: "",
      adversary: "",
      places: [],
      moments: []
    };
    this.specifications = [];
    this.newSpec = {name: "", data: ""};
    this.newPlace = undefined;
    this.addingPlace = false;
    this.placeData = {};
    this.modifyingPlace = false;
  }
  async finish(){
    try{
      let token = await get("token");
      let dates = [];
      for (var i = 0; i < this.eventInfo.moments.length; i++){
        for (var j = 0; j < this.eventInfo.moments[i].dates.length; j++){
          let startMinutes = new Date(this.eventInfo.moments[i].start).getHours() * 60 + new Date(this.eventInfo.moments[i].start).getMinutes();
          let endMinutes = new Date(this.eventInfo.moments[i].end).getHours() * 60 + new Date(this.eventInfo.moments[i].end).getMinutes();
          dates.push([(this.eventInfo.moments[i].dates[j].date as Date).toString(), startMinutes, endMinutes])
        }
      }
      let obj : any = {
        token: token,
        id: this.teamId,
        dates: JSON.stringify(dates),
        name: this.eventInfo.name,
        places: JSON.stringify(this.eventInfo.places),
        specs: JSON.stringify(this.specifications)
      };
      if (this.eventInfo.adversary != "" && this.eventInfo.adversary){
        obj.adversary = this.eventInfo.adversary;
      }
      let information = await call("http://127.0.0.1:3000/api/createEvent", obj);
      information = JSON.parse(information);
      if ((information as any).error){throw (information as any).error;};
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 200,
        slowdownfactor: -1,
        iosdelay: 100
      }
      this.nativePageTransitions.slide(options);
      this.router.navigateByUrl("/team/events?" + this.parameters);
    }catch(error){
      if (error.includes("[993]")){
        await logout();
        this.router.navigateByUrl("/");
      }
    }
  }
  addSpec(){
    this.addingSpec = true;
  }
  closeSpec(){
    this.addingSpec = false;
    this.newSpec = {
      name: "",
      data: "",
    };
  }
  insertSpec(){
    this.addingSpec = false;
    this.specifications.push(JSON.parse(JSON.stringify(this.newSpec)));
    this.newSpec = {
      name: "",
      data: "",
    };
  }
  deleteSpec(i){
    this.specifications.splice(i, 1);
  }
}
