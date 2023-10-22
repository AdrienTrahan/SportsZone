import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralinfoPageRoutingModule } from './generalinfo-routing.module';

import { GeneralinfoPage } from './generalinfo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralinfoPageRoutingModule,
    TranslateModule
  ],
  declarations: [GeneralinfoPage]
})
export class GeneralinfoPageModule {}
