import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyeventPageRoutingModule } from './modifyevent-routing.module';

import { ModifyeventPage } from './modifyevent.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyeventPageRoutingModule,
    TranslateModule
  ],
  declarations: [ModifyeventPage],
})
export class ModifyeventPageModule {}
