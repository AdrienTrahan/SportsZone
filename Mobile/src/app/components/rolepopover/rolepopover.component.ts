import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { get, set } from '../../functions/storage';
@Component({
  selector: 'app-rolepopover',
  templateUrl: './rolepopover.component.html',
  styleUrls: ['./rolepopover.component.scss'],
})
export class RolepopoverComponent implements OnInit {
  options = {
    "0": "PARENT",
    "1": "COACH"
  };
  availableRoles: any = [];
  availableNames: any = [];
  selectedIndex = 0;
  constructor(public navParams: NavParams, public popover: PopoverController) {
    
  }

  async ngOnInit() {
    this.availableRoles = this.navParams.data.roles;
    let role = await get("role");
    for (var i = 0; i < this.availableRoles.length; i++){
      this.availableNames.push({title: this.availableRoles[i] + ""});
      if (this.availableRoles[i] + "" == role){
        this.selectedIndex = i;
      }
    }
  }
  async selectRow(index){
    if (this.availableRoles[index]){
      this.selectedIndex = index;
      await set("role", parseInt(this.availableRoles[index]));
      this.popover.dismiss();
    }
  }
}
