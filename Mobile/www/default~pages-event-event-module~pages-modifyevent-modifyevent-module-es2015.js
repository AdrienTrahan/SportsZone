(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-event-event-module~pages-modifyevent-modifyevent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title color=\"light\">{{eventInfo.date + \" \" + months[eventInfo.month] + \" - \" + eventInfo.name}}</ion-title> -->\n    <ion-title color=\"light\">{{eventInfo.name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"modifyEvent()\" *ngIf=\"this.owner\" color=\"white\">\n        <ion-icon name=\"pencil-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"deleteEvent()\" *ngIf=\"this.owner\" color=\"white\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n    <ion-segment-button value=\"details\">\n      <ion-label>{{\"EVENT.SEGMENTED.0\" | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"presence\">\n      <ion-label>{{\"EVENT.SEGMENTED.1\" | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"this.state == 'details'\">\n    <ion-list-header>\n      {{eventInfo.name}} <span *ngIf=\"eventInfo.adversary\" class=\"adversary\">&nbsp; {{\"EVENT.INFOS.0\" | translate}} {{eventInfo.adversary}}</span>\n    </ion-list-header>\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>{{\"EVENT.INFOS.1\" | translate}}</ion-label>\n      </ion-item-divider>\n\n      <ion-item button (click)=\"changePresence()\">\n        <ion-label>\n          <div class=\"presence\" [attr.presence]=\"((this.eventInfo.presence == 'YES' && this.eventInfo.late != 0 && this.eventInfo.late) ? 'LATE' : this.eventInfo.presence)\">\n            <img [src]=\"'../../../../assets/' + symbole[this.eventInfo.presence]\" alt=\"\">\n          </div>\n          <h1 class=\"presenceState\">{{\"EVENT.PRESENCE.\" + this.eventInfo.presence + (this.eventInfo.late != 0 ? \"LATE\" : \"\") | translate}}{{(this.eventInfo.late != 0 ? this.eventInfo.late + \" min\" : \"\")}}</h1>\n        </ion-label>\n        {{\"EVENT.INFOS.4\" | translate}}\n        <ion-icon *ngIf=\"!platform.is('ios')\" class=\"chevronIcon\" slot=\"end\" name=\"chevron-forward-sharp\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          {{\"EVENT.INFOS.2\" | translate}}\n        </ion-label>\n        {{eventInfo.hours}}h{{eventInfo.minutes}}\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\"EVENT.INFOS.3\" | translate}}</ion-label>\n        {{eventInfo.hours2}}h{{eventInfo.minutes2}}\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          {{\"EVENT.INFOS.5\" | translate}}\n        </ion-label>\n        {{ \"EVENT.FULLDATE\" | translate:{DAY: eventInfo.date, MONTH: this.translate.instant(\"FULLMONTHS.\" +  eventInfo.month)} }}\n        <!-- {{eventInfo.date}} {{months[eventInfo.month]}} -->\n      </ion-item>\n      <ion-item *ngIf=\"this.eventInfo.adversary\">\n        <ion-label>\n          {{\"EVENT.INFOS.6\" | translate}}\n        </ion-label>\n        {{eventInfo.adversary}}\n      </ion-item>\n      <ion-item-divider *ngIf=\"this.eventInfo.specifications.length > 0\">\n        <ion-label>{{\"EVENT.INFOS.7\" | translate}}</ion-label>\n      </ion-item-divider>\n      <ion-item *ngFor=\"let spec of (this.eventInfo.specifications); let i = index\">\n        <ion-label>{{spec.name}}</ion-label>\n        {{spec.data}}\n      </ion-item>\n      <ion-item-divider *ngIf=\"this.eventInfo.places.length > 0\">\n        <ion-label>{{\"EVENT.INFOS.12\" | translate}}</ion-label>\n      </ion-item-divider>\n      <ion-item [button]=\"place.address\" *ngFor=\"let place of (this.eventInfo.places); let i = index\">\n        <ion-label>{{\"EVENT.INFOS.11\" | translate}}</ion-label>\n        {{place.name}}\n      </ion-item>\n      <ion-item-divider>\n        <ion-label>{{\"EVENT.INFOS.8\" | translate}}</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-label>{{\"EVENT.INFOS.9\" | translate}}</ion-label>\n        {{this.eventInfo.presenceRatio[0]}}\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\"EVENT.INFOS.10\" | translate}}</ion-label>\n        {{this.eventInfo.presenceRatio[2]}}\n      </ion-item>\n    </ion-item-group>\n  </div>\n  <div *ngIf=\"this.state == 'presence'\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div>\n      <div *ngFor=\"let pres of (this.present); let i = index\">\n        <ion-card (click)=\"selectPlayer(0, i)\" class=\"clickable\">\n          <app-smallplayer pres=\"0\" [img]=\"pres.image\" [first]=\"pres.first\" [last]=\"pres.last\" [role]=\"pres.role\" [late]=\"pres.late\"></app-smallplayer>\n        </ion-card>\n      </div>\n      <div *ngFor=\"let may of (this.maybe); let i = index\">\n        <ion-card (click)=\"selectPlayer(1, i)\" class=\"clickable\">\n          <app-smallplayer pres=\"1\" [img]=\"may.image\" [first]=\"may.first\" [last]=\"may.last\" [role]=\"may.role\"></app-smallplayer>\n        </ion-card>\n      </div>\n      <div *ngFor=\"let abs of (this.absent); let i = index\">\n        <ion-card (click)=\"selectPlayer(2, i)\" class=\"clickable\">\n          <app-smallplayer pres=\"2\" [img]=\"abs.image\" [first]=\"abs.first\" [last]=\"abs.last\" [role]=\"abs.role\"></app-smallplayer>\n        </ion-card>\n      </div>\n    </div>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n<!--   \n  <h1 class=\"titre\">{{eventInfo.name}}</h1>\n  <h2 class=\"presenceBoard\">{{this.eventInfo.presenceRatio[0] + \" present\" + (this.eventInfo.presenceRatio[0] > 1 ? \"s\" : \"\") + \" - \" + this.eventInfo.presenceRatio[2] + \" absent\" + (this.eventInfo.presenceRatio[2] > 1 ? \"s\" : \"\")}}</h2>\n  <div class=\"separator\"></div>\n  <div class=\"dateButton clickableBtn\">\n    <h1 class=\"dateTitle\">{{eventInfo.hours}}h{{eventInfo.minutes}} - {{eventInfo.date}} {{months[eventInfo.month]}}</h1>\n    <ion-icon class=\"calendarIcon\" name=\"calendar\"></ion-icon>\n  </div>\n  <div class=\"separator\"></div>\n  <div *ngFor=\"let place of (this.eventInfo.places); let i = index\" class=\"clickableBtn\">\n    <div class=\"placeButton\">\n      <h1 class=\"placeTitle\">{{place.name}}</h1>\n      <h2 class=\"placeSubtitle\">{{place.address}}</h2>\n      <ion-icon *ngIf=\"place.address\" class=\"navigateIcon\" name=\"navigate\"></ion-icon>\n    </div>\n    <div *ngIf=\"(this.eventInfo.places.length - 1) != i\" class=\"separator\"></div>\n  </div>\n  <div class=\"getPresence clickable\" (click)=\"showPresence()\">regarder les présences</div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/event/event.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/event/event.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  font-family: \"Roboto\";\n}\n\n.titre {\n  font-weight: 600;\n  font-size: 27px;\n  margin: 20px 10px 0px 20px;\n  text-align: center;\n}\n\n.presenceBoard {\n  font-weight: 400;\n  font-size: 14px;\n  margin: 4px 10px 0px 20px;\n  text-align: center;\n  color: #ADADAD;\n}\n\n.presenceWrapper {\n  clear: both;\n  margin: 25px 10px 10px 20px;\n}\n\n.presenceWrapper:active {\n  opacity: 0.8;\n}\n\n.presence {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  float: left;\n  margin-top: 5px;\n}\n\n.presence[presence=YES] {\n  background-color: #21ed95;\n}\n\n.presence[presence=MAYBE] {\n  background-color: #e6e6e6;\n}\n\n.presence[presence=NO] {\n  background-color: #ff004c;\n}\n\n.presence[presence=LATE] {\n  background-color: orange;\n}\n\n.presenceState {\n  float: left;\n  margin: 0px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 6px 0px 0px 5px;\n  margin-top: 5px;\n}\n\n.modifyState {\n  clear: both;\n  float: left;\n  font-size: 16px;\n  color: #3681F1;\n  margin: 0px;\n}\n\nimg {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  width: 60%;\n}\n\n.presenceTextWrapper {\n  margin: 0px 0px 0px 10px;\n  float: left;\n}\n\n.place {\n  clear: both;\n  font-weight: 600;\n  font-size: 25px;\n  margin: 40px 10px 0px 20px;\n}\n\n.placeTitle {\n  font-size: 18px;\n  color: black;\n  font-weight: 600;\n  margin: 10px 10px 0px 10px;\n}\n\n.placeTitle {\n  font-size: 18px;\n  color: black;\n  font-weight: 600;\n  margin: 10px 10px 0px 10px;\n}\n\n.placeAddress {\n  font-size: 15px;\n  color: #3681F1;\n  font-weight: 400;\n  margin: 5px 10px 10px 10px;\n}\n\n.placesWrapper {\n  margin: 0px 10px 0px 10px;\n}\n\n.place {\n  clear: both;\n  font-weight: 600;\n  font-size: 25px;\n  margin: 40px 10px 0px 20px;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.changeButton {\n  width: auto;\n  max-width: 200px;\n  min-width: 20%;\n  height: 40px;\n  background-color: #FF005C;\n  float: right;\n  border-radius: 5px;\n  color: white;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  text-align: center;\n  padding: 11px 15px 0px 15px;\n}\n\n.presenceInfoButton {\n  margin: 20px 20px 15px 20px;\n  height: 40px;\n}\n\n.separator {\n  border-top: 1px solid #DDDDDD;\n  width: calc(100% - 40px);\n  margin: 0px 20px 0px 20px;\n}\n\n.dateTitle {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #25E481;\n  margin: 0px;\n}\n\n.calendarIcon {\n  --color: #25E481;\n  color: #25E481;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 2.5px 0px 0px 0px;\n}\n\n.dateButton, .placeButton {\n  padding: 10px 25px 10px 25px;\n  margin: 0px;\n  position: relative;\n}\n\n.placeTitle {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #0088FF;\n  margin: 0px;\n}\n\n.placeSubtitle {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #A9A9A9;\n  margin: 0px;\n}\n\n.navigateIcon {\n  --color: #0088FF;\n  color: #0088FF;\n  float: right;\n  vertical-align: top;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.clickableBtn:active {\n  background-color: #80808026;\n}\n\n.getPresence {\n  margin: 20px 0px 0px 0px;\n  height: 40px;\n  background-color: #25E481;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: center;\n  position: relative;\n  width: calc(100% - 80px);\n  border-radius: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 10px 5px 5px 5px;\n  max-width: 400px;\n}\n\nion-item-divider.md, ion-item-divider.wp {\n  background-color: #f5f5f5;\n}\n\n.adversary {\n  color: #0088FF;\n  font-size: 23px;\n}\n\n.chevronIcon {\n  margin: 2px 0px 0px 2px;\n  opacity: 0.7;\n}\n\nion-list-header.md, ion-list-header.wp {\n  font-size: 25px;\n  font-weight: 700;\n}\n\nion-list-header {\n  margin: 10px 0px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnQvZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0FDT0o7O0FETEE7RUFDSSx3QkFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FDVUo7O0FEUkE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUNXSjs7QURUQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDYUo7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNjSjs7QURaQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7QUNnQko7O0FEZEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNpQko7O0FEZkE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDa0JKOztBRGhCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ21CSjs7QURoQkE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7QUNtQko7O0FEakJBO0VBQ0ksNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUNzQko7O0FEbEJBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ3NCSjs7QURwQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDdUJKOztBRHJCQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSwyQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUMwQko7O0FEdkJBO0VBQ0kseUJBQUE7QUMwQko7O0FEeEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUMyQko7O0FEekJBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDNEJKOztBRDFCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQzZCSjs7QUQzQkE7RUFDSSx5QkFBQTtBQzhCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLnRpdHJle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIG1hcmdpbjogMjBweCAxMHB4IDBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcmVzZW5jZUJvYXJke1xuICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNHB4IDEwcHggMHB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjQURBREFEO1xuXG59XG4ucHJlc2VuY2VXcmFwcGVye1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG1hcmdpbjogMjVweCAxMHB4IDEwcHggMjBweDtcbn1cbi5wcmVzZW5jZVdyYXBwZXI6YWN0aXZle1xuICAgIG9wYWNpdHk6IDAuODtcbn1cbi5wcmVzZW5jZXtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJlc2VuY2VbcHJlc2VuY2U9XCJZRVNcIl17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxZWQ5NTtcbn1cbi5wcmVzZW5jZVtwcmVzZW5jZT1cIk1BWUJFXCJde1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4ucHJlc2VuY2VbcHJlc2VuY2U9XCJOT1wiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDRjO1xufVxuLnByZXNlbmNlW3ByZXNlbmNlPVwiTEFURVwiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG4ucHJlc2VuY2VTdGF0ZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDZweCAwcHggMHB4IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbn1cbi5tb2RpZnlTdGF0ZXtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMzNjgxRjE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pbWd7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICB3aWR0aDogNjAlO1xufVxuLnByZXNlbmNlVGV4dFdyYXBwZXJ7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnBsYWNle1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbjogNDBweCAxMHB4IDBweCAyMHB4O1xufVxuLnBsYWNlVGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuLnBsYWNlVGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuLnBsYWNlQWRkcmVzc3tcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMzNjgxRjE7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDVweCAxMHB4IDEwcHggMTBweDtcbn1cbi5wbGFjZXNXcmFwcGVye1xuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XG59XG4ucGxhY2V7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luOiA0MHB4IDEwcHggMHB4IDIwcHg7XG59XG4uY2xpY2thYmxlOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4uY2hhbmdlQnV0dG9ue1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWluLXdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwNUM7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDExcHggMTVweCAwcHggMTVweDtcblxufVxuLnByZXNlbmNlSW5mb0J1dHRvbntcbiAgICBtYXJnaW46IDIwcHggMjBweCAxNXB4IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnNlcGFyYXRvcntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcbn1cbi5kYXRlVGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzI1RTQ4MTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5jYWxlbmRhckljb257XG4gICAgLS1jb2xvcjogIzI1RTQ4MTtcbiAgICBjb2xvcjogIzI1RTQ4MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIG1hcmdpbjogMi41cHggMHB4IDBweCAwcHg7XG4gICAgXG59XG5cbi5kYXRlQnV0dG9uLCAucGxhY2VCdXR0b257XG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMjVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGxhY2VUaXRsZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMDA4OEZGO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnBsYWNlU3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI0E5QTlBOTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5uYXZpZ2F0ZUljb257XG4gICAgLS1jb2xvcjogIzAwODhGRjtcbiAgICBjb2xvcjogIzAwODhGRjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmNsaWNrYWJsZUJ0bjphY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDI2O1xufVxuLmdldFByZXNlbmNle1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1RTQ4MTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgcGFkZGluZzogMTBweCA1cHggNXB4IDVweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG5pb24taXRlbS1kaXZpZGVyLm1kLCBpb24taXRlbS1kaXZpZGVyLndwe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uYWR2ZXJzYXJ5e1xuICAgIGNvbG9yOiAjMDA4OEZGO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbn1cbi5jaGV2cm9uSWNvbntcbiAgICBtYXJnaW46IDJweCAwcHggMHB4IDJweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5pb24tbGlzdC1oZWFkZXIubWQsIGlvbi1saXN0LWhlYWRlci53cHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xufVxuIiwiOnJvb3Qge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cblxuLnRpdHJlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBtYXJnaW46IDIwcHggMTBweCAwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJlc2VuY2VCb2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA0cHggMTBweCAwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0FEQURBRDtcbn1cblxuLnByZXNlbmNlV3JhcHBlciB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDI1cHggMTBweCAxMHB4IDIwcHg7XG59XG5cbi5wcmVzZW5jZVdyYXBwZXI6YWN0aXZlIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ucHJlc2VuY2Uge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucHJlc2VuY2VbcHJlc2VuY2U9WUVTXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWVkOTU7XG59XG5cbi5wcmVzZW5jZVtwcmVzZW5jZT1NQVlCRV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4ucHJlc2VuY2VbcHJlc2VuY2U9Tk9dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA0Yztcbn1cblxuLnByZXNlbmNlW3ByZXNlbmNlPUxBVEVdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4ucHJlc2VuY2VTdGF0ZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMHB4IDBweCA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1vZGlmeVN0YXRlIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzY4MUYxO1xuICBtYXJnaW46IDBweDtcbn1cblxuaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5wcmVzZW5jZVRleHRXcmFwcGVyIHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnBsYWNlIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiA0MHB4IDEwcHggMHB4IDIwcHg7XG59XG5cbi5wbGFjZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4ucGxhY2VUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcbn1cblxuLnBsYWNlQWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzNjgxRjE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucGxhY2VzV3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5wbGFjZSB7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogNDBweCAxMHB4IDBweCAyMHB4O1xufVxuXG4uY2xpY2thYmxlOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn1cblxuLmNoYW5nZUJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDVDO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweCAxNXB4IDBweCAxNXB4O1xufVxuXG4ucHJlc2VuY2VJbmZvQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTVweCAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZGF0ZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzI1RTQ4MTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jYWxlbmRhckljb24ge1xuICAtLWNvbG9yOiAjMjVFNDgxO1xuICBjb2xvcjogIzI1RTQ4MTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luOiAyLjVweCAwcHggMHB4IDBweDtcbn1cblxuLmRhdGVCdXR0b24sIC5wbGFjZUJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbGFjZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwODhGRjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wbGFjZVN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI0E5QTlBOTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5uYXZpZ2F0ZUljb24ge1xuICAtLWNvbG9yOiAjMDA4OEZGO1xuICBjb2xvcjogIzAwODhGRjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uY2xpY2thYmxlQnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAyNjtcbn1cblxuLmdldFByZXNlbmNlIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUU0ODE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBwYWRkaW5nOiAxMHB4IDVweCA1cHggNXB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG5pb24taXRlbS1kaXZpZGVyLm1kLCBpb24taXRlbS1kaXZpZGVyLndwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmFkdmVyc2FyeSB7XG4gIGNvbG9yOiAjMDA4OEZGO1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5jaGV2cm9uSWNvbiB7XG4gIG1hcmdpbjogMnB4IDBweCAwcHggMnB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmlvbi1saXN0LWhlYWRlci5tZCwgaW9uLWxpc3QtaGVhZGVyLndwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/event/event.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/event/event.page.ts ***!
  \*******************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/functions/serializer */ "./src/app/functions/serializer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var EventPage_1;









let symbole = {
    YES: "checkmark.png",
    NO: "x.png",
    MAYBE: "ellipsis.png"
};
let presenceTitle = {
    YES: "Present",
    MAYBE: "Maybe",
    NO: "Absent"
};
let EventPage = EventPage_1 = class EventPage {
    constructor(translate, router, route, alertController, platform) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.platform = platform;
        this.eventInfo = {
            name: "Event",
            places: [],
        };
        this.state = "details";
        this.months = ["janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        this.presenceTitle = presenceTitle;
        this.symbole = symbole;
        this.params = {};
        this.owner = false;
        this.maybe = [];
        this.present = [];
        this.absent = [];
        this.nextPresence = 0;
        this.nextAbsence = 0;
        this.nextMaybe = 0;
        this.exceededPres = false;
        this.exceededMay = false;
        this.exceededAbs = false;
        this.owner = _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo.owner;
        this.route.queryParams.subscribe((queryParams) => {
            if (queryParams && queryParams.eventId) {
                this.params = queryParams;
                this.eventInfo = _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo;
                this.eventInfo.hours = Math.floor(this.eventInfo.startTime / 60);
                this.eventInfo.minutes = ('0' + Math.floor(this.eventInfo.startTime % 60)).slice(-2);
                this.eventInfo.hours2 = Math.floor(this.eventInfo.endTime / 60);
                this.eventInfo.minutes2 = ('0' + Math.floor(this.eventInfo.endTime % 60)).slice(-2);
            }
            else {
            }
        });
    }
    showPresence() {
        this.router.navigateByUrl("/presenceboard?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__["serialize"])({
            eventId: this.params.eventId,
            teamId: this.params.teamId,
            playerId: this.params.playerId
        }));
    }
    deleteEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.4.TITLE"),
                message: this.translate.instant("ALERTS.4.MESSAGE", { name: this.eventInfo.name }),
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.4.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant("ALERTS.4.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");
                                yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/deleteEvents", {
                                    token: token,
                                    id: this.params.teamId,
                                    events: JSON.stringify([this.params.eventId])
                                });
                                this.router.navigateByUrl("/team/events?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__["serialize"])({
                                    teamId: this.params.teamId
                                }));
                            }
                            catch (error) {
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.load();
    }
    modifyEvent() {
        EventPage_1.modifiable = this.eventInfo;
        this.router.navigateByUrl("/modifyevent?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__["serialize"])({
            eventId: this.params.eventId,
            teamId: this.params.teamId
        }));
    }
    changeRole(role, late) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");
                let obj = {
                    event: this.eventInfo.id,
                    id: this.params.teamId,
                    token: token,
                    presence: role,
                    playerId: this.params.playerId
                };
                if (!obj.playerId) {
                    delete obj.playerId;
                }
                if (late) {
                    obj.late = parseInt(late);
                }
                let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/changePresence", obj);
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                let presence = parseInt(result.presence);
                if (this.eventInfo.presence == "NO" && presence != 2) {
                    this.eventInfo.presenceRatio[2] -= 1;
                    this.eventInfo.presenceRatio[presence] += 1;
                }
                else if (this.eventInfo.presence == "MAYBE" && presence != 1) {
                    this.eventInfo.presenceRatio[1] -= 1;
                    this.eventInfo.presenceRatio[presence] += 1;
                }
                else if (this.eventInfo.presence == "YES" && presence != 0) {
                    this.eventInfo.presenceRatio[0] -= 1;
                    this.eventInfo.presenceRatio[presence] += 1;
                }
                let roles = ["YES", "MAYBE", "NO"];
                this.eventInfo.presence = roles[presence];
                this.eventInfo.late = result.late;
                _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo = this.eventInfo;
            }
            catch (error) {
            }
        });
    }
    changePresence() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'containerAlert',
                header: this.translate.instant("ALERTS.0.TITLE"),
                message: this.translate.instant("ALERTS.1.TITLE", { name: this.eventInfo.name }),
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.0.BUTTONS.0"),
                        cssClass: 'noButtonAlert',
                        handler: (blah) => {
                            this.changeRole(2);
                        }
                    }, {
                        text: this.translate.instant("ALERTS.0.BUTTONS.1"),
                        cssClass: "maybeButtonAlert",
                        handler: (blah) => {
                            this.changeRole(1);
                        }
                    }, {
                        text: this.translate.instant("ALERTS.0.BUTTONS.2"),
                        cssClass: 'yesButtonAlert',
                        handler: () => {
                            this.changeRole(0);
                        }
                    }, {
                        text: this.translate.instant("ALERTS.0.BUTTONS.3"),
                        cssClass: 'lateButtonAlert',
                        handler: () => {
                            this.lateByMinutes();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    lateByMinutes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.1.TITLE"),
                subHeader: this.translate.instant("ALERTS.1.MESSAGE"),
                inputs: [
                    {
                        name: 'minutes',
                        id: 'minutes',
                        type: 'number',
                        placeholder: 'ex: 10 min'
                    }
                ],
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.1.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: this.translate.instant("ALERTS.1.BUTTONS.1"),
                        handler: (alertData) => {
                            this.changeRole(0, alertData.minutes);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getPresentPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");
            let obj = { token: token, id: this.params.teamId, eventId: this.params.eventId, nextPresence: this.nextPresence };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/getPresence", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.length; i++) {
                    this.present.push(result[i]);
                }
                if (result.length == 0) {
                    this.nextMaybe = 0;
                    this.maybe = [];
                    yield this.getMaybePlayers();
                    this.exceededPres = true;
                }
                else {
                    this.nextPresence += result.length;
                }
            }
            catch (error) {
            }
        });
    }
    getAbsentPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");
            let obj = { token: token, id: this.params.teamId, eventId: this.params.eventId, nextAbsence: this.nextAbsence };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/getAbsence", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.length; i++) {
                    this.absent.push(result[i]);
                }
                this.nextAbsence += result.length;
            }
            catch (error) {
            }
        });
    }
    getMaybePlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");
            let obj = { token: token, id: this.params.teamId, eventId: this.params.eventId, nextMaybe: this.nextMaybe };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/getMaybe", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.length; i++) {
                    this.maybe.push(result[i]);
                }
                if (result.length == 0) {
                    this.nextAbsence = 0;
                    this.absent = [];
                    yield this.getAbsentPlayers();
                    this.exceededMay = true;
                }
                else {
                    this.nextMaybe += result.length;
                }
            }
            catch (error) {
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.exceededPres) {
                yield this.getPresentPlayers();
            }
            else if (!this.exceededMay) {
                yield this.getMaybePlayers();
            }
            else if (!this.exceededAbs) {
                yield this.getAbsentPlayers();
            }
            event.target.complete();
        });
    }
    refresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load();
            event.target.complete();
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.exceededPres = false;
            this.exceededMay = false;
            this.exceededAbs = false;
            this.nextPresence = 0;
            this.present = [];
            yield this.getPresentPlayers();
            this.nextMaybe = 0;
            this.maybe = [];
            if (this.present.length < 15) {
                yield this.getMaybePlayers();
            }
            this.nextAbsence = 0;
            this.absent = [];
            if (this.present.length + this.maybe.length < 15) {
                yield this.getAbsentPlayers();
            }
        });
    }
    selectPlayer(pres, index) {
        let obj = {
            teamId: this.params.teamId
        };
        if (this.params.playerId && this.params.playerId != "undefined") {
            obj.playerId = this.params.playerId;
        }
        if (pres == 0) {
            obj.player = this.present[index].id;
        }
        else if (pres == 1) {
            obj.player = this.maybe[index].id;
        }
        else if (pres == 2) {
            obj.player = this.absent[index].id;
        }
        this.router.navigateByUrl("/player-profile?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__["serialize"])(obj));
    }
};
EventPage.modifiable = {};
EventPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
EventPage = EventPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.page.scss */ "./src/app/pages/event/event.page.scss")).default]
    })
], EventPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-event-event-module~pages-modifyevent-modifyevent-module-es2015.js.map