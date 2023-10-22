import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { logout } from 'src/app/functions/call';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  constructor(private router: Router, private nativePageTransitions: NativePageTransitions) { }
  ngOnInit() {
  }
  async logout(){
    await logout();
    this.router.navigateByUrl("/");
  }
  roles(){
  }

  back(){

    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 200,
      slowdownfactor: -1,
      iosdelay: 100
    }
    this.nativePageTransitions.slide(options);
    this.router.navigateByUrl("/home");
  }
}
