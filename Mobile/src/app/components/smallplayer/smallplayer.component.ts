import { Component, OnInit, Input, NgModule } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-smallplayer',
  templateUrl: './smallplayer.component.html',
  styleUrls: ['./smallplayer.component.scss'],
})
export class SmallplayerComponent implements OnInit {
  @Input('first') first: string;
  @Input('last') last: string;
  @Input('p_first') p_first: string;
  @Input('p_last') p_last: string;
  @Input('img') image : string;
  @Input('role') role : string;
  @Input('late') late : number;
  @Input('pres') pres : number;
  imageName = "";
  translatedLate = "";
  translatedCoach = "";
  constructor(private translate: TranslateService) {
    
  }

  ngOnInit() {
    if (this.pres == 0){
      this.imageName = "checkmark.png";
    }else if (this.pres == 1){
      this.imageName = "ellipsis.png";
    }else if (this.pres == 2){
      this.imageName = "x.png";
    }
    this.translatedCoach = this.translate.instant("EVENT.COACH");
    this.translatedLate = this.translate.instant("EVENT.PRESENCE.YESLATE") + this.late + " min";
  }
}



@NgModule({
  imports: [CommonModule],
  declarations: [
    SmallplayerComponent,
  ],
  exports: [
    SmallplayerComponent,
  ]
})
export class SmallplayerModule { }