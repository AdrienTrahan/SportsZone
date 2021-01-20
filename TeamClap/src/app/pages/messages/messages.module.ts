import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { SavepopoverComponent } from 'src/app/components/savepopover/savepopover.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    TranslateModule
  ],
  declarations: [MessagesPage, SavepopoverComponent]
})
export class MessagesPageModule {}
