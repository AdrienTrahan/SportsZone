function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rolepopover/rolepopover.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rolepopover/rolepopover.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRolepopoverRolepopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"no-scroll\">\n  <ion-list>\n    <ion-item (click)='this.selectRow(i)' mode='md' button *ngFor=\"let role of availableNames; let i = index;\">\n      <h6>{{\"HOME.POPOVER.\" + role.title | translate}}</h6>\n      <ion-icon *ngIf=\"this.selectedIndex == i\" name=\"checkmark\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'redirect',
      pathMatch: 'full'
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-auth-module */
        "pages-auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/auth.module */
        "./src/app/pages/auth/auth.module.ts")).then(function (m) {
          return m.AuthPageModule;
        });
      }
    }, {
      path: 'redirect',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-redirect-redirect-module */
        "pages-redirect-redirect-module").then(__webpack_require__.bind(null,
        /*! ./pages/redirect/redirect.module */
        "./src/app/pages/redirect/redirect.module.ts")).then(function (m) {
          return m.RedirectPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~events-events-module~pages-home-home-module~pages-player-player-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'player',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-player-player-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~events-events-module~pages-home-home-module~pages-player-player-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-player-player-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/player/player.module */
        "./src/app/pages/player/player.module.ts")).then(function (m) {
          return m.PlayerPageModule;
        });
      }
    }, {
      path: 'team',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-team-controller-team-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("pages-team-controller-team-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/team/controller/team.module */
        "./src/app/pages/team/controller/team.module.ts")).then(function (m) {
          return m.TeamPageModule;
        });
      }
    }, {
      path: 'event',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-event-event-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-event-event-module~pages-modifyevent-modifyevent-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-event-event-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/event/event.module */
        "./src/app/pages/event/event.module.ts")).then(function (m) {
          return m.EventPageModule;
        });
      }
    }, {
      path: 'newplayer',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-newplayer-newplayer-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("pages-newplayer-newplayer-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/newplayer/newplayer.module */
        "./src/app/pages/newplayer/newplayer.module.ts")).then(function (m) {
          return m.NewplayerPageModule;
        });
      }
    }, {
      path: 'rolechooser',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rolechooser-rolechooser-module */
        "pages-rolechooser-rolechooser-module").then(__webpack_require__.bind(null,
        /*! ./pages/rolechooser/rolechooser.module */
        "./src/app/pages/rolechooser/rolechooser.module.ts")).then(function (m) {
          return m.RolechooserPageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-settings-module */
        "pages-settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/settings.module */
        "./src/app/pages/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'roles',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-settings-roles-roles-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("common"), __webpack_require__.e("pages-settings-roles-roles-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/settings/roles/roles.module */
        "./src/app/pages/settings/roles/roles.module.ts")).then(function (m) {
          return m.RolesPageModule;
        });
      }
    }, {
      path: 'newteam',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-newteam-newteam-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("pages-newteam-newteam-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/newteam/newteam.module */
        "./src/app/pages/newteam/newteam.module.ts")).then(function (m) {
          return m.NewteamPageModule;
        });
      }
    }, {
      path: 'shareteam',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-shareteam-shareteam-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("pages-shareteam-shareteam-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/shareteam/shareteam.module */
        "./src/app/pages/shareteam/shareteam.module.ts")).then(function (m) {
          return m.ShareteamPageModule;
        });
      }
    }, {
      path: 'join-team',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-join-team-join-team-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("pages-join-team-join-team-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/join-team/join-team.module */
        "./src/app/pages/join-team/join-team.module.ts")).then(function (m) {
          return m.JoinTeamPageModule;
        });
      }
    }, {
      path: 'createevent',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-createevent-createevent-module */
        [__webpack_require__.e("default~pages-createevent-createevent-module~pages-findplace-findplace-module~pages-modifyevent-modi~7797ecf8"), __webpack_require__.e("default~pages-createevent-createevent-module~pages-findmoment-findmoment-module~pages-modifyevent-mo~6f5f5288"), __webpack_require__.e("pages-createevent-createevent-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/createevent/createevent.module */
        "./src/app/pages/createevent/createevent.module.ts")).then(function (m) {
          return m.CreateeventPageModule;
        });
      }
    }, {
      path: 'findplace',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-findplace-findplace-module */
        [__webpack_require__.e("default~pages-createevent-createevent-module~pages-findplace-findplace-module~pages-modifyevent-modi~7797ecf8"), __webpack_require__.e("pages-findplace-findplace-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/findplace/findplace.module */
        "./src/app/pages/findplace/findplace.module.ts")).then(function (m) {
          return m.FindplacePageModule;
        });
      }
    }, {
      path: 'findmoment',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-findmoment-findmoment-module */
        [__webpack_require__.e("default~pages-createevent-createevent-module~pages-findmoment-findmoment-module~pages-modifyevent-mo~6f5f5288"), __webpack_require__.e("pages-findmoment-findmoment-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/findmoment/findmoment.module */
        "./src/app/pages/findmoment/findmoment.module.ts")).then(function (m) {
          return m.FindmomentPageModule;
        });
      }
    }, {
      path: 'modifyevent',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-modifyevent-modifyevent-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-createevent-createevent-module~pages-findplace-findplace-module~pages-modifyevent-modi~7797ecf8"), __webpack_require__.e("default~pages-createevent-createevent-module~pages-findmoment-findmoment-module~pages-modifyevent-mo~6f5f5288"), __webpack_require__.e("default~pages-event-event-module~pages-modifyevent-modifyevent-module"), __webpack_require__.e("pages-modifyevent-modifyevent-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/modifyevent/modifyevent.module */
        "./src/app/pages/modifyevent/modifyevent.module.ts")).then(function (m) {
          return m.ModifyeventPageModule;
        });
      }
    }, {
      path: 'presenceboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-presenceboard-presenceboard-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-presenceboard-presenceboard-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/presenceboard/presenceboard.module */
        "./src/app/pages/presenceboard/presenceboard.module.ts")).then(function (m) {
          return m.PresenceboardPageModule;
        });
      }
    }, {
      path: 'player-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-player-profile-player-profile-module */
        "pages-player-profile-player-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/player-profile/player-profile.module */
        "./src/app/pages/player-profile/player-profile.module.ts")).then(function (m) {
          return m.PlayerProfilePageModule;
        });
      }
    }, {
      path: 'profile-settings',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-settings-profile-profile-module */
        [__webpack_require__.e("default~pages-settings-profile-profile-module~profile-profile-module"), __webpack_require__.e("pages-settings-profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/settings/profile/profile.module */
        "./src/app/pages/settings/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'new-message',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-new-message-new-message-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("default~mail-mail-module~pages-new-message-new-message-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-new-message-new-message-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/new-message/new-message.module */
        "./src/app/pages/new-message/new-message.module.ts")).then(function (m) {
          return m.NewMessagePageModule;
        });
      }
    }, {
      path: 'messages',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-messages-messages-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module"), __webpack_require__.e("pages-messages-messages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/messages/messages.module */
        "./src/app/pages/messages/messages.module.ts")).then(function (m) {
          return m.MessagesPageModule;
        });
      }
    }, {
      path: 'pendinglist',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-team-settings-pendinglist-pendinglist-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("common"), __webpack_require__.e("pages-team-settings-pendinglist-pendinglist-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/team/settings/pendinglist/pendinglist.module */
        "./src/app/pages/team/settings/pendinglist/pendinglist.module.ts")).then(function (m) {
          return m.PendinglistPageModule;
        });
      }
    }, {
      path: 'passwordreset',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-passwordreset-passwordreset-module */
        "pages-passwordreset-passwordreset-module").then(__webpack_require__.bind(null,
        /*! ./pages/passwordreset/passwordreset.module */
        "./src/app/pages/passwordreset/passwordreset.module.ts")).then(function (m) {
          return m.PasswordresetPageModule;
        });
      }
    }, {
      path: 'generalinfo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-team-settings-generalinfo-generalinfo-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("pages-team-settings-generalinfo-generalinfo-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/team/settings/generalinfo/generalinfo.module */
        "./src/app/pages/team/settings/generalinfo/generalinfo.module.ts")).then(function (m) {
          return m.GeneralinfoPageModule;
        });
      }
    }, {
      path: 'playerinfo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-team-settings-playerinfo-playerinfo-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("pages-team-settings-playerinfo-playerinfo-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/team/settings/playerinfo/playerinfo.module */
        "./src/app/pages/team/settings/playerinfo/playerinfo.module.ts")).then(function (m) {
          return m.PlayerinfoPageModule;
        });
      }
    }, {
      path: 'editprofile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-editprofile-editprofile-module */
        "pages-settings-editprofile-editprofile-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/editprofile/editprofile.module */
        "./src/app/pages/settings/editprofile/editprofile.module.ts")).then(function (m) {
          return m.EditprofilePageModule;
        });
      }
    }, {
      path: 'password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-editprofile-password-password-module */
        "pages-settings-editprofile-password-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/editprofile/password/password.module */
        "./src/app/pages/settings/editprofile/password/password.module.ts")).then(function (m) {
          return m.PasswordPageModule;
        });
      }
    }, {
      path: 'info',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-messages-info-info-module */
        [__webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~0ae265d6"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"), __webpack_require__.e("default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"), __webpack_require__.e("default~pages-messages-info-info-module~pages-messages-messages-module"), __webpack_require__.e("pages-messages-info-info-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/messages/info/info.module */
        "./src/app/pages/messages/info/info.module.ts")).then(function (m) {
          return m.InfoPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-languages-languages-module */
        "pages-settings-languages-languages-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/languages/languages.module */
        "./src/app/pages/settings/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Regular.ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Medium.ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvdGhlbWUvZm9udHMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/language.service */
    "./src/app/services/language.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, languageService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.languageService = languageService;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.languageService.setInitialAppLanguage();
          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_rolepopover_rolepopover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/rolepopover/rolepopover.component */
    "./src/app/components/rolepopover/rolepopover.component.ts");
    /* harmony import */


    var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/native-page-transitions/ngx */
    "./node_modules/@ionic-native/native-page-transitions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/qr-scanner/ngx */
    "./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/camera-preview/ngx */
    "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ionic-native/base64-to-gallery/ngx */
    "./node_modules/@ionic-native/base64-to-gallery/__ivy_ngcc__/ngx/index.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__["TranslateHttpLoader"](http, "assets/lang/", ".json");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_rolepopover_rolepopover_component__WEBPACK_IMPORTED_MODULE_14__["RolepopoverComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__["Crop"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_17__["Device"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__["Base64"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_18__["Clipboard"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_15__["NativePageTransitions"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__["QRScanner"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_21__["CameraPreview"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__["Geolocation"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_23__["CallNumber"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_24__["EmailComposer"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_25__["FileChooser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_26__["FilePath"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_27__["PreviewAnyFile"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_30__["FileOpener"], _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_32__["Base64ToGallery"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_31__["AndroidPermissions"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/rolepopover/rolepopover.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/rolepopover/rolepopover.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRolepopoverRolepopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  padding: 10px 0px 10px 0px;\n  overflow: none;\n}\n\nion-row:active, ion-col:active {\n  background-color: #eaeaea;\n  border-radius: inherit !important;\n}\n\nh6 {\n  font-weight: 600;\n}\n\nion-item:last-child {\n  --border-width: 0;\n  --inner-border-width: 0;\n}\n\n*[name=checkmark] {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvcm9sZXBvcG92ZXIvcm9sZXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcm9sZXBvcG92ZXIvcm9sZXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9sZXBvcG92ZXIvcm9sZXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgICBvdmVyZmxvdzogbm9uZTtcbn1cbmlvbi1yb3c6YWN0aXZlLCBpb24tY29sOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbmg2e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cbipbbmFtZT1cImNoZWNrbWFya1wiXXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG59IiwiaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgb3ZlcmZsb3c6IG5vbmU7XG59XG5cbmlvbi1yb3c6YWN0aXZlLCBpb24tY29sOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuaDYge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4qW25hbWU9Y2hlY2ttYXJrXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/rolepopover/rolepopover.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/rolepopover/rolepopover.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RolepopoverComponent */

  /***/
  function srcAppComponentsRolepopoverRolepopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolepopoverComponent", function () {
      return RolepopoverComponent;
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


    var _functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../functions/storage */
    "./src/app/functions/storage.ts");

    var RolepopoverComponent = /*#__PURE__*/function () {
      function RolepopoverComponent(navParams, popover) {
        _classCallCheck(this, RolepopoverComponent);

        this.navParams = navParams;
        this.popover = popover;
        this.options = {
          "0": "PARENT",
          "1": "COACH"
        };
        this.availableRoles = [];
        this.availableNames = [];
        this.selectedIndex = 0;
      }

      _createClass(RolepopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var role, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.availableRoles = this.navParams.data.roles;
                    _context.next = 3;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("role");

                  case 3:
                    role = _context.sent;

                    for (i = 0; i < this.availableRoles.length; i++) {
                      this.availableNames.push({
                        title: this.availableRoles[i] + ""
                      });

                      if (this.availableRoles[i] + "" == role) {
                        this.selectedIndex = i;
                      }
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectRow",
        value: function selectRow(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.availableRoles[index]) {
                      _context2.next = 5;
                      break;
                    }

                    this.selectedIndex = index;
                    _context2.next = 4;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_3__["set"])("role", parseInt(this.availableRoles[index]));

                  case 4:
                    this.popover.dismiss();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return RolepopoverComponent;
    }();

    RolepopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    RolepopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rolepopover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rolepopover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rolepopover/rolepopover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rolepopover.component.scss */
      "./src/app/components/rolepopover/rolepopover.component.scss"))["default"]]
    })], RolepopoverComponent);
    /***/
  },

  /***/
  "./src/app/functions/storage.ts":
  /*!**************************************!*\
    !*** ./src/app/functions/storage.ts ***!
    \**************************************/

  /*! exports provided: set, get, remove */

  /***/
  function srcAppFunctionsStorageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "set", function () {
      return set;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "get", function () {
      return get;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "remove", function () {
      return remove;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Storage;

    function set(key, value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Storage.set({
                  key: key,
                  value: JSON.stringify(value)
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }

    function get(key) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var item;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Storage.get({
                  key: key
                });

              case 2:
                item = _context4.sent;
                return _context4.abrupt("return", JSON.parse(item.value));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }

    function remove(key) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Storage.remove({
                  key: key
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
    }
    /***/

  },

  /***/
  "./src/app/services/language.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/language.service.ts ***!
    \**********************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppServicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LanguageService_1;

    var LanguageService = LanguageService_1 = /*#__PURE__*/function () {
      function LanguageService(translate) {
        _classCallCheck(this, LanguageService);

        this.translate = translate;
        LanguageService_1.translate = translate;
      }

      _createClass(LanguageService, [{
        key: "setInitialAppLanguage",
        value: function setInitialAppLanguage() {
          var language = this.translate.getBrowserLang();
          LanguageService_1.currentLanguage = language;
          LanguageService_1.translate.setDefaultLang(language);
        }
      }], [{
        key: "setLanguage",
        value: function setLanguage(lang) {
          LanguageService_1.currentLanguage = lang;
          this.translate.setDefaultLang(lang);
        }
      }, {
        key: "currentLanguage",
        get: function get() {
          return this._currentLanguage;
        },
        set: function set(lang) {
          LanguageService_1._currentLanguage = lang;
        }
      }]);

      return LanguageService;
    }();

    LanguageService._currentLanguage = "";

    LanguageService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    LanguageService = LanguageService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LanguageService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/adrientrahan/Desktop/Teamclap/TeamClap/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map