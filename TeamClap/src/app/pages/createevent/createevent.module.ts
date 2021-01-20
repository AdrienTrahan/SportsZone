import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateeventPageRoutingModule } from './createevent-routing.module';

import { CreateeventPage } from './createevent.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateeventPageRoutingModule,
    TranslateModule
  ],
  declarations: [CreateeventPage]
})
export class CreateeventPageModule {}
