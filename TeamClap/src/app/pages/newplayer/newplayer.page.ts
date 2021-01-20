import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource, Filesystem, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
import { Crop } from '@ionic-native/crop/ngx';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { File, FileSystem } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { call, upload } from '../../functions/call';
import { get, set, remove } from "../../functions/storage";
import { Capacitor } from '@capacitor/core';
const { Camera } = Plugins;
import { Base64 } from '@ionic-native/base64/ngx';
import { Device } from '@ionic-native/device/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.page.html',
  styleUrls: ['./newplayer.page.scss'],
})
export class NewplayerPage implements OnInit {

  win: any = window;
  firstname: string = "";
  lastname: string = "";
  imageUrlSafe: string = "";
  imageUrl: string = "";
  submitDisabled = false;
  age = "";
  sex = "Male";
  constructor(private translate: TranslateService, private modal: ModalController, public actionSheetController: ActionSheetController, private crop: Crop, private sanitizer: DomSanitizer, private http: HttpClient, private transfer: FileTransfer) {

  }

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
    let result = await upload('http://127.0.0.1:3000/api/newPlayer', this.imageUrl, {
      first: this.firstname,
      last: this.lastname,
      token: token,
      extension: "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop(),
      defaultPicture: (this.imageUrl == ''),
      sex: this.sex,
      age: this.age,
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
