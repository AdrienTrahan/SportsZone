(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{playerInfo.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [attr.invisible]=\"this.invisible\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n    <ion-segment-button value=\"Teams\">\n      <ion-label>{{\"PLAYERS.0\" | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Upcomming\">\n      <ion-label>{{\"PLAYERS.1\" | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>  \n  <div class=\"wrapper\">\n    <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state=='Teams'\">\n      <ion-card class=\"clickable\" *ngFor=\"let team of teams;let i = index\">\n        <ion-item lines=\"none\" (click)=\"selectTeam(i)\">\n         <app-team [name]=\"team.name\" [img]=\"team.image\" [category]=\"team.category\"></app-team>\n        </ion-item>\n      </ion-card>\n    </div>\n    <div class=\"cardContainer\" [@enterRight] *ngIf=\"this.state=='Upcomming' && loaded\">\n      <app-upcomming (presenceChanged)=\"changePresence($event)\" [index]=\"i\" (selected)=\"selectEvent($event)\" *ngFor=\"let event of (this.events); let i = index\" [teamId]=\"event.team\" [playerId]=\"this.params.playerId\" [id]=\"event.id\" [presence]=\"event.presence\" [place]=\"event.places\" [late]=\"event.late\" [name]=\"event.name\" [date]=\"event.date + '/' + event.month + '/' + event.year + '!' + ((event.startTime - event.startTime % 60) / 60) + ':' + ('0' + event.startTime % 60).slice(-2)\"></app-upcomming>\n      <ion-infinite-scroll *ngIf=\"this.state=='Upcomming' && loaded\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <div class=\"joinButton clickable\"  (click)=\"joinTeam()\">\n      <img src=\"../../../assets/qr.png\" alt=\"\">\n    </div>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/pages/player/player-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/player/player-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageRoutingModule", function() { return PlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.page */ "./src/app/pages/player/player.page.ts");




const routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_3__["PlayerPage"]
    }
];
let PlayerPageRoutingModule = class PlayerPageRoutingModule {
};
PlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/player/player.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/player/player.module.ts ***!
  \***********************************************/
/*! exports provided: PlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function() { return PlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/pages/player/player-routing.module.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.page */ "./src/app/pages/player/player.page.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/upcomming/upcomming.component */ "./src/app/components/upcomming/upcomming.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let PlayerPageModule = class PlayerPageModule {
};
PlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _player_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__["UpcommingModule"],
            _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamModule"]
        ],
        declarations: [_player_page__WEBPACK_IMPORTED_MODULE_6__["PlayerPage"]]
    })
], PlayerPageModule);



/***/ }),

/***/ "./src/app/pages/player/player.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/player/player.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardContainer {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n  background-color: red;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n\nion-item {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.nothingButton {\n  margin: 20px 20px 20px 20px !important;\n}\n\nhtml, body, ion-app, div.nav-decor, ion-content, app-root, #background-content {\n  background-color: transparent !important;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.joinButton {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  margin: 20px 20px 20px 20px !important;\n  color: white;\n  font-size: 55px;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  background-color: #0088ff;\n  text-align: center;\n  padding: 12px 0px 0px 0px;\n  line-height: 40px;\n  box-shadow: 10px 7px 30px -16px rgba(0, 0, 0, 0.75);\n}\n\n.joinButton img {\n  width: 30px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  margin-left: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGF5ZXIvcGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEREE7RUFDSSw0Q0FBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksc0NBQUE7QUNNSjs7QURKQTtFQUFpRix3Q0FBQTtBQ1FqRjs7QUROQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyL3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZENvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmgze1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RoaW5nQnV0dG9ue1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xufVxuaHRtbCwgYm9keSwgaW9uLWFwcCwgZGl2Lm5hdi1kZWNvciwgaW9uLWNvbnRlbnQsIGFwcC1yb290LCAjYmFja2dyb3VuZC1jb250ZW50IHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4uY2xpY2thYmxlOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4uam9pbkJ1dHRvbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDBweCAwcHggMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggN3B4IDMwcHggLTE2cHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cbi5qb2luQnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBmaWx0ZXI6IGludmVydCgxLjApO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xufSIsIi5jYXJkQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ub3RoaW5nQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsIGJvZHksIGlvbi1hcHAsIGRpdi5uYXYtZGVjb3IsIGlvbi1jb250ZW50LCBhcHAtcm9vdCwgI2JhY2tncm91bmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2FibGU6YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuXG4uam9pbkJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggN3B4IDMwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmpvaW5CdXR0b24gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/player/player.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/player/player.page.ts ***!
  \*********************************************/
/*! exports provided: PlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPage", function() { return PlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../join-team/join-team.page */ "./src/app/pages/join-team/join-team.page.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/functions/serializer */ "./src/app/functions/serializer.ts");










let PlayerPage = class PlayerPage {
    constructor(router, route, modal) {
        this.router = router;
        this.route = route;
        this.modal = modal;
        this.playerInfo = {};
        this.state = "Teams";
        this.invisible = false;
        this.teams = [];
        this.events = [];
        this.mustGoBack = false;
        this.loaded = false;
        this.params = {};
        this.nextEvent = 0;
        route.queryParams.subscribe((queryParams) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params = queryParams;
            if (queryParams && queryParams.playerId) {
                let filtered = _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].players.filter((el) => {
                    return el.id == queryParams.playerId;
                });
                if (filtered.length == 0) {
                    this.mustGoBack = true;
                    return;
                }
                this.playerInfo = filtered[0];
                this.playerInfo.name = filtered[0].first + " " + filtered[0].last;
                this.load();
            }
            else {
                this.mustGoBack = true;
            }
        }));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".teams")) {
                this.teams = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".teams");
                for (var i = 0; i < this.teams.length; i++) {
                    this.teams[i].image = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("image." + this.teams[i].id);
                }
            }
            if (yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".upcomming")) {
                this.events = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".upcomming");
            }
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mustGoBack) {
                this.router.navigateByUrl("/home");
                this.mustGoBack = false;
            }
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.playerInfo.teams.length != this.teams.length) {
                yield this.getTeams();
                yield this.getUpcomming();
            }
            this.loaded = true;
        });
    }
    getTeams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let teams = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["call"])("http://192.168.2.251:3000/api/getTeams", { token: token, playerId: this.playerInfo.id });
            try {
                teams = JSON.parse(teams);
                if (teams.error) {
                    throw teams.error;
                }
                ;
                this.teams = teams;
                Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["set"])("player." + this.playerInfo.id + ".teams", this.teams);
                for (var i = 0; i < this.teams.length; i++) {
                    let j = parseInt("" + i);
                    toDataURL(this.teams[j].image, (base64) => {
                        Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["set"])("image." + this.teams[j].id, base64 + "");
                    });
                }
            }
            catch (err) {
            }
        });
    }
    getUpcomming() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.nextEvent = 0;
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let events = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["call"])("http://192.168.2.251:3000/api/getUpcommingEvents", { token: token, playerId: this.playerInfo.id, nextEvent: this.nextEvent });
            try {
                events = JSON.parse(events);
                if (events.error) {
                    throw events.error;
                }
                ;
                this.events = events;
                this.nextEvent += events.length;
                Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["set"])("player." + this.playerInfo.id + ".upcomming", this.events);
            }
            catch (err) {
            }
        });
    }
    selectTeam(index) {
        this.router.navigateByUrl(`/team/events?teamId=${this.teams[index].id}&playerId=${this.playerInfo.id}`);
    }
    selectEvent(index) {
        _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].currentEventInfo = this.events[index.index];
        let obj = {
            eventId: this.events[index.index].id,
            playerId: this.params.playerId,
            teamId: this.events[index.index].team
        };
        if (!this.params.playerId) {
            delete obj.playerId;
        }
        this.router.navigateByUrl("/event?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_9__["serialize"])(obj));
    }
    changePresence(event) {
        if (this.events[event.index].presence == "NO" && event.presence != 2) {
            this.events[event.index].presenceRatio[2] -= 1;
            this.events[event.index].presenceRatio[event.presence] += 1;
        }
        else if (this.events[event.index].presence == "MAYBE" && event.presence != 1) {
            this.events[event.index].presenceRatio[1] -= 1;
            this.events[event.index].presenceRatio[event.presence] += 1;
        }
        else if (this.events[event.index].presence == "YES" && event.presence != 0) {
            this.events[event.index].presenceRatio[0] -= 1;
            this.events[event.index].presenceRatio[event.presence] += 1;
        }
        let roles = ["YES", "MAYBE", "NO"];
        this.events[event.index].presence = roles[event.presence];
    }
    joinTeam() {
        this.modal.create({ component: _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_6__["JoinTeamPage"] }).then((modal) => {
            modal.present();
            this.invisible = true;
            modal.onDidDismiss().then((data) => {
                this.invisible = false;
                if (data.data && !this.teams.map((x) => x.id).includes(data.data.id)) {
                    this.teams.push(data.data);
                }
            });
        });
    }
    ionViewWillLeave() {
        this.loaded = false;
    }
    refresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state == 'Teams') {
                yield this.getTeams();
                event.target.complete();
            }
            else {
                yield this.getUpcomming();
                event.target.complete();
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let events = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["call"])("http://192.168.2.251:3000/api/getUpcommingEvents", { token: token, playerId: this.playerInfo.id, nextEvent: this.nextEvent });
            try {
                events = JSON.parse(events);
                if (events.error) {
                    throw events.error;
                }
                ;
                for (var i = 0; i < events.length; i++) {
                    this.events.push(events[i]);
                }
                this.nextEvent += events.length;
                event.target.complete();
            }
            catch (err) {
            }
        });
    }
};
PlayerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
PlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('enterLeft', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(-100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(0px)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(-100%)" }))
                ])
            ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('enterRight', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(0px)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateX(100%)" }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.page.scss */ "./src/app/pages/player/player.page.scss")).default]
    })
], PlayerPage);

function toDataURL(url, callback) {
    let image;
    image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', function () {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        try {
            callback(canvas.toDataURL('image/png'));
        }
        catch (err) {
            console.error(err);
        }
    });
    image.src = url;
}


/***/ })

}]);
//# sourceMappingURL=pages-player-player-module-es2015.js.map