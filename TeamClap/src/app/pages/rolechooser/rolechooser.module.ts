import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolechooserPageRoutingModule } from './rolechooser-routing.module';

import { RolechooserPage } from './rolechooser.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolechooserPageRoutingModule,
    TranslateModule
  ],
  declarations: [RolechooserPage]
})
export class RolechooserPageModule {}
