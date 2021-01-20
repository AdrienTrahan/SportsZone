import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { EventComponent } from 'src/app/components/event/event.component';
import { UpcommingComponent } from 'src/app/components/upcomming/upcomming.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    TranslateModule
  ],
  declarations: [EventsPage, EventComponent, UpcommingComponent]
})
export class EventsPageModule {}
