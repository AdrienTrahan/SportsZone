import { Component, OnInit } from '@angular/core';
import { call, logout } from '../../functions/call';
import { get, set} from '../../functions/storage';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Mock } from 'protractor/built/driverProviders';
@Component({
  selector: 'app-rolechooser',
  templateUrl: './rolechooser.page.html',
  styleUrls: ['./rolechooser.page.scss'],
})
export class RolechooserPage implements OnInit {

  obligated;
  constructor(private router: Router, private modal: ModalController) {
    
  }

  ngOnInit() {
    
  }
  async selectRole(index){
    
    let token = await get("token");
    let result = await call("http://127.0.0.1:3000/api/chooseRole", {token: token, role: index});
    try{
      if (typeof result != "object"){
        result = JSON.parse(result);
      }
      if ((result as any).error){throw (result as any).error;};
      if (typeof parseInt((result as any).data) == "number"){
        await set("role", parseInt((result as any).data));
        this.modal.dismiss();
      }
      
    }catch(error){
      if (error.includes("[993]")){
        this.logout();
      }
    }
  }
  async logout(){
    await logout();
    this.router.navigateByUrl("/");
  }
  close(){
    this.modal.dismiss();
  }
}
