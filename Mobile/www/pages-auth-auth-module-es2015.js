(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entry/entry.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entry/entry.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input placeholder={{this.placeholder}} type={{this.type}} (input)=\"emitChange($event.target.value)\" value={{this.value}}>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"'login'==type\">\n  <app-entry (dataChanged)=\"updateEmail($event)\" placeholder=\"email\" type=\"text\" [value]=\"this.email\"></app-entry>\n  <app-entry (dataChanged)=\"updatePassword($event)\" placeholder=\"password\" type=\"password\" [value]=\"this.password\"></app-entry>\n  <p class=\"error\" *ngIf=\"this.errorMessage != ''\">{{this.errorMessage}}</p>\n  <app-proceed (buttonClicked)=\"loginFunction()\" color=\"#55E990\" content=\"se connecter\"></app-proceed>\n</div>\n<div *ngIf=\"'signup'==type\">\n  <app-half-entry (dataChanged)=\"updateFirst($event)\" side=\"left\" placeholder=\"first\" type=\"text\" [value]=\"this.first\"></app-half-entry>\n  <app-half-entry (dataChanged)=\"updateLast($event)\" side=\"right\" placeholder=\"last\" type=\"text\" [value]=\"this.last\"></app-half-entry>\n  <app-entry (dataChanged)=\"updateEmail($event)\" placeholder=\"email\" type=\"text\" [value]=\"this.email\"></app-entry>\n  <app-entry (dataChanged)=\"updatePassword($event)\" placeholder=\"password\" type=\"password\" [value]=\"this.password\"></app-entry>\n  <app-entry (dataChanged)=\"updateConfirm($event)\" placeholder=\"confirm password\" type=\"password\" [value]=\"this.confirm\"></app-entry>\n  <p class=\"error\" *ngIf=\"this.errorMessage != ''\">{{this.errorMessage}}</p>\n  <app-proceed (buttonClicked)=\"registerFunction()\" color=\"#55E990\" content=\"créer mon compte\"></app-proceed>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/half-entry/half-entry.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/half-entry/half-entry.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input placeholder={{this.placeholder}} type={{this.type}} [attr.side]=\"this.side\" (input)=\"emitChange($event.target.value)\" value={{this.value}}>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/or-separator/or-separator.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/or-separator/or-separator.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h1>or</h1>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/proceed/proceed.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/proceed/proceed.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"clickFunction()\" [style.background-color]=\"this.color\">\n  {{content}}\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"background\"></div>\n  <div class=\"content\">\n    <div class=\"center-wrapper\">\n      <h1 class=\"brand\"><span class=\"prefix-brand\">Sports</span><span class=\"subfix-brand\">Zone</span></h1>\n      <h2 class=\"desc\">{{\"AUTH.QUOTE\" | translate}}</h2>\n      <div *ngIf=\"this.mode\" class=\"half-input-container\">\n        <input [(ngModel)]=\"this.first\" placeholder=\"{{'AUTH.FIRST' | translate}}\" type=\"text\" class=\"half-input\" id=\"first-name\">\n        <input [(ngModel)]=\"this.last\" placeholder=\"{{'AUTH.LAST' | translate}}\" type=\"text\" class=\"half-input\" id=\"last-name\">\n      </div>\n      <div class=\"input-container\">\n        <input [(ngModel)]=\"this.email\" placeholder=\"{{'AUTH.EMAIL' | translate}}\" type=\"text\" class=\"input\" id=\"email\">\n        <img src=\"../../../assets/email.png\" class=\"icon-indicator\" alt=\"\">\n      </div>\n      <div class=\"input-container\">\n        <input [(ngModel)]=\"this.password\" placeholder=\"{{'AUTH.PASSWORD' | translate}}\" type=\"password\" class=\"input\" id=\"password\">\n        <img src=\"../../../assets/password.png\" class=\"icon-indicator\" alt=\"\">\n      </div>\n      <div *ngIf=\"this.mode\" class=\"input-container\">\n        <input [(ngModel)]=\"this.confirm\" placeholder=\"{{'AUTH.CONFIRM' | translate}}\" type=\"password\" class=\"input\" id=\"password\">\n        <img src=\"../../../assets/password.png\" class=\"icon-indicator\" alt=\"\">\n      </div>\n      <div *ngIf=\"this.mode\" class=\"segmented-wrapper\">\n        <div (click)=\"selectRole(0)\" [class]=\"'segmented-choice ' + (this.selectedRoles[0])\">{{(\"AUTH.BUTTONS.2\") | translate}}</div>\n        <div (click)=\"selectRole(1)\" [class]=\"'segmented-choice ' + (this.selectedRoles[1])\">{{(\"AUTH.BUTTONS.3\") | translate}}</div>\n      </div>\n      <h5 *ngIf=\"!this.mode\" class=\"reset-password\" [routerLink]=\"['/passwordreset']\" [queryParams]=\"{email: this.email}\">{{\"AUTH.FORGOT\" | translate}}</h5>\n      <div class=\"error\" *ngIf=\"this.errorMessage && this.errorMessage != ''\">{{this.errorMessage}}</div>\n      <button (click)=\"submit()\" class=\"submit-button clickable\">{{(\"AUTH.BUTTONS.\" + buttonText[0]) | translate}}</button>\n      <button (click)=\"switch()\" class=\"switch-button clickable\">{{(\"AUTH.BUTTONS.\" + buttonText[1]) | translate}}</button>\n    </div>\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/entry/entry.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/entry/entry.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  width: calc(100% - 90px);\n  margin: 10px 45px 0px 45px;\n  height: 52px;\n  border: none;\n  background-color: #EDEDED;\n  border-radius: 4px;\n  outline: none;\n  padding: 0px 10px 0px 10px;\n}\ninput:focus {\n  box-shadow: 0px 0px 0px 3px #56A0F6;\n}\ninput::-moz-placeholder {\n  text-align: center;\n}\ninput::-ms-input-placeholder {\n  text-align: center;\n}\ninput::placeholder {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvZW50cnkvZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZW50cnkvZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDQ0o7QURDSTtFQUNJLG1DQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURGSTtFQUNJLGtCQUFBO0FDQ1I7QURGSTtFQUNJLGtCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VudHJ5L2VudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICAgIG1hcmdpbjogMTBweCA0NXB4IDBweCA0NXB4O1xuICAgIGhlaWdodDogNTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcblxuICAgICY6Zm9jdXN7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjNTZBMEY2O1xuICAgIH1cbiAgICAmOjpwbGFjZWhvbGRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiIsImlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICBtYXJnaW46IDEwcHggNDVweCAwcHggNDVweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5pbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjNTZBMEY2O1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/entry/entry.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/entry/entry.component.ts ***!
  \*****************************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EntryComponent = class EntryComponent {
    constructor() {
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    emitChange(value) {
        this.dataChanged.emit({ value: value });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('placeholder')
], EntryComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type')
], EntryComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value')
], EntryComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EntryComponent.prototype, "dataChanged", void 0);
EntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entry/entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entry.component.scss */ "./src/app/components/entry/entry.component.scss")).default]
    })
], EntryComponent);



/***/ }),

/***/ "./src/app/components/form/form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  width: calc(100% - 90px);\n  margin: 10px 45px 0px 45px;\n  height: auto;\n  border: solid 2px #FF6939;\n  background-color: #FFEEEE;\n  border-radius: 4px;\n  outline: none;\n  padding: 10px 10px 10px 10px;\n  line-height: auto;\n  color: #FF6939;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcntcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgbWFyZ2luOiAxMHB4IDQ1cHggMHB4IDQ1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNGRjY5Mzk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUVFRTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgIGNvbG9yOiAjRkY2OTM5O1xufSIsIi5lcnJvciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgbWFyZ2luOiAxMHB4IDQ1cHggMHB4IDQ1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiBzb2xpZCAycHggI0ZGNjkzOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUVFRTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgY29sb3I6ICNGRjY5Mzk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FormComponent = class FormComponent {
    constructor() {
        this.errorMessage = "";
        this.loginClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.registerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.email = "";
        this.password = "";
        this.confirm = "";
        this.first = "";
        this.last = "";
    }
    ngOnInit() { }
    createSubmitted() {
    }
    updateEmail($event) {
        this.email = $event.value;
    }
    updatePassword($event) {
        this.password = $event.value;
    }
    updateConfirm($event) {
        this.confirm = $event.value;
    }
    updateFirst($event) {
        this.first = $event.value;
    }
    updateLast($event) {
        this.last = $event.value;
    }
    loginFunction() {
        this.loginClicked.emit({ email: this.email, password: this.password });
    }
    registerFunction() {
        this.registerClicked.emit({ email: this.email, password: this.password, first: this.first, last: this.last, confirm: this.confirm });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("type")
], FormComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("errorMessage")
], FormComponent.prototype, "errorMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormComponent.prototype, "loginClicked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormComponent.prototype, "registerClicked", void 0);
FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form.component.scss */ "./src/app/components/form/form.component.scss")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/components/half-entry/half-entry.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/half-entry/half-entry.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  width: calc(50% - 50px);\n  margin: 10px 45px 0px 45px;\n  height: 52px;\n  border: none;\n  background-color: #EDEDED;\n  border-radius: 4px;\n  outline: none;\n  padding: 0px 10px 0px 10px;\n}\ninput:focus {\n  box-shadow: 0px 0px 0px 3px #56A0F6;\n}\ninput::-moz-placeholder {\n  text-align: center;\n}\ninput::-ms-input-placeholder {\n  text-align: center;\n}\ninput::placeholder {\n  text-align: center;\n}\ninput[side=left] {\n  margin: 10px 5px 0px 45px;\n}\ninput[side=right] {\n  margin: 10px 45px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvaGFsZi1lbnRyeS9oYWxmLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hhbGYtZW50cnkvaGFsZi1lbnRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNDSjtBRENJO0VBQ0ksbUNBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBREZJO0VBQ0ksa0JBQUE7QUNDUjtBREZJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFsZi1lbnRyeS9oYWxmLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgbWFyZ2luOiAxMHB4IDQ1cHggMHB4IDQ1cHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuXG4gICAgJjpmb2N1c3tcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICM1NkEwRjY7XG4gICAgfVxuICAgICY6OnBsYWNlaG9sZGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICZbc2lkZT1cImxlZnRcIl17XG4gICAgICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDQ1cHg7XG4gICAgfVxuICAgICZbc2lkZT1cInJpZ2h0XCJde1xuICAgICAgICBtYXJnaW46IDEwcHggNDVweCAwcHggNXB4O1xuICAgIH1cbn1cbiIsImlucHV0IHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gIG1hcmdpbjogMTBweCA0NXB4IDBweCA0NXB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cbmlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICM1NkEwRjY7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbnB1dFtzaWRlPWxlZnRdIHtcbiAgbWFyZ2luOiAxMHB4IDVweCAwcHggNDVweDtcbn1cbmlucHV0W3NpZGU9cmlnaHRdIHtcbiAgbWFyZ2luOiAxMHB4IDQ1cHggMHB4IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/half-entry/half-entry.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/half-entry/half-entry.component.ts ***!
  \***************************************************************/
/*! exports provided: HalfEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HalfEntryComponent", function() { return HalfEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HalfEntryComponent = class HalfEntryComponent {
    constructor() {
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    emitChange(value) {
        this.dataChanged.emit({ value: value });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('placeholder')
], HalfEntryComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type')
], HalfEntryComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('side')
], HalfEntryComponent.prototype, "side", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value')
], HalfEntryComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HalfEntryComponent.prototype, "dataChanged", void 0);
HalfEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-half-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./half-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/half-entry/half-entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./half-entry.component.scss */ "./src/app/components/half-entry/half-entry.component.scss")).default]
    })
], HalfEntryComponent);



/***/ }),

/***/ "./src/app/components/or-separator/or-separator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/or-separator/or-separator.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\nh1 {\n  font-size: 12px;\n  width: calc(100% - 100px);\n  position: relative;\n  text-align: center;\n  color: #5b5b5b;\n}\n\nh1::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: #e0e0e0;\n  height: 2px;\n  width: calc(50% - 50px);\n  left: 25px;\n}\n\nh1::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 25px;\n  transform: translateY(-50%);\n  background-color: #e0e0e0;\n  height: 2px;\n  width: calc(50% - 50px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvb3Itc2VwYXJhdG9yL29yLXNlcGFyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vci1zZXBhcmF0b3Ivb3Itc2VwYXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBRUksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ0NSOztBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yLXNlcGFyYXRvci9vci1zZXBhcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmgxe1xuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzViNWI1YjtcblxuICAgICY6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgfVxuICAgICY6OmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgfVxufSIsImRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzViNWI1Yjtcbn1cbmgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgbGVmdDogMjVweDtcbn1cbmgxOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/or-separator/or-separator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/or-separator/or-separator.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrSeparatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrSeparatorComponent", function() { return OrSeparatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrSeparatorComponent = class OrSeparatorComponent {
    constructor() { }
    ngOnInit() { }
};
OrSeparatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-or-separator',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./or-separator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/or-separator/or-separator.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./or-separator.component.scss */ "./src/app/components/or-separator/or-separator.component.scss")).default]
    })
], OrSeparatorComponent);



/***/ }),

/***/ "./src/app/components/proceed/proceed.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/proceed/proceed.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: calc(100% - 90px);\n  margin: 10px 45px 0px 45px;\n  height: 52px;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  padding: 0px 10px 0px 10px;\n  color: white;\n  font-family: \"Roboto\";\n  font-weight: 600;\n  font-size: 16px;\n  box-shadow: 2px 2px 5px 1px rgba(222, 222, 222, 0.52);\n  text-align: center;\n}\nbutton:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2VlZC9wcm9jZWVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2NlZWQvcHJvY2VlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2NlZWQvcHJvY2VlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgbWFyZ2luOiAxMHB4IDQ1cHggMHB4IDQ1cHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDIyMiwyMjIsMjIyLDAuNTIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAmOmFjdGl2ZXtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICAgIH1cbn0iLCJidXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gIG1hcmdpbjogMTBweCA0NXB4IDBweCA0NXB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjUyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/proceed/proceed.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/proceed/proceed.component.ts ***!
  \*********************************************************/
/*! exports provided: ProceedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedComponent", function() { return ProceedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProceedComponent = class ProceedComponent {
    constructor() {
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clickFunction() {
        this.buttonClicked.emit();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content')
], ProceedComponent.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color')
], ProceedComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProceedComponent.prototype, "buttonClicked", void 0);
ProceedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proceed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./proceed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/proceed/proceed.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./proceed.component.scss */ "./src/app/components/proceed/proceed.component.scss")).default]
    })
], ProceedComponent);



/***/ }),

/***/ "./src/app/functions/call.ts":
/*!***********************************!*\
  !*** ./src/app/functions/call.ts ***!
  \***********************************/
/*! exports provided: call, post, upload, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializer */ "./src/app/functions/serializer.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/app/functions/storage.ts");



function call(url, object) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let response = yield new Promise((resolve) => {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    resolve(request.responseText);
                }
                else {
                    setTimeout(() => {
                        resolve("error");
                    }, 1000);
                }
            };
            let complete = url;
            if (object != {}) {
                complete += "?" + Object(_serializer__WEBPACK_IMPORTED_MODULE_1__["serialize"])(object);
            }
            request.open("GET", complete);
            if (object.token) {
                console.log(object.token);
                request.setRequestHeader("Auth", object.token);
                delete object.token;
            }
            request.send();
        });
        return response;
    });
}
function post(url, object) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let response = yield new Promise((resolve) => {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    resolve(request.responseText);
                }
            };
            request.open("POST", url + "?" + Object(_serializer__WEBPACK_IMPORTED_MODULE_1__["serialize"])(object));
            if (object.token) {
                request.setRequestHeader("auth", object.token);
                delete object.token;
            }
            request.send(null);
        });
        return response;
    });
}
function upload(url, imagePath, object, http, transfer) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let response = yield new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (imagePath == "") {
                let result = yield post(url, object);
                resolve(result);
            }
            else {
                const fileTransfer = transfer.create();
                const uploadOpts = {
                    fileKey: 'image',
                    httpMethod: 'POST',
                    fileName: new Date().getTime() + Math.random() + Math.random() + ".jpg",
                    chunkedMode: false,
                };
                if (object.token) {
                    uploadOpts.headers = { auth: object.token };
                    delete object.token;
                }
                fileTransfer.upload(imagePath, url + "?" + Object(_serializer__WEBPACK_IMPORTED_MODULE_1__["serialize"])(object), uploadOpts).then((data) => {
                    if (data.response) {
                        resolve(data.response);
                    }
                }, (err) => {
                    resolve(err);
                });
            }
        }));
        return response;
    });
}
function logout() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let token = yield Object(_storage__WEBPACK_IMPORTED_MODULE_2__["get"])("token");
        yield call("http://192.168.2.251:3000/api/logout", { token: token });
        yield Object(_storage__WEBPACK_IMPORTED_MODULE_2__["remove"])("token");
        yield Object(_storage__WEBPACK_IMPORTED_MODULE_2__["remove"])("role");
    });
}


/***/ }),

/***/ "./src/app/functions/serializer.ts":
/*!*****************************************!*\
  !*** ./src/app/functions/serializer.ts ***!
  \*****************************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
function serialize(obj) {
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
}


/***/ }),

/***/ "./src/app/pages/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "./src/app/pages/auth/auth.page.ts");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"],
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.page */ "./src/app/pages/auth/auth.page.ts");
/* harmony import */ var _components_entry_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/entry/entry.component */ "./src/app/components/entry/entry.component.ts");
/* harmony import */ var _components_proceed_proceed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/proceed/proceed.component */ "./src/app/components/proceed/proceed.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_half_entry_half_entry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/half-entry/half-entry.component */ "./src/app/components/half-entry/half-entry.component.ts");
/* harmony import */ var _components_or_separator_or_separator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/or-separator/or-separator.component */ "./src/app/components/or-separator/or-separator.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/auth/auth-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_11__["AuthPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]
        ],
        declarations: [
            _auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"],
            _components_entry_entry_component__WEBPACK_IMPORTED_MODULE_6__["EntryComponent"],
            _components_proceed_proceed_component__WEBPACK_IMPORTED_MODULE_7__["ProceedComponent"],
            _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
            _components_half_entry_half_entry_component__WEBPACK_IMPORTED_MODULE_9__["HalfEntryComponent"],
            _components_or_separator_or_separator_component__WEBPACK_IMPORTED_MODULE_10__["OrSeparatorComponent"]
        ]
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/pages/auth/auth.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, rgba(22, 27, 74, 0.85) 0%, #0088FF 100%), url('background.jpg');\n  background-size: auto 100%;\n  background-position: center;\n  z-index: 1;\n}\n\n.content {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.brand {\n  top: 50%;\n  font-family: \"Cornerstone\";\n  margin: 0px 0px 20px 5px 20px;\n  text-align: center;\n  font-size: 39px;\n}\n\n.prefix-brand {\n  color: white;\n}\n\n.subfix-brand {\n  color: #25E481;\n}\n\n.desc {\n  font-family: \"Poppins\";\n  font-size: 17px;\n  color: #E5E5E5;\n  width: 400px;\n  text-align: center;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: calc(100% - 100px);\n  margin: 0px 0px 40px 0px;\n}\n\n.input {\n  background: #F0F0F01A;\n  border: none;\n  border: 1px solid #ACACAC3B;\n  outline: none;\n  border-radius: 4px;\n  height: 55px;\n  width: 100%;\n  padding: 0px 5px 0px 40px;\n  color: white;\n  font-family: \"Poppins\";\n}\n\n.half-input {\n  background: #F0F0F01A;\n  border: none;\n  border: 1px solid #ACACAC3B;\n  outline: none;\n  border-radius: 4px;\n  height: 55px;\n  width: calc(50% - 5px);\n  padding: 0px 5px 0px 5px;\n  color: white;\n  font-family: \"Poppins\";\n}\n\n.input::-moz-placeholder, .half-input::-moz-placeholder {\n  color: #ffffff44;\n}\n\n.input::-ms-input-placeholder, .half-input::-ms-input-placeholder {\n  color: #ffffff44;\n}\n\n.input::placeholder, .half-input::placeholder {\n  color: #ffffff44;\n}\n\n.input-container {\n  margin: 20px 0px 0px 0px;\n  width: calc(100% - 150px);\n  max-width: 300px;\n  height: auto;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.half-input-container {\n  margin: 20px 0px 0px 0px;\n  width: calc(100% - 150px);\n  max-width: 300px;\n  height: auto;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.icon-indicator {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  width: 24px;\n  opacity: 0.23;\n}\n\n.center-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.submit-button {\n  color: white;\n  background-color: #161B4A;\n  border-radius: 9px;\n  font-family: \"Poppins\";\n  font-weight: 500;\n  width: calc(100% - 150px);\n  max-width: 300px;\n  height: 40px;\n  margin: 30px 0px 0px 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: relative;\n  outline: none;\n}\n\n.switch-button {\n  color: #161B4A;\n  background-color: transparent;\n  border-radius: 9px;\n  font-family: \"Poppins\";\n  font-weight: 500;\n  width: calc(100% - 150px);\n  max-width: 300px;\n  height: 40px;\n  margin: 10px 0px 0px 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: relative;\n  outline: none;\n}\n\n.clickable:hover {\n  opacity: 0.9;\n}\n\n.clickable:active {\n  opacity: 0.8;\n}\n\n#first-name {\n  margin-right: 10px;\n}\n\n.segmented-wrapper {\n  position: relative;\n  width: 200px;\n  max-width: calc(100% - 50px);\n  left: 50%;\n  transform: translateX(-50%);\n  height: 40px;\n  background: #F0F0F01A;\n  border: none;\n  border: 1px solid #ACACAC3B;\n  outline: none;\n  border-radius: 9px;\n  margin: 20px 0px 0px 0px;\n  display: flex;\n  flex-direction: row;\n}\n\n.segmented-choice {\n  flex: 1;\n  text-align: center;\n  padding: 3px 0px 0px 0px;\n  font-family: \"Poppins\";\n  font-size: 15px;\n  margin: 3px 3px 3px 3px;\n}\n\n.selected-segment {\n  background-color: #161B4A;\n  color: white;\n  border-radius: 7px;\n}\n\n.error {\n  margin: 10px 0px 0px 0px;\n  width: calc(100% - 150px);\n  max-width: 300px;\n  background: rgba(255, 0, 0, 0.61);\n  border: 3px solid rgba(244, 11, 11, 0.23);\n  position: relative;\n  border-radius: 9px;\n  left: 50%;\n  color: white;\n  font-family: \"Poppins\";\n  padding: 5px 10px 5px 10px;\n  transform: translateX(-50%);\n}\n\n.reset-password {\n  font-family: Poppins;\n  color: white;\n  font-size: 12px;\n  text-align: center;\n  margin: 20px 0px 0px 0px;\n  outline: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1HQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLFFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0FDT0Y7O0FEUkE7RUFDRSxnQkFBQTtBQ09GOztBRFJBO0VBQ0UsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ1FGOztBRE5BO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDV0Y7O0FEVEE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDWUY7O0FEVkE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDYUY7O0FEVkE7RUFDRSxZQUFBO0FDYUY7O0FEWEE7RUFDRSxZQUFBO0FDY0Y7O0FEWkE7RUFDRSxrQkFBQTtBQ2VGOztBRGJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURiQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNnQkY7O0FEZEE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2lCRjs7QURkQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNpQkY7O0FEZkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNrQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMiwgMjcsIDc0LCAwLjg1KSAwJSwgIzAwODhGRiAxMDAlKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuLmJyYW5ke1xuICB0b3A6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybmVyc3RvbmVcIjtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggNXB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOXB4O1xufVxuXG4ucHJlZml4LWJyYW5ke1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3ViZml4LWJyYW5ke1xuICBjb2xvcjogIzI1RTQ4MTtcbn1cbi5kZXNje1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWFyZ2luOiAwcHggMHB4IDQwcHggMHB4O1xufVxuLmlucHV0e1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwMUE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQUNBQzNCO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1cHggMHB4IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLmhhbGYtaW5wdXR7XG4gIGJhY2tncm91bmQ6ICNGMEYwRjAxQTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNBQ0FDM0I7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLmlucHV0OjpwbGFjZWhvbGRlciwgLmhhbGYtaW5wdXQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogI2ZmZmZmZjQ0O1xufVxuLmlucHV0LWNvbnRhaW5lcntcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uaGFsZi1pbnB1dC1jb250YWluZXJ7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmljb24taW5kaWNhdG9ye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNHB4O1xuICBvcGFjaXR5OiAwLjIzO1xufVxuLmNlbnRlci13cmFwcGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc3VibWl0LWJ1dHRvbntcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxQjRBO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDMwcHggMHB4IDBweCAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3dpdGNoLWJ1dHRvbntcbiAgY29sb3I6ICMxNjFCNEE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jbGlja2FibGU6aG92ZXJ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5jbGlja2FibGU6YWN0aXZle1xuICBvcGFjaXR5OiAwLjg7XG59XG4jZmlyc3QtbmFtZXtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlZ21lbnRlZC13cmFwcGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI0YwRjBGMDFBO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0FDQUMzQjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zZWdtZW50ZWQtY2hvaWNle1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAwcHggMHB4IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogM3B4IDNweCAzcHggM3B4O1xufVxuLnNlbGVjdGVkLXNlZ21lbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjFCNEE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uZXJyb3J7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNjEpO1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI0NCwgMTEsIDExLCAwLjIzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGxlZnQ6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ucmVzZXQtcGFzc3dvcmR7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gIG91dGxpbmU6IDBweFxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIyLCAyNywgNzQsIDAuODUpIDAlLCAjMDA4OEZGIDEwMCUpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYnJhbmQge1xuICB0b3A6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybmVyc3RvbmVcIjtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggNXB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOXB4O1xufVxuXG4ucHJlZml4LWJyYW5kIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3ViZml4LWJyYW5kIHtcbiAgY29sb3I6ICMyNUU0ODE7XG59XG5cbi5kZXNjIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB3aWR0aDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIG1hcmdpbjogMHB4IDBweCA0MHB4IDBweDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZDogI0YwRjBGMDFBO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0FDQUMzQjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cblxuLmhhbGYtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwMUE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQUNBQzNCO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbiAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cblxuLmlucHV0OjpwbGFjZWhvbGRlciwgLmhhbGYtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY0NDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4uaGFsZi1pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmljb24taW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjRweDtcbiAgb3BhY2l0eTogMC4yMztcbn1cblxuLmNlbnRlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MUI0QTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAzMHB4IDBweCAwcHggMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3dpdGNoLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMTYxQjRBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uY2xpY2thYmxlOmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuI2ZpcnN0LW5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZWdtZW50ZWQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwMUE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQUNBQzNCO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNlZ21lbnRlZC1jaG9pY2Uge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAwcHggMHB4IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogM3B4IDNweCAzcHggM3B4O1xufVxuXG4uc2VsZWN0ZWQtc2VnbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjFCNEE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uZXJyb3Ige1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjYxKTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNDQsIDExLCAxMSwgMC4yMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4ucmVzZXQtcGFzc3dvcmQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuICBvdXRsaW5lOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/auth/auth.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _functions_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var _functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






let AuthPage = class AuthPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.errorMessage = "";
        this.buttonText = [0, 1];
        this.selectedRoles = ["", ""];
        this.role = -1;
        this.mode = 0;
        this.email = "";
        this.password = "";
        this.first = "";
        this.last = "";
        this.confirm = "";
    }
    selectRole(index) {
        this.selectedRoles = ["", ""];
        this.selectedRoles[index] = "selected-segment";
        this.role = index;
    }
    switch() {
        this.errorMessage = "";
        if (this.mode) {
            this.mode = 0;
            this.buttonText = [0, 1];
        }
        else {
            this.mode = 1;
            this.buttonText = [1, 0];
        }
    }
    submit() {
        if (!this.mode) {
            this.login();
        }
        else {
            this.register();
        }
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let response = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/login", { email: this.email, password: this.password });
            try {
                response = JSON.parse(response);
                if (response.error != undefined) {
                    this.errorMessage = response.error;
                    return;
                }
                if (response.token != undefined) {
                    Object(_functions_storage__WEBPACK_IMPORTED_MODULE_4__["set"])("token", response.token);
                    this.router.navigateByUrl("/redirect");
                }
            }
            catch (_a) {
                this.errorMessage = response.error;
            }
        });
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.first.replace(/\s/g, '') == "") {
                this.errorMessage = this.translate.instant("AUTH.ERRORS.3");
            }
            if (this.last.replace(/\s/g, '') == "") {
                this.errorMessage = this.translate.instant("AUTH.ERRORS.3");
            }
            if (this.password.length < 6) {
                this.errorMessage = this.translate.instant("AUTH.ERRORS.0");
                return;
            }
            if (this.confirm != this.password) {
                this.errorMessage = this.translate.instant("AUTH.ERRORS.1");
                return;
            }
            if (this.role == -1) {
                this.errorMessage = this.translate.instant("AUTH.ERRORS.2");
                return;
            }
            let response = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/signup", {
                email: this.email, password: this.password, first: this.first, last: this.last, role: this.role
            });
            try {
                response = JSON.parse(response);
                if (response.error != undefined) {
                    this.errorMessage = response.error;
                    return;
                }
                if (response.token != undefined) {
                    Object(_functions_storage__WEBPACK_IMPORTED_MODULE_4__["set"])("token", response.token);
                    this.router.navigateByUrl("/redirect");
                }
            }
            catch (_a) {
            }
        });
    }
    throwError(error) {
    }
};
AuthPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth.page.scss */ "./src/app/pages/auth/auth.page.scss")).default]
    })
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es2015.js.map