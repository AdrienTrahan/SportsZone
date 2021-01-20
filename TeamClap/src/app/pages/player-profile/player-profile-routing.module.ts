import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerProfilePage } from './player-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerProfilePageRoutingModule {}
