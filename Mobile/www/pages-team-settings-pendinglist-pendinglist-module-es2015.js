(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-settings-pendinglist-pendinglist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/pendinglist/pendinglist.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/pendinglist/pendinglist.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"PENDING.TITLE\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngFor=\"let coach of (this.pendinglist); let i = index\">\n    <ion-card>\n      <app-smallplayer [img]=\"coach.image\" [role]=\"false\" [first]=\"coach.first\" [last]=\"coach.last\"></app-smallplayer>\n      <div class=\"refuseButton\" (click)=\"refuse(i)\">\n        <img src=\"../../../../../assets/x.png\" alt=\"\">\n      </div>\n      <div class=\"acceptButton\" (click)=\"accept(i)\">\n        <img src=\"../../../../../assets/checkmark.png\" alt=\"\">\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/settings/pendinglist/pendinglist-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/team/settings/pendinglist/pendinglist-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PendinglistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendinglistPageRoutingModule", function() { return PendinglistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pendinglist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendinglist.page */ "./src/app/pages/team/settings/pendinglist/pendinglist.page.ts");




const routes = [
    {
        path: '',
        component: _pendinglist_page__WEBPACK_IMPORTED_MODULE_3__["PendinglistPage"]
    }
];
let PendinglistPageRoutingModule = class PendinglistPageRoutingModule {
};
PendinglistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PendinglistPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/settings/pendinglist/pendinglist.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/team/settings/pendinglist/pendinglist.module.ts ***!
  \***********************************************************************/
/*! exports provided: PendinglistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendinglistPageModule", function() { return PendinglistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pendinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pendinglist-routing.module */ "./src/app/pages/team/settings/pendinglist/pendinglist-routing.module.ts");
/* harmony import */ var _pendinglist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pendinglist.page */ "./src/app/pages/team/settings/pendinglist/pendinglist.page.ts");
/* harmony import */ var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/smallplayer/smallplayer.component */ "./src/app/components/smallplayer/smallplayer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let PendinglistPageModule = class PendinglistPageModule {
};
PendinglistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pendinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendinglistPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__["SmallplayerModule"]
        ],
        declarations: [_pendinglist_page__WEBPACK_IMPORTED_MODULE_6__["PendinglistPage"]]
    })
], PendinglistPageModule);



/***/ }),

/***/ "./src/app/pages/team/settings/pendinglist/pendinglist.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/team/settings/pendinglist/pendinglist.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".refuseButton {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 30px;\n  background-color: #ff0a5c;\n  border-radius: 8px;\n}\n\n.refuseButton:hover {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.refuseButton:active {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n\n.refuseButton img {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: 0px;\n  padding: 0px;\n  cursor: pointer;\n  transform: translate(-50%, -50%);\n}\n\n.acceptButton {\n  position: absolute;\n  top: 50%;\n  right: 50px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 30px;\n  background-color: #0aff78;\n  border-radius: 8px;\n}\n\n.acceptButton:hover {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.acceptButton:active {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n\n.acceptButton img {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: 0px;\n  padding: 0px;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vc2V0dGluZ3MvcGVuZGluZ2xpc3QvcGVuZGluZ2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWFtL3NldHRpbmdzL3BlbmRpbmdsaXN0L3BlbmRpbmdsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtBQ0VKOztBREFBO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QUNNSjs7QURKQTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUNPSjs7QURMQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS9zZXR0aW5ncy9wZW5kaW5nbGlzdC9wZW5kaW5nbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmdXNlQnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjBhNWM7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnJlZnVzZUJ1dHRvbjpob3ZlcntcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4ucmVmdXNlQnV0dG9uOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45MCk7XG59XG4ucmVmdXNlQnV0dG9uIGltZ3tcbiAgICBmaWx0ZXI6IGludmVydCgxLjApO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uYWNjZXB0QnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogNTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYWZmNzg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmFjY2VwdEJ1dHRvbjpob3ZlcntcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4uYWNjZXB0QnV0dG9uOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45MCk7XG59XG4uYWNjZXB0QnV0dG9uIGltZ3tcbiAgICBmaWx0ZXI6IGludmVydCgxLjApO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLnJlZnVzZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjBhNWM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnJlZnVzZUJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn1cblxuLnJlZnVzZUJ1dHRvbjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cblxuLnJlZnVzZUJ1dHRvbiBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYWNjZXB0QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhZmY3ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYWNjZXB0QnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuXG4uYWNjZXB0QnV0dG9uOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuXG4uYWNjZXB0QnV0dG9uIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/team/settings/pendinglist/pendinglist.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/team/settings/pendinglist/pendinglist.page.ts ***!
  \*********************************************************************/
/*! exports provided: PendinglistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendinglistPage", function() { return PendinglistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _controller_team_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controller/team.page */ "./src/app/pages/team/controller/team.page.ts");





let PendinglistPage = class PendinglistPage {
    constructor() {
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_4__["TeamPage"];
        this.pendinglist = [];
        this.loadCoaches();
    }
    ngOnInit() {
    }
    loadCoaches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let pendinglist = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/getPendingList", { token: token, id: this.alias.teamInfo.id });
            try {
                pendinglist = JSON.parse(pendinglist);
                this.pendinglist = pendinglist;
            }
            catch (_a) {
            }
        });
    }
    refuse(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userId = this.pendinglist[i].id;
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let refuse = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/refuseCoachFromPendingList", { token: token, id: this.alias.teamInfo.id, coach: userId });
            this.pendinglist.splice(i, 1);
        });
    }
    accept(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userId = this.pendinglist[i].id;
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let accept = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/acceptCoachFromPendingList", { token: token, id: this.alias.teamInfo.id, coach: userId });
            this.pendinglist.splice(i, 1);
        });
    }
};
PendinglistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pendinglist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pendinglist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/pendinglist/pendinglist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pendinglist.page.scss */ "./src/app/pages/team/settings/pendinglist/pendinglist.page.scss")).default]
    })
], PendinglistPage);



/***/ })

}]);
//# sourceMappingURL=pages-team-settings-pendinglist-pendinglist-module-es2015.js.map