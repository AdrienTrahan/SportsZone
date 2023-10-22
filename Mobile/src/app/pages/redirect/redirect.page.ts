import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthPage } from '../auth/auth.page'
import { get, set, remove } from "../../functions/storage";
@Component({
  selector: 'app-main',
  templateUrl: './redirect.page.html',
  styleUrls: ['./redirect.page.scss'],
})
export class RedirectPage implements OnInit {

  constructor(private router: Router, private modal: ModalController) {
    
  }
  async quickCheck(){
    let authValid = (await get("token")) != null;
    if (!authValid){
      this.showAuth();
    }else{
      this.showHome();
    }
  }
  showAuth(){
    this.router.navigateByUrl("/auth");
  }
  showHome(){
    this.router.navigateByUrl("/home");
  }
  ionViewDidEnter(){
    this.quickCheck();
  }
  ngOnInit() {
  }
}
