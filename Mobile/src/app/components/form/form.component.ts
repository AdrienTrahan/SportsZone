import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input("type") type: string;
  @Input("errorMessage") errorMessage: string = "";
  @Output() loginClicked: EventEmitter<string> = new EventEmitter();
  @Output() registerClicked: EventEmitter<string> = new EventEmitter();
  email: string = "";
  password: string = "";
  confirm: string = "";
  first: string = "";
  last: string = "";
  
  constructor() { }

  ngOnInit() {}
  createSubmitted(){
  }
  updateEmail($event){
    this.email = $event.value;
  }
  updatePassword($event){
    this.password = $event.value;
  }
  updateConfirm($event){
    this.confirm = $event.value;
  }
  updateFirst($event){
    this.first = $event.value;
  }
  updateLast($event){
    this.last = $event.value;
  }
  loginFunction(){
    this.loginClicked.emit({email: this.email, password: this.password} as any);
  }
  registerFunction(){
    this.registerClicked.emit({email: this.email, password: this.password, first: this.first, last: this.last, confirm: this.confirm} as any);
  }
}
