import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SafePipeModule } from 'safe-pipe';
import { IonicModule } from '@ionic/angular';

import { NewplayerPageRoutingModule } from './newplayer-routing.module';

import { NewplayerPage } from './newplayer.page';
import { SafePipe } from 'safe-pipe/lib/safe-pipe.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewplayerPageRoutingModule,
    SafePipeModule,
    TranslateModule
  ],
  declarations: [NewplayerPage]
})
export class NewplayerPageModule {}
