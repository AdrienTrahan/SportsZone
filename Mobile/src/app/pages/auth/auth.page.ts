import { Component, ViewChild } from '@angular/core';
import { NavController, PopoverController, ModalController, Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { call } from '../../functions/call';
import { FormComponent } from 'src/app/components/form/form.component';
import { get, set, remove } from "../../functions/storage";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage {
  errorMessage = "";
  buttonText = [0, 1];
  selectedRoles = ["", ""];
  role = -1;
  mode=0;
  email = "";
  password = "";
  first = "";
  last = "";
  confirm = "";
  constructor(private translate: TranslateService, private router: Router) {
    
    
  }
  selectRole(index){
    this.selectedRoles = ["", ""];
    this.selectedRoles[index] = "selected-segment";
    this.role = index;
  }
  switch(){
    this.errorMessage = "";
    if (this.mode){
      this.mode = 0;
      this.buttonText = [0, 1];
    }else{
      this.mode = 1;
      this.buttonText = [1, 0];
    }
  }
  submit(){
    if (!this.mode){
      this.login();
    }else{
      this.register();
    }
  }
  async login(){
    let response : any = await call("http://127.0.0.1:3000/api/login", {email: this.email, password: this.password});
    try{
      response = JSON.parse(response);
      if (response.error != undefined){
          this.errorMessage = response.error;
          return;
      }
      if (response.token != undefined){
        set("token", response.token);
        this.router.navigateByUrl("/redirect")
      }
    }catch{
      this.errorMessage = response.error;
    }
  }
  async register(){
    if (this.first.replace(/\s/g, '') == ""){
      this.errorMessage = this.translate.instant("AUTH.ERRORS.3");
    }
    if (this.last.replace(/\s/g, '') == ""){
      this.errorMessage = this.translate.instant("AUTH.ERRORS.3");
    }
    if ( this.password.length < 6){
      this.errorMessage = this.translate.instant("AUTH.ERRORS.0");
      return;
    }
    if (this.confirm != this.password){
      this.errorMessage = this.translate.instant("AUTH.ERRORS.1");
      return;
    }

    if (this.role == -1){
      this.errorMessage = this.translate.instant("AUTH.ERRORS.2");
      return;
    }
    let response : any = await call("http://127.0.0.1:3000/api/signup", {
      email: this.email, password: this.password, first: this.first, last: this.last, role: this.role
    });
    try{
      response = JSON.parse(response);
      if (response.error != undefined){
          this.errorMessage = response.error;
          return;
      }
      if (response.token != undefined){
        set("token", response.token);
        this.router.navigateByUrl("/redirect")
      }
    }catch{

    }
  }
  throwError(error){
  }

}
