import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss'],
})
export class TagInputComponent implements OnInit {
  _searchField = "";
  @Input("searchField") set searchField(data){
    this._searchField = data;
  }
  get searchField(){
    return this._searchField;
  }
  _tags : Array<string> = [];
  highlighting = false;
  index = -1;
  savedSearchField = "";
  @ViewChild('search') searchElement: ElementRef;
  @Input("ngModel") set tags(value: Array<string>){
    this._tags = value;
  }
  get tags(){
    return this._tags;
  }
  @Output() type: EventEmitter<string> = new EventEmitter();
  @Output() verify: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  onKey(event){
    if (this.highlighting && event.keyCode == 8){
      if (this.index != -1){
        this.tags.splice(this.index, 1);
        this.delete.emit(this.index);
      }else{
        this.tags.splice(this.tags.length - 1, 1);
        this.delete.emit(this.tags.length - 1);
      }
      this.highlighting = !this.highlighting;
      this.index = -1;
      this.searchField = this.savedSearchField;
      this.savedSearchField = "";
    }else if (event.keyCode == 8 && this.searchField == ""){
      
      if (this.highlighting){
        if (this.index != -1){
          this.tags.splice(this.index, 1);
          this.delete.emit(this.index);
        }else{
          this.tags.splice(this.tags.length - 1, 1);
          this.delete.emit(this.tags.length - 1)
        }
      }else{
        this.type.emit(event.target.value);
      }
      
      this.highlighting = !this.highlighting;
      this.index = -1;
    }else if (event.keyCode == 13){
      this.verify.emit(event.target.value);
      this.searchField = "";
      this.highlighting = false;
      this.index = -1;
      this.savedSearchField = "";
    }else{
      this.type.emit(event.target.value)
      this.highlighting = false;
      this.index = -1;
      this.savedSearchField = "";
    }
  }
  select(index){
    this.index = index;
    this.highlighting = true;
    this.savedSearchField = this.searchField;
    this.searchElement.nativeElement.focus();
  }
  clearField(){
    this.searchField = "";
    this.searchElement.nativeElement.focus();
  }
}

