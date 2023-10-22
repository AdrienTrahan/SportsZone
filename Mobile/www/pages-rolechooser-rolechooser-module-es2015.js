(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rolechooser-rolechooser-module"],{

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

/***/ "./src/app/pages/rolechooser/rolechooser-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/rolechooser/rolechooser-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RolechooserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolechooserPageRoutingModule", function() { return RolechooserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rolechooser_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rolechooser.page */ "./src/app/pages/rolechooser/rolechooser.page.ts");




const routes = [
    {
        path: '',
        component: _rolechooser_page__WEBPACK_IMPORTED_MODULE_3__["RolechooserPage"]
    }
];
let RolechooserPageRoutingModule = class RolechooserPageRoutingModule {
};
RolechooserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RolechooserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rolechooser/rolechooser.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/rolechooser/rolechooser.module.ts ***!
  \*********************************************************/
/*! exports provided: RolechooserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolechooserPageModule", function() { return RolechooserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rolechooser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rolechooser-routing.module */ "./src/app/pages/rolechooser/rolechooser-routing.module.ts");
/* harmony import */ var _rolechooser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rolechooser.page */ "./src/app/pages/rolechooser/rolechooser.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let RolechooserPageModule = class RolechooserPageModule {
};
RolechooserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rolechooser_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolechooserPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_rolechooser_page__WEBPACK_IMPORTED_MODULE_6__["RolechooserPage"]]
    })
], RolechooserPageModule);



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
//# sourceMappingURL=pages-rolechooser-rolechooser-module-es2015.js.map