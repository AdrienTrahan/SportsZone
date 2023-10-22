import { Component, OnInit, Input, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input('img') image : string;
  @Input('name') name : string;
  @Input('category') category : string;
  constructor() { }

  ngOnInit() {}

}



@NgModule({
  imports: [CommonModule],
  declarations: [
    TeamComponent,
  ],
  exports: [
    TeamComponent,
  ]
})
export class TeamModule { }
