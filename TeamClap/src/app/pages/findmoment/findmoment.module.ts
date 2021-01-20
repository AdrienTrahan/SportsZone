
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindmomentPageRoutingModule } from './findmoment-routing.module';
import { FindmomentPage } from './findmoment.page';
import { NgCalendarModule } from 'ionic2-calendar'; 
import { TranslateModule } from '@ngx-translate/core';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeFr from "@angular/common/locales/fr";

registerLocaleData(localeFr);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindmomentPageRoutingModule,
    NgCalendarModule,
    TranslateModule
  ],
  declarations: [FindmomentPage]
})
export class FindmomentPageModule {}
