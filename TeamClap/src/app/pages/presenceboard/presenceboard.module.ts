import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenceboardPageRoutingModule } from './presenceboard-routing.module';

import { PresenceboardPage } from './presenceboard.page';
import { SmallplayerComponent } from 'src/app/components/smallplayer/smallplayer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenceboardPageRoutingModule
  ],
  declarations: [PresenceboardPage, SmallplayerComponent]
})
export class PresenceboardPageModule {}
