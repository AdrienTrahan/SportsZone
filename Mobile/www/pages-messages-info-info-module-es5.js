function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-info-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/info/info.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/info/info.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMessagesInfoInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"MESSAGES.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\" [disabled]=\"(this.title == this.alias.title || this.title == '') && !this.enabledButton\" class=\"\">\n        <ion-icon color=\"white\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-item>\n    <ion-label>{{\"MESSAGES.TITLEITEM\" | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"this.title\" type=\"text\" class=\"right\" placeholder=\"ex: Pool party\"></ion-input>\n  </ion-item>\n  <br>\n  <ion-item-divider>\n    <ion-label class=\"\">{{\"MESSAGES.PARTICIPANTS\" | translate}}</ion-label>\n  </ion-item-divider>\n  <ion-item button (click)=\"openPlayerProfile(i)\" class=\"\" *ngFor=\"let participant of this.participants; let i = index\">\n    <img [src]=\"participant.image\" alt=\"\">\n    <ion-label class=\"\">{{participant.first}} {{participant.last}}</ion-label>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/messages/info/info-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/messages/info/info-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: InfoPageRoutingModule */

  /***/
  function srcAppPagesMessagesInfoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function () {
      return InfoPageRoutingModule;
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


    var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info.page */
    "./src/app/pages/messages/info/info.page.ts");

    var routes = [{
      path: '',
      component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }];

    var InfoPageRoutingModule = function InfoPageRoutingModule() {
      _classCallCheck(this, InfoPageRoutingModule);
    };

    InfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/messages/info/info.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/messages/info/info.module.ts ***!
    \****************************************************/

  /*! exports provided: InfoPageModule */

  /***/
  function srcAppPagesMessagesInfoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPageModule", function () {
      return InfoPageModule;
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


    var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-routing.module */
    "./src/app/pages/messages/info/info-routing.module.ts");
    /* harmony import */


    var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./info.page */
    "./src/app/pages/messages/info/info.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var InfoPageModule = function InfoPageModule() {
      _classCallCheck(this, InfoPageModule);
    };

    InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })], InfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/messages/info/info.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/messages/info/info.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMessagesInfoInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL21lc3NhZ2VzL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lc3NhZ2VzL2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvaW5mby9pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/messages/info/info.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/messages/info/info.page.ts ***!
    \**************************************************/

  /*! exports provided: InfoPage */

  /***/
  function srcAppPagesMessagesInfoInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPage", function () {
      return InfoPage;
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


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _team_controller_team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../team/controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../messages.page */
    "./src/app/pages/messages/messages.page.ts");

    var InfoPage = /*#__PURE__*/function () {
      function InfoPage(router) {
        _classCallCheck(this, InfoPage);

        this.router = router;
        this.alias = _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"].conversationInfo;
        this.title = "";
        this.participants = [];
        this.enabledButton = true;
      }

      _createClass(InfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.alias.inventedTitle) {
            this.title = this.alias.title;
          }

          this.load();
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var token, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 2:
                    token = _context.sent;
                    _context.next = 5;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getParticipantsList", {
                      token: token,
                      id: _team_controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.id,
                      convoId: this.alias.id
                    });

                  case 5:
                    result = _context.sent;

                    try {
                      result = JSON.parse(result);

                      if (!result.error) {
                        this.participants = result;
                      }
                    } catch (_a) {}

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var token, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.enabledButton = false;
                    setTimeout(function () {
                      _this.enabledButton = true;
                    }, 2000);
                    _context2.next = 4;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 4:
                    token = _context2.sent;
                    _context2.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/changeTitle", {
                      token: token,
                      title: this.title,
                      id: _team_controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.id,
                      convoId: this.alias.id
                    });

                  case 7:
                    result = _context2.sent;

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openPlayerProfile",
        value: function openPlayerProfile(i) {
          this.router.navigateByUrl("/player-profile?teamId=".concat(_team_controller_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"].teamInfo.id, "&player=").concat(this.participants[i].id));
        }
      }]);

      return InfoPage;
    }();

    InfoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/info/info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./info.page.scss */
      "./src/app/pages/messages/info/info.page.scss"))["default"]]
    })], InfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-messages-info-info-module-es5.js.map