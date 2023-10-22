import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareteamPage } from './shareteam.page';

const routes: Routes = [
  {
    path: '',
    component: ShareteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareteamPageRoutingModule {}
