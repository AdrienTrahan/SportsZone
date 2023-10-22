import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource, Filesystem, FilesystemDirectory, FilesystemEncoding, Capacitor } from '@capacitor/core';
const { Camera } = Plugins;
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { upload } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-newteam',
  templateUrl: './newteam.page.html',
  styleUrls: ['./newteam.page.scss'],
})
export class NewteamPage implements OnInit {
  imageUrlSafe: string = "";
  submitDisabled = false;
  imageUrl: string = "";
  name: string = "";
  category: string = "";
  city: string = "";
  
  constructor(private translate: TranslateService, private modal: ModalController, public actionSheetController: ActionSheetController, private crop: Crop, private sanitizer: DomSanitizer, private http: HttpClient, private transfer: FileTransfer) { }

  ngOnInit() {
  }
  back(){
    this.modal.dismiss();
  }
  async finish(){
    this.submitDisabled = true;
    setTimeout(() => {
      this.submitDisabled = false;
    }, 4000);
    let token = await get("token");
    let result = await upload('http://127.0.0.1:3000/api/newTeam', this.imageUrl, {
      name: this.name,
      category: this.category,
      city: this.city,
      token: token,
      extension: "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop(),
      defaultPicture: (this.imageUrl == '')
    }, this.http, this.transfer);
    if (typeof result === "object"){
      this.modal.dismiss(result);
    }else{
      let data = undefined;
      try{
        data = JSON.parse(result as string);
        this.modal.dismiss(data);
      }catch{
        this.submitDisabled = false;
      }
    }
    
  }
  async selectPicture(){
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
    if (this.imageUrlSafe != ""){
      let removeImage =  {
        text: this.translate.instant("ALERTS.14.BUTTONS.3"),
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.imageUrlSafe = "";
          this.imageUrl = "";
        }
      }
      alertButtons.splice(2, 0, removeImage);
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
  }
}
