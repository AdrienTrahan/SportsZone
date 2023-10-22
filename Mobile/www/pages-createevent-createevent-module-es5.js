function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createevent-createevent-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createevent/createevent.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createevent/createevent.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateeventCreateeventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\">\n            <ion-icon color=\"white\" name=\"close-outline\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"CREATE.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"this.eventInfo.moments.length == 0\" (click)=\"finish()\">\n        <ion-icon color=\"white\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>{{\"CREATE.0\" | translate}}</ion-label>\n    </ion-item-divider>\n    <ion-item class=\"\">\n      <ion-label>{{\"CREATE.1\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"eventInfo.name\" class=\"right\" placeholder=\"ex: Hockey game\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{\"CREATE.2\" | translate}}\n      </ion-label>\n      <ion-input [(ngModel)]=\"eventInfo.adversary\" class=\"right\" placeholder=\"ex: Wolfs\"></ion-input>\n    </ion-item>\n    \n  </ion-item-group>\n  <br>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>{{\"CREATE.3\" | translate}}</ion-label>\n    </ion-item-divider>\n    <ion-item button detail=\"false\" (click)=\"modifyPlace(i)\" *ngFor=\"let place of this.eventInfo.places; let i = index\" class=\"\">\n      <ion-label>\n        {{place.name}}\n        <p>{{place.address}}</p>\n        <ion-icon (click)=\"deletePlace(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingPlace\">\n      <ion-label>{{\"CREATE.9\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"this.newPlace.name\" class=\"right\" placeholder=\"ex: Parc Charbonneau\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"this.addingPlace\">\n      <ion-label>\n        {{\"CREATE.10\" | translate}}\n      </ion-label>\n      <ion-input [(ngModel)]=\"this.newPlace.address\" class=\"right\" placeholder=\"ex: 26 Rue Paradis, ...\"></ion-input>\n      <button (click)=\"choosePlace()\" class=\"searchAddress\" clear item-right>{{\"CREATE.11\" | translate}}</button>\n    </ion-item>\n    <ion-item *ngIf=\"!this.addingPlace\" (click)=\"addPlace()\" button color=\"primary\" class=\"\">\n      {{\"CREATE.4\" | translate}}\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"this.addingPlace\" class=\"splitButton\" (click)=\"addPlace()\" class=\"\">\n      <ion-button (click)=\"closePlace()\" class=\"closeButton\">{{\"CREATE.12\" | translate}}</ion-button>\n      <ion-button (click)=\"insertPlace()\" [disabled]=\"!this.newPlace.name\" class=\"addButton\">{{\"CREATE.13\" | translate}}</ion-button>\n    </ion-item>\n  </ion-item-group>\n  <br>\n  <ion-item-group class=\"\">\n    <ion-item-divider>\n      <ion-label>{{\"CREATE.5\" | translate}}</ion-label>\n    </ion-item-divider>\n    <ion-item detail=\"false\" button (click)=\"modifyMoment(i)\" *ngFor=\"let moment of this.eventInfo.moments; let i = index\" class=\"\">\n      <div class=\"datesContainer\">\n        <ion-label class=\"monthItem\" *ngFor=\"let month of moment.datesString;let j = index\">\n          {{\"FULLMONTHS.\" + month[0] | translate}} - {{month[1]}}\n          <br>\n          <p class=\"dayItem\" *ngFor=\"let day of month[2];let k = index\">\n            {{day}}<span *ngIf=\"month[2].length - 1 != k\">,&nbsp;</span>\n          </p>\n        </ion-label>\n      </div>\n      <div class=\"hours\">\n        <h1 class=\"firstHour\">{{moment.startString}}</h1>\n        <h1 class=\"middleHour\">-</h1>\n        <h1 class=\"lastHour\">{{moment.endString}}</h1>\n      </div>\n      <ion-icon (click)=\"deleteMoment(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"addMoment()\" button color=\"primary\" class=\"\">\n      {{\"CREATE.6\" | translate}}\n    </ion-item>\n  </ion-item-group>\n  <br>\n  <ion-item-divider>\n    <ion-label>\n      {{\"CREATE.7\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let spec of this.specifications; let i = index\">\n    <ion-label class=\"\">{{spec.name}}<p>{{spec.data}}</p></ion-label>\n    <ion-icon (click)=\"deleteSpec(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n  </ion-item>\n  <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingSpec\">\n    <ion-label>{{\"CREATE.9\" | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"this.newSpec.name\" class=\"right\" placeholder=\"ex: Court\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" *ngIf=\"this.addingSpec\">\n    <ion-label>\n      {{\"CREATE.14\" | translate}}\n    </ion-label>\n    <ion-input [(ngModel)]=\"this.newSpec.data\" class=\"right\" placeholder=\"ex: 6\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"this.addingSpec\" class=\"splitButton\" (click)=\"addPlace()\" class=\"\">\n    <ion-button (click)=\"closeSpec()\" class=\"closeButton\">{{\"CREATE.12\" | translate}}</ion-button>\n    <ion-button (click)=\"insertSpec()\" [disabled]=\"!this.newSpec.name || !this.newSpec.data\" class=\"addButton\">{{\"CREATE.13\" | translate}}</ion-button>\n  </ion-item>\n  <ion-item (click)=\"addSpec()\" *ngIf=\"!this.addingSpec\"class=\"\" button color=\"primary\">\n    {{\"CREATE.8\" | translate}}\n  </ion-item>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/createevent/createevent-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/createevent/createevent-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CreateeventPageRoutingModule */

  /***/
  function srcAppPagesCreateeventCreateeventRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateeventPageRoutingModule", function () {
      return CreateeventPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _createevent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./createevent.page */
    "./src/app/pages/createevent/createevent.page.ts");

    var routes = [{
      path: '',
      component: _createevent_page__WEBPACK_IMPORTED_MODULE_3__["CreateeventPage"]
    }];

    var CreateeventPageRoutingModule = function CreateeventPageRoutingModule() {
      _classCallCheck(this, CreateeventPageRoutingModule);
    };

    CreateeventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateeventPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/createevent/createevent.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createevent/createevent.module.ts ***!
    \*********************************************************/

  /*! exports provided: CreateeventPageModule */

  /***/
  function srcAppPagesCreateeventCreateeventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateeventPageModule", function () {
      return CreateeventPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _createevent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./createevent-routing.module */
    "./src/app/pages/createevent/createevent-routing.module.ts");
    /* harmony import */


    var _createevent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createevent.page */
    "./src/app/pages/createevent/createevent.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CreateeventPageModule = function CreateeventPageModule() {
      _classCallCheck(this, CreateeventPageModule);
    };

    CreateeventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _createevent_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateeventPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_createevent_page__WEBPACK_IMPORTED_MODULE_6__["CreateeventPage"]]
    })], CreateeventPageModule);
    /***/
  },

  /***/
  "./src/app/pages/createevent/createevent.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createevent/createevent.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateeventCreateeventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".eventName {\n  border: none;\n  background-color: #F2F2F2;\n  margin: 30px 20px 20px 20px;\n  height: 50px;\n  border-radius: 8px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  max-width: 400px;\n  width: 70%;\n  min-width: 200px;\n  font-size: 20px;\n}\n\n.title {\n  margin: 30px 20px 20px 20px;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.moveButton {\n  margin: 20px 20px 20px 20px;\n  width: auto;\n}\n\n.placeNameInput {\n  border: none;\n  background-color: #F2F2F2;\n  color: black;\n  margin: 10px 10px 10px 10px;\n  height: 30px;\n  border-radius: 8px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  width: auto;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.newItem {\n  margin: 20px 20px 20px 20px;\n}\n\n.newItemInstruction {\n  margin: 13px 10px 0px 15px;\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.placeAddressInput {\n  border: none;\n  background-color: #F2F2F2;\n  color: black;\n  margin: 10px 10px 10px 10px;\n  height: 30px;\n  border-radius: 8px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-size: 15px;\n  font-weight: 500;\n  flex-grow: 1;\n  min-width: 200px;\n}\n\n.findPlace {\n  width: 200px;\n  margin: 7.5px 10px 0px 10px;\n}\n\n.findAdressWrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.closeButton {\n  margin: 10px 0px 10px 10px;\n}\n\n.addButton {\n  margin: 10px;\n}\n\n.placeCard {\n  margin: 20px;\n  padding: 10px 0px 10px 0px;\n}\n\n.placeTitle {\n  margin: 10px 70px 5px 20px;\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.placeAddress {\n  margin: 5px 70px 10px 20px;\n  font-weight: 500;\n  color: lightskyblue;\n  font-size: 14px;\n}\n\n.delete {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  margin: 0px;\n  width: 50px;\n}\n\n.edit {\n  position: absolute;\n  top: 50%;\n  right: 70px;\n  transform: translateY(-50%);\n  margin: 0px;\n  width: 50px;\n}\n\n.momentCard {\n  height: auto;\n  padding: 0px 0px 10px 0px;\n}\n\n.monthTitle {\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\n.dayBlock {\n  margin: 10px 0px 5px 0px;\n  white-space: break-spaces;\n}\n\n.comaSpan {\n  margin: 0px;\n  padding: 0px;\n}\n\n.monthBlock {\n  margin: 10px 20px 5px 20px;\n  padding-right: 110px;\n  white-space: normal;\n}\n\n.hours {\n  position: absolute;\n  right: 50px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: auto;\n  width: auto;\n}\n\n.firstHour {\n  font-size: 15px;\n  height: 20px;\n  margin: 0px;\n  width: auto;\n  text-align: center;\n}\n\n.lastHour {\n  font-size: 15px;\n  height: 20px;\n  margin: 0px;\n  width: auto;\n  text-align: center;\n}\n\n.middleHour {\n  margin: 0px;\n  font-size: 15px;\n  text-align: center;\n  width: 100%;\n  margin-top: -8px;\n  height: 12px;\n}\n\nion-item .right {\n  text-align: right;\n}\n\nion-item-divider.md, ion-item-divider.wp {\n  background-color: #f5f5f5;\n}\n\nion-list-header.md, ion-list-header.wp {\n  font-size: 25px;\n  font-weight: 700;\n}\n\nion-list-header {\n  margin: 10px 0px 10px 0px;\n}\n\n.chevronIcon {\n  margin: 2px 0px 0px 2px;\n  opacity: 0.7;\n}\n\n.newLocation {\n  padding: 10px;\n}\n\n.searchAddress {\n  background-color: var(--ion-color-primary);\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  margin-left: 5px;\n  outline: none;\n}\n\n.splitButton {\n  display: flex;\n  flex-direction: row;\n}\n\n.closeButton {\n  --background: var(--ion-color-danger);\n  flex: 1;\n  height: 40px;\n  margin: 0px 10px 0px 0px;\n  padding: 0px;\n  color: white;\n}\n\n.addButton {\n  --background: var(--ion-color-primary);\n  flex: 1;\n  height: 40px;\n  margin: 0px 0px 0px 10px;\n  padding: 0px;\n  color: white;\n}\n\n.monthItem {\n  padding: 15px 0px 15px 0px;\n  font-weight: 700;\n  margin: 0px 50px 0px 0px;\n  white-space: pre-wrap;\n}\n\n.dayItem {\n  font-weight: 500;\n  margin: 10px 0px 0px 0px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.datesContainer {\n  width: 100%;\n  position: relative;\n}\n\n.trash {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZWV2ZW50L2NyZWF0ZWV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlZXZlbnQvY3JlYXRlZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksMkJBQUE7QUNLSjs7QURIQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksMEJBQUE7QUNVSjs7QURSQTtFQUNJLFlBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtBQ1lKOztBRFZBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDYUo7O0FEWEE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2VKOztBRGJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNnQko7O0FEYkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNnQko7O0FEZEE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDaUJKOztBRGZBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ21CSjs7QURqQkE7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDc0JKOztBRHBCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3dCSjs7QURyQkE7RUFDSSxpQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSx5QkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUMwQko7O0FEeEJBO0VBQ0kseUJBQUE7QUMyQko7O0FEekJBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDNEJKOztBRDFCQTtFQUNJLGFBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDOEJKOztBRDVCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQytCSjs7QUQ1QkE7RUFDSSxxQ0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQytCSjs7QUQ3QkE7RUFDSSxzQ0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2dDSjs7QUQ5QkE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ2lDSjs7QUQvQkE7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2tDSjs7QUQvQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNrQ0o7O0FEOUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNpQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGVldmVudC9jcmVhdGVldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnROYW1le1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICAgIG1hcmdpbjogMzBweCAyMHB4IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50aXRsZXtcbiAgICBtYXJnaW46IDMwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubW92ZUJ1dHRvbntcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG4ucGxhY2VOYW1lSW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLm5ld0l0ZW17XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuLm5ld0l0ZW1JbnN0cnVjdGlvbntcbiAgICBtYXJnaW46IDEzcHggMTBweCAwcHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ucGxhY2VBZGRyZXNzSW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLmZpbmRQbGFjZXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiA3LjVweCAxMHB4IDBweCAxMHB4O1xufVxuLmZpbmRBZHJlc3NXcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNsb3NlQnV0dG9ue1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4O1xufVxuLmFkZEJ1dHRvbntcbiAgICBtYXJnaW46IDEwcHg7XG59XG4ucGxhY2VDYXJke1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5wbGFjZVRpdGxle1xuICAgIG1hcmdpbjogMTBweCA3MHB4IDVweCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wbGFjZUFkZHJlc3N7XG4gICAgbWFyZ2luOiA1cHggNzBweCAxMHB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZWxldGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5lZGl0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5tb21lbnRDYXJke1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xufVxuLm1vbnRoVGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRheUJsb2Nre1xuICAgIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuLmNvbWFTcGFue1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5tb250aEJsb2Nre1xuICAgIG1hcmdpbjogMTBweCAyMHB4IDVweCAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uaG91cnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG59XG4uZmlyc3RIb3Vye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxhc3RIb3Vye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1pZGRsZUhvdXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIGhlaWdodDogMTJweDtcbn1cblxuaW9uLWl0ZW0gLnJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuaW9uLWl0ZW0tZGl2aWRlci5tZCwgaW9uLWl0ZW0tZGl2aWRlci53cHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuaW9uLWxpc3QtaGVhZGVyLm1kLCBpb24tbGlzdC1oZWFkZXIud3B7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5jaGV2cm9uSWNvbntcbiAgICBtYXJnaW46IDJweCAwcHggMHB4IDJweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4ubmV3TG9jYXRpb257XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5zZWFyY2hBZGRyZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uc3BsaXRCdXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2xvc2VCdXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGRCdXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubW9udGhJdGVte1xuICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggNTBweCAwcHggMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5kYXlJdGVte1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZGF0ZXNDb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi50cmFzaHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iLCIuZXZlbnROYW1lIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBtYXJnaW46IDMwcHggMjBweCAyMHB4IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiAzMHB4IDIwcHggMjBweCAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb3ZlQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnBsYWNlTmFtZUlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5ld0l0ZW0ge1xuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5uZXdJdGVtSW5zdHJ1Y3Rpb24ge1xuICBtYXJnaW46IDEzcHggMTBweCAwcHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wbGFjZUFkZHJlc3NJbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uZmluZFBsYWNlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDcuNXB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5maW5kQWRyZXNzV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNsb3NlQnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDEwcHg7XG59XG5cbi5hZGRCdXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5wbGFjZUNhcmQge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xufVxuXG4ucGxhY2VUaXRsZSB7XG4gIG1hcmdpbjogMTBweCA3MHB4IDVweCAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBsYWNlQWRkcmVzcyB7XG4gIG1hcmdpbjogNXB4IDcwcHggMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogbGlnaHRza3libHVlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5lZGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDcwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubW9tZW50Q2FyZCB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLm1vbnRoVGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRheUJsb2NrIHtcbiAgbWFyZ2luOiAxMHB4IDBweCA1cHggMHB4O1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG4uY29tYVNwYW4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubW9udGhCbG9jayB7XG4gIG1hcmdpbjogMTBweCAyMHB4IDVweCAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmhvdXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmZpcnN0SG91ciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhc3RIb3VyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWlkZGxlSG91ciB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuaW9uLWl0ZW0gLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIubWQsIGlvbi1pdGVtLWRpdmlkZXIud3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG5pb24tbGlzdC1oZWFkZXIubWQsIGlvbi1saXN0LWhlYWRlci53cCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLmNoZXZyb25JY29uIHtcbiAgbWFyZ2luOiAycHggMHB4IDBweCAycHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLm5ld0xvY2F0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlYXJjaEFkZHJlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcGxpdEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZEJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb250aEl0ZW0ge1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwcHggNTBweCAwcHggMHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5kYXlJdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kYXRlc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cmFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/createevent/createevent.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/createevent/createevent.page.ts ***!
    \*******************************************************/

  /*! exports provided: CreateeventPage */

  /***/
  function srcAppPagesCreateeventCreateeventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateeventPage", function () {
      return CreateeventPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-page-transitions/ngx */
    "./node_modules/@ionic-native/native-page-transitions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _findplace_findplace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../findplace/findplace.page */
    "./src/app/pages/findplace/findplace.page.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
    /* harmony import */


    var _findmoment_findmoment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../findmoment/findmoment.page */
    "./src/app/pages/findmoment/findmoment.page.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CreateeventPage = /*#__PURE__*/function () {
      function CreateeventPage(translate, alertController, modal, router, nativePageTransitions, route) {
        var _this = this;

        _classCallCheck(this, CreateeventPage);

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
          name: "",
          adversary: "",
          places: [],
          moments: []
        };
        this.addingSpec = false;
        this.newSpec = {
          name: "",
          data: ""
        };
        this.specifications = [];
        this.modifyingPlace = false;
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.eventInfo = {
          name: "",
          adversary: "",
          places: [],
          moments: []
        };
        this.specifications = [];
        this.newSpec = {
          name: "",
          data: ""
        };
        this.newPlace = undefined;
        this.addingPlace = false;
        this.placeData = {};
        this.modifyingPlace = false;
        this.teamId = "";
        this.route.queryParams.subscribe(function (queryParams) {
          _this.teamId = queryParams.teamId;
          _this.parameters = Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(queryParams);
        });
      }

      _createClass(CreateeventPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          var options = {
            direction: 'down',
            duration: 200,
            slowdownfactor: -1,
            iosdelay: 100
          };
          this.nativePageTransitions.slide(options);
          this.router.navigateByUrl("/team/events?" + this.parameters);
        }
      }, {
        key: "addPlace",
        value: function addPlace() {
          this.addingPlace = true;
          this.newPlace = {
            name: "",
            address: ""
          };
        }
      }, {
        key: "modifyPlace",
        value: function modifyPlace(index) {
          this.addingPlace = true;
          this.placeData = JSON.parse(JSON.stringify(this.eventInfo.places[index]));
          this.newPlace = this.eventInfo.places[index];
          this.eventInfo.places.splice(index, 1);
          this.modifyingPlace = true;
        }
      }, {
        key: "choosePlace",
        value: function choosePlace() {
          var _this2 = this;

          this.modal.create({
            component: _findplace_findplace_page__WEBPACK_IMPORTED_MODULE_6__["FindplacePage"]
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              if (data.data) {
                _this2.newPlace.address = data.data.title;
              }
            });
          });
        }
      }, {
        key: "insertPlace",
        value: function insertPlace() {
          this.eventInfo.places.push(this.newPlace);
          this.newPlace = undefined;
          this.addingPlace = false;
          this.modifyingPlace = false;
        }
      }, {
        key: "deletePlace",
        value: function deletePlace(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.2.TITLE"),
                      message: this.translate.instant("ALERTS.2.MESSAGE", {
                        name: this.eventInfo.places[index].name
                      }),
                      buttons: [{
                        text: this.translate.instant("ALERTS.2.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant("ALERTS.2.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: function handler() {
                          _this3.eventInfo.places.splice(index, 1);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteMoment",
        value: function deleteMoment(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.3.TITLE"),
                      message: this.translate.instant("ALERTS.3.MESSAGE"),
                      buttons: [{
                        text: this.translate.instant("ALERTS.3.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant("ALERTS.3.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: function handler() {
                          _this4.eventInfo.moments.splice(index, 1);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "closePlace",
        value: function closePlace() {
          this.addingPlace = false;

          if (this.modifyingPlace) {
            this.eventInfo.places.push(this.placeData);
            this.newPlace = undefined;
            this.modifyingPlace = false;
          }
        }
      }, {
        key: "modifyMoment",
        value: function modifyMoment(index) {
          var _this5 = this;

          this.modal.create({
            component: _findmoment_findmoment_page__WEBPACK_IMPORTED_MODULE_8__["FindmomentPage"],
            componentProps: {
              eventSource: this.eventInfo.moments[index].dates,
              currentPickerDateNow: this.eventInfo.moments[index].start,
              currentPickerDateAfter: this.eventInfo.moments[index].end
            }
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              if (data.data) {
                _this5.eventInfo.moments.splice(index, 1);

                data.data.datesString = [];

                for (var i = 0; i < data.data.dates.length; i++) {
                  var date = data.data.dates[i].date;
                  var monthIndex = -1;

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

                _this5.eventInfo.moments.push(data.data);

                for (var i = 0; i < _this5.eventInfo.moments[_this5.eventInfo.moments.length - 1].datesString.length; i++) {
                  var array = _this5.eventInfo.moments[_this5.eventInfo.moments.length - 1].datesString[i][2];
                  array.sort(function (a, b) {
                    return a - b;
                  });
                  _this5.eventInfo.moments[_this5.eventInfo.moments.length - 1].datesString[i][2] = array;
                }
              }
            });
          })["catch"](function () {});
        }
      }, {
        key: "addMoment",
        value: function addMoment() {
          var _this6 = this;

          this.modal.create({
            component: _findmoment_findmoment_page__WEBPACK_IMPORTED_MODULE_8__["FindmomentPage"]
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              if (data.data) {
                data.data.datesString = [];

                for (var i = 0; i < data.data.dates.length; i++) {
                  var date = data.data.dates[i].date;
                  var monthIndex = -1;

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

                _this6.eventInfo.moments.push(data.data);

                for (var i = 0; i < _this6.eventInfo.moments[_this6.eventInfo.moments.length - 1].datesString.length; i++) {
                  var array = _this6.eventInfo.moments[_this6.eventInfo.moments.length - 1].datesString[i][2];
                  array.sort(function (a, b) {
                    return a - b;
                  });
                  _this6.eventInfo.moments[_this6.eventInfo.moments.length - 1].datesString[i][2] = array;
                }
              }
            });
          })["catch"](function () {});
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.eventInfo = {
            name: "",
            adversary: "",
            places: [],
            moments: []
          };
          this.specifications = [];
          this.newSpec = {
            name: "",
            data: ""
          };
          this.newPlace = undefined;
          this.addingPlace = false;
          this.placeData = {};
          this.modifyingPlace = false;
        }
      }, {
        key: "finish",
        value: function finish() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var token, dates, i, j, startMinutes, endMinutes, obj, information, options;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_10__["get"])("token");

                  case 3:
                    token = _context3.sent;
                    dates = [];

                    for (i = 0; i < this.eventInfo.moments.length; i++) {
                      for (j = 0; j < this.eventInfo.moments[i].dates.length; j++) {
                        startMinutes = new Date(this.eventInfo.moments[i].start).getHours() * 60 + new Date(this.eventInfo.moments[i].start).getMinutes();
                        endMinutes = new Date(this.eventInfo.moments[i].end).getHours() * 60 + new Date(this.eventInfo.moments[i].end).getMinutes();
                        dates.push([this.eventInfo.moments[i].dates[j].date.toString(), startMinutes, endMinutes]);
                      }
                    }

                    obj = {
                      token: token,
                      id: this.teamId,
                      dates: JSON.stringify(dates),
                      name: this.eventInfo.name,
                      places: JSON.stringify(this.eventInfo.places),
                      specs: JSON.stringify(this.specifications)
                    };

                    if (this.eventInfo.adversary != "" && this.eventInfo.adversary) {
                      obj.adversary = this.eventInfo.adversary;
                    }

                    _context3.next = 10;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_9__["call"])("http://192.168.2.251:3000/api/createEvent", obj);

                  case 10:
                    information = _context3.sent;
                    information = JSON.parse(information);

                    if (!information.error) {
                      _context3.next = 14;
                      break;
                    }

                    throw information.error;

                  case 14:
                    ;
                    options = {
                      direction: 'down',
                      duration: 200,
                      slowdownfactor: -1,
                      iosdelay: 100
                    };
                    this.nativePageTransitions.slide(options);
                    this.router.navigateByUrl("/team/events?" + this.parameters);
                    _context3.next = 26;
                    break;

                  case 20:
                    _context3.prev = 20;
                    _context3.t0 = _context3["catch"](0);

                    if (!_context3.t0.includes("[993]")) {
                      _context3.next = 26;
                      break;
                    }

                    _context3.next = 25;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_9__["logout"])();

                  case 25:
                    this.router.navigateByUrl("/");

                  case 26:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 20]]);
          }));
        }
      }, {
        key: "addSpec",
        value: function addSpec() {
          this.addingSpec = true;
        }
      }, {
        key: "closeSpec",
        value: function closeSpec() {
          this.addingSpec = false;
          this.newSpec = {
            name: "",
            data: ""
          };
        }
      }, {
        key: "insertSpec",
        value: function insertSpec() {
          this.addingSpec = false;
          this.specifications.push(JSON.parse(JSON.stringify(this.newSpec)));
          this.newSpec = {
            name: "",
            data: ""
          };
        }
      }, {
        key: "deleteSpec",
        value: function deleteSpec(i) {
          this.specifications.splice(i, 1);
        }
      }]);

      return CreateeventPage;
    }();

    CreateeventPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])], CreateeventPage.prototype, "myCalendar", void 0);
    CreateeventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createevent',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./createevent.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createevent/createevent.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./createevent.page.scss */
      "./src/app/pages/createevent/createevent.page.scss"))["default"]]
    })], CreateeventPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-createevent-createevent-module-es5.js.map