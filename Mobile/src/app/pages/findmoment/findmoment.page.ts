import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-findmoment',
  templateUrl: './findmoment.page.html',
  styleUrls: ['./findmoment.page.scss'],
})
export class FindmomentPage implements OnInit {
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: LanguageService.currentLanguage
  }
  eventSource = [];
  monthTitle = "sad";
  currentPickerDateNow = new Date().toISOString();
  currentPickerDateAfter = new Date(new Date().setHours(new Date().getHours() + 1)).toISOString();
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  back(){
    this.modal.dismiss();
  }
  titleChanged(title){
    this.monthTitle = title;
  }
  async goBackwardOneMonth(){
    this.myCalendar.lockSwipes = false;
    setTimeout(() => {
      this.myCalendar.slidePrev();
      this.myCalendar.lockSwipes = true;
    }, 50)
  }
  goForwardOneMonth(){
    this.myCalendar.lockSwipes = false;
    setTimeout(() => {
      this.myCalendar.slideNext();
      this.myCalendar.lockSwipes = true;
    }, 50)
  }
  eventSelected(date){
  }
  timeSelected(eventParam){
    if (this.myCalendar){
      this.myCalendar.autoSelect = false;
      this.myCalendar.autoSelect = false;
      let alreadySelected = false;
      let usedDate = (eventParam.selectedTime as Date).getDate() + "/" + (eventParam.selectedTime as Date).getMonth() + "/" + (eventParam.selectedTime as Date).getFullYear();
      let index = 0;
      for (var i = 0; i < this.eventSource.length; i++){
        if (this.eventSource[i].usedDate == usedDate){
          alreadySelected = true;
          index = i;
          break;
        }
      }
      if (!alreadySelected){
        let event = {
          title: 'Event - ',
          startTime: eventParam.selectedTime,
          endTime: eventParam.selectedTime,
          allDay: false,
          usedDate: usedDate,
          date: eventParam.selectedTime
        }
        this.eventSource.push(event);
        this.myCalendar.loadEvents();
      }else{
        this.eventSource.splice(index, 1);
        this.myCalendar.loadEvents();
      }
      
    }
  }
  finish(){
    this.modal.dismiss({
      dates: this.eventSource,
      start: this.currentPickerDateNow,
      end: this.currentPickerDateAfter,
      startString: (new Date(this.currentPickerDateNow)).getHours() + " : " + ('0' + (new Date(this.currentPickerDateNow)).getMinutes()).slice(-2),
      endString: (new Date(this.currentPickerDateAfter)).getHours() + " : " + ('0' + (new Date(this.currentPickerDateAfter)).getMinutes()).slice(-2)
    })
  }
}
