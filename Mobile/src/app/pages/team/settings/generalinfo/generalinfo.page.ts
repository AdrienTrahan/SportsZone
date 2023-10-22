import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ActionSheetController } from '@ionic/angular';
import { call, post, upload } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { Plugins, CameraResultType, CameraSource, Filesystem, FilesystemDirectory, FilesystemEncoding, Capacitor } from '@capacitor/core';
import { TeamPage } from '../../controller/team.page';
import { TranslateService } from '@ngx-translate/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.page.html',
  styleUrls: ['./generalinfo.page.scss'],
})
export class GeneralinfoPage implements OnInit {
  category = "";
  city = "";
  name = "";
  image = "";
  alias = TeamPage;
  imageUrlSafe: string = "";
  imageUrl: string = "";
  unmodified : any = {name: "", category: "", city: "", image: ""}
  saveEnabled = true;
  constructor(private translate: TranslateService, public actionSheetController: ActionSheetController, private sanitizer: DomSanitizer, private crop: Crop, private http: HttpClient, private transfer: FileTransfer) { }

  ngOnInit() {
    this.name = this.alias.teamInfo.name;
    this.category = this.alias.teamInfo.category;
    this.city = this.alias.teamInfo.city;
    this.image = this.alias.teamInfo.image;
    this.unmodified = {
      name: this.name,
      category: this.category,
      city: this.city,
      image: this.image
    }
  }
  async save(){

    this.saveEnabled = false;
    setTimeout(() => {
      this.saveEnabled = true;
    }, 2000)
    let token = await get("token");
    
    let obj : any = {
      token: token,
      name: this.name,
      category: this.category,
      city: this.city,
      id: this.alias.teamInfo.id,
    };
    if (this.name == ""){
      return
    }
    let result;
    if (this.unmodified.image != (this.imageUrl || this.image)){
      obj.extension = "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop();
      obj.defaultPicture =  (this.imageUrl == '');
      result = await upload('http://127.0.0.1:3000/api/saveTeamInfo', this.imageUrl, obj, this.http, this.transfer);
      if (result == "done"){
        TeamPage.teamInfo.name = this.name;
        TeamPage.teamInfo.category = this.category;
        TeamPage.teamInfo.city = this.city;
  
      }
    }else{
      result = await post("http://127.0.0.1:3000/api/saveTeamInfo", obj);
      if (result == "done"){
        TeamPage.teamInfo.name = this.name;
        TeamPage.teamInfo.category = this.category;
        TeamPage.teamInfo.city = this.city;
  
      }
    }
  }async selectPicture(){
    let alertButtons = [{
      text: this.translate.instant("ALERTS.14.BUTTONS.0"),
      icon: 'camera',
      handler: () => {
        this.takePhoto();
      }
    }, {
      text: this.translate.instant("ALERTS.14.BUTTONS.1"),
      icon: 'image',
      handler: () => {
        this.selectPhotoFromLibrary();
      }
    }, {
      text: this.translate.instant("ALERTS.14.BUTTONS.2"),
      icon: 'close',
      role: 'cancel',
      handler: () => {
      }
    }]
    if (this.image != ""){
      let removeImage =  {
        text:  this.translate.instant("ALERTS.14.BUTTONS.3"),
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.image = "";
        }
      }
      alertButtons.splice(2, 0, removeImage);
    }
    if (this.imageUrl){
      alertButtons.splice(2, 0, {
        text: this.translate.instant("ALERTS.14.BUTTONS.4"),
        icon: 'arrow-undo',
        handler: () => {
          this.imageUrlSafe = "";
          this.imageUrl = "";
        }
      }, )
    }
    const actionSheet = await this.actionSheetController.create({
      header: this.translate.instant("ALERTS.14.TITLE"),
      cssClass: 'my-custom-class',
      buttons: alertButtons
    });
    await actionSheet.present();
  }
  async selectPhotoFromLibrary(){
    const result = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      source: CameraSource.Photos,
      resultType: CameraResultType.Uri,
    });
    this.cropPicture(result);
  }
  async takePhoto(){
    const result = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
    });
    this.cropPicture(result);
  }
  async cropPicture(result){
    let imagePath  : any = await new Promise((resolve) => {
      this.crop.crop(result.path).then((imagePath) => {resolve(imagePath)}, (error) => {});
    })
    imagePath = (imagePath as any).split("?")[0];
    this.imageUrlSafe = this.sanitizer.bypassSecurityTrustUrl(Capacitor.convertFileSrc(imagePath)) as string;
    this.imageUrl = imagePath;
    console.log(this.image, this.imageUrl, this.unmodified)
  }
}
