import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyeventPage } from './modifyevent.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyeventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyeventPageRoutingModule {}
