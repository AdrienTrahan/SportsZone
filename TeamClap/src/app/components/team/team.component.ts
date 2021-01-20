import { Component, OnInit, Input } from '@angular/core';

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
