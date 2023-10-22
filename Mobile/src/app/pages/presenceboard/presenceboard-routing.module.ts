import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenceboardPage } from './presenceboard.page';

const routes: Routes = [
  {
    path: '',
    component: PresenceboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenceboardPageRoutingModule {}
