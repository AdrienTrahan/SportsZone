import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindplacePage } from './findplace.page';

const routes: Routes = [
  {
    path: '',
    component: FindplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindplacePageRoutingModule {}
