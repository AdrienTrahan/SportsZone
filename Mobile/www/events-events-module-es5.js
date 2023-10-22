function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  event works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/events/events.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/events/events.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n    <ion-segment-button value=\"Futur\">\n      <ion-label>{{\"EVENTS.0\" | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Past\">\n      <ion-label>{{\"EVENTS.1\" | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment> \n  <div class=\"wrapper\">\n    <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state == 'Futur'\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <app-upcomming (click)=\"selectDeletingEvent(i)\" [selectedEvent]=\"this.selectedEvents[i]\" [deleting]=\"deleting\" (presenceChanged)=\"changePresence($event)\" [index]=\"i\" (selected)=\"selectEvent($event)\" *ngFor=\"let event of events; let i = index\" [teamId]=\"event.team\" [playerId]=\"this.params.playerId\" [id]=\"event.id\" [presence]=\"event.presence\" [late]=\"event.late\" [place]=\"event.places\" [name]=\"event.name\" [date]=\"event.date + '/' + event.month + '/' + event.year + '!' + ((event.startTime - event.startTime % 60) / 60) + ':' + ('0' + event.startTime % 60).slice(-2)\"></app-upcomming>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state == 'Past'\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPast($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <app-upcomming (click)=\"openPastEvent(i)\" (presenceChanged)=\"changePresence($event)\" [index]=\"i\" *ngFor=\"let pastEvent of pastEvents; let i = index\" [teamId]=\"pastEvent.team\" [playerId]=\"this.params.playerId\" [id]=\"pastEvent.id\" [place]=\"pastEvent.places\" [name]=\"pastEvent.name\" [date]=\"pastEvent.date + '/' + pastEvent.month + '/' + pastEvent.year + '!' + ((pastEvent.startTime - pastEvent.startTime % 60) / 60) + ':' + ('0' + pastEvent.startTime % 60).slice(-2)\"></app-upcomming>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadDataPast($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/event/event.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/event/event.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventEventComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/event/event.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/event/event.component.ts ***!
    \*****************************************************/

  /*! exports provided: EventComponent */

  /***/
  function srcAppComponentsEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
      return EventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventComponent = /*#__PURE__*/function () {
      function EventComponent() {
        _classCallCheck(this, EventComponent);
      }

      _createClass(EventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventComponent;
    }();

    EventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./event.component.scss */
      "./src/app/components/event/event.component.scss"))["default"]]
    })], EventComponent);
    /***/
  },

  /***/
  "./src/app/pages/team/events/events-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/team/events/events-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: EventsPageRoutingModule */

  /***/
  function srcAppPagesTeamEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
      return EventsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/pages/team/events/events.page.ts");

    var routes = [{
      path: '',
      component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }];

    var EventsPageRoutingModule = function EventsPageRoutingModule() {
      _classCallCheck(this, EventsPageRoutingModule);
    };

    EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/team/events/events.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/team/events/events.module.ts ***!
    \****************************************************/

  /*! exports provided: EventsPageModule */

  /***/
  function srcAppPagesTeamEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
      return EventsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/pages/team/events/events-routing.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/pages/team/events/events.page.ts");
    /* harmony import */


    var src_app_components_event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/event/event.component */
    "./src/app/components/event/event.component.ts");
    /* harmony import */


    var src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/upcomming/upcomming.component */
    "./src/app/components/upcomming/upcomming.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var EventsPageModule = function EventsPageModule() {
      _classCallCheck(this, EventsPageModule);
    };

    EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__["UpcommingModule"]],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"], src_app_components_event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"]]
    })], EventsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/team/events/events.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/team/events/events.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardContainer {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n  background-color: red;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RlYW0vZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQ29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIi5jYXJkQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/team/events/events.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/team/events/events.page.ts ***!
    \**************************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppPagesTeamEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _controller_team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var EventsPage = /*#__PURE__*/function () {
      function EventsPage(translate, router, route, ControllerObservable, alertController) {
        var _this = this;

        _classCallCheck(this, EventsPage);

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
        this.route.queryParams.subscribe(function (queryParams) {
          _this.params = queryParams;
        });
        this.ControllerObservable.getObservable().subscribe(function (data) {
          _this.loaded = true;

          _this.load();
        });
        this.ControllerObservable.getDeletingObservable().subscribe(function (data) {
          if (data.cancel) {
            _this.cancelDeleteEvents();
          } else if (data.execute) {
            _this.deleteSelectedEvents();

            _this.deleting = false;
          } else {
            _this.deleteEvents();
          }
        });
      }

      _createClass(EventsPage, [{
        key: "selectDeletingEvent",
        value: function selectDeletingEvent(index) {
          this.selectedEvents[index] = !this.selectedEvents[index];
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "cancelDeleteEvents",
        value: function cancelDeleteEvents() {
          this.deleting = false;
        }
      }, {
        key: "deleteEvents",
        value: function deleteEvents() {
          this.deleting = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.onEnter();

                  case 2:
                    this.subscription = this.router.events.subscribe(function (event) {
                      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && event.url && event.url.startsWith('/team/events')) {
                        _this2.onEnter();
                      }
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.loaded) {
                      this.alias.teamInfo.nextEvent = 0;
                      this.alias.teamInfo.nextPastEvent = 0;
                      this.load();
                    }

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.events = this.alias.teamInfo.events;
                    this.pastEvents = this.alias.teamInfo.pastEvents;
                    this.pastEvents.sort(function (a, b) {
                      return b.timestamp - a.timestamp;
                    });
                    this.reloadDeletingSelection(true);
                    this.serializeEvents();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ionViewDidAppear",
        value: function ionViewDidAppear() {}
      }, {
        key: "deleteSelectedEvents",
        value: function deleteSelectedEvents() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var count, events, i, alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    count = 0;
                    events = [];

                    for (i = 0; i < this.selectedEvents.length; i++) {
                      if (this.selectedEvents[i]) {
                        count++;
                        events.push(this.events[i].id);
                      }
                    }

                    _context5.next = 5;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.11.TITLE"),
                      message: this.translate.instant("ALERTS.11.MESSAGE", {
                        count: count
                      }),
                      buttons: [{
                        text: this.translate.instant("ALERTS.11.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant("ALERTS.11.BUTTONS.1"),
                        cssClass: 'alertDanger',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var token;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.prev = 0;
                                    _context4.next = 3;
                                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                                  case 3:
                                    token = _context4.sent;
                                    _context4.next = 6;
                                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/deleteEvents", {
                                      token: token,
                                      id: this.params.teamId,
                                      events: JSON.stringify(events)
                                    });

                                  case 6:
                                    this.refresh();
                                    this.deleting = false;
                                    _context4.next = 12;
                                    break;

                                  case 10:
                                    _context4.prev = 10;
                                    _context4.t0 = _context4["catch"](0);

                                  case 12:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this, [[0, 10]]);
                          }));
                        }
                      }]
                    });

                  case 5:
                    alert = _context5.sent;
                    _context5.next = 8;
                    return alert.present();

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "serializeEvents",
        value: function serializeEvents() {
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
      }, {
        key: "changePresence",
        value: function changePresence(event) {
          if (this.events[event.index].presence == "NO" && event.presence != 2) {
            this.events[event.index].presenceRatio[2] -= 1;
            this.events[event.index].presenceRatio[event.presence] += 1;
          } else if (this.events[event.index].presence == "MAYBE" && event.presence != 1) {
            this.events[event.index].presenceRatio[1] -= 1;
            this.events[event.index].presenceRatio[event.presence] += 1;
          } else if (this.events[event.index].presence == "YES" && event.presence != 0) {
            this.events[event.index].presenceRatio[0] -= 1;
            this.events[event.index].presenceRatio[event.presence] += 1;
          }

          var roles = ["YES", "MAYBE", "NO"];
          this.events[event.index].presence = roles[event.presence];
          this.events[event.index].late = event.late;
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(index) {
          _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo = this.events[index.index];
          var obj = {
            eventId: this.events[index.index].id,
            playerId: this.params.playerId,
            teamId: this.params.teamId
          };

          if (!this.params.playerId) {
            delete obj.playerId;
          }

          this.router.navigateByUrl("/event?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__["serialize"])(obj));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var token, obj, result, _iterator, _step, _event;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 2:
                    token = _context6.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    obj.nextEvent = this.alias.teamInfo.nextEvent;
                    _context6.next = 8;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextEvents", obj);

                  case 8:
                    result = _context6.sent;
                    _context6.prev = 9;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context6.next = 13;
                      break;
                    }

                    throw result.error;

                  case 13:
                    ;
                    _iterator = _createForOfIteratorHelper(result);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        _event = _step.value;

                        _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events.push(_event);

                        this.events = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events;
                        this.reloadDeletingSelection();
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextEvent += result.length;
                    this.reloadDeletingSelection();
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                    event.target.complete();
                    _context6.next = 25;
                    break;

                  case 22:
                    _context6.prev = 22;
                    _context6.t0 = _context6["catch"](9);

                    if (_context6.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 25:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[9, 22]]);
          }));
        }
      }, {
        key: "loadDataPast",
        value: function loadDataPast(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var token, obj, result, _iterator2, _step2, _event2;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 2:
                    token = _context7.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    obj.nextPastEvent = this.alias.teamInfo.nextPastEvent;
                    _context7.next = 8;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextPastEvents", obj);

                  case 8:
                    result = _context7.sent;
                    _context7.prev = 9;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context7.next = 13;
                      break;
                    }

                    throw result.error;

                  case 13:
                    ;
                    _iterator2 = _createForOfIteratorHelper(result);

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        _event2 = _step2.value;

                        _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents.push(_event2);

                        this.pastEvents = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents;
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    this.pastEvents = this.pastEvents.sort(function (a, b) {
                      return b.timestamp - a.timestamp;
                    });
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextPastEvent += result.length;
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                    event.target.complete();
                    _context7.next = 25;
                    break;

                  case 22:
                    _context7.prev = 22;
                    _context7.t0 = _context7["catch"](9);

                    if (_context7.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 25:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[9, 22]]);
          }));
        }
      }, {
        key: "reloadDeletingSelection",
        value: function reloadDeletingSelection(reload) {
          if (reload) {
            this.selectedEvents = [];
          }

          for (var i = 0; i < this.events.length; i++) {
            this.selectedEvents.push(false);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["logout"])();

                  case 2:
                    _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].players = [];
                    _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].userInformation = {};
                    this.events = [];
                    this.reloadDeletingSelection(true);
                    this.router.navigateByUrl("/");

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var token, obj, result, _iterator3, _step3, _event3;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events = [];
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextEvent = 0;
                    _context9.next = 5;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 5:
                    token = _context9.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    obj.nextEvent = this.alias.teamInfo.nextEvent;
                    _context9.next = 11;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextEvents", obj);

                  case 11:
                    result = _context9.sent;
                    _context9.prev = 12;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context9.next = 16;
                      break;
                    }

                    throw result.error;

                  case 16:
                    ;
                    _iterator3 = _createForOfIteratorHelper(result);

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        _event3 = _step3.value;

                        _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events.push(_event3);

                        this.events = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events;
                        this.reloadDeletingSelection(true);
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextEvent += result.length;
                    this.events = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.events;
                    this.reloadDeletingSelection(true);
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];

                    if (event.target != undefined) {
                      event.target.complete();
                    }

                    _context9.next = 29;
                    break;

                  case 26:
                    _context9.prev = 26;
                    _context9.t0 = _context9["catch"](12);

                    if (_context9.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 29:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[12, 26]]);
          }));
        }
      }, {
        key: "refreshPast",
        value: function refreshPast(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var token, obj, result, _iterator4, _step4, _event4;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents = [];
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextPastEvent = 0;
                    _context10.next = 5;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 5:
                    token = _context10.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    obj.nextPastEvent = this.alias.teamInfo.nextPastEvent;
                    _context10.next = 11;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getNextPastEvents", obj);

                  case 11:
                    result = _context10.sent;
                    _context10.prev = 12;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context10.next = 16;
                      break;
                    }

                    throw result.error;

                  case 16:
                    ;
                    _iterator4 = _createForOfIteratorHelper(result);

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        _event4 = _step4.value;

                        _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents.push(_event4);

                        this.pastEvents = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents;
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }

                    this.pastEvents = this.pastEvents.sort(function (a, b) {
                      return b.timestamp - a.timestamp;
                    });
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.nextPastEvent += result.length;
                    this.pastEvents = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.pastEvents;
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"];

                    if (event.target != undefined) {
                      event.target.complete();
                    }

                    _context10.next = 29;
                    break;

                  case 26:
                    _context10.prev = 26;
                    _context10.t0 = _context10["catch"](12);

                    if (_context10.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 29:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[12, 26]]);
          }));
        }
      }, {
        key: "openPastEvent",
        value: function openPastEvent(index) {
          _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].currentEventInfo = this.pastEvents[index];
          var obj = {
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
      }]);

      return EventsPage;
    }();

    EventsPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }];
    };

    EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/events/events.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(-100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0px)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0px)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(100%)"
      }))])])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/pages/team/events/events.page.scss"))["default"]]
    })], EventsPage);
    /***/
  }
}]);
//# sourceMappingURL=events-events-module-es5.js.map