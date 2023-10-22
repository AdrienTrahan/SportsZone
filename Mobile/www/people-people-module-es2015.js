(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["people-people-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/excludeuser/excludeuser.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/excludeuser/excludeuser.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item (click)=\"exclude()\" button class=\"exclude-item\">\n    {{translatedExclude}}\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/people/people.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/people/people.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-searchbar (input)=\"search($event.target.value)\" [(ngModel)]=\"searchbar\" showCancelButton=\"focus\"></ion-searchbar>\n  <div *ngFor=\"let player of (this.filtered); let i = index\">\n    <ion-card (click)=\"selectPlayer(i, $event.target, $event)\" class=\"clickable\">\n      <app-smallplayer [img]=\"player.image\" [role]=\"player.role\" [first]=\"player.first\" [last]=\"player.last\"></app-smallplayer>\n      <div class=\"menu-button\" *ngIf=\"((this.alias.teamInfo.access >= 2 && !player.role) || (this.alias.teamInfo.access == 3)) && this.currentId != player.id\">\n        <ion-icon class=\"menu-button-2\" name=\"ellipsis-vertical-outline\"></ion-icon>\n      </div>\n    </ion-card>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/excludeuser/excludeuser.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/excludeuser/excludeuser.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exclude-item {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvZXhjbHVkZXVzZXIvZXhjbHVkZXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhjbHVkZXVzZXIvZXhjbHVkZXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4Y2x1ZGV1c2VyL2V4Y2x1ZGV1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2x1ZGUtaXRlbXtcbiAgICBjb2xvcjogcmVkO1xufSIsIi5leGNsdWRlLWl0ZW0ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/excludeuser/excludeuser.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/excludeuser/excludeuser.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExcludeuserComponent, ExcludeuserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcludeuserComponent", function() { return ExcludeuserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcludeuserModule", function() { return ExcludeuserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let ExcludeuserComponent = class ExcludeuserComponent {
    constructor(popoverController, translate) {
        this.popoverController = popoverController;
        this.translate = translate;
        this.translatedExclude = "";
    }
    ngOnInit() {
        this.translatedExclude = this.translate.instant("PLAYERS.EXCLUDE");
    }
    exclude() {
        this.popoverController.dismiss("exclude");
    }
};
ExcludeuserComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
ExcludeuserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-excludeuser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./excludeuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/excludeuser/excludeuser.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./excludeuser.component.scss */ "./src/app/components/excludeuser/excludeuser.component.scss")).default]
    })
], ExcludeuserComponent);

let ExcludeuserModule = class ExcludeuserModule {
};
ExcludeuserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        declarations: [
            ExcludeuserComponent,
        ],
        exports: [
            ExcludeuserComponent,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ExcludeuserModule);



/***/ }),

/***/ "./src/app/pages/team/people/people-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/team/people/people-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PeoplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePageRoutingModule", function() { return PeoplePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people.page */ "./src/app/pages/team/people/people.page.ts");




const routes = [
    {
        path: '',
        component: _people_page__WEBPACK_IMPORTED_MODULE_3__["PeoplePage"]
    }
];
let PeoplePageRoutingModule = class PeoplePageRoutingModule {
};
PeoplePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PeoplePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/people/people.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/team/people/people.module.ts ***!
  \****************************************************/
/*! exports provided: PeoplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePageModule", function() { return PeoplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-routing.module */ "./src/app/pages/team/people/people-routing.module.ts");
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./people.page */ "./src/app/pages/team/people/people.page.ts");
/* harmony import */ var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/smallplayer/smallplayer.component */ "./src/app/components/smallplayer/smallplayer.component.ts");








let PeoplePageModule = class PeoplePageModule {
};
PeoplePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _people_routing_module__WEBPACK_IMPORTED_MODULE_5__["PeoplePageRoutingModule"],
            src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__["SmallplayerModule"]
        ],
        declarations: [_people_page__WEBPACK_IMPORTED_MODULE_6__["PeoplePage"]]
    })
], PeoplePageModule);



/***/ }),

/***/ "./src/app/pages/team/people/people.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/team/people/people.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.menu-button {\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 30px;\n  padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RlYW0vcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2thYmxlOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4ubWVudS1idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHBhZGRpbmc6IDdweDtcbn0iLCIuY2xpY2thYmxlOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/team/people/people.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/team/people/people.page.ts ***!
  \**************************************************/
/*! exports provided: PeoplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePage", function() { return PeoplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _controller_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/team.page */ "./src/app/pages/team/controller/team.page.ts");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/functions/serializer */ "./src/app/functions/serializer.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_excludeuser_excludeuser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/excludeuser/excludeuser.component */ "./src/app/components/excludeuser/excludeuser.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











let PeoplePage = class PeoplePage {
    constructor(translate, popoverController, router, route, alertCtrl) {
        this.translate = translate;
        this.popoverController = popoverController;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.players = [];
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];
        this.filtered = JSON.parse(JSON.stringify(this.players));
        this.params = {};
        this.currentId = "";
        this.searchbar = "";
        this.route.queryParams.subscribe((queryParams) => {
            this.params = queryParams;
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentId = (yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token")).split("-")[0];
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load();
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.players = this.alias.teamInfo.players;
            this.filtered = JSON.parse(JSON.stringify(this.players));
        });
    }
    search(data) {
        this.filtered = this.players.filter((value) => {
            return value.first.toUpperCase().includes(data.toUpperCase()) ||
                value.last.toUpperCase().includes(data.toUpperCase()) ||
                (value.last + " " + value.first).toUpperCase().includes(data.toUpperCase()) ||
                (value.first + " " + value.last).toUpperCase().includes(data.toUpperCase()) ||
                (value.first + value.last).toUpperCase().includes(data.toUpperCase()) ||
                (value.last + value.first).toUpperCase().includes(data.toUpperCase());
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["logout"])();
            _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].players = [];
            _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].userInformation = {};
            this.players = [];
            this.router.navigateByUrl("/");
        });
    }
    refresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players = [];
            this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];
            _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.nextPlayer = 0;
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            obj.nextPlayer = this.alias.teamInfo.nextPlayer;
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getNextPlayers", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players = result;
                this.filtered = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players;
                this.players = this.filtered;
                this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];
                if (event) {
                    event.target.complete();
                }
            }
            catch (error) {
                if (error.includes("[993]")) {
                    this.logout();
                }
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            obj.nextPlayer = this.alias.teamInfo.nextPlayer;
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getNextPlayers", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (const player of result) {
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players.push(player);
                    this.filtered = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players;
                    this.players = this.filtered;
                }
                _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.nextPlayer += result.length;
                this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];
                if (event) {
                    event.target.complete();
                }
            }
            catch (error) {
                if (error.includes("[993]")) {
                    this.logout();
                }
            }
        });
    }
    selectPlayer(index, target, event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!target.classList.contains("menu-button") && !target.classList.contains("menu-button-2")) {
                let obj = {
                    teamId: this.params.teamId,
                    player: this.filtered[index].id
                };
                if (this.params.playerId && this.params.playerId != "undefined") {
                    obj.playerId = this.params.playerId;
                }
                this.router.navigateByUrl("/player-profile?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__["serialize"])(obj));
            }
            else {
                let popover = yield this.popoverController.create({
                    component: src_app_components_excludeuser_excludeuser_component__WEBPACK_IMPORTED_MODULE_9__["ExcludeuserModule"],
                    event: event,
                    translucent: true
                });
                popover.present().then(() => {
                    let confirmationAlert = (data2) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (data2.data == "exclude") {
                            let prompt = yield this.alertCtrl.create({
                                header: this.translate.instant("ALERTS.16.TITLE"),
                                message: this.translate.instant("ALERTS.16.MESSAGE", { copy: this.filtered[index].first + " " + this.filtered[index].last }),
                                inputs: [
                                    {
                                        name: 'title',
                                        cssClass: "confirmationInputExclude",
                                        placeholder: this.filtered[index].first + " " + this.filtered[index].last,
                                    }
                                ],
                                buttons: [
                                    {
                                        text: this.translate.instant("ALERTS.16.BUTTONS.0"),
                                        handler: data => {
                                        }
                                    },
                                    {
                                        text: this.translate.instant("ALERTS.16.BUTTONS.1"),
                                        handler: data => {
                                            let text = (document.getElementsByClassName("confirmationInputExclude")[0].value);
                                            if (text == this.filtered[index].first + " " + this.filtered[index].last) {
                                                this.excludePlayer(index);
                                            }
                                            else {
                                                confirmationAlert(data2);
                                            }
                                        }
                                    }
                                ]
                            });
                            prompt.present();
                        }
                    });
                    popover.onDidDismiss().then(confirmationAlert);
                });
            }
        });
    }
    excludePlayer(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");
            if (token.split("-")[0] != this.filtered[index].id) {
                yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/excludeParticipant", { token: token, id: this.alias.teamInfo.id, participant: this.filtered[index].id, role: this.filtered[index].role ? true : false });
                this.refresh(undefined);
            }
        });
    }
};
PeoplePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
PeoplePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./people.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/people/people.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./people.page.scss */ "./src/app/pages/team/people/people.page.scss")).default]
    })
], PeoplePage);



/***/ })

}]);
//# sourceMappingURL=people-people-module-es2015.js.map