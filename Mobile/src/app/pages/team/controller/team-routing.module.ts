import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamPage } from './team.page';
const routes: Routes = [
  {
    path: '',
    component: TeamPage,
    children: [
      {
        path: "events",
        loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: "people",
        loadChildren: () => import('../people/people.module').then( m => m.PeoplePageModule)
      },
      {
        path: "mail",
        loadChildren: () => import('../mail/mail.module').then( m => m.MailPageModule)
      },
      {
        path: "settings",
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      }
    ]
  },
  {
    path: "team",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
