import { Component, OnInit } from '@angular/core';
import { call } from 'src/app/functions/call';
import { get } from 'src/app/functions/storage';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  firstname = "";
  lastname = "";
  email = "";
  unmodified = {firstname: "", lastname: "", email: ""};
  constructor() {

    this.load();
  }


  ngOnInit() {
  }
  async load(){
    let token = await get("token");
    let result : any = await call("http://127.0.0.1:3000/api/getAccountInfo", {
      token: token
    });
    try{
      result = JSON.parse(result);
      if ((result as any).error){throw (result as any).error;};
      this.firstname = capitalizeFirstLetter(result.first);
      this.lastname = capitalizeFirstLetter(result.last);
      this.email = capitalizeFirstLetter(result.email);

      this.unmodified = {firstname: this.firstname, lastname: this.lastname, email: this.email};
    }catch(error){
    }
    
  }
  async save(){
    let token = await get("token");
    let obj : any = {token: token};
    if (this.firstname != this.unmodified.firstname){
      obj.firstname = this.firstname;
    }
    if (this.lastname != this.unmodified.lastname){
      obj.lastname = this.lastname;
    }
    if (this.email != this.unmodified.email){
      obj.email = this.email;
    }
    let result : any = await call("http://127.0.0.1:3000/api/setAccountInfo", obj);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}