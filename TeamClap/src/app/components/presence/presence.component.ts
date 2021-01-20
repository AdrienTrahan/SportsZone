import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss'],
})
export class PresenceComponent implements OnInit {
  @Input('present') present: string;
  @Input('unsure') unsure: string;
  @Input('absent') absent: string;
  @Input('presence') presence: string;
  
  constructor() { }

  ngOnInit() {}

}
