(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-redirect-redirect-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redirect/redirect.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redirect/redirect.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/redirect/redirect-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/redirect/redirect-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RedirectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectPageRoutingModule", function() { return RedirectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _redirect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect.page */ "./src/app/pages/redirect/redirect.page.ts");




const routes = [
    {
        path: '',
        component: _redirect_page__WEBPACK_IMPORTED_MODULE_3__["RedirectPage"]
    }
];
let RedirectPageRoutingModule = class RedirectPageRoutingModule {
};
RedirectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedirectPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/redirect/redirect.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/redirect/redirect.module.ts ***!
  \***************************************************/
/*! exports provided: RedirectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectPageModule", function() { return RedirectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _redirect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect-routing.module */ "./src/app/pages/redirect/redirect-routing.module.ts");
/* harmony import */ var _redirect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect.page */ "./src/app/pages/redirect/redirect.page.ts");







let RedirectPageModule = class RedirectPageModule {
};
RedirectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redirect_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedirectPageRoutingModule"]
        ],
        declarations: [_redirect_page__WEBPACK_IMPORTED_MODULE_6__["RedirectPage"]]
    })
], RedirectPageModule);



/***/ }),

/***/ "./src/app/pages/redirect/redirect.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/redirect/redirect.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGlyZWN0L3JlZGlyZWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/redirect/redirect.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/redirect/redirect.page.ts ***!
  \*************************************************/
/*! exports provided: RedirectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectPage", function() { return RedirectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/storage */ "./src/app/functions/storage.ts");





let RedirectPage = class RedirectPage {
    constructor(router, modal) {
        this.router = router;
        this.modal = modal;
    }
    quickCheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let authValid = (yield Object(_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token")) != null;
            if (!authValid) {
                this.showAuth();
            }
            else {
                this.showHome();
            }
        });
    }
    showAuth() {
        this.router.navigateByUrl("/auth");
    }
    showHome() {
        this.router.navigateByUrl("/home");
    }
    ionViewDidEnter() {
        this.quickCheck();
    }
    ngOnInit() {
    }
};
RedirectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
RedirectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./redirect.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redirect/redirect.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./redirect.page.scss */ "./src/app/pages/redirect/redirect.page.scss")).default]
    })
], RedirectPage);



/***/ })

}]);
//# sourceMappingURL=pages-redirect-redirect-module-es2015.js.map