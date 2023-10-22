(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newplayer/newplayer.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newplayer/newplayer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon color=\"white\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"NEWPLAYER.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"this.firstname == '' || this.lastname == '' || this.submitDisabled\" (click)=\"finish()\">\n        <ion-icon color=\"white\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    {{\"NEWPLAYER.HEADER\" | translate}}\n  </ion-list-header>\n  <ion-item button (click)=\"selectPicture()\">\n    <ion-label>{{\"NEWPLAYER.0\" | translate}}</ion-label>\n    <img class=\"profileImage\" [src]=\"imageUrlSafe || imageUrl || '../../assets/emptyProfile.png'\" alt=\"\">\n    <span class=\"spanChange\">{{\"NEWPLAYER.1\" | translate}}</span>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWPLAYER.2\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"firstname\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWPLAYER.3\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"lastname\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWPLAYER.4\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"age\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWPLAYER.5\" | translate}}</ion-label>\n    <ion-select [(ngModel)]=\"sex\" value=\"Male\">\n      <ion-select-option value=\"Male\">{{\"NEWPLAYER.6\" | translate}}</ion-select-option>\n      <ion-select-option value=\"Female\">{{\"NEWPLAYER.7\" | translate}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button class=\"joinButton\" expand=\"block\" [disabled]=\"this.firstname == '' || this.lastname == '' || this.submitDisabled\" (click)=\"finish()\">{{\"NEWPLAYER.8\" | translate}}</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/newplayer/newplayer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/newplayer/newplayer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profilePictureWrapper {\n  margin: 0px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.profilePicture {\n  height: 100px;\n  width: 100px;\n  margin: 40px 0px 20px 0px;\n  border-radius: 50%;\n  box-shadow: 0px 0px 0px 4px #56A0F6;\n  background-color: #F2F2F2;\n}\n\n.instructionsPicture {\n  position: absolute;\n  top: 90px;\n  left: 50%;\n  width: 90px;\n  text-align: center;\n  height: auto;\n  line-height: auto;\n  transform: translate(-50%, -50%);\n  margin: 0px;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: \"Roboto\";\n  z-index: 1;\n}\n\n.profilePictureWrapper:active {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n\nh2 {\n  float: left;\n  clear: both;\n  margin: 7.5px 10px 20px 20px;\n  font-family: \"Roboto\";\n  font-weight: 600;\n  font-size: 16px;\n}\n\ninput {\n  float: right;\n  border: none;\n  background-color: #F2F2F2;\n  margin: 0px 20px 20px 0px;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0px 10px 0px 10px;\n  width: 200px;\n  max-width: 40%;\n  min-width: 200px;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: 0px 0px 0px 2px #56A0F6;\n}\n\n.profilePictureWrapper:not([empty=true]) img {\n  -webkit-filter: brightness(0.6);\n          filter: brightness(0.6);\n}\n\n.profilePictureWrapper:not([empty=true]) .instructionsPicture {\n  color: white;\n}\n\n.joinButton {\n  margin: 20px;\n  --background: #25E481;\n}\n\n.infoInput {\n  text-align: right;\n  --text-align: right;\n}\n\n.profileImage {\n  width: 80px;\n  border-radius: 50%;\n  margin: 10px 10px 10px 10px;\n}\n\n.spanChange {\n  color: #0088FF;\n}\n\n.closeButton {\n  --background: var(--ion-color-danger);\n  flex: 1;\n  height: 40px;\n  margin: 0px 10px 0px 0px;\n  padding: 0px;\n  color: white;\n}\n\n.addButton {\n  --background: var(--ion-color-primary);\n  flex: 1;\n  height: 40px;\n  margin: 0px 0px 0px 10px;\n  padding: 0px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL25ld3BsYXllci9uZXdwbGF5ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdwbGF5ZXIvbmV3cGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0dKOztBREFBO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxtQ0FBQTtBQ01KOztBREpBO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtBQ1FKOztBRExBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDUUo7O0FETEE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ1NKOztBRFBBO0VBQ0ksY0FBQTtBQ1VKOztBRFBBO0VBQ0kscUNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNVSjs7QURSQTtFQUNJLHNDQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdwbGF5ZXIvbmV3cGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlUGljdHVyZVdyYXBwZXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvZmlsZVBpY3R1cmV7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiA0MHB4IDBweCAyMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4ICM1NkEwRjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cbi5pbnN0cnVjdGlvbnNQaWN0dXJle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDkwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnByb2ZpbGVQaWN0dXJlV3JhcHBlcjphY3RpdmV7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG5oMntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW46IDcuNXB4IDEwcHggMjBweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuaW5wdXR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbn1cbmlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICM1NkEwRjY7XG59XG4ucHJvZmlsZVBpY3R1cmVXcmFwcGVyOm5vdChbZW1wdHk9XCJ0cnVlXCJdKSBpbWd7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG59XG4ucHJvZmlsZVBpY3R1cmVXcmFwcGVyOm5vdChbZW1wdHk9XCJ0cnVlXCJdKSAuaW5zdHJ1Y3Rpb25zUGljdHVyZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5qb2luQnV0dG9ue1xuICAgIG1hcmdpbjogMjBweDtcbiAgICAtLWJhY2tncm91bmQ6ICMyNUU0ODE7XG59XG5cbi5pbmZvSW5wdXR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLS10ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wcm9maWxlSW1hZ2V7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cbi5zcGFuQ2hhbmdle1xuICAgIGNvbG9yOiAjMDA4OEZGO1xufVxuXG4uY2xvc2VCdXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGRCdXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59IiwiLnByb2ZpbGVQaWN0dXJlV3JhcHBlciB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGVQaWN0dXJlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDQwcHggMHB4IDIwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCAjNTZBMEY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xufVxuXG4uaW5zdHJ1Y3Rpb25zUGljdHVyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2ZpbGVQaWN0dXJlV3JhcHBlcjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbn1cblxuaDIge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogNy41cHggMTBweCAyMHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlucHV0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIG1hcmdpbjogMHB4IDIwcHggMjBweCAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggIzU2QTBGNjtcbn1cblxuLnByb2ZpbGVQaWN0dXJlV3JhcHBlcjpub3QoW2VtcHR5PXRydWVdKSBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbn1cblxuLnByb2ZpbGVQaWN0dXJlV3JhcHBlcjpub3QoW2VtcHR5PXRydWVdKSAuaW5zdHJ1Y3Rpb25zUGljdHVyZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmpvaW5CdXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogIzI1RTQ4MTtcbn1cblxuLmluZm9JbnB1dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtLXRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4uc3BhbkNoYW5nZSB7XG4gIGNvbG9yOiAjMDA4OEZGO1xufVxuXG4uY2xvc2VCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGRCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/newplayer/newplayer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/newplayer/newplayer.page.ts ***!
  \***************************************************/
/*! exports provided: NewplayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewplayerPage", function() { return NewplayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _functions_call__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var _functions_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];


let NewplayerPage = class NewplayerPage {
    constructor(translate, modal, actionSheetController, crop, sanitizer, http, transfer) {
        this.translate = translate;
        this.modal = modal;
        this.actionSheetController = actionSheetController;
        this.crop = crop;
        this.sanitizer = sanitizer;
        this.http = http;
        this.transfer = transfer;
        this.win = window;
        this.firstname = "";
        this.lastname = "";
        this.imageUrlSafe = "";
        this.imageUrl = "";
        this.submitDisabled = false;
        this.age = "";
        this.sex = "Male";
    }
    ngOnInit() {
    }
    back() {
        this.modal.dismiss();
    }
    finish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitDisabled = true;
            setTimeout(() => {
                this.submitDisabled = false;
            }, 4000);
            let token = yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_8__["get"])("token");
            let result = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_7__["upload"])('http://192.168.2.251:3000/api/newPlayer', this.imageUrl, {
                first: this.firstname,
                last: this.lastname,
                token: token,
                extension: "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop(),
                defaultPicture: (this.imageUrl == ''),
                sex: this.sex,
                age: this.age,
            }, this.http, this.transfer);
            if (typeof result === "object") {
                this.modal.dismiss(result);
            }
            else {
                let data = undefined;
                try {
                    data = JSON.parse(result);
                    this.modal.dismiss(data);
                }
                catch (_a) {
                    this.submitDisabled = false;
                }
            }
        });
    }
    selectPicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alertButtons = [{
                    text: this.translate.instant("ALERTS.14.BUTTONS.0"),
                    icon: 'camera',
                    handler: () => {
                        this.takePhoto();
                    }
                }, {
                    text: this.translate.instant("ALERTS.14.BUTTONS.1"),
                    icon: 'image',
                    handler: () => {
                        this.selectPhotoFromLibrary();
                    }
                }, {
                    text: this.translate.instant("ALERTS.14.BUTTONS.2"),
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                    }
                }];
            if (this.imageUrlSafe != "") {
                let removeImage = {
                    text: this.translate.instant("ALERTS.14.BUTTONS.3"),
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        this.imageUrlSafe = "";
                        this.imageUrl = "";
                    }
                };
                alertButtons.splice(2, 0, removeImage);
            }
            const actionSheet = yield this.actionSheetController.create({
                header: this.translate.instant("ALERTS.14.TITLE"),
                cssClass: 'my-custom-class',
                buttons: alertButtons
            });
            yield actionSheet.present();
        });
    }
    selectPhotoFromLibrary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Photos,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Uri,
            });
            this.cropPicture(result);
        });
    }
    takePhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Camera,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Uri,
            });
            this.cropPicture(result);
        });
    }
    cropPicture(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let imagePath = yield new Promise((resolve) => {
                this.crop.crop(result.path).then((imagePath) => { resolve(imagePath); }, (error) => { });
            });
            imagePath = imagePath.split("?")[0];
            this.imageUrlSafe = this.sanitizer.bypassSecurityTrustUrl(_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].convertFileSrc(imagePath));
            this.imageUrl = imagePath;
        });
    }
};
NewplayerPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] }
];
NewplayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newplayer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newplayer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newplayer/newplayer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newplayer.page.scss */ "./src/app/pages/newplayer/newplayer.page.scss")).default]
    })
], NewplayerPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6-es2015.js.map