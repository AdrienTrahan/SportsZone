(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-passwordreset-passwordreset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passwordreset/passwordreset.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passwordreset/passwordreset.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n          <ion-icon color=\"white\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"PASSWORDRESET.TITLE\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h1 class=\"instructions\">{{\"PASSWORDRESET.DESCRIPTION\" | translate}}</h1>\n  <input [(ngModel)]=\"this.email\" type=\"text\" placeholder=\"{{'PASSWORDRESET.TITLE' | translate}}\" class=\"emailInput\">\n  <h2 class=\"error\" *ngIf=\"this.error != ''\">{{error}}</h2>\n  <ion-button class=\"sendbutton\" expand=\"block\" (click)=\"finish()\">{{\"PASSWORDRESET.SEND\" | translate}}</ion-button>\n</ion-content>\n");

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

/***/ "./src/app/pages/passwordreset/passwordreset-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/passwordreset/passwordreset-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PasswordresetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPageRoutingModule", function() { return PasswordresetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _passwordreset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordreset.page */ "./src/app/pages/passwordreset/passwordreset.page.ts");




const routes = [
    {
        path: '',
        component: _passwordreset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordresetPage"]
    }
];
let PasswordresetPageRoutingModule = class PasswordresetPageRoutingModule {
};
PasswordresetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasswordresetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/passwordreset/passwordreset.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/passwordreset/passwordreset.module.ts ***!
  \*************************************************************/
/*! exports provided: PasswordresetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPageModule", function() { return PasswordresetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _passwordreset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passwordreset-routing.module */ "./src/app/pages/passwordreset/passwordreset-routing.module.ts");
/* harmony import */ var _passwordreset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passwordreset.page */ "./src/app/pages/passwordreset/passwordreset.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let PasswordresetPageModule = class PasswordresetPageModule {
};
PasswordresetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _passwordreset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordresetPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_passwordreset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordresetPage"]]
    })
], PasswordresetPageModule);



/***/ }),

/***/ "./src/app/pages/passwordreset/passwordreset.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/passwordreset/passwordreset.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".emailInput {\n  position: relative;\n  margin: 20px;\n  height: 50px;\n  background-color: #f1f1f1;\n  border: none;\n  outline: none;\n  width: calc(100% - 40px);\n  max-width: 300px;\n  border-radius: 4px;\n  padding: 10px;\n}\n\n.sendbutton {\n  margin: 20px;\n  --background: #25E481;\n}\n\n.instructions {\n  font-family: Poppins;\n  font-size: 15px;\n  color: gray;\n  margin: 20px 20px 0px 20px;\n}\n\n.error {\n  margin: 0px 20px 10px 20px;\n  color: red;\n  font-family: Poppins;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkcmVzZXQvcGFzc3dvcmRyZXNldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkcmVzZXQvcGFzc3dvcmRyZXNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUtJLFlBQUE7RUFDQSxxQkFBQTtBQ0pKOztBRE9BO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDSko7O0FETUE7RUFDSSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkcmVzZXQvcGFzc3dvcmRyZXNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWxJbnB1dHtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VuZGJ1dHRvbntcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gYm90dG9tOiAyMDBweDtcbiAgICAvLyBsZWZ0OiAwcHg7XG4gICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICAtLWJhY2tncm91bmQ6ICMyNUU0ODE7XG59XG5cbi5pbnN0cnVjdGlvbnN7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDBweCAyMHB4O1xufVxuLmVycm9ye1xuICAgIG1hcmdpbjogMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSIsIi5lbWFpbElucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlbmRidXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogIzI1RTQ4MTtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDIwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmVycm9yIHtcbiAgbWFyZ2luOiAwcHggMjBweCAxMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/passwordreset/passwordreset.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/passwordreset/passwordreset.page.ts ***!
  \***********************************************************/
/*! exports provided: PasswordresetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPage", function() { return PasswordresetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _functions_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/call */ "./src/app/functions/call.ts");






let PasswordresetPage = class PasswordresetPage {
    constructor(translate, alertController, router, route) {
        this.translate = translate;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.error = "";
        this.email = "";
        this.disabled = false;
        route.queryParams.subscribe((queryParams) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (queryParams.email) {
                this.email = queryParams.email;
            }
        }));
    }
    ngOnInit() {
    }
    back() {
        this.router.navigateByUrl("/auth");
    }
    finish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.disabled = true;
            this.error = "";
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
                this.error = "email is not valid";
                return;
            }
            let result = yield Object(_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/resetEmail", { email: this.email });
            ;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.7.TITLE"),
                message: this.translate.instant("ALERTS.7.MESSAGE" + result == "done" ? ".DONE" : ".ERROR", { result: result }),
                buttons: [this.translate.instant("ALERTS.7.BUTTONS.0")]
            });
            alert.present();
            this.disabled = true;
        });
    }
};
PasswordresetPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PasswordresetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-passwordreset',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./passwordreset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passwordreset/passwordreset.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./passwordreset.page.scss */ "./src/app/pages/passwordreset/passwordreset.page.scss")).default]
    })
], PasswordresetPage);



/***/ })

}]);
//# sourceMappingURL=pages-passwordreset-passwordreset-module-es2015.js.map