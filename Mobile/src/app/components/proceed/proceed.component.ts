import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.scss'],
})
export class ProceedComponent implements OnInit {
  @Input('content') content: string;
  @Input('color') color: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  clickFunction(){
    this.buttonClicked.emit();
  }
}
