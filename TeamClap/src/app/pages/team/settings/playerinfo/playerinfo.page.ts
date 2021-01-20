import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonInput } from '@ionic/angular';
import { call, post, upload } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';
import { HomePage } from 'src/app/pages/home/home.page';
import { TeamPage } from '../../controller/team.page';
import { Plugins, CameraResultType, CameraSource, Filesystem, FilesystemDirectory, FilesystemEncoding, Capacitor } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Crop } from '@ionic-native/crop/ngx';
import { HttpClient } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { createTextMaskInputElement } from 'text-mask-core';
import { TranslateService } from '@ngx-translate/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.page.html',
  styleUrls: ['./playerinfo.page.scss'],
})
export class PlayerinfoPage implements OnInit {
  firstname = "";
  lastname = "";
  alias = TeamPage;
  image = "";
  imageUrlSafe: string = "";
  imageUrl: string = "";
  age = "";
  sex = "";
  unmodified = {
    firstname: "",
    lastname: "",
    image: "",
    age: "",
    sex: "",
    shirtnumber: "",
    position: ""
  }
  shirtnumber = "";
  position = "";
  buttonEnabled = true;
  phonenumberString = "";
  phonenumber = "";
  contacts = [];
  addingContact = false;
  newContact = {
    name: "",
    data: "",
    type: "phone"
  };
  types = {
    phone: "ex: (123) 456-789",
    email: "ex: abc@def.xyz",
    text: "ex: 10 place vignory"
  }
  input = {
    phone: "number",
    email: "text",
    text: "text"
  }
  set _phonenumber(data){
    this.phonenumber = data;
    this.saveEnabled = ((this.phonenumber.replace(/\D/g,"").length == 0 || this.phonenumber.replace(/\D/g,"").length >= 10) && (this.email == "" || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))));
  }
  email = "";
  set _email(data){
    this.email = data;
    this.saveEnabled = ((this.phonenumber.replace(/\D/g,"").length == 0 || this.phonenumber.replace(/\D/g,"").length >= 10) && (this.email == "" || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))));
  }
  get _email(){
    return this.email
  }
  get _phonenumber(){
    return this.phonenumber
  }
  inputElement : any;
  saveEnabled = false;
  constructor(private translate: TranslateService, public actionSheetController: ActionSheetController, private sanitizer: DomSanitizer, private crop: Crop, private http: HttpClient, private transfer: FileTransfer) { }

  ngOnInit() {
    this.load();
    let player = HomePage.players.find(player => {return player.id == this.alias.teamInfo.playerId});
    this.firstname = player.first;
    this.lastname = player.last;
    this.image = player.image;
    this.unmodified = {
      firstname: player.first,
      lastname: player.last,
      image: player.image,
      age: "",
      sex: "",
      shirtnumber: "",
      position: ""
    }
    
  }
  telInputObject(obj) {
    // obj.intlTelInput('setCountry', 'in');
  }
  @ViewChild('phoneInput')
  public set phoneInput(value: IonInput) {
    if (!value) {
      return;
    }

    value.getInputElement().then(input => this.registerTextMask(input));
  }

  private phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', '#', /[1-9]/,/[1-9]/,/[1-9]/,/[1-9]/];

  get phoneNumber() {
    return this.phonenumberString;
  }
  private registerTextMask(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
  }
  async mask(event){
    if (this.newContact.type != "phone"){
      this.newContact.data = event.target.value;
      return;
    }
    if (event.inputType == "deleteContentBackward" && this.newContact.data == event.target.value.replace(/\D/g,'')){
      event.target.value = event.target.value.replace(/\D/g,'').substring(0, event.target.value.replace(/\D/g,'').length -1);
    }
    const maskedInput = createTextMaskInputElement({
      inputElement: this.inputElement,
      mask: this.phoneMask,
      guide: false,
    });
    await maskedInput.update(event.target.value.replace(/\D/g,'') + "");
    this.newContact.data = event.target.value.replace(/\D/g,'');
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
    if (this.image != ""){
      let removeImage =  {
        text: this.translate.instant("ALERTS.14.BUTTONS.3"),
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
  }
  async save(){
    this.buttonEnabled = false;
    setTimeout(() => {
      this.buttonEnabled = true;
    }, 2000)
    let token = await get("token");
    let obj : any = {token: token, id: TeamPage.teamInfo.id, playerId: this.alias.teamInfo.playerId, last: this.lastname, first: this.firstname, contacts: JSON.stringify(this.contacts),sex: this.sex, age: this.age, position: this.position, shirtnumber: this.shirtnumber};
    
    let result;
    if (this.unmodified.image != (this.imageUrl || this.image)){
      obj.extension = "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop();
      obj.defaultPicture =  (this.imageUrl == '');
      this.unmodified = {
        firstname: this.firstname,
        lastname: this.lastname,
        image: this.imageUrl || this.image,
        age: this.age,
        sex: this.sex,
        position: this.position,
        shirtnumber: this.shirtnumber,

      }
      result = await upload('http://127.0.0.1:3000/api/savePlayerInfo', this.imageUrl, obj, this.http, this.transfer);
    }else{
      this.unmodified = {
        firstname: this.firstname,
        lastname: this.lastname,
        image: this.imageUrl || this.image,
        age: this.age,
        sex: this.sex,
        position: this.position,
        shirtnumber: this.shirtnumber
        
      }
      result = await post('http://127.0.0.1:3000/api/savePlayerInfo', obj);
    }
  }
  addContact(){
    this.addingContact = true;
  }
  closeContact(){
    this.addingContact = false;
    this.newContact = {
      name: "",
      data: "",
      type: "phone"
    };
  }
  insertContact(){
    this.addingContact = false;
    this.contacts.push(JSON.parse(JSON.stringify(this.newContact)));
    this.newContact = {
      name: "",
      data: "",
      type: "phone"
    };

  }
  deleteContact(i){
    this.contacts.splice(i, 1);
  }
  changedSelection(event){
    
    this.inputElement.value = "";
    this.newContact.data = "";
  }
  async load(){
    let token = await get("token");
    
    let result : any = await call("http://127.0.0.1:3000/api/getPlayerPublicInfo", {
      token: token,
      playerId: this.alias.teamInfo.playerId
    });
    try{
      result = JSON.parse(result);
      
      if ((result as any).error){throw (result as any).error;};
      for (var i = 0; i < result.contacts.length; i ++){
        if (result.contacts[i].type == "phone"){
          result.contacts[i].data = formatPhoneNumber(result.contacts[i].data);
        }
      }
      if (result.age && result.age != "undefined"){
        this.age = result.age;
      }
      if (result.sex && result.sex != "undefined"){
        this.sex = result.sex;
      }
      if (result.shirtnumber){
        this.shirtnumber = result.shirtnumber[TeamPage.teamInfo.id];
      }
      if (result.position){
        this.position = result.position[TeamPage.teamInfo.id];
      }
      this.contacts = result.contacts;
    }catch(error){
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