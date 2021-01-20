import { Component, OnInit } from '@angular/core';
import { HomePage } from '../../home/home.page';
import { ModalController } from '@ionic/angular';
import { RolechooserPage } from '../../rolechooser/rolechooser.page';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {
  options = {
    "0": "parent",
    "1": "coach",
    "2": "player"
  };
  userInformation = HomePage.userInformation;
  constructor(private modal: ModalController) { }
  ngOnInit() {
  }
  newRole(){
    this.modal.create({component: RolechooserPage}).then((modal) => {
      modal.present();
      modal.onDidDismiss().then(async ()=>{
        await HomePage.updateInfo();
        this.userInformation = HomePage.userInformation;
      })
    })
  }

}
