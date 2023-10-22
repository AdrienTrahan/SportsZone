(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modifyevent-modifyevent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modifyevent/modifyevent.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modifyevent/modifyevent.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\">\n            <ion-icon color=\"white\" name=\"close-outline\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">New Event</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"this.eventInfo.moments.length == 0\" (click)=\"finish()\">\n        <ion-icon color=\"white\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>{{\"CREATE.MODIFY.EMAIL\" | translate}}</ion-label>\n    <ion-toggle [(ngModel)]=\"emailToggle\" slot=\"start\" color=\"success\" name=\"email_modify\"></ion-toggle>\n  </ion-item>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>{{\"CREATE.0\" | translate}}</ion-label>\n    </ion-item-divider>\n    <ion-item class=\"\">\n      <ion-label>{{\"CREATE.1\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"eventInfo.name\" class=\"right\" placeholder=\"ex: Hockey game\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{\"CREATE.2\" | translate}}\n      </ion-label>\n      <ion-input [(ngModel)]=\"eventInfo.adversary\" class=\"right\" placeholder=\"ex: Wolfs\"></ion-input>\n    </ion-item>\n    \n  </ion-item-group>\n  <br>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>{{\"CREATE.3\" | translate}}</ion-label>\n    </ion-item-divider>\n    <ion-item button detail=\"false\" (click)=\"modifyPlace(i)\" *ngFor=\"let place of this.eventInfo.places; let i = index\" class=\"\">\n      <ion-label>\n        {{place.name}}\n        <p>{{place.address}}</p>\n        <ion-icon (click)=\"deletePlace(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingPlace\">\n      <ion-label>{{\"CREATE.9\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"this.newPlace.name\" class=\"right\" placeholder=\"ex: Parc Charbonneau\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"this.addingPlace\">\n      <ion-label>\n        {{\"CREATE.10\" | translate}}\n      </ion-label>\n      <ion-input [(ngModel)]=\"this.newPlace.address\" class=\"right\" placeholder=\"ex: 26 Rue Paradis, ...\"></ion-input>\n      <button (click)=\"choosePlace()\" class=\"searchAddress\" clear item-right>{{\"CREATE.11\" | translate}}</button>\n    </ion-item>\n    <ion-item *ngIf=\"!this.addingPlace\" (click)=\"addPlace()\" button color=\"primary\" class=\"\">\n      {{\"CREATE.4\" | translate}}\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"this.addingPlace\" class=\"splitButton\" (click)=\"addPlace()\" class=\"\">\n      <ion-button (click)=\"closePlace()\" class=\"closeButton\">{{\"CREATE.12\" | translate}}</ion-button>\n      <ion-button (click)=\"insertPlace()\" [disabled]=\"!this.newPlace.name\" class=\"addButton\">{{\"CREATE.13\" | translate}}</ion-button>\n    </ion-item>\n  </ion-item-group>\n  <br>\n  <ion-item-group class=\"\">\n    <ion-item-divider>\n      <ion-label>{{\"CREATE.5\" | translate}}</ion-label>\n    </ion-item-divider>\n    <ion-item detail=\"false\" button (click)=\"modifyMoment(i)\" *ngFor=\"let moment of this.eventInfo.moments; let i = index\" class=\"\">\n      <div class=\"datesContainer\">\n        <ion-label class=\"monthItem\" *ngFor=\"let month of moment.datesString;let j = index\">\n          {{\"FULLMONTHS.\" + month[0] | translate}} - {{month[1]}}\n          <br>\n          <p class=\"dayItem\" *ngFor=\"let day of month[2];let k = index\">\n            {{day}}<span *ngIf=\"month[2].length - 1 != k\">,&nbsp;</span>\n          </p>\n        </ion-label>\n      </div>\n      <div class=\"hours\">\n        <h1 class=\"firstHour\">{{moment.startString}}</h1>\n        <h1 class=\"middleHour\">-</h1>\n        <h1 class=\"lastHour\">{{moment.endString}}</h1>\n      </div>\n      <ion-icon (click)=\"deleteMoment(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"addMoment()\" button color=\"primary\" class=\"\">\n      {{\"CREATE.6\" | translate}}\n    </ion-item>\n  </ion-item-group>\n  <br>\n  <ion-item-divider>\n    <ion-label>\n      {{\"CREATE.7\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let spec of this.specifications; let i = index\">\n    <ion-label class=\"\">{{spec.name}}<p>{{spec.data}}</p></ion-label>\n    <ion-icon (click)=\"deleteSpec(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n  </ion-item>\n  <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingSpec\">\n    <ion-label>{{\"CREATE.9\" | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"this.newSpec.name\" class=\"right\" placeholder=\"ex: Court\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" *ngIf=\"this.addingSpec\">\n    <ion-label>\n      {{\"CREATE.14\" | translate}}\n    </ion-label>\n    <ion-input [(ngModel)]=\"this.newSpec.data\" class=\"right\" placeholder=\"ex: 6\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"this.addingSpec\" class=\"splitButton\" (click)=\"addPlace()\" class=\"\">\n    <ion-button (click)=\"closeSpec()\" class=\"closeButton\">{{\"CREATE.12\" | translate}}</ion-button>\n    <ion-button (click)=\"insertSpec()\" [disabled]=\"!this.newSpec.name || !this.newSpec.data\" class=\"addButton\">{{\"CREATE.13\" | translate}}</ion-button>\n  </ion-item>\n  <ion-item (click)=\"addSpec()\" *ngIf=\"!this.addingSpec\"class=\"\" button color=\"primary\">\n    {{\"CREATE.8\" | translate}}\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/modifyevent/modifyevent-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modifyevent/modifyevent-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModifyeventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyeventPageRoutingModule", function() { return ModifyeventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modifyevent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifyevent.page */ "./src/app/pages/modifyevent/modifyevent.page.ts");




const routes = [
    {
        path: '',
        component: _modifyevent_page__WEBPACK_IMPORTED_MODULE_3__["ModifyeventPage"]
    }
];
let ModifyeventPageRoutingModule = class ModifyeventPageRoutingModule {
};
ModifyeventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModifyeventPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modifyevent/modifyevent.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/modifyevent/modifyevent.module.ts ***!
  \*********************************************************/
/*! exports provided: ModifyeventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyeventPageModule", function() { return ModifyeventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modifyevent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifyevent-routing.module */ "./src/app/pages/modifyevent/modifyevent-routing.module.ts");
/* harmony import */ var _modifyevent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifyevent.page */ "./src/app/pages/modifyevent/modifyevent.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ModifyeventPageModule = class ModifyeventPageModule {
};
ModifyeventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modifyevent_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifyeventPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_modifyevent_page__WEBPACK_IMPORTED_MODULE_6__["ModifyeventPage"]],
    })
], ModifyeventPageModule);



/***/ }),

/***/ "./src/app/pages/modifyevent/modifyevent.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/modifyevent/modifyevent.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".eventName {\n  border: none;\n  background-color: #F2F2F2;\n  margin: 30px 20px 20px 20px;\n  height: 50px;\n  border-radius: 8px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  max-width: 400px;\n  width: 70%;\n  min-width: 200px;\n  font-size: 20px;\n}\n\n.title {\n  margin: 30px 20px 20px 20px;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.moveButton {\n  margin: 20px 20px 20px 20px;\n  width: auto;\n}\n\n.placeNameInput {\n  border: none;\n  background-color: #F2F2F2;\n  color: black;\n  margin: 10px 10px 10px 10px;\n  height: 30px;\n  border-radius: 8px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  width: auto;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.newItem {\n  margin: 20px 20px 20px 20px;\n}\n\n.newItemInstruction {\n  margin: 13px 10px 0px 15px;\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.placeAddressInput {\n  border: none;\n  background-color: #F2F2F2;\n  color: black;\n  margin: 10px 10px 10px 10px;\n  height: 30px;\n  border-radius: 8px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-size: 15px;\n  font-weight: 500;\n  flex-grow: 1;\n  min-width: 200px;\n}\n\n.findPlace {\n  width: 200px;\n  margin: 7.5px 10px 0px 10px;\n}\n\n.findAdressWrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.closeButton {\n  margin: 10px 0px 10px 10px;\n}\n\n.addButton {\n  margin: 10px;\n}\n\n.placeCard {\n  margin: 20px;\n  padding: 10px 0px 10px 0px;\n}\n\n.placeTitle {\n  margin: 10px 70px 5px 20px;\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.placeAddress {\n  margin: 5px 70px 10px 20px;\n  font-weight: 500;\n  color: lightskyblue;\n  font-size: 14px;\n}\n\n.delete {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  margin: 0px;\n  width: 50px;\n}\n\n.edit {\n  position: absolute;\n  top: 50%;\n  right: 70px;\n  transform: translateY(-50%);\n  margin: 0px;\n  width: 50px;\n}\n\n.momentCard {\n  height: auto;\n  padding: 0px 0px 10px 0px;\n  margin: 0px 20px 0px 20px;\n}\n\n.monthTitle {\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.dayBlock {\n  margin: 10px 0px 5px 0px;\n  white-space: break-spaces;\n}\n\n.comaSpan {\n  margin: 0px;\n  padding: 0px;\n}\n\n.monthBlock {\n  margin: 10px 20px 5px 20px;\n  padding-right: 110px;\n  white-space: normal;\n}\n\n.hours {\n  position: absolute;\n  right: 135px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: auto;\n  width: auto;\n}\n\n.firstHour {\n  font-size: 15px;\n  height: 20px;\n  margin: 0px;\n  width: auto;\n  text-align: center;\n}\n\n.lastHour {\n  font-size: 15px;\n  height: 20px;\n  margin: 0px;\n  width: auto;\n}\n\n.middleHour {\n  margin: 0px;\n  font-size: 15px;\n  text-align: center;\n  width: 100%;\n  margin-top: -8px;\n  height: 12px;\n}\n\n.closeButton {\n  --background: var(--ion-color-danger);\n  flex: 1;\n  height: 40px;\n  margin: 0px 10px 0px 0px;\n  padding: 0px;\n  color: white;\n}\n\n.addButton {\n  --background: var(--ion-color-primary);\n  flex: 1;\n  height: 40px;\n  margin: 0px 0px 0px 10px;\n  padding: 0px;\n  color: white;\n}\n\n.monthItem {\n  padding: 15px 0px 15px 0px;\n  font-weight: 700;\n  margin: 0px 50px 0px 0px;\n  white-space: pre-wrap;\n}\n\n.dayItem {\n  font-weight: 500;\n  margin: 10px 0px 0px 0px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.datesContainer {\n  width: 100%;\n  position: relative;\n}\n\n.monthTitle {\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.dayBlock {\n  margin: 10px 0px 5px 0px;\n  white-space: break-spaces;\n}\n\n.comaSpan {\n  margin: 0px;\n  padding: 0px;\n}\n\n.monthBlock {\n  margin: 10px 20px 5px 20px;\n  padding-right: 110px;\n  white-space: normal;\n}\n\n.hours {\n  position: absolute;\n  right: 50px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: auto;\n  width: auto;\n}\n\n.firstHour {\n  font-size: 15px;\n  height: 20px;\n  margin: 0px;\n  width: auto;\n  text-align: center;\n}\n\n.lastHour {\n  font-size: 15px;\n  height: 20px;\n  margin: 0px;\n  width: auto;\n  text-align: center;\n}\n\n.middleHour {\n  margin: 0px;\n  font-size: 15px;\n  text-align: center;\n  width: 100%;\n  margin-top: -8px;\n  height: 12px;\n}\n\nion-item .right {\n  text-align: right;\n}\n\nion-item-divider.md, ion-item-divider.wp {\n  background-color: #f5f5f5;\n}\n\nion-list-header.md, ion-list-header.wp {\n  font-size: 25px;\n  font-weight: 700;\n}\n\nion-list-header {\n  margin: 10px 0px 10px 0px;\n}\n\n.trash {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  font-size: 30px;\n}\n\n.searchAddress {\n  background-color: var(--ion-color-primary);\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  margin-left: 5px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL21vZGlmeWV2ZW50L21vZGlmeWV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kaWZ5ZXZlbnQvbW9kaWZ5ZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksMkJBQUE7QUNLSjs7QURIQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksMEJBQUE7QUNVSjs7QURSQTtFQUNJLFlBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtBQ1lKOztBRFZBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDYUo7O0FEWEE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2VKOztBRGJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNnQko7O0FEYkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ2dCSjs7QURkQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNpQko7O0FEZkE7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0FDa0JKOztBRGhCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDbUJKOztBRGpCQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3FCSjs7QURuQkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNzQko7O0FEcEJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3VCSjs7QURyQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxxQ0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxzQ0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzBCSjs7QUR4QkE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQzJCSjs7QUR6QkE7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQzRCSjs7QUR6QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUM0Qko7O0FEekJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzRCSjs7QUQxQkE7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0FDNkJKOztBRDNCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDOEJKOztBRDVCQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQytCSjs7QUQ3QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2dDSjs7QUQ5QkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNpQ0o7O0FEL0JBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDa0NKOztBRGhDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbUNKOztBRGhDQTtFQUNJLGlCQUFBO0FDbUNKOztBRGpDQTtFQUNJLHlCQUFBO0FDb0NKOztBRGxDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3FDSjs7QURuQ0E7RUFDSSx5QkFBQTtBQ3NDSjs7QURuQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3NDSjs7QURuQ0E7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNzQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RpZnlldmVudC9tb2RpZnlldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnROYW1le1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICAgIG1hcmdpbjogMzBweCAyMHB4IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50aXRsZXtcbiAgICBtYXJnaW46IDMwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubW92ZUJ1dHRvbntcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG4ucGxhY2VOYW1lSW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLm5ld0l0ZW17XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuLm5ld0l0ZW1JbnN0cnVjdGlvbntcbiAgICBtYXJnaW46IDEzcHggMTBweCAwcHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ucGxhY2VBZGRyZXNzSW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLmZpbmRQbGFjZXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiA3LjVweCAxMHB4IDBweCAxMHB4O1xufVxuLmZpbmRBZHJlc3NXcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNsb3NlQnV0dG9ue1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4O1xufVxuLmFkZEJ1dHRvbntcbiAgICBtYXJnaW46IDEwcHg7XG59XG4ucGxhY2VDYXJke1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5wbGFjZVRpdGxle1xuICAgIG1hcmdpbjogMTBweCA3MHB4IDVweCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wbGFjZUFkZHJlc3N7XG4gICAgbWFyZ2luOiA1cHggNzBweCAxMHB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZWxldGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5lZGl0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5tb21lbnRDYXJke1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XG59XG4ubW9udGhUaXRsZXtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZGF5QmxvY2t7XG4gICAgbWFyZ2luOiAxMHB4IDBweCA1cHggMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG4uY29tYVNwYW57XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLm1vbnRoQmxvY2t7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHggNXB4IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5ob3Vyc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEzNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG59XG4uZmlyc3RIb3Vye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxhc3RIb3Vye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG4ubWlkZGxlSG91cntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xufVxuLmNsb3NlQnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWRkQnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm1vbnRoSXRlbXtcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4IDUwcHggMHB4IDBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4uZGF5SXRlbXtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGVzQ29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuLm1vbnRoVGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRheUJsb2Nre1xuICAgIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuLmNvbWFTcGFue1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5tb250aEJsb2Nre1xuICAgIG1hcmdpbjogMTBweCAyMHB4IDVweCAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uaG91cnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG59XG4uZmlyc3RIb3Vye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxhc3RIb3Vye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1pZGRsZUhvdXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIGhlaWdodDogMTJweDtcbn1cblxuaW9uLWl0ZW0gLnJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuaW9uLWl0ZW0tZGl2aWRlci5tZCwgaW9uLWl0ZW0tZGl2aWRlci53cHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuaW9uLWxpc3QtaGVhZGVyLm1kLCBpb24tbGlzdC1oZWFkZXIud3B7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLnRyYXNoe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc2VhcmNoQWRkcmVzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xufSIsIi5ldmVudE5hbWUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIG1hcmdpbjogMzBweCAyMHB4IDIwcHggMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDMwcHggMjBweCAyMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm1vdmVCdXR0b24ge1xuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucGxhY2VOYW1lSW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubmV3SXRlbSB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLm5ld0l0ZW1JbnN0cnVjdGlvbiB7XG4gIG1hcmdpbjogMTNweCAxMHB4IDBweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBsYWNlQWRkcmVzc0lucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5maW5kUGxhY2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogNy41cHggMTBweCAwcHggMTBweDtcbn1cblxuLmZpbmRBZHJlc3NXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2xvc2VCdXR0b24ge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMTBweDtcbn1cblxuLmFkZEJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnBsYWNlQ2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG59XG5cbi5wbGFjZVRpdGxlIHtcbiAgbWFyZ2luOiAxMHB4IDcwcHggNXB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGxhY2VBZGRyZXNzIHtcbiAgbWFyZ2luOiA1cHggNzBweCAxMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBsaWdodHNreWJsdWU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmVkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5tb21lbnRDYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4ubW9udGhUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZGF5QmxvY2sge1xuICBtYXJnaW46IDEwcHggMHB4IDVweCAwcHg7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5cbi5jb21hU3BhbiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tb250aEJsb2NrIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHggNXB4IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uaG91cnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMzVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmZpcnN0SG91ciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhc3RIb3VyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLm1pZGRsZUhvdXIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZEJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb250aEl0ZW0ge1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwcHggNTBweCAwcHggMHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5kYXlJdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kYXRlc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb250aFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kYXlCbG9jayB7XG4gIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbn1cblxuLmNvbWFTcGFuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1vbnRoQmxvY2sge1xuICBtYXJnaW46IDEwcHggMjBweCA1cHggMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5ob3VycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5maXJzdEhvdXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYXN0SG91ciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1pZGRsZUhvdXIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbmlvbi1pdGVtIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24taXRlbS1kaXZpZGVyLm1kLCBpb24taXRlbS1kaXZpZGVyLndwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyLm1kLCBpb24tbGlzdC1oZWFkZXIud3Age1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XG59XG5cbi50cmFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zZWFyY2hBZGRyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/modifyevent/modifyevent.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/modifyevent/modifyevent.page.ts ***!
  \*******************************************************/
/*! exports provided: ModifyeventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyeventPage", function() { return ModifyeventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/functions/serializer */ "./src/app/functions/serializer.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _findplace_findplace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../findplace/findplace.page */ "./src/app/pages/findplace/findplace.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
/* harmony import */ var _findmoment_findmoment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../findmoment/findmoment.page */ "./src/app/pages/findmoment/findmoment.page.ts");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _event_event_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../event/event.page */ "./src/app/pages/event/event.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













let ModifyeventPage = class ModifyeventPage {
    constructor(translate, alertController, modal, router, nativePageTransitions, route) {
        this.translate = translate;
        this.alertController = alertController;
        this.modal = modal;
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.parameters = "";
        this.addingPlace = false;
        this.teamId = "";
        this.placeData = {};
        this.eventInfo = {
            name: _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.name,
            adversary: "",
            places: [],
            moments: []
        };
        this.addingSpec = false;
        this.params = {};
        this.newSpec = {
            name: "",
            data: ""
        };
        this.specifications = [];
        this.modifyingPlace = false;
        this.emailToggle = false;
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.newPlace = undefined;
        this.addingPlace = false;
        this.placeData = {};
        this.modifyingPlace = false;
        this.teamId = "";
        this.newSpec = { name: "", data: "" };
        this.addingSpec = false;
        let moment = {
            allDay: false,
            date: new Date(new Date(new Date().setFullYear(parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.year), parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.month), parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.date))).setHours(12, 0, 0)),
            endTime: new Date(new Date(new Date().setFullYear(parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.year), parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.month), parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.date))).setHours(12, 0, 0)),
            startTime: new Date(new Date(new Date().setFullYear(parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.year), parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.month), parseInt(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.date))).setHours(12, 0, 0)),
            title: "Event - ",
            usedDate: _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.date + "/" + _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.month + "/" + _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.year
        };
        let hours = [
            [Math.floor(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.startTime / 60), Math.floor(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.startTime % 60)],
            [Math.floor(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.endTime / 60), Math.floor(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.endTime % 60)],
        ];
        this.eventInfo.moments.push({
            dates: [moment],
            datesString: [[_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.month, _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.year, [_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.date]]],
            start: new Date(new Date().setHours(hours[0][0], hours[0][1])).toISOString(),
            startString: hours[0][0] + " : " + ('0' + hours[0][1]).slice(-2),
            end: new Date(new Date().setHours(hours[1][0], hours[1][1])).toISOString(),
            endString: hours[1][0] + " : " + ('0' + hours[1][1]).slice(-2)
        });
        this.specifications = _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.specifications;
        this.eventInfo.adversary = _event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.adversary;
        this.eventInfo.places = JSON.parse(JSON.stringify(_event_event_page__WEBPACK_IMPORTED_MODULE_11__["EventPage"].modifiable.places));
        this.route.queryParams.subscribe((queryParams) => {
            this.teamId = queryParams.teamId;
            this.parameters = Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(queryParams);
            this.params = queryParams;
        });
    }
    ngOnInit() {
    }
    back() {
        let options = {
            direction: 'down',
            duration: 200,
            slowdownfactor: -1,
            iosdelay: 100
        };
        this.nativePageTransitions.slide(options);
        this.router.navigateByUrl("/event?" + this.parameters);
    }
    addPlace() {
        this.addingPlace = true;
        this.newPlace = { name: "", address: "" };
    }
    modifyPlace(index) {
        this.addingPlace = true;
        this.placeData = JSON.parse(JSON.stringify(this.eventInfo.places[index]));
        this.newPlace = this.eventInfo.places[index];
        this.eventInfo.places.splice(index, 1);
        this.modifyingPlace = true;
    }
    choosePlace() {
        this.modal.create({ component: _findplace_findplace_page__WEBPACK_IMPORTED_MODULE_6__["FindplacePage"] }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    this.newPlace.address = data.data.title;
                }
            });
        });
    }
    insertPlace() {
        this.eventInfo.places.push(this.newPlace);
        this.newPlace = undefined;
        this.addingPlace = false;
        this.modifyingPlace = false;
    }
    deletePlace(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.2.TITLE"),
                message: this.translate.instant("ALERTS.2.MESSAGE", { name: this.eventInfo.places[index].name }),
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.2.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant("ALERTS.2.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: () => {
                            this.eventInfo.places.splice(index, 1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteMoment(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.3.TITLE"),
                message: this.translate.instant("ALERTS.3.MESSAGE"),
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.3.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant("ALERTS.3.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: () => {
                            this.eventInfo.moments.splice(index, 1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    closePlace() {
        this.addingPlace = false;
        if (this.modifyingPlace) {
            this.eventInfo.places.push(this.placeData);
            this.newPlace = undefined;
            this.modifyingPlace = false;
        }
    }
    modifyMoment(index) {
        this.modal.create({ component: _findmoment_findmoment_page__WEBPACK_IMPORTED_MODULE_8__["FindmomentPage"], componentProps: {
                eventSource: this.eventInfo.moments[index].dates,
                currentPickerDateNow: this.eventInfo.moments[index].start,
                currentPickerDateAfter: this.eventInfo.moments[index].end,
            } }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    this.eventInfo.moments.splice(index, 1);
                    data.data.datesString = [];
                    for (var i = 0; i < data.data.dates.length; i++) {
                        let date = data.data.dates[i].date;
                        let monthIndex = -1;
                        for (var j = 0; j < data.data.datesString.length; j++) {
                            if (data.data.datesString[j][0] == date.getMonth() && data.data.datesString[j][1] == date.getFullYear()) {
                                monthIndex = j;
                            }
                        }
                        if (monthIndex == -1) {
                            data.data.datesString.push(JSON.parse(JSON.stringify([date.getMonth(), date.getFullYear(), []])));
                            monthIndex = data.data.datesString.length - 1;
                        }
                        data.data.datesString[monthIndex][2].push(JSON.parse(JSON.stringify(date.getDate())));
                    }
                    this.eventInfo.moments.push(data.data);
                    for (var i = 0; i < this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString.length; i++) {
                        let array = this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2];
                        array.sort(function (a, b) { return a - b; });
                        this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2] = array;
                    }
                }
            });
        }).catch(() => {
        });
    }
    addMoment() {
        this.modal.create({ component: _findmoment_findmoment_page__WEBPACK_IMPORTED_MODULE_8__["FindmomentPage"] }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    data.data.datesString = [];
                    for (var i = 0; i < data.data.dates.length; i++) {
                        let date = data.data.dates[i].date;
                        let monthIndex = -1;
                        for (var j = 0; j < data.data.datesString.length; j++) {
                            if (data.data.datesString[j][0] == date.getMonth() && data.data.datesString[j][1] == date.getFullYear()) {
                                monthIndex = j;
                            }
                        }
                        if (monthIndex == -1) {
                            data.data.datesString.push(JSON.parse(JSON.stringify([date.getMonth(), date.getFullYear(), []])));
                            monthIndex = data.data.datesString.length - 1;
                        }
                        data.data.datesString[monthIndex][2].push(JSON.parse(JSON.stringify(date.getDate())));
                    }
                    this.eventInfo.moments.push(data.data);
                    for (var i = 0; i < this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString.length; i++) {
                        let array = this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2];
                        array.sort(function (a, b) { return a - b; });
                        this.eventInfo.moments[this.eventInfo.moments.length - 1].datesString[i][2] = array;
                    }
                }
            });
        }).catch(() => {
        });
    }
    ionViewWillLeave() {
        this.eventInfo = {};
    }
    finish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_10__["get"])("token");
                let dates = [];
                for (var i = 0; i < this.eventInfo.moments.length; i++) {
                    for (var j = 0; j < this.eventInfo.moments[i].dates.length; j++) {
                        let startMinutes = new Date(this.eventInfo.moments[i].start).getHours() * 60 + new Date(this.eventInfo.moments[i].start).getMinutes();
                        let endMinutes = new Date(this.eventInfo.moments[i].end).getHours() * 60 + new Date(this.eventInfo.moments[i].end).getMinutes();
                        dates.push([this.eventInfo.moments[i].dates[j].date.toString(), startMinutes, endMinutes]);
                    }
                }
                let obj = {
                    token: token,
                    id: this.teamId,
                    eventId: this.params.eventId,
                    dates: JSON.stringify(dates),
                    name: this.eventInfo.name,
                    places: JSON.stringify(this.eventInfo.places),
                    notify: this.emailToggle,
                    specs: JSON.stringify(this.specifications)
                };
                if (this.eventInfo.adversary != "" && this.eventInfo.adversary) {
                    obj.adversary = this.eventInfo.adversary;
                }
                let information = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_9__["call"])("http://192.168.2.251:3000/api/modifyEvent", obj);
                information = JSON.parse(information);
                if (information.error) {
                    throw information.error;
                }
                ;
                let options = {
                    direction: 'down',
                    duration: 200,
                    slowdownfactor: -1,
                    iosdelay: 100
                };
                this.nativePageTransitions.slide(options);
                this.router.navigateByUrl("/team/events?" + this.parameters);
            }
            catch (error) {
                if (error.includes("[993]")) {
                    yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_9__["logout"])();
                    this.router.navigateByUrl("/");
                }
            }
        });
    }
    addSpec() {
        this.addingSpec = true;
    }
    closeSpec() {
        this.addingSpec = false;
        this.newSpec = {
            name: "",
            data: "",
        };
    }
    insertSpec() {
        this.addingSpec = false;
        this.specifications.push(JSON.parse(JSON.stringify(this.newSpec)));
        this.newSpec = {
            name: "",
            data: "",
        };
    }
    deleteSpec(i) {
        this.specifications.splice(i, 1);
    }
};
ModifyeventPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])
], ModifyeventPage.prototype, "myCalendar", void 0);
ModifyeventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-odifyeventPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modifyevent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modifyevent/modifyevent.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modifyevent.page.scss */ "./src/app/pages/modifyevent/modifyevent.page.scss")).default]
    })
], ModifyeventPage);



/***/ })

}]);
//# sourceMappingURL=pages-modifyevent-modifyevent-module-es2015.js.map