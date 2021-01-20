import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'redirect',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'redirect',
    loadChildren: () => import('./pages/redirect/redirect.module').then( m => m.RedirectPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/controller/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'newplayer',
    loadChildren: () => import('./pages/newplayer/newplayer.module').then( m => m.NewplayerPageModule)
  },
  {
    path: 'rolechooser',
    loadChildren: () => import('./pages/rolechooser/rolechooser.module').then( m => m.RolechooserPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/settings/roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'newteam',
    loadChildren: () => import('./pages/newteam/newteam.module').then( m => m.NewteamPageModule)
  },
  {
    path: 'shareteam',
    loadChildren: () => import('./pages/shareteam/shareteam.module').then( m => m.ShareteamPageModule)
  },
  {
    path: 'join-team',
    loadChildren: () => import('./pages/join-team/join-team.module').then( m => m.JoinTeamPageModule)
  },
  {
    path: 'createevent',
    loadChildren: () => import('./pages/createevent/createevent.module').then( m => m.CreateeventPageModule)
  },
  {
    path: 'findplace',
    loadChildren: () => import('./pages/findplace/findplace.module').then( m => m.FindplacePageModule)
  },
  {
    path: 'findmoment',
    loadChildren: () => import('./pages/findmoment/findmoment.module').then( m => m.FindmomentPageModule)
  },
  {
    path: 'modifyevent',
    loadChildren: () => import('./pages/modifyevent/modifyevent.module').then( m => m.ModifyeventPageModule)
  },
  {
    path: 'presenceboard',
    loadChildren: () => import('./pages/presenceboard/presenceboard.module').then( m => m.PresenceboardPageModule)
  },
  {
    path: 'player-profile',
    loadChildren: () => import('./pages/player-profile/player-profile.module').then( m => m.PlayerProfilePageModule)
  },
  {
    path: 'profile-settings',
    loadChildren: () => import('./pages/settings/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'new-message',
    loadChildren: () => import('./pages/new-message/new-message.module').then( m => m.NewMessagePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'pendinglist',
    loadChildren: () => import('./pages/team/settings/pendinglist/pendinglist.module').then( m => m.PendinglistPageModule)
  },
  {
    path: 'passwordreset',
    loadChildren: () => import('./pages/passwordreset/passwordreset.module').then( m => m.PasswordresetPageModule)
  },
  {
    path: 'generalinfo',
    loadChildren: () => import('./pages/team/settings/generalinfo/generalinfo.module').then( m => m.GeneralinfoPageModule)
  },
  {
    path: 'playerinfo',
    loadChildren: () => import('./pages/team/settings/playerinfo/playerinfo.module').then( m => m.PlayerinfoPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/settings/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/settings/editprofile/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/messages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/settings/languages/languages.module').then( m => m.LanguagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
