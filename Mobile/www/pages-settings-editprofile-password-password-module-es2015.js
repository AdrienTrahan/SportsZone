(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-editprofile-password-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/editprofile/password/password.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/editprofile/password/password.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'SETTINGS.CHANGEPASSWORD.BACKTITLE' | translate}}\" color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"SETTINGS.CHANGEPASSWORD.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\" class=\"\">\n        <ion-icon color=\"white\" name=\"save-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.CHANGEPASSWORD.0\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input [(ngModel)]=\"old\"></ion-input>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.CHANGEPASSWORD.1\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input [(ngModel)]=\"new\"></ion-input>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.CHANGEPASSWORD.2\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input [(ngModel)]=\"confirm\"></ion-input>\n  </ion-item>\n</ion-content>\n");

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

/***/ "./src/app/pages/settings/editprofile/password/password-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/settings/editprofile/password/password-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageRoutingModule", function() { return PasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.page */ "./src/app/pages/settings/editprofile/password/password.page.ts");




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_3__["PasswordPage"]
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/editprofile/password/password.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/editprofile/password/password.module.ts ***!
  \************************************************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-routing.module */ "./src/app/pages/settings/editprofile/password/password-routing.module.ts");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/pages/settings/editprofile/password/password.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _password_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
    })
], PasswordPageModule);



/***/ }),

/***/ "./src/app/pages/settings/editprofile/password/password.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/editprofile/password/password.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2VkaXRwcm9maWxlL3Bhc3N3b3JkL3Bhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/settings/editprofile/password/password.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/editprofile/password/password.page.ts ***!
  \**********************************************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let PasswordPage = class PasswordPage {
    constructor(translate, router, alertController, location) {
        this.translate = translate;
        this.router = router;
        this.alertController = alertController;
        this.location = location;
        this.old = "";
        this.new = "";
        this.confirm = "";
    }
    ngOnInit() {
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.confirm != this.new) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: this.translate.instant("ALERTS.6.TITLE"),
                    message: this.translate.instant("ALERTS.6.MESSAGE", { error: 'New passwords do not match' }),
                    buttons: [{
                            text: this.translate.instant("ALERTS.6.BUTTONS.0"),
                            handler: () => {
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                yield alert.present();
                return;
            }
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/modifyPassword", {
                token: token,
                old: this.old,
                new: this.new
            });
            this.location.back();
        });
    }
};
PasswordPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
PasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/editprofile/password/password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./password.page.scss */ "./src/app/pages/settings/editprofile/password/password.page.scss")).default]
    })
], PasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-editprofile-password-password-module-es2015.js.map