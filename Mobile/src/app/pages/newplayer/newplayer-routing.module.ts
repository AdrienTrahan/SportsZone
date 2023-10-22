import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewplayerPage } from './newplayer.page';

const routes: Routes = [
  {
    path: '',
    component: NewplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewplayerPageRoutingModule {}
