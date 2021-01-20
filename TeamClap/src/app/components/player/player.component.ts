import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input('img') image : string;
  @Input('first') first : string;
  @Input('last') last : string;
  constructor() {
  }

  ngOnInit() {
  }

}
