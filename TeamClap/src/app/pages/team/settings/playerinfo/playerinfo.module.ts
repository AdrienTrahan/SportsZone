import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerinfoPageRoutingModule } from './playerinfo-routing.module';

import { PlayerinfoPage } from './playerinfo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerinfoPageRoutingModule,
    TranslateModule
  ],
  declarations: [PlayerinfoPage]
})
export class PlayerinfoPageModule {}
