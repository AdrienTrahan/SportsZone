import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';
import { PresenceComponent } from 'src/app/components/presence/presence.component';
import { SmallplayerComponent } from 'src/app/components/smallplayer/smallplayer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    TranslateModule
  ],
  declarations: [EventPage, PresenceComponent, SmallplayerComponent]
})
export class EventPageModule {}
