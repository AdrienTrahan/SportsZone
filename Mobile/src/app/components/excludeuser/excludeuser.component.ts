import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'

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


@NgModule({
  imports: [CommonModule],
  declarations: [
    ExcludeuserComponent,
  ],
  exports: [
    ExcludeuserComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExcludeuserModule { }
