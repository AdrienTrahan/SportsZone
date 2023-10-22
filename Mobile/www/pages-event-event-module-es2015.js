(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/presence/presence.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/presence/presence.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [attr.presence]=\"this.presence\" class=\"container clickable\">\n  <div class=\"green\">{{present}}</div>\n  <div class=\"gray\">{{unsure}}</div>\n  <div class=\"red\">{{absent}}</div>\n</div>");

/***/ }),

/***/ "./src/app/components/presence/presence.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/presence/presence.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  font-family: \"Roboto\";\n}\n\n.container {\n  display: flex;\n  width: calc(100% - 150px);\n  margin: 20px 10px 0px 20px;\n  max-width: 200px;\n  height: 30px;\n  border-radius: 8px;\n  clear: both;\n}\n\n.green {\n  flex: 1;\n  background-color: #21ed95;\n  color: white;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  padding-top: 4px;\n  border-radius: 8px 0px 0px 8px;\n}\n\n.gray {\n  flex: 1;\n  background-color: #e6e6e6;\n  color: black;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  padding-top: 4px;\n}\n\n.red {\n  flex: 1;\n  background-color: #ff004c;\n  color: white;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  padding-top: 4px;\n  border-radius: 0px 8px 8px 0px;\n}\n\ndiv[presence=YES] .green {\n  box-shadow: 0px 0px 0px 3px #3680f1;\n  margin-right: 3px;\n}\n\ndiv[presence=MAYBE] .gray {\n  box-shadow: 0px 0px 0px 3px #3680f1;\n  margin-right: 3px;\n  margin-left: 3px;\n}\n\ndiv[presence=NO] .red {\n  box-shadow: 0px 0px 0px 3px #3680f1;\n  margin-left: 3px;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvcHJlc2VuY2UvcHJlc2VuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJlc2VuY2UvcHJlc2VuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURHQTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURFQTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQ0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QUREQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlc2VuY2UvcHJlc2VuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpyb290e1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHggMHB4IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggN3B4IDJweCAjMDAwMDAwNDU7XG59XG5cbi5ncmVlbntcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWVkOTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDhweDtcbn1cbi5ncmF5e1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG59XG4ucmVke1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA0YztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggMHB4O1xufVxuXG5kaXZbcHJlc2VuY2U9XCJZRVNcIl0gLmdyZWVue1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjMzY4MGYxO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuZGl2W3ByZXNlbmNlPVwiTUFZQkVcIl0gLmdyYXl7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICMzNjgwZjE7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbmRpdltwcmVzZW5jZT1cIk5PXCJdIC5yZWR7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICMzNjgwZjE7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmNsaWNrYWJsZTphY3RpdmV7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufSIsIjpyb290IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xuICBtYXJnaW46IDIwcHggMTBweCAwcHggMjBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uZ3JlZW4ge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFlZDk1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDBweCA4cHg7XG59XG5cbi5ncmF5IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnJlZCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNGM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDBweDtcbn1cblxuZGl2W3ByZXNlbmNlPVlFU10gLmdyZWVuIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICMzNjgwZjE7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5kaXZbcHJlc2VuY2U9TUFZQkVdIC5ncmF5IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICMzNjgwZjE7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG5kaXZbcHJlc2VuY2U9Tk9dIC5yZWQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggIzM2ODBmMTtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmNsaWNrYWJsZTphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/presence/presence.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/presence/presence.component.ts ***!
  \***********************************************************/
/*! exports provided: PresenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceComponent", function() { return PresenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PresenceComponent = class PresenceComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('present')
], PresenceComponent.prototype, "present", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('unsure')
], PresenceComponent.prototype, "unsure", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('absent')
], PresenceComponent.prototype, "absent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('presence')
], PresenceComponent.prototype, "presence", void 0);
PresenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presence',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/presence/presence.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presence.component.scss */ "./src/app/components/presence/presence.component.scss")).default]
    })
], PresenceComponent);



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

/***/ "./src/app/pages/event/event-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/event/event-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function() { return EventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.page */ "./src/app/pages/event/event.page.ts");




const routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_3__["EventPage"]
    }
];
let EventPageRoutingModule = class EventPageRoutingModule {
};
EventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/event/event.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/event/event.module.ts ***!
  \*********************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-routing.module */ "./src/app/pages/event/event-routing.module.ts");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/pages/event/event.page.ts");
/* harmony import */ var src_app_components_presence_presence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/presence/presence.component */ "./src/app/components/presence/presence.component.ts");
/* harmony import */ var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/smallplayer/smallplayer.component */ "./src/app/components/smallplayer/smallplayer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let EventPageModule = class EventPageModule {
};
EventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _event_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_8__["SmallplayerModule"]
        ],
        declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"], src_app_components_presence_presence_component__WEBPACK_IMPORTED_MODULE_7__["PresenceComponent"]]
    })
], EventPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-event-event-module-es2015.js.map