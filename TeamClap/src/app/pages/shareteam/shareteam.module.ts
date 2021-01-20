import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareteamPageRoutingModule } from './shareteam-routing.module';

import { ShareteamPage } from './shareteam.page';
import { QriousModule } from 'angular-qrious';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareteamPageRoutingModule,
    QriousModule,
    TranslateModule
  ],
  declarations: [ShareteamPage]
})
export class ShareteamPageModule {}
