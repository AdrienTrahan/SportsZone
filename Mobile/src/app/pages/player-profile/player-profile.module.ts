import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerProfilePageRoutingModule } from './player-profile-routing.module';

import { PlayerProfilePage } from './player-profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerProfilePageRoutingModule,
    TranslateModule
  ],
  declarations: [PlayerProfilePage]
})
export class PlayerProfilePageModule {}
