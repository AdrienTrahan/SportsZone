import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { EventPage } from './event.page';

const routes: Routes = [
  {
    path: '',
    component: EventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventPageRoutingModule {}
