import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendinglistPageRoutingModule } from './pendinglist-routing.module';

import { PendinglistPage } from './pendinglist.page';
import { SmallplayerComponent } from 'src/app/components/smallplayer/smallplayer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendinglistPageRoutingModule,
    TranslateModule
  ],
  declarations: [PendinglistPage, SmallplayerComponent]
})
export class PendinglistPageModule {}
