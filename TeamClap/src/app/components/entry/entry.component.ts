import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {

  @Input('placeholder') placeholder: string;
  @Input('type') type: string;
  @Input('value') value: string;
  @Output() dataChanged : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  emitChange(value){
    this.dataChanged.emit({value: value} as any);
  }
}
