function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["people-people-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/excludeuser/excludeuser.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/excludeuser/excludeuser.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsExcludeuserExcludeuserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-item (click)=\"exclude()\" button class=\"exclude-item\">\n    {{translatedExclude}}\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/people/people.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/people/people.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamPeoplePeoplePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-searchbar (input)=\"search($event.target.value)\" [(ngModel)]=\"searchbar\" showCancelButton=\"focus\"></ion-searchbar>\n  <div *ngFor=\"let player of (this.filtered); let i = index\">\n    <ion-card (click)=\"selectPlayer(i, $event.target, $event)\" class=\"clickable\">\n      <app-smallplayer [img]=\"player.image\" [role]=\"player.role\" [first]=\"player.first\" [last]=\"player.last\"></app-smallplayer>\n      <div class=\"menu-button\" *ngIf=\"((this.alias.teamInfo.access >= 2 && !player.role) || (this.alias.teamInfo.access == 3)) && this.currentId != player.id\">\n        <ion-icon class=\"menu-button-2\" name=\"ellipsis-vertical-outline\"></ion-icon>\n      </div>\n    </ion-card>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/excludeuser/excludeuser.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/excludeuser/excludeuser.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsExcludeuserExcludeuserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".exclude-item {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvZXhjbHVkZXVzZXIvZXhjbHVkZXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhjbHVkZXVzZXIvZXhjbHVkZXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4Y2x1ZGV1c2VyL2V4Y2x1ZGV1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2x1ZGUtaXRlbXtcbiAgICBjb2xvcjogcmVkO1xufSIsIi5leGNsdWRlLWl0ZW0ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/excludeuser/excludeuser.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/excludeuser/excludeuser.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ExcludeuserComponent, ExcludeuserModule */

  /***/
  function srcAppComponentsExcludeuserExcludeuserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcludeuserComponent", function () {
      return ExcludeuserComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcludeuserModule", function () {
      return ExcludeuserModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ExcludeuserComponent = /*#__PURE__*/function () {
      function ExcludeuserComponent(popoverController, translate) {
        _classCallCheck(this, ExcludeuserComponent);

        this.popoverController = popoverController;
        this.translate = translate;
        this.translatedExclude = "";
      }

      _createClass(ExcludeuserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translatedExclude = this.translate.instant("PLAYERS.EXCLUDE");
        }
      }, {
        key: "exclude",
        value: function exclude() {
          this.popoverController.dismiss("exclude");
        }
      }]);

      return ExcludeuserComponent;
    }();

    ExcludeuserComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    ExcludeuserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-excludeuser',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./excludeuser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/excludeuser/excludeuser.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./excludeuser.component.scss */
      "./src/app/components/excludeuser/excludeuser.component.scss"))["default"]]
    })], ExcludeuserComponent);

    var ExcludeuserModule = function ExcludeuserModule() {
      _classCallCheck(this, ExcludeuserModule);
    };

    ExcludeuserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      declarations: [ExcludeuserComponent],
      exports: [ExcludeuserComponent],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ExcludeuserModule);
    /***/
  },

  /***/
  "./src/app/pages/team/people/people-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/team/people/people-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: PeoplePageRoutingModule */

  /***/
  function srcAppPagesTeamPeoplePeopleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePageRoutingModule", function () {
      return PeoplePageRoutingModule;
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


    var _people_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./people.page */
    "./src/app/pages/team/people/people.page.ts");

    var routes = [{
      path: '',
      component: _people_page__WEBPACK_IMPORTED_MODULE_3__["PeoplePage"]
    }];

    var PeoplePageRoutingModule = function PeoplePageRoutingModule() {
      _classCallCheck(this, PeoplePageRoutingModule);
    };

    PeoplePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PeoplePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/team/people/people.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/team/people/people.module.ts ***!
    \****************************************************/

  /*! exports provided: PeoplePageModule */

  /***/
  function srcAppPagesTeamPeoplePeopleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePageModule", function () {
      return PeoplePageModule;
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


    var _people_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./people-routing.module */
    "./src/app/pages/team/people/people-routing.module.ts");
    /* harmony import */


    var _people_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./people.page */
    "./src/app/pages/team/people/people.page.ts");
    /* harmony import */


    var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/smallplayer/smallplayer.component */
    "./src/app/components/smallplayer/smallplayer.component.ts");

    var PeoplePageModule = function PeoplePageModule() {
      _classCallCheck(this, PeoplePageModule);
    };

    PeoplePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _people_routing_module__WEBPACK_IMPORTED_MODULE_5__["PeoplePageRoutingModule"], src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__["SmallplayerModule"]],
      declarations: [_people_page__WEBPACK_IMPORTED_MODULE_6__["PeoplePage"]]
    })], PeoplePageModule);
    /***/
  },

  /***/
  "./src/app/pages/team/people/people.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/team/people/people.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamPeoplePeoplePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.menu-button {\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 30px;\n  padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RlYW0vcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2thYmxlOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4ubWVudS1idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHBhZGRpbmc6IDdweDtcbn0iLCIuY2xpY2thYmxlOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/team/people/people.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/team/people/people.page.ts ***!
    \**************************************************/

  /*! exports provided: PeoplePage */

  /***/
  function srcAppPagesTeamPeoplePeoplePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePage", function () {
      return PeoplePage;
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


    var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _controller_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_components_excludeuser_excludeuser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/excludeuser/excludeuser.component */
    "./src/app/components/excludeuser/excludeuser.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PeoplePage = /*#__PURE__*/function () {
      function PeoplePage(translate, popoverController, router, route, alertCtrl) {
        var _this = this;

        _classCallCheck(this, PeoplePage);

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
        this.route.queryParams.subscribe(function (queryParams) {
          _this.params = queryParams;
        });
      }

      _createClass(PeoplePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    this.currentId = _context.sent.split("-")[0];

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.load();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.players = this.alias.teamInfo.players;
                    this.filtered = JSON.parse(JSON.stringify(this.players));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "search",
        value: function search(data) {
          this.filtered = this.players.filter(function (value) {
            return value.first.toUpperCase().includes(data.toUpperCase()) || value.last.toUpperCase().includes(data.toUpperCase()) || (value.last + " " + value.first).toUpperCase().includes(data.toUpperCase()) || (value.first + " " + value.last).toUpperCase().includes(data.toUpperCase()) || (value.first + value.last).toUpperCase().includes(data.toUpperCase()) || (value.last + value.first).toUpperCase().includes(data.toUpperCase());
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["logout"])();

                  case 2:
                    _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].players = [];
                    _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].userInformation = {};
                    this.players = [];
                    this.router.navigateByUrl("/");

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var token, obj, result;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players = [];
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.nextPlayer = 0;
                    _context5.next = 5;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 5:
                    token = _context5.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    obj.nextPlayer = this.alias.teamInfo.nextPlayer;
                    _context5.next = 11;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getNextPlayers", obj);

                  case 11:
                    result = _context5.sent;
                    _context5.prev = 12;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context5.next = 16;
                      break;
                    }

                    throw result.error;

                  case 16:
                    ;
                    _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players = result;
                    this.filtered = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players;
                    this.players = this.filtered;
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];

                    if (event) {
                      event.target.complete();
                    }

                    _context5.next = 27;
                    break;

                  case 24:
                    _context5.prev = 24;
                    _context5.t0 = _context5["catch"](12);

                    if (_context5.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 27:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[12, 24]]);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var token, obj, result, _iterator, _step, player;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    token = _context6.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    obj.nextPlayer = this.alias.teamInfo.nextPlayer;
                    _context6.next = 8;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getNextPlayers", obj);

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
                        player = _step.value;

                        _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players.push(player);

                        this.filtered = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.players;
                        this.players = this.filtered;
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.nextPlayer += result.length;
                    this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"];

                    if (event) {
                      event.target.complete();
                    }

                    _context6.next = 24;
                    break;

                  case 21:
                    _context6.prev = 21;
                    _context6.t0 = _context6["catch"](9);

                    if (_context6.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 24:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[9, 21]]);
          }));
        }
      }, {
        key: "selectPlayer",
        value: function selectPlayer(index, target, event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this2 = this;

            var obj, popover;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(!target.classList.contains("menu-button") && !target.classList.contains("menu-button-2"))) {
                      _context8.next = 6;
                      break;
                    }

                    obj = {
                      teamId: this.params.teamId,
                      player: this.filtered[index].id
                    };

                    if (this.params.playerId && this.params.playerId != "undefined") {
                      obj.playerId = this.params.playerId;
                    }

                    this.router.navigateByUrl("/player-profile?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_7__["serialize"])(obj));
                    _context8.next = 10;
                    break;

                  case 6:
                    _context8.next = 8;
                    return this.popoverController.create({
                      component: src_app_components_excludeuser_excludeuser_component__WEBPACK_IMPORTED_MODULE_9__["ExcludeuserModule"],
                      event: event,
                      translucent: true
                    });

                  case 8:
                    popover = _context8.sent;
                    popover.present().then(function () {
                      var confirmationAlert = function confirmationAlert(data2) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _this3 = this;

                          var prompt;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  if (!(data2.data == "exclude")) {
                                    _context7.next = 5;
                                    break;
                                  }

                                  _context7.next = 3;
                                  return this.alertCtrl.create({
                                    header: this.translate.instant("ALERTS.16.TITLE"),
                                    message: this.translate.instant("ALERTS.16.MESSAGE", {
                                      copy: this.filtered[index].first + " " + this.filtered[index].last
                                    }),
                                    inputs: [{
                                      name: 'title',
                                      cssClass: "confirmationInputExclude",
                                      placeholder: this.filtered[index].first + " " + this.filtered[index].last
                                    }],
                                    buttons: [{
                                      text: this.translate.instant("ALERTS.16.BUTTONS.0"),
                                      handler: function handler(data) {}
                                    }, {
                                      text: this.translate.instant("ALERTS.16.BUTTONS.1"),
                                      handler: function handler(data) {
                                        var text = document.getElementsByClassName("confirmationInputExclude")[0].value;

                                        if (text == _this3.filtered[index].first + " " + _this3.filtered[index].last) {
                                          _this3.excludePlayer(index);
                                        } else {
                                          confirmationAlert(data2);
                                        }
                                      }
                                    }]
                                  });

                                case 3:
                                  prompt = _context7.sent;
                                  prompt.present();

                                case 5:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      };

                      popover.onDidDismiss().then(confirmationAlert);
                    });

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "excludePlayer",
        value: function excludePlayer(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var token;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    token = _context9.sent;

                    if (!(token.split("-")[0] != this.filtered[index].id)) {
                      _context9.next = 7;
                      break;
                    }

                    _context9.next = 6;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/excludeParticipant", {
                      token: token,
                      id: this.alias.teamInfo.id,
                      participant: this.filtered[index].id,
                      role: this.filtered[index].role ? true : false
                    });

                  case 6:
                    this.refresh(undefined);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return PeoplePage;
    }();

    PeoplePage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }];
    };

    PeoplePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-people',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./people.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/people/people.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./people.page.scss */
      "./src/app/pages/team/people/people.page.scss"))["default"]]
    })], PeoplePage);
    /***/
  }
}]);
//# sourceMappingURL=people-people-module-es5.js.map