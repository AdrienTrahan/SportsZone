import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindplacePageRoutingModule } from './findplace-routing.module';

import { FindplacePage } from './findplace.page';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindplacePageRoutingModule,
    NgxMapboxGLModule,
    TranslateModule
  ],
  declarations: [FindplacePage]
})
export class FindplacePageModule {}
