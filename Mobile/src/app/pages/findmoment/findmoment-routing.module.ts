import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindmomentPage } from './findmoment.page';

const routes: Routes = [
  {
    path: '',
    component: FindmomentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindmomentPageRoutingModule {}
