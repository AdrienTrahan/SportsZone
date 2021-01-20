import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthPage } from './auth.page';

import { EntryComponent } from '../../components/entry/entry.component';
import { ProceedComponent } from '../../components/proceed/proceed.component';
import { FormComponent } from '../../components/form/form.component';
import { HalfEntryComponent } from '../../components/half-entry/half-entry.component';
import { OrSeparatorComponent } from '../../components/or-separator/or-separator.component';

import { AuthPageRoutingModule } from './auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    TranslateModule
  ],
  declarations: [
    AuthPage,
    EntryComponent,
    ProceedComponent,
    FormComponent,
    HalfEntryComponent,
    OrSeparatorComponent
  ]
})
export class AuthPageModule {}
