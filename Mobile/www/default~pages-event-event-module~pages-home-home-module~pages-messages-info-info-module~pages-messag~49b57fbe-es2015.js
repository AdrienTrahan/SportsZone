(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"white\" (click)=\"settings()\">\n        <ion-icon name=\"cog-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      <ion-button class=\"navbar-button\" (click)=\"changeRole($event)\" *ngIf=\"this.userInformation.availableRoles && this.userInformation.availableRoles.length > 1\">\n        <ion-label class=\"\">{{\"HOME.POPOVER.\" + this.role | translate}}</ion-label>\n        <ion-icon name=\"chevron-down-outline\" class=\"dropicon\"></ion-icon>\n      </ion-button>\n      <ion-label *ngIf=\"!this.userInformation.availableRoles || this.userInformation.availableRoles.length <= 1\">{{(\"HOME.TITLE.\" + this.role + \".\" + ((this.role == 0 ? this.state : this.state2).toUpperCase())) | translate}}</ion-label>\n    </ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content [attr.invisible]=\"this.invisible\">\n  \n  \n  <div *ngIf=\"(this.role == 0)\">\n    <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n      <ion-segment-button value=\"Players\">\n        <ion-label>{{ \"HOME.SEGMENTED.0\" | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Teams\">\n        <ion-label>{{ \"HOME.SEGMENTED.1\" | translate}}</ion-label>\n      </ion-segment-button>\n    </ion-segment> \n    <div class=\"wrapper\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state=='Players'\">\n        <ion-card class=\"clickable\" *ngFor=\"let player of players;let i = index\">\n          <ion-item lines=\"none\"(click)=\"selectPlayer(i)\">\n           <app-player [first]=\"player.first\" [last]=\"player.last\" [img]=\"player.image\"></app-player>\n          </ion-item>\n        </ion-card>\n      </div>\n      <div class=\"nothingButton clickable\"  (click)=\"addPlayer()\">\n        <img src=\"../../../assets/plus.png\" alt=\"\">\n      </div>\n      <div class=\"cardContainer\" [@enterRight] *ngIf=\"this.state=='Teams'\">\n        <ion-card class=\"clickable\" *ngFor=\"let team of teams;let i = index\">\n          <ion-item lines=\"none\" (click)=\"selectTeam(i)\">\n           <app-team [name]=\"team.name\" [img]=\"team.image\" [category]=\"team.category\"></app-team>\n          </ion-item>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"(this.role == 1)\">\n    <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state2\">\n      <ion-segment-button value=\"Teams\">\n        <ion-label>{{\"HOME.SEGMENTED.1\" | translate}}</ion-label>\n      </ion-segment-button>\n    </ion-segment> \n    <div class=\"wrapper\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <div class=\"cardContainer\" [@enterLeft]>\n        <ion-card class=\"clickable\" *ngFor=\"let hostedteam of (this.hostedTeams);let i = index\">\n          <ion-item lines=\"none\" (click)=\"selectHostedTeam(i)\">\n           <app-team [name]=\"hostedteam.name\" [img]=\"hostedteam.image\" [category]=\"hostedteam.category\"></app-team>\n          </ion-item>\n        </ion-card>\n      </div>\n      <div class=\"nothingButton clickable\"  (click)=\"addTeam()\">\n        <img src=\"../../../assets/plus.png\" alt=\"\">\n      </div>\n      <div class=\"joinButton clickable\"  (click)=\"joinTeam()\">\n        <img src=\"../../../assets/qr.png\" alt=\"\">\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rolechooser/rolechooser.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rolechooser/rolechooser.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"flexcontainer\">\n    <h1><h2>{{\"SETTINGS.ROLECHOOSER.TITLE\" | translate}}</h2></h1>\n    <ion-icon *ngIf=\"!this.obligated\" (click)=\"close()\" name=\"close-outline\" size=\"large\" class=\"close\"></ion-icon>\n    <ion-button *ngIf=\"this.obligated\" size=\"small\" class=\"logoutButton\" (click)=\"logout()\" slot=\"end\" color=\"danger\"><h2>{{\"SETTINGS.LOGOUT\" | translate}}</h2></ion-button>\n    <div class=\"wrapper\">\n      <div class=\"card\" (click)=\"selectRole(0)\">\n        <img class=\"\" src=\"../../../assets/football-fans-group.svg\" alt=\"\">\n        <h2><h2>{{\"SETTINGS.ROLECHOOSER.0\" | translate}}</h2></h2>\n      </div>\n      <div class=\"card\" (click)=\"selectRole(1)\">\n        <img class=\"\" src=\"../../../assets/football-whistle-of-referee.svg\" alt=\"\">\n        <h2>{{\"SETTINGS.ROLECHOOSER.1\" | translate}}</h2>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardContainer {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: 0;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.nothingButton {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  margin: 20px 20px 20px 20px !important;\n  color: white;\n  font-size: 55px;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  background-color: #25E481;\n  text-align: center;\n  padding: 15px 0px 0px 0px;\n  line-height: 40px;\n  box-shadow: 10px 7px 30px -16px rgba(0, 0, 0, 0.75);\n}\n\n.nothingButton img {\n  width: 30px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.joinButton {\n  position: fixed;\n  bottom: 95px;\n  right: 10px;\n  margin: 20px 20px 20px 20px !important;\n  color: white;\n  font-size: 55px;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  background-color: #0088ff;\n  text-align: center;\n  padding: 12px 0px 0px 0px;\n  line-height: 40px;\n  box-shadow: 10px 7px 30px -16px rgba(0, 0, 0, 0.75);\n}\n\n.joinButton img {\n  width: 30px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  margin-left: -1px;\n}\n\n.dropicon {\n  position: relative;\n  top: 2px;\n  left: 5px;\n  width: 18px;\n}\n\nion-item {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.navbar-button {\n  --background: #161B4A;\n  --background-activated: #161B4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDUUo7O0FETkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDVUo7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRDb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG59XG4ud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5vdGhpbmdCdXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1RTQ4MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG4ubm90aGluZ0J1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmpvaW5CdXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogOTVweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG4uam9pbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5kcm9waWNvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHdpZHRoOiAxOHB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jbGlja2FibGU6YWN0aXZle1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn1cblxuLm5hdmJhci1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYxQjRBO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMxNjFCNEE7XG59IiwiLmNhcmRDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGhpbmdCdXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVFNDgxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5ub3RoaW5nQnV0dG9uIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmpvaW5CdXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogOTVweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMHB4IDBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5qb2luQnV0dG9uIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5kcm9waWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNsaWNrYWJsZTphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG5cbi5uYXZiYXItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTYxQjRBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMTYxQjRBO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _functions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _functions_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var _newplayer_newplayer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../newplayer/newplayer.page */ "./src/app/pages/newplayer/newplayer.page.ts");
/* harmony import */ var src_app_components_rolepopover_rolepopover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/rolepopover/rolepopover.component */ "./src/app/components/rolepopover/rolepopover.component.ts");
/* harmony import */ var _rolechooser_rolechooser_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rolechooser/rolechooser.page */ "./src/app/pages/rolechooser/rolechooser.page.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _newteam_newteam_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../newteam/newteam.page */ "./src/app/pages/newteam/newteam.page.ts");
/* harmony import */ var _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../join-team/join-team.page */ "./src/app/pages/join-team/join-team.page.ts");
var HomePage_1;














let HomePage = HomePage_1 = class HomePage {
    constructor(router, modal, popoverController, nativePageTransitions) {
        this.router = router;
        this.modal = modal;
        this.popoverController = popoverController;
        this.nativePageTransitions = nativePageTransitions;
        this.role = 10;
        this.state = "Players";
        this.loaded = false;
        this.roleName = "";
        this.invisible = false;
        this.state2 = "Teams";
        this.title = { "0": { Players: "Mes joueurs", Teams: "Mes équipes" }, "1": { Teams: "Mes équipes" }, "10": { Players: "", Teams: "" } };
        this.players = HomePage_1.players;
        this.teams = HomePage_1.teams;
        this.hostedTeams = HomePage_1.hostedTeams;
        this.userInformation = HomePage_1.userInformation;
        HomePage_1.updateInfo = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.getUserInformation(true); });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.load();
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            yield this.getUserInformation();
            yield this.getPlayers();
            yield this.getTeams();
            this.loaded = true;
        });
    }
    getUserInformation(staticaly = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.role = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role");
            let token = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let information = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getUserInformation", { token: token });
            try {
                information = JSON.parse(information);
                if (information.error) {
                    throw information.error;
                }
                ;
                HomePage_1.userInformation = information;
                if (!staticaly) {
                    this.userInformation = information;
                    this.verifyInformation();
                    Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.userInfo", this.userInformation);
                }
            }
            catch (error) {
                error = error + "";
                if (error.includes("[993]")) {
                    if (!staticaly) {
                        this.logout();
                    }
                }
            }
        });
    }
    showRoleChooser() {
        this.modal.create({ component: _rolechooser_rolechooser_page__WEBPACK_IMPORTED_MODULE_9__["RolechooserPage"], componentProps: { obligated: true } }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then(() => {
                this.load();
            });
        });
    }
    verifyInformation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let info = HomePage_1.userInformation;
            if (info.availableRoles.length == 0) {
                this.showRoleChooser();
            }
            if ((yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role")) == null || (yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role")) == undefined) {
                yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("role", parseInt(info.availableRoles[0]));
            }
            let role = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role");
            this.role = role;
            if (role == 1) {
                this.getHostedTeams();
            }
        });
    }
    getPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let players = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getPlayers", { token: token });
            try {
                players = JSON.parse(players);
                if (players.error) {
                    throw "";
                }
                ;
                this.players = players;
                Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.players", this.players);
                for (var i = 0; i < this.players.length; i++) {
                    let j = parseInt("" + i);
                    toDataURL(this.players[j].image, (base64) => {
                        Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("image." + this.players[j].id, base64 + "");
                    });
                }
                HomePage_1.players = players;
            }
            catch (_a) { }
        });
    }
    getHostedTeams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let teams = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getHostedTeams", { token: token });
            try {
                teams = JSON.parse(teams);
                if (teams.error) {
                    throw teams.error;
                }
                ;
                this.hostedTeams = teams;
                Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.hostedTeams", this.hostedTeams);
                for (var i = 0; i < this.hostedTeams.length; i++) {
                    let j = parseInt("" + i);
                    toDataURL(this.hostedTeams[j].image, (base64) => {
                        Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("image." + this.hostedTeams[j].id, base64 + "");
                    });
                }
                HomePage_1.hostedTeams = teams;
            }
            catch (err) {
            }
        });
    }
    getTeams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let teams = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getGlobalTeams", { token: token });
            try {
                teams = JSON.parse(teams);
                if (teams.error) {
                    throw teams.error;
                }
                ;
                this.teams = teams;
                Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.teams", this.teams);
                for (var i = 0; i < this.teams.length; i++) {
                    let j = parseInt("" + i);
                    toDataURL(this.teams[j].image, (base64) => {
                        Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("image." + this.teams[j].id, base64 + "");
                    });
                }
                HomePage_1.teams = teams;
            }
            catch (err) {
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.userInfo")) {
                HomePage_1.userInformation = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.userInfo");
                this.userInformation = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.userInfo");
            }
            if (yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.players")) {
                HomePage_1.players = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.players");
                this.players = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.players");
                for (var i = 0; i < this.players.length; i++) {
                    this.players[i].image = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("image." + this.players[i].id);
                }
            }
            if (yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.teams")) {
                HomePage_1.teams = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.teams");
                this.teams = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.teams");
                for (var i = 0; i < this.teams.length; i++) {
                    this.teams[i].image = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("image." + this.teams[i].id);
                }
            }
            if (yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.hostedTeams")) {
                HomePage_1.hostedTeams = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.hostedTeams");
                this.hostedTeams = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.hostedTeams");
                for (var i = 0; i < this.hostedTeams.length; i++) {
                    this.hostedTeams[i].image = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("image." + this.hostedTeams[i].id);
                }
            }
        });
    }
    selectPlayer(index) {
        this.router.navigateByUrl(`/player?playerId=${this.players[index].id}`);
    }
    selectTeam(index) {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].teams.includes(this.teams[index].id)) {
                this.router.navigateByUrl(`/team/events?teamId=${this.teams[index].id}&playerId=${this.players[i].id}`);
                return;
            }
        }
    }
    selectHostedTeam(index) {
        this.router.navigateByUrl(`/team/events?teamId=${this.hostedTeams[index].id}`);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["logout"])();
            this.players = [];
            HomePage_1.players = [];
            HomePage_1.userInformation = {};
            this.userInformation = {};
            this.router.navigateByUrl("/");
        });
    }
    addPlayer() {
        this.modal.create({ component: _newplayer_newplayer_page__WEBPACK_IMPORTED_MODULE_7__["NewplayerPage"] }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                if ((data.data != undefined || data.data != null) && data.data.first) {
                    this.players.push(data.data);
                }
            });
        });
    }
    changeRole(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_rolepopover_rolepopover_component__WEBPACK_IMPORTED_MODULE_8__["RolepopoverComponent"],
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
                componentProps: { roles: HomePage_1.userInformation.availableRoles }
            });
            return yield popover.present().then((pop) => {
                popover.onDidDismiss().then(() => {
                    this.load();
                });
            });
        });
    }
    settings() {
        let options = {
            direction: 'up',
            duration: 200,
            slowdownfactor: -1,
            iosdelay: 100
        };
        this.nativePageTransitions.slide(options);
        this.router.navigateByUrl("/settings");
    }
    addTeam() {
        this.modal.create({ component: _newteam_newteam_page__WEBPACK_IMPORTED_MODULE_11__["NewteamPage"] }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.load();
            });
        });
    }
    ionViewWillLeave() {
        this.loaded = false;
    }
    refresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            if (this.role == 0) {
                if (this.state == 'Players') {
                    yield this.getPlayers();
                    event.target.complete();
                }
                else if (this.state == "Teams") {
                    yield this.getTeams();
                    event.target.complete();
                }
            }
            else if (this.role == 1) {
                yield this.getHostedTeams();
                event.target.complete();
            }
            this.loaded = true;
        });
    }
    joinTeam() {
        this.modal.create({ component: _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_12__["JoinTeamPage"] }).then((modal) => {
            modal.present();
            this.invisible = true;
            modal.onDidDismiss().then((data) => {
                this.invisible = false;
                if (data.data) {
                    this.teams.push(data.data);
                }
            });
        });
    }
};
HomePage.players = [];
HomePage.teams = [];
HomePage.hostedTeams = [];
HomePage.currentEventInfo = {};
HomePage.userInformation = {};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__["NativePageTransitions"] }
];
HomePage = HomePage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterLeft', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(-100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0px)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(-100%)" }))
                ])
            ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterRight', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0px)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(100%)" }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);

function toDataURL(url, callback) {
    let image;
    image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', function () {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        try {
            callback(canvas.toDataURL('image/png'));
        }
        catch (err) {
            console.error(err);
        }
    });
    image.src = url;
}


/***/ }),

/***/ "./src/app/pages/rolechooser/rolechooser.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/rolechooser/rolechooser.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*, :root, html * {\n  font-family: \"Roboto\" !important;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.flexcontainer {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n\nh1 {\n  height: auto;\n  font-size: 30px;\n  padding: 40px 20px 0px 20px;\n}\n\n.close {\n  position: absolute;\n  top: 60px;\n  right: 10px;\n}\n\n.wrapper {\n  flex-grow: 1;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px;\n}\n\n.card {\n  padding: 20px 0px 20px 0px;\n  margin: 20px 20px 0px 20px;\n  background-color: #f6f6f6;\n  border-radius: 5px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.card:active {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n\n.card img {\n  margin: 0px;\n  width: 80px;\n  -webkit-filter: invert(31%) sepia(81%) saturate(3489%) hue-rotate(204deg) brightness(98%) contrast(107%);\n          filter: invert(31%) sepia(81%) saturate(3489%) hue-rotate(204deg) brightness(98%) contrast(107%);\n}\n\n.card h2 {\n  margin: 0px;\n  color: #036ffc;\n}\n\n.logoutButton {\n  width: 100px;\n  position: absolute;\n  top: 60px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3JvbGVjaG9vc2VyL3JvbGVjaG9vc2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcm9sZWNob29zZXIvcm9sZWNob29zZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDS0o7O0FEREE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FESEk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FDS1I7O0FERkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdHQUFBO1VBQUEsZ0dBQUE7QUNJUjs7QURGSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSVI7O0FEREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcm9sZWNob29zZXIvcm9sZWNob29zZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgOnJvb3QsIGh0bWwgKntcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4XG59XG4uZmxleGNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5oMXtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAwcHggMjBweDtcbn1cbi5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuLndyYXBwZXJ7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cblxuLmNhcmR7XG4gICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmOmFjdGl2ZXtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoODElKSBzYXR1cmF0ZSgzNDg5JSkgaHVlLXJvdGF0ZSgyMDRkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDclKTtcbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogIzAzNmZmYztcbiAgICB9XG59XG4ubG9nb3V0QnV0dG9ue1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuXG59IiwiKiwgOnJvb3QsIGh0bWwgKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZsZXhjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDQwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW46IDIwcHggMjBweCAwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuLmNhcmQgaW1nIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDgxJSkgc2F0dXJhdGUoMzQ4OSUpIGh1ZS1yb3RhdGUoMjA0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTA3JSk7XG59XG4uY2FyZCBoMiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzAzNmZmYztcbn1cblxuLmxvZ291dEJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/rolechooser/rolechooser.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/rolechooser/rolechooser.page.ts ***!
  \*******************************************************/
/*! exports provided: RolechooserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolechooserPage", function() { return RolechooserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var _functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let RolechooserPage = class RolechooserPage {
    constructor(router, modal) {
        this.router = router;
        this.modal = modal;
    }
    ngOnInit() {
    }
    selectRole(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let result = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/chooseRole", { token: token, role: index });
            try {
                if (typeof result != "object") {
                    result = JSON.parse(result);
                }
                if (result.error) {
                    throw result.error;
                }
                ;
                if (typeof parseInt(result.data) == "number") {
                    yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_3__["set"])("role", parseInt(result.data));
                    this.modal.dismiss();
                }
            }
            catch (error) {
                if (error.includes("[993]")) {
                    this.logout();
                }
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_2__["logout"])();
            this.router.navigateByUrl("/");
        });
    }
    close() {
        this.modal.dismiss();
    }
};
RolechooserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
RolechooserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rolechooser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rolechooser.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rolechooser/rolechooser.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rolechooser.page.scss */ "./src/app/pages/rolechooser/rolechooser.page.scss")).default]
    })
], RolechooserPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe-es2015.js.map