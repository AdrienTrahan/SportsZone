import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { createTextMaskInputElement } from 'text-mask-core';
import { call } from 'src/app/functions/call';
import { serialize } from 'src/app/functions/serializer';
import { get } from 'src/app/functions/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  phonenumberString = "";
  phonenumber = "";
  contacts = [];
  enabledButton = true;
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
  constructor() { }

  ngOnInit() {
    this.load();
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
  async load(){
    let token = await get("token");
    let result : any = await call("http://127.0.0.1:3000/api/getPublicInfo", {
      token: token
    });
    try{
      result = JSON.parse(result);
      if ((result as any).error){throw (result as any).error;};
      for (var i = 0; i < result.length; i ++){
        if (result[i].type == "phone"){
          result[i].data = formatPhoneNumber(result[i].data);
        }
      }
      this.contacts = result;
    }catch(error){
    }
    
  }
  async save(){
    this.enabledButton = false;
    setTimeout(() => {
      this.enabledButton = true;
    }, 2000);
    let token = await get("token");
    let obj : any = {
      token: token,
      contacts: JSON.stringify(this.contacts)
    };
    await call("http://127.0.0.1:3000/api/savePublicInfo", obj);
    this.saveEnabled = false;
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