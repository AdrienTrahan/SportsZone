import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  static localLanguage;
  static _currentLanguage = "";
  static get currentLanguage(){
    return this._currentLanguage
  }
  static set currentLanguage(lang){
    LanguageService._currentLanguage = lang;
  }
  static translate;
  constructor(private translate: TranslateService) {
    LanguageService.translate = translate;
    
    
  }
  setInitialAppLanguage(){
    let language = this.translate.getBrowserLang();
    LanguageService.currentLanguage = language;
    LanguageService.translate.setDefaultLang(language);

  }
  static setLanguage(lang){
    LanguageService.currentLanguage = lang;
    this.translate.setDefaultLang(lang);
  }

  
}
