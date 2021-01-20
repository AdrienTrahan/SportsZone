import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-excludeuser',
  templateUrl: './excludeuser.component.html',
  styleUrls: ['./excludeuser.component.scss'],
})
export class ExcludeuserComponent implements OnInit {

  translatedExclude = "";
  constructor(private popoverController: PopoverController, private translate: TranslateService) { }

  ngOnInit() {
    this.translatedExclude = this.translate.instant("PLAYERS.EXCLUDE");
  }

  exclude(){
    this.popoverController.dismiss("exclude")
  }
}
