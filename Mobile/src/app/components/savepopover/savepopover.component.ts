import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-savepopover',
  templateUrl: './savepopover.component.html',
  styleUrls: ['./savepopover.component.scss'],
})
export class SavepopoverComponent implements OnInit {
  @Input("options") options: any; 
  saveText = "";
  copyText = "";
  constructor(private popoverController: PopoverController, private translate: TranslateService) {
    this.saveText = this.translate.instant("MESSAGES.POPOVER.SAVE");
    this.copyText = this.translate.instant("MESSAGES.POPOVER.COPY");
  }

  ngOnInit() {
    
  }
  save(){
    this.popoverController.dismiss({save: true})
  }
  copy(){
    this.popoverController.dismiss({copy: true})
  }
}
