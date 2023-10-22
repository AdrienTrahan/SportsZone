(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/settings.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/settings.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-item button *ngIf=\"this.alias.teamInfo.access > 2\" button routerLink=\"/pendinglist\" routerLinkActive=\"active\" class=\"\" detail>{{\"SETTINGS.PENDING\" | translate}}</ion-item>\n    <ion-item button *ngIf=\"this.alias.teamInfo.access >= 2\" button routerLink=\"/generalinfo\" routerLinkActive=\"active\" class=\"\" detail>{{\"SETTINGS.GENERAL\" | translate}}</ion-item>\n    <ion-item button *ngIf=\"this.alias.teamInfo.access == 1\" button routerLink=\"/playerinfo\" routerLinkActive=\"active\" class=\"\" detail>{{\"SETTINGS.PLAYER\" | translate}}</ion-item>\n    <ion-button color=\"danger\" (click)=\"quitTeam()\">{{\"SETTINGS.QUIT\" | translate}}</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/settings/settings-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/team/settings/settings-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/team/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/settings/settings.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/team/settings/settings.module.ts ***!
  \********************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/team/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/team/settings/settings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/team/settings/settings.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/team/settings/settings.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/team/settings/settings.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/team/settings/settings.page.ts ***!
  \******************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _controller_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controller/team.page */ "./src/app/pages/team/controller/team.page.ts");








let SettingsPage = class SettingsPage {
    constructor(translate, ControllerObservable, router, alertController) {
        this.translate = translate;
        this.ControllerObservable = ControllerObservable;
        this.router = router;
        this.alertController = alertController;
        this.loaded = false;
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_7__["TeamPage"];
        this.ControllerObservable.getObservable().subscribe((data) => {
            this.loaded = true;
            this.onEnter();
        });
    }
    ngOnInit() {
        if (this.alias.teamInfo != {}) {
            this.loaded = true;
        }
        this.subscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && event.url && event.url.startsWith('/team/settings')) {
                this.onEnter();
            }
        });
    }
    onEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    quitTeam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let prompt = yield this.alertController.create({
                header: this.translate.instant("ALERTS.12.TITLE"),
                message: this.translate.instant("ALERTS.12.MESSAGE"),
                inputs: [
                    {
                        name: 'title',
                        cssClass: "confirmationInputExclude",
                        placeholder: this.translate.instant("ALERTS.12.WORD"),
                    }
                ],
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.12.BUTTONS.0"),
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        })
                    },
                    {
                        text: this.translate.instant("ALERTS.12.BUTTONS.1"),
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let text = (document.getElementsByClassName("confirmationInputExclude")[0].value);
                            if (text == this.translate.instant("ALERTS.12.WORD")) {
                                let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");
                                let obj = { token: token, id: this.alias.teamInfo.id, playerId: this.alias.teamInfo.playerId };
                                if (!this.alias.teamInfo.playerId) {
                                    delete obj.playerId;
                                }
                                yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/quitTeam", obj);
                                this.router.navigateByUrl("/home");
                            }
                            else {
                                const alert = yield this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: this.translate.instant("ALERTS.6.TITLE"),
                                    message: this.translate.instant("ALERTS.6.TITLE", { error: 'Please enter word correctly' }),
                                    buttons: [
                                        {
                                            text: this.translate.instant("ALERTS.6.BUTTONS.0"),
                                            role: 'cancel',
                                            cssClass: 'secondary',
                                            handler: (blah) => {
                                                this.quitTeam();
                                            }
                                        }
                                    ]
                                });
                                yield alert.present();
                            }
                        })
                    }
                ]
            });
            prompt.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _controller_team_page__WEBPACK_IMPORTED_MODULE_7__["TeamPage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/team/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map