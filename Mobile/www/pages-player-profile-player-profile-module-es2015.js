(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-profile-player-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player-profile/player-profile.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player-profile/player-profile.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" defaultHref=\"/\" icon=\"close\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\" *ngIf=\"this.playerInformation.first\">{{this.playerInformation.first + \" \" + this.playerInformation.last}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"this.playerInformation != {}\" class=\"imageCenter\">\n    <img [src]=\"this.playerInformation.image\" class=\"profileImage\" alt=\"\">\n  </div>\n  <h1 *ngIf=\"this.playerInformation.first\" class=\"nameTitle\">{{this.playerInformation.first + \" \" + this.playerInformation.last}}</h1>\n  <h2 class=\"tutorTitle\" *ngIf=\"this.playerInformation.role == 'player'\">{{this.playerInformation.p_first + \" \" + this.playerInformation.p_last}}</h2>\n  <br>\n  <br>\n  <ion-item-divider *ngIf=\"this.playerInformation.age || this.playerInformation.sex || this.playerInformation.position || this.playerInformation.shirtnumber\">\n    <ion-label>\n      {{\"PLAYERPROFILE.INFO\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item *ngIf=\"this.playerInformation.sex && this.playerInformation.sex != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.SEX\" | translate}}</ion-label>\n    {{\"GENDER.\" + this.playerInformation.sex | translate}}\n  </ion-item>\n  <ion-item *ngIf=\"this.playerInformation.age && this.playerInformation.age != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.AGE\" | translate}}</ion-label>\n    {{this.playerInformation.age}}\n  </ion-item>\n  <ion-item *ngIf=\"this.playerInformation.shirtnumber && this.playerInformation.shirtnumber != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.SHIRT\" | translate}}</ion-label>\n    {{this.playerInformation.shirtnumber}}\n  </ion-item>\n  <ion-item *ngIf=\"this.playerInformation.position && this.playerInformation.position != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.POSITION\" | translate}}</ion-label>\n    {{this.playerInformation.position}}\n  </ion-item>\n  <br>\n  <ion-item-divider *ngIf=\"this.playerInformation.contacts && this.playerInformation.contacts.length > 0 && this.playerInformation.role != 'player'\">\n    <ion-label>\n      {{\"PLAYERPROFILE.CONTACT\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item-divider *ngIf=\"this.playerInformation.contacts && this.playerInformation.contacts.length > 0 && this.playerInformation.role == 'player'\">\n    <ion-label>\n      {{\"PLAYERPROFILE.CONTACTPARENT\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let contact of this.playerInformation.contacts; let i = index;\">\n    <ion-label class=\"\">{{contact.name}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'phone'\" class=\"highlighted\" (click)=\"callPhoneNumber(i, false)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'email'\" class=\"highlighted\" (click)=\"sendEmail(i, false)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'text'\" class=\"highlighted\">{{contact.data}}</ion-label>\n    <ion-button (click)=\"copyData(i, false)\" class=\"copyButton\"><ion-icon name=\"copy\"></ion-icon></ion-button>\n  </ion-item>\n  <br>\n  <ion-item-divider *ngIf=\"this.playerInformation.playerContacts && this.playerInformation.playerContacts.length > 0\">\n    <ion-label>\n      {{\"PLAYERPROFILE.CONTACTPLAYER\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let contact of this.playerInformation.playerContacts; let i = index;\">\n    <ion-label class=\"\">{{contact.name}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'phone'\" class=\"highlighted\" (click)=\"callPhoneNumber(i, true)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'email'\" class=\"highlighted\" (click)=\"sendEmail(i, true)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'text'\" class=\"highlighted\">{{contact.data}}</ion-label>\n    <ion-button (click)=\"copyData(i, true)\" class=\"copyButton\"><ion-icon name=\"copy\"></ion-icon></ion-button>\n  </ion-item>\n</ion-content>\n");

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

/***/ "./src/app/pages/player-profile/player-profile-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/player-profile/player-profile-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PlayerProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProfilePageRoutingModule", function() { return PlayerProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _player_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-profile.page */ "./src/app/pages/player-profile/player-profile.page.ts");




const routes = [
    {
        path: '',
        component: _player_profile_page__WEBPACK_IMPORTED_MODULE_3__["PlayerProfilePage"]
    }
];
let PlayerProfilePageRoutingModule = class PlayerProfilePageRoutingModule {
};
PlayerProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayerProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/player-profile/player-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/player-profile/player-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: PlayerProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProfilePageModule", function() { return PlayerProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _player_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-profile-routing.module */ "./src/app/pages/player-profile/player-profile-routing.module.ts");
/* harmony import */ var _player_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-profile.page */ "./src/app/pages/player-profile/player-profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let PlayerProfilePageModule = class PlayerProfilePageModule {
};
PlayerProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _player_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerProfilePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_player_profile_page__WEBPACK_IMPORTED_MODULE_6__["PlayerProfilePage"]]
    })
], PlayerProfilePageModule);



/***/ }),

/***/ "./src/app/pages/player-profile/player-profile.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/player-profile/player-profile.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileImage {\n  border-radius: 50%;\n  width: calc(50% - 50px);\n  max-width: 200px;\n  min-width: 75px;\n}\n\n.imageCenter {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  padding: 50px 0px 20px 0px;\n}\n\n.nameTitle {\n  font-size: 22px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  color: black;\n}\n\n.tutorTitle {\n  font-size: 16px;\n  text-align: center;\n  margin: 2.5px 0px 0px 0px;\n  padding: 0px;\n  color: gray;\n}\n\n.highlighted {\n  color: #0098ff;\n  float: right;\n  display: span;\n  text-align: right;\n}\n\n.copyButton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3BsYXllci1wcm9maWxlL3BsYXllci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZXtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDc1cHg7XG59XG4uaW1hZ2VDZW50ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweCAwcHggMjBweCAwcHg7XG59XG4ubmFtZVRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi50dXRvclRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyLjVweCAwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5oaWdobGlnaHRlZHtcbiAgICBjb2xvcjogIzAwOThmZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogc3BhbjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb3B5QnV0dG9ue1xuICAgIG1hcmdpbjogNXB4O1xufSIsIi5wcm9maWxlSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi5pbWFnZUNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDBweCAyMHB4IDBweDtcbn1cblxuLm5hbWVUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50dXRvclRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMi41cHggMHB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjMDA5OGZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IHNwYW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY29weUJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/player-profile/player-profile.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/player-profile/player-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: PlayerProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProfilePage", function() { return PlayerProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let PlayerProfilePage = class PlayerProfilePage {
    constructor(translate, clipboard, route, callNumber, alertController, emailComposer) {
        this.translate = translate;
        this.clipboard = clipboard;
        this.route = route;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.emailComposer = emailComposer;
        this.playerInformation = {};
        this.params = {};
        this.route.queryParams.subscribe((queryParams) => {
            this.params = queryParams;
        });
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getPlayerInfo();
        });
    }
    getPlayerInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");
            let obj = { token: token, id: this.params.teamId, player: this.params.player };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getPlayerInformation", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.contacts.length; i++) {
                    if (result.contacts[i].type == "phone") {
                        result.contacts[i].data = formatPhoneNumber(result.contacts[i].data.replace(/\D/g, ''));
                    }
                }
                for (var i = 0; i < result.playerContacts.length; i++) {
                    if (result.playerContacts[i].type == "phone") {
                        result.playerContacts[i].data = formatPhoneNumber(result.playerContacts[i].data.replace(/\D/g, ''));
                    }
                }
                this.playerInformation = result;
            }
            catch (error) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: this.translate.instant("ALERTS.8.TITLE"),
                    message: this.translate.instant("ALERTS.8.MESSAGE"),
                    buttons: [
                        {
                            text: this.translate.instant("ALERTS.8.BUTTONS.0"),
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    callPhoneNumber(i, second) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let phone = "";
            if (second) {
                phone = this.playerInformation.playerContacts[i].data;
            }
            else {
                phone = this.playerInformation.contacts[i].data;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.9.TITLE"),
                message: this.translate.instant("ALERTS.9.MESSAGE", { phone: phone }),
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.9.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant("ALERTS.9.BUTTONS.1"),
                        handler: () => {
                            this.callNumber.callNumber(phone.replace(/\D/g, ''), true)
                                .then(res => console.log('Launched dialer!', res))
                                .catch(err => console.log('Error launching dialer', err));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    sendEmail(i, second) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (second) {
                let email = {
                    to: this.playerInformation.playerContacts[i].data
                };
                this.emailComposer.open(email);
            }
            else {
                let email = {
                    to: this.playerInformation.contacts[i].data
                };
                this.emailComposer.open(email);
            }
        });
    }
    copyData(i, second) {
        if (second) {
            this.clipboard.copy(this.playerInformation.playerContacts[i].data);
        }
        else {
            this.clipboard.copy(this.playerInformation.contacts[i].data);
        }
    }
};
PlayerProfilePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Clipboard"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"] }
];
PlayerProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player-profile/player-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-profile.page.scss */ "./src/app/pages/player-profile/player-profile.page.scss")).default]
    })
], PlayerProfilePage);

function formatPhoneNumber(phoneNumberString) {
    if (!phoneNumberString) {
        return;
    }
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    if (cleaned.length > 10) {
        let firstCharacters = cleaned.substring(0, 10);
        let lastCharacters = cleaned.substring(10, cleaned.length);
        var match = firstCharacters.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3] + " #" + lastCharacters;
        }
        return null;
    }
    else {
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-player-profile-player-profile-module-es2015.js.map