(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  event works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/events/events.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/events/events.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n    <ion-segment-button value=\"Futur\">\n      <ion-label>{{\"EVENTS.0\" | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Past\">\n      <ion-label>{{\"EVENTS.1\" | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment> \n  <div class=\"wrapper\">\n    <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state == 'Futur'\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <app-upcomming (click)=\"selectDeletingEvent(i)\" [selectedEvent]=\"this.selectedEvents[i]\" [deleting]=\"deleting\" (presenceChanged)=\"changePresence($event)\" [index]=\"i\" (selected)=\"selectEvent($event)\" *ngFor=\"let event of events; let i = index\" [teamId]=\"event.team\" [playerId]=\"this.params.playerId\" [id]=\"event.id\" [presence]=\"event.presence\" [late]=\"event.late\" [place]=\"event.places\" [name]=\"event.name\" [date]=\"event.date + '/' + event.month + '/' + event.year + '!' + ((event.startTime - event.startTime % 60) / 60) + ':' + ('0' + event.startTime % 60).slice(-2)\"></app-upcomming>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state == 'Past'\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPast($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <app-upcomming (click)=\"openPastEvent(i)\" (presenceChanged)=\"changePresence($event)\" [index]=\"i\" *ngFor=\"let pastEvent of pastEvents; let i = index\" [teamId]=\"pastEvent.team\" [playerId]=\"this.params.playerId\" [id]=\"pastEvent.id\" [place]=\"pastEvent.places\" [name]=\"pastEvent.name\" [date]=\"pastEvent.date + '/' + pastEvent.month + '/' + pastEvent.year + '!' + ((pastEvent.startTime - pastEvent.startTime % 60) / 60) + ':' + ('0' + pastEvent.startTime % 60).slice(-2)\"></app-upcomming>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadDataPast($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/event/event.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EventComponent = class EventComponent {
    constructor() { }
    ngOnInit() { }
};
EventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.component.scss */ "./src/app/components/event/event.component.scss")).default]
    })
], EventComponent);



/***/ }),

/***/ "./src/app/pages/team/events/events-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/team/events/events-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function() { return EventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/team/events/events.page.ts");




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/events/events.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/team/events/events.module.ts ***!
  \****************************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/pages/team/events/events-routing.module.ts");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/team/events/events.page.ts");
/* harmony import */ var src_app_components_event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/upcomming/upcomming.component */ "./src/app/components/upcomming/upcomming.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let EventsPageModule = class EventsPageModule {
};
EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__["UpcommingModule"]
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"], src_app_components_event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"]]
    })
], EventsPageModule);



/***/ }),

/***/ "./src/app/pages/team/events/events.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/team/events/events.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardContainer {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n  background-color: red;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RlYW0vZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQ29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIi5jYXJkQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/team/events/events.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/team/events/events.page.ts ***!
  \**************************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _controller_team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/team.page */ "./src/app/pages/team/controller/team.page.ts");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/functions/serializer */ "./src/app/functions/serializer.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











let EventsPage = class EventsPage {
    constructor(translate, router, route, ControllerObservable, alertController) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.ControllerObservable = ControllerObservable;
        this.alertController = alertController;
        this.events = [];
        this.pastEvents = [];
        this.selectedEvents = [];
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
        this.params = {};
        this.loaded = false;
        this.deleting = false;
        this.state = "Futur";
        this.route.queryParams.subscribe((queryParams) => {
            this.params = queryParams;
        });
        this.ControllerObservable.getObservable().subscribe((data) => {
            this.loaded = true;
            this.load();
        });
        this.ControllerObservable.getDeletingObservable().subscribe((data) => {
            if (data.cancel) {
                this.cancelDeleteEvents();
            }
            else if (data.execute) {
                this.deleteSelectedEvents();
                this.deleting = false;
            }
            else {
                this.deleteEvents();
            }
        });
    }
    selectDeletingEvent(index) {
        this.selectedEvents[index] = !this.selectedEvents[index];
    }
    ngAfterViewInit() {
    }
    cancelDeleteEvents() {
        this.deleting = false;
    }
    deleteEvents() {
        this.deleting = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.onEnter();
            this.subscription = this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && event.url && event.url.startsWith('/team/events')) {
                    this.onEnter();
                }
            });
        });
    }
    onEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loaded) {
                this.alias.teamInfo.nextEvent = 0;
                this.alias.teamInfo.nextPastEvent = 0;
                this.load();
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events = this.alias.teamInfo.events;
            this.pastEvents = this.alias.teamInfo.pastEvents;
            this.pastEvents.sort((a, b) => { return b.timestamp - a.timestamp; });
            this.reloadDeletingSelection(true);
            this.serializeEvents();
        });
    }
    ionViewDidAppear() {
    }
    deleteSelectedEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let count = 0;
            let events = [];
            for (var i = 0; i < this.selectedEvents.length; i++) {
                if (this.selectedEvents[i]) {
                    count++;
                    events.push(this.events[i].id);
                }
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.translate.instant("ALERTS.11.TITLE"),
                message: this.translate.instant("ALERTS.11.MESSAGE", { count: count }),
                buttons: [
                    {
                        text: this.translate.instant("ALERTS.11.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant("ALERTS.11.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
                                yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/deleteEvents", {
                                    token: token,
                                    id: this.params.teamId,
                                    events: JSON.stringify(events)
                                });
                                this.refresh();
                                this.deleting = false;
                            }
                            catch (error) {
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    serializeEvents() {
        for (var i = 0; i < this.events.length; i++) {
            if (!this.events[i].placesString) {
                if (!Array.isArray(this.events[i].places)) {
                    this.events[i].places = [];
                }
                this.events[i].placesString = JSON.stringify(this.events[i].places);
            }
        }
        for (var i = 0; i < this.pastEvents.length; i++) {
            if (!this.pastEvents[i].placesString) {
                if (!Array.isArray(this.pastEvents[i].places)) {
                    this.pastEvents[i].places = [];
                }
                this.pastEvents[i].placesString = JSON.stringify(this.pastEvents[i].places);
            }
        }
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
        this.events[event.index].late = event.late;
    }
    selectEvent(index) {
        _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo = this.events[index.index];
        let obj = {
            eventId: this.events[index.index].id,
            playerId: this.params.playerId,
            teamId: this.params.teamId
        };
        if (!this.params.playerId) {
            delete obj.playerId;
        }
        this.router.navigateByUrl("/event?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__["serialize"])(obj));
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            obj.nextEvent = this.alias.teamInfo.nextEvent;
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextEvents", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (const event of result) {
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events.push(event);
                    this.events = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events;
                    this.reloadDeletingSelection();
                }
                _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextEvent += result.length;
                this.reloadDeletingSelection();
                this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                event.target.complete();
            }
            catch (error) {
                if (error.includes("[993]")) {
                    this.logout();
                }
            }
        });
    }
    loadDataPast(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            obj.nextPastEvent = this.alias.teamInfo.nextPastEvent;
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextPastEvents", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (const event of result) {
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents.push(event);
                    this.pastEvents = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents;
                }
                this.pastEvents = this.pastEvents.sort((a, b) => { return b.timestamp - a.timestamp; });
                _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextPastEvent += result.length;
                this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                event.target.complete();
            }
            catch (error) {
                if (error.includes("[993]")) {
                    this.logout();
                }
            }
        });
    }
    reloadDeletingSelection(reload) {
        if (reload) {
            this.selectedEvents = [];
        }
        for (var i = 0; i < this.events.length; i++) {
            this.selectedEvents.push(false);
        }
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["logout"])();
            _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].players = [];
            _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].userInformation = {};
            this.events = [];
            this.reloadDeletingSelection(true);
            this.router.navigateByUrl("/");
        });
    }
    refresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events = [];
            this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
            _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextEvent = 0;
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            obj.nextEvent = this.alias.teamInfo.nextEvent;
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextEvents", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (const event of result) {
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events.push(event);
                    this.events = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events;
                    this.reloadDeletingSelection(true);
                }
                _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextEvent += result.length;
                this.events = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events;
                this.reloadDeletingSelection(true);
                this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                if (event.target != undefined) {
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
    refreshPast(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents = [];
            this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
            _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextPastEvent = 0;
            let token = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");
            let obj = { token: token, id: this.alias.teamInfo.id };
            if (this.alias.teamInfo.playerId) {
                obj.playerId = this.alias.teamInfo.playerId;
            }
            obj.nextPastEvent = this.alias.teamInfo.nextPastEvent;
            let result = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextPastEvents", obj);
            try {
                result = JSON.parse(result);
                if (result.error) {
                    throw result.error;
                }
                ;
                for (const event of result) {
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents.push(event);
                    this.pastEvents = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents;
                }
                this.pastEvents = this.pastEvents.sort((a, b) => { return b.timestamp - a.timestamp; });
                _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextPastEvent += result.length;
                this.pastEvents = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents;
                this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                if (event.target != undefined) {
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
    openPastEvent(index) {
        _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo = this.pastEvents[index];
        let obj = {
            eventId: this.pastEvents[index].id,
            playerId: this.params.playerId,
            teamId: this.params.teamId,
            past: true
        };
        if (!this.params.playerId) {
            delete obj.playerId;
        }
        this.router.navigateByUrl("/event?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__["serialize"])(obj));
    }
};
EventsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }
];
EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/events/events.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterLeft', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(-100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0px)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(-100%)" }))
                ])
            ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterRight', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0px)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: "translateX(100%)" }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./events.page.scss */ "./src/app/pages/team/events/events.page.scss")).default]
    })
], EventsPage);



/***/ })

}]);
//# sourceMappingURL=events-events-module-es2015.js.map