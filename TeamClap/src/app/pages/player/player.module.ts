import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerPageRoutingModule } from './player-routing.module';

import { PlayerPage } from './player.page';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home/home.page';
import { TeamComponent } from '../../components/team/team.component';
import { UpcommingComponent } from 'src/app/components/upcomming/upcomming.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule,
    TranslateModule
  ],
  declarations: [PlayerPage, TeamComponent, UpcommingComponent]
})
export class PlayerPageModule {}
