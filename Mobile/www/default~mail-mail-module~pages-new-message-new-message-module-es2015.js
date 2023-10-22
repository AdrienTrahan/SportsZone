(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mail-mail-module~pages-new-message-new-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag-input/tag-input.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag-input/tag-input.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n  <div (click)=\"select(i)\" *ngFor=\"let tag of this.tags; let i = index\" [class]=\"'tag' + ((this.highlighting && ((i == this.tags.length - 1 && this.index == -1) || (i == this.index))) ? ' highlightedTag' : '')\">{{tag}}</div>\n  <input #search (keyup)=\"onKey($event)\" [(ngModel)]=\"_searchField\" placeholder=\"Search\" class=\"tagInput\" type=\"text\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-message/new-message.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-message/new-message.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon color=\"white\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"NEWMESSAGE.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"this.selectedRecipients.length == 0\" (click)=\"finish()\">\n        <ion-icon color=\"white\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-tag-input [searchField]=\"this.searchEntryValue\" [ngModel]=\"tags\" (delete)=\"deleted($event)\" (type)=\"type($event)\" (verify)=\"verify($event)\" class=\"inviteTagInput\" ngDefaultControl></app-tag-input>\n  <div class=\"recipientContainer\" *ngFor=\"let recipient of (this.filteredRecipients); let i = index\">\n    <ion-card (click)=\"selectRecipient(i)\" class=\"clickable selectingcard\">\n      <app-smallplayer [img]=\"recipient.image\" [p_first]=\"recipient.p_first\" [p_last]=\"recipient.p_last\" [role]=\"recipient.role\" [first]=\"recipient.first\" [last]=\"recipient.last\"></app-smallplayer>\n    </ion-card>\n    <div [class]=\"'selectionCircle ' + this.isRecipientSelected(recipient)\"></div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/tag-input/tag-input.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/tag-input/tag-input.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-color: #f3f3f3;\n  padding: 5px 10px 10px 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.tag {\n  margin: 5px 5px 0px 0px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  height: 30px;\n  background-color: #3980ff;\n  color: white;\n  white-space: nowrap;\n  display: inline-block;\n  max-width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tagInput {\n  background-color: transparent;\n  border: none;\n  color: gray;\n  outline: none;\n  display: inline-block;\n  height: 30px;\n  flex-grow: 1;\n  margin: 5px 0px 0px 0px;\n}\n\n.highlightedTag {\n  background-color: #1353c6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udGFne1xuICAgIG1hcmdpbjogNXB4IDVweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTgwZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi50YWdJbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbn1cbi5oaWdobGlnaHRlZFRhZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1M2M2O1xufSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50YWcge1xuICBtYXJnaW46IDVweCA1cHggMHB4IDBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ODBmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRhZ0lucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGdyYXk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xufVxuXG4uaGlnaGxpZ2h0ZWRUYWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1M2M2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/tag-input/tag-input.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tag-input/tag-input.component.ts ***!
  \*************************************************************/
/*! exports provided: TagInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TagInputComponent = class TagInputComponent {
    constructor() {
        this._searchField = "";
        this._tags = [];
        this.highlighting = false;
        this.index = -1;
        this.savedSearchField = "";
        this.type = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.verify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set searchField(data) {
        this._searchField = data;
    }
    get searchField() {
        return this._searchField;
    }
    set tags(value) {
        this._tags = value;
    }
    get tags() {
        return this._tags;
    }
    ngOnInit() { }
    onKey(event) {
        if (this.highlighting && event.keyCode == 8) {
            if (this.index != -1) {
                this.tags.splice(this.index, 1);
                this.delete.emit(this.index);
            }
            else {
                this.tags.splice(this.tags.length - 1, 1);
                this.delete.emit(this.tags.length - 1);
            }
            this.highlighting = !this.highlighting;
            this.index = -1;
            this.searchField = this.savedSearchField;
            this.savedSearchField = "";
        }
        else if (event.keyCode == 8 && this.searchField == "") {
            if (this.highlighting) {
                if (this.index != -1) {
                    this.tags.splice(this.index, 1);
                    this.delete.emit(this.index);
                }
                else {
                    this.tags.splice(this.tags.length - 1, 1);
                    this.delete.emit(this.tags.length - 1);
                }
            }
            else {
                this.type.emit(event.target.value);
            }
            this.highlighting = !this.highlighting;
            this.index = -1;
        }
        else if (event.keyCode == 13) {
            this.verify.emit(event.target.value);
            this.searchField = "";
            this.highlighting = false;
            this.index = -1;
            this.savedSearchField = "";
        }
        else {
            this.type.emit(event.target.value);
            this.highlighting = false;
            this.index = -1;
            this.savedSearchField = "";
        }
    }
    select(index) {
        this.index = index;
        this.highlighting = true;
        this.savedSearchField = this.searchField;
        this.searchElement.nativeElement.focus();
    }
    clearField() {
        this.searchField = "";
        this.searchElement.nativeElement.focus();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("searchField")
], TagInputComponent.prototype, "searchField", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search')
], TagInputComponent.prototype, "searchElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ngModel")
], TagInputComponent.prototype, "tags", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "verify", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "delete", void 0);
TagInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tag-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag-input/tag-input.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tag-input.component.scss */ "./src/app/components/tag-input/tag-input.component.scss")).default]
    })
], TagInputComponent);



/***/ }),

/***/ "./src/app/pages/new-message/new-message.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-message/new-message.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inviteTagInput {\n  width: 100%;\n  height: auto;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.selectionCircle {\n  width: 20px;\n  height: 20px;\n  margin: 0px 0px 0px 0px;\n  border: 2px solid #bfbfbf;\n  border-radius: 50%;\n  position: absolute;\n  right: 15px;\n  top: calc(50% - 10px);\n}\n\n.selectedSelectionCircle {\n  border: none;\n  background-color: #3880ff;\n}\n\n.container:active > .date, .container:active > .information {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.selectingcard {\n  margin-right: 50px;\n}\n\n.recipientContainer {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL25ldy1tZXNzYWdlL25ldy1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3LW1lc3NhZ2UvbmV3LW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ1EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0tSOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctbWVzc2FnZS9uZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52aXRlVGFnSW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmNsaWNrYWJsZTphY3RpdmV7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuLnNlbGVjdGlvbkNpcmNsZXtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG59XG4uc2VsZWN0ZWRTZWxlY3Rpb25DaXJjbGV7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG59XG4uY29udGFpbmVyOmFjdGl2ZSA+IC5kYXRlLCAuY29udGFpbmVyOmFjdGl2ZSA+IC5pbmZvcm1hdGlvbntcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuLnNlbGVjdGluZ2NhcmR7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLnJlY2lwaWVudENvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59IiwiLmludml0ZVRhZ0lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNsaWNrYWJsZTphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG5cbi5zZWxlY3Rpb25DaXJjbGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG59XG5cbi5zZWxlY3RlZFNlbGVjdGlvbkNpcmNsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbn1cblxuLmNvbnRhaW5lcjphY3RpdmUgPiAuZGF0ZSwgLmNvbnRhaW5lcjphY3RpdmUgPiAuaW5mb3JtYXRpb24ge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG5cbi5zZWxlY3RpbmdjYXJkIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4ucmVjaXBpZW50Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/new-message/new-message.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-message/new-message.page.ts ***!
  \*******************************************************/
/*! exports provided: NewMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePage", function() { return NewMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _team_controller_team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team/controller/team.page */ "./src/app/pages/team/controller/team.page.ts");
/* harmony import */ var src_app_components_tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/tag-input/tag-input.component */ "./src/app/components/tag-input/tag-input.component.ts");







let NewMessagePage = class NewMessagePage {
    constructor(modal) {
        this.modal = modal;
        this.tags = [];
        this.players = [];
        this.alias = _team_controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
        this.recipients = [];
        this.filteredRecipients = [];
        this.searchEntryValue = "";
        this.selectedRecipients = [];
    }
    ngOnInit() {
        this.load();
    }
    back() {
        this.modal.dismiss();
    }
    verify(data) {
    }
    type(data) {
        this.filteredRecipients = JSON.parse(JSON.stringify(this.recipients.filter((value) => {
            let extra = false;
            if (value.p_first != undefined) {
                extra = value.p_first.toUpperCase().includes(data.toUpperCase()) ||
                    value.p_last.toUpperCase().includes(data.toUpperCase()) ||
                    (value.p_last + " " + value.p_first).toUpperCase().includes(data.toUpperCase()) ||
                    (value.p_first + " " + value.p_last).toUpperCase().includes(data.toUpperCase()) ||
                    (value.p_first + value.p_last).toUpperCase().includes(data.toUpperCase()) ||
                    (value.p_last + value.p_first).toUpperCase().includes(data.toUpperCase());
            }
            return value.first.toUpperCase().includes(data.toUpperCase()) ||
                value.last.toUpperCase().includes(data.toUpperCase()) ||
                (value.last + " " + value.first).toUpperCase().includes(data.toUpperCase()) ||
                (value.first + " " + value.last).toUpperCase().includes(data.toUpperCase()) ||
                (value.first + value.last).toUpperCase().includes(data.toUpperCase()) ||
                (value.last + value.first).toUpperCase().includes(data.toUpperCase()) || extra;
        })));
    }
    deleted(data) {
        this.selectedRecipients.splice(data, 1);
        this.child.searchElement.nativeElement.focus();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getAllRecipients", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                let id = token.split("-")[0];
                for (var i = result.length - 1; i >= 0; i--) {
                    if (result[i].id == id) {
                        result.splice(i, 1);
                    }
                    else if (result[i].p_id == id) {
                        result.splice(i, 1);
                    }
                }
                this.recipients = JSON.parse(JSON.stringify(result));
                this.filteredRecipients = JSON.parse(JSON.stringify(result));
            }
            catch (error) {
                if (error.includes("[993]")) {
                }
            }
        });
    }
    selectRecipient(index) {
        let existingIndex = -1;
        for (var i = 0; i < this.selectedRecipients.length; i++) {
            let extra1 = false;
            let extra2 = false;
            let extra3 = false;
            if (this.selectedRecipients[i].p_id) {
                extra1 = this.selectedRecipients[i].p_id == this.filteredRecipients[index].id;
            }
            if (this.filteredRecipients[index].p_id) {
                extra2 = this.selectedRecipients[i].id == this.filteredRecipients[index].p_id;
            }
            if (this.filteredRecipients[index].p_id && this.selectedRecipients[i].p_id) {
                extra3 = this.selectedRecipients[i].p_id == this.filteredRecipients[index].p_id;
            }
            if (this.selectedRecipients[i].id == this.filteredRecipients[index].id || extra1 || extra2 || extra3) {
                existingIndex = i;
                break;
            }
        }
        if (existingIndex == -1) {
            this.selectedRecipients.push(this.filteredRecipients[index]);
            if (this.filteredRecipients[index].p_first) {
                this.tags.push(this.filteredRecipients[index].p_first + " " + this.filteredRecipients[index].p_last);
            }
            else {
                this.tags.push(this.filteredRecipients[index].first + " " + this.filteredRecipients[index].last);
            }
            this.searchEntryValue = "";
            this.child.clearField();
            this.filteredRecipients = JSON.parse(JSON.stringify(this.recipients));
        }
        else {
            this.tags.splice(existingIndex, 1);
            this.selectedRecipients.splice(existingIndex, 1);
            this.child.searchElement.nativeElement.focus();
        }
    }
    isRecipientSelected(recipient) {
        let existingIndex = -1;
        for (var i = 0; i < this.selectedRecipients.length; i++) {
            let extra1 = false;
            let extra2 = false;
            let extra3 = false;
            if (this.selectedRecipients[i].p_id) {
                extra1 = this.selectedRecipients[i].p_id == recipient.id;
            }
            if (recipient.p_id) {
                extra2 = this.selectedRecipients[i].id == recipient.p_id;
            }
            if (recipient.p_id && this.selectedRecipients[i].p_id) {
                extra3 = this.selectedRecipients[i].p_id == recipient.p_id;
            }
            if (this.selectedRecipients[i].id == recipient.id || extra1 || extra2 || extra3) {
                existingIndex = i;
                break;
            }
        }
        return (existingIndex != -1) ? 'selectedSelectionCircle' : '';
    }
    finish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");
            let ids = this.selectedRecipients.map((element) => {
                if (element.p_id) {
                    return element.p_id;
                }
                return element.id;
            });
            let obj = {
                token: token,
                id: this.alias.teamInfo.id,
                recipients: JSON.stringify(ids)
            };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/createConversation", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                this.modal.dismiss(result.id);
            }
            catch (error) {
                if (error.includes("[993]")) {
                }
            }
        });
    }
};
NewMessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"])
], NewMessagePage.prototype, "child", void 0);
NewMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-message/new-message.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-message.page.scss */ "./src/app/pages/new-message/new-message.page.scss")).default]
    })
], NewMessagePage);



/***/ })

}]);
//# sourceMappingURL=default~mail-mail-module~pages-new-message-new-message-module-es2015.js.map