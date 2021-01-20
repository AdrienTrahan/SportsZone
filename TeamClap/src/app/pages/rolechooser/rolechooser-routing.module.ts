import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolechooserPage } from './rolechooser.page';

const routes: Routes = [
  {
    path: '',
    component: RolechooserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolechooserPageRoutingModule {}
