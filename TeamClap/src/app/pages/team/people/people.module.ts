import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { SmallplayerComponent } from 'src/app/components/smallplayer/smallplayer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule
  ],
  declarations: [PeoplePage, SmallplayerComponent]
})
export class PeoplePageModule {}
