import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-half-entry',
  templateUrl: './half-entry.component.html',
  styleUrls: ['./half-entry.component.scss'],
})
export class HalfEntryComponent implements OnInit {

  @Input('placeholder') placeholder: string;
  @Input('type') type: string;
  @Input('side') side: string;
  @Input('value') value: string;

  @Output() dataChanged : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  emitChange(value){
    this.dataChanged.emit({value: value} as any);
  }

}
