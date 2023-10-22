(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-presenceboard-presenceboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presenceboard/presenceboard.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presenceboard/presenceboard.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Presence</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <div *ngFor=\"let pres of (this.present); let i = index\">\n      <ion-card (click)=\"selectPlayer(0, i)\" class=\"clickable\">\n        <app-smallplayer pres=\"0\" [img]=\"pres.image\" [first]=\"pres.first\" [last]=\"pres.last\" [role]=\"pres.role\" [late]=\"pres.late\"></app-smallplayer>\n      </ion-card>\n    </div>\n    <div *ngFor=\"let may of (this.maybe); let i = index\">\n      <ion-card (click)=\"selectPlayer(1, i)\" class=\"clickable\">\n        <app-smallplayer pres=\"1\" [img]=\"may.image\" [first]=\"may.first\" [last]=\"may.last\" [role]=\"may.role\"></app-smallplayer>\n      </ion-card>\n    </div>\n    <div *ngFor=\"let abs of (this.absent); let i = index\">\n      <ion-card (click)=\"selectPlayer(2, i)\" class=\"clickable\">\n        <app-smallplayer pres=\"2\" [img]=\"abs.image\" [first]=\"abs.first\" [last]=\"abs.last\" [role]=\"abs.role\"></app-smallplayer>\n      </ion-card>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

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

/***/ "./src/app/pages/presenceboard/presenceboard-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/presenceboard/presenceboard-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PresenceboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceboardPageRoutingModule", function() { return PresenceboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _presenceboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenceboard.page */ "./src/app/pages/presenceboard/presenceboard.page.ts");




const routes = [
    {
        path: '',
        component: _presenceboard_page__WEBPACK_IMPORTED_MODULE_3__["PresenceboardPage"]
    }
];
let PresenceboardPageRoutingModule = class PresenceboardPageRoutingModule {
};
PresenceboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PresenceboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/presenceboard/presenceboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/presenceboard/presenceboard.module.ts ***!
  \*************************************************************/
/*! exports provided: PresenceboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceboardPageModule", function() { return PresenceboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _presenceboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presenceboard-routing.module */ "./src/app/pages/presenceboard/presenceboard-routing.module.ts");
/* harmony import */ var _presenceboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presenceboard.page */ "./src/app/pages/presenceboard/presenceboard.page.ts");
/* harmony import */ var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/smallplayer/smallplayer.component */ "./src/app/components/smallplayer/smallplayer.component.ts");








let PresenceboardPageModule = class PresenceboardPageModule {
};
PresenceboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _presenceboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["PresenceboardPageRoutingModule"],
            src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__["SmallplayerModule"]
        ],
        declarations: [_presenceboard_page__WEBPACK_IMPORTED_MODULE_6__["PresenceboardPage"]]
    })
], PresenceboardPageModule);



/***/ }),

/***/ "./src/app/pages/presenceboard/presenceboard.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/presenceboard/presenceboard.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3ByZXNlbmNlYm9hcmQvcHJlc2VuY2Vib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZXNlbmNlYm9hcmQvcHJlc2VuY2Vib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzZW5jZWJvYXJkL3ByZXNlbmNlYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWNrYWJsZTphY3RpdmV7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufSIsIi5jbGlja2FibGU6YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/presenceboard/presenceboard.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/presenceboard/presenceboard.page.ts ***!
  \***********************************************************/
/*! exports provided: PresenceboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceboardPage", function() { return PresenceboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/functions/serializer */ "./src/app/functions/serializer.ts");






let PresenceboardPage = class PresenceboardPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.state = "Present";
        this.params = {};
        this.maybe = [];
        this.present = [];
        this.absent = [];
        this.nextPresence = 0;
        this.nextAbsence = 0;
        this.nextMaybe = 0;
        this.exceededPres = false;
        this.exceededMay = false;
        this.exceededAbs = false;
        this.route.queryParams.subscribe((queryParams) => {
            if (queryParams && queryParams.eventId) {
                this.params = queryParams;
            }
            else {
            }
        });
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.exceededPres = false;
            this.exceededMay = false;
            this.exceededAbs = false;
            this.nextPresence = 0;
            this.present = [];
            yield this.getPresentPlayers();
            this.nextMaybe = 0;
            this.maybe = [];
            if (this.present.length < 15) {
                yield this.getMaybePlayers();
            }
            this.nextAbsence = 0;
            this.absent = [];
            if (this.present.length + this.maybe.length < 15) {
                yield this.getAbsentPlayers();
            }
        });
    }
    getPresentPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let obj = { token: token, id: this.params.teamId, eventId: this.params.eventId, nextPresence: this.nextPresence };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getPresence", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.length; i++) {
                    this.present.push(result[i]);
                }
                if (result.length == 0) {
                    this.nextMaybe = 0;
                    this.maybe = [];
                    yield this.getMaybePlayers();
                    this.exceededPres = true;
                }
                else {
                    this.nextPresence += result.length;
                }
            }
            catch (error) {
            }
        });
    }
    getAbsentPlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let obj = { token: token, id: this.params.teamId, eventId: this.params.eventId, nextAbsence: this.nextAbsence };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getAbsence", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.length; i++) {
                    this.absent.push(result[i]);
                }
                this.nextAbsence += result.length;
            }
            catch (error) {
            }
        });
    }
    getMaybePlayers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");
            let obj = { token: token, id: this.params.teamId, eventId: this.params.eventId, nextMaybe: this.nextMaybe };
            if (this.params.playerId && this.params.playerId != "undefined") {
                obj.playerId = this.params.playerId;
            }
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getMaybe", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (var i = 0; i < result.length; i++) {
                    this.maybe.push(result[i]);
                }
                if (result.length == 0) {
                    this.nextAbsence = 0;
                    this.absent = [];
                    yield this.getAbsentPlayers();
                    this.exceededMay = true;
                }
                else {
                    this.nextMaybe += result.length;
                }
            }
            catch (error) {
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.exceededPres) {
                yield this.getPresentPlayers();
            }
            else if (!this.exceededMay) {
                yield this.getMaybePlayers();
            }
            else if (!this.exceededAbs) {
                yield this.getAbsentPlayers();
            }
            event.target.complete();
        });
    }
    refresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load();
            event.target.complete();
        });
    }
    selectPlayer(pres, index) {
        let obj = {
            teamId: this.params.teamId
        };
        if (this.params.playerId && this.params.playerId != "undefined") {
            obj.playerId = this.params.playerId;
        }
        if (pres == 0) {
            obj.player = this.present[index].id;
        }
        else if (pres == 1) {
            obj.player = this.maybe[index].id;
        }
        else if (pres == 2) {
            obj.player = this.absent[index].id;
        }
        this.router.navigateByUrl("/player-profile?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_5__["serialize"])(obj));
    }
};
PresenceboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PresenceboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presenceboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presenceboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presenceboard/presenceboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presenceboard.page.scss */ "./src/app/pages/presenceboard/presenceboard.page.scss")).default]
    })
], PresenceboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-presenceboard-presenceboard-module-es2015.js.map