import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectLanguage(lang){
    LanguageService.setLanguage(lang);
  }
}
