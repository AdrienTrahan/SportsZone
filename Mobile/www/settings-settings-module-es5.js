function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/settings.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/settings.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <ion-item button *ngIf=\"this.alias.teamInfo.access > 2\" button routerLink=\"/pendinglist\" routerLinkActive=\"active\" class=\"\" detail>{{\"SETTINGS.PENDING\" | translate}}</ion-item>\n    <ion-item button *ngIf=\"this.alias.teamInfo.access >= 2\" button routerLink=\"/generalinfo\" routerLinkActive=\"active\" class=\"\" detail>{{\"SETTINGS.GENERAL\" | translate}}</ion-item>\n    <ion-item button *ngIf=\"this.alias.teamInfo.access == 1\" button routerLink=\"/playerinfo\" routerLinkActive=\"active\" class=\"\" detail>{{\"SETTINGS.PLAYER\" | translate}}</ion-item>\n    <ion-button color=\"danger\" (click)=\"quitTeam()\">{{\"SETTINGS.QUIT\" | translate}}</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/team/settings/settings-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/team/settings/settings-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesTeamSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/team/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/team/settings/settings.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/team/settings/settings.module.ts ***!
    \********************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesTeamSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/pages/team/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/team/settings/settings.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/team/settings/settings.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/team/settings/settings.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/team/settings/settings.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/team/settings/settings.page.ts ***!
    \******************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppPagesTeamSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _controller_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(translate, ControllerObservable, router, alertController) {
        var _this = this;

        _classCallCheck(this, SettingsPage);

        this.translate = translate;
        this.ControllerObservable = ControllerObservable;
        this.router = router;
        this.alertController = alertController;
        this.loaded = false;
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_7__["TeamPage"];
        this.ControllerObservable.getObservable().subscribe(function (data) {
          _this.loaded = true;

          _this.onEnter();
        });
      }

      _createClass(SettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.alias.teamInfo != {}) {
            this.loaded = true;
          }

          this.subscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && event.url && event.url.startsWith('/team/settings')) {
              _this2.onEnter();
            }
          });
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "quitTeam",
        value: function quitTeam() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var prompt;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: this.translate.instant("ALERTS.12.TITLE"),
                      message: this.translate.instant("ALERTS.12.MESSAGE"),
                      inputs: [{
                        name: 'title',
                        cssClass: "confirmationInputExclude",
                        placeholder: this.translate.instant("ALERTS.12.WORD")
                      }],
                      buttons: [{
                        text: this.translate.instant("ALERTS.12.BUTTONS.0"),
                        handler: function handler(data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));
                        }
                      }, {
                        text: this.translate.instant("ALERTS.12.BUTTONS.1"),
                        handler: function handler(data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                            var _this4 = this;

                            var text, token, obj, alert;
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    text = document.getElementsByClassName("confirmationInputExclude")[0].value;

                                    if (!(text == this.translate.instant("ALERTS.12.WORD"))) {
                                      _context3.next = 12;
                                      break;
                                    }

                                    _context3.next = 4;
                                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_6__["get"])("token");

                                  case 4:
                                    token = _context3.sent;
                                    obj = {
                                      token: token,
                                      id: this.alias.teamInfo.id,
                                      playerId: this.alias.teamInfo.playerId
                                    };

                                    if (!this.alias.teamInfo.playerId) {
                                      delete obj.playerId;
                                    }

                                    _context3.next = 9;
                                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/quitTeam", obj);

                                  case 9:
                                    this.router.navigateByUrl("/home");
                                    _context3.next = 17;
                                    break;

                                  case 12:
                                    _context3.next = 14;
                                    return this.alertController.create({
                                      cssClass: 'my-custom-class',
                                      header: this.translate.instant("ALERTS.6.TITLE"),
                                      message: this.translate.instant("ALERTS.6.TITLE", {
                                        error: 'Please enter word correctly'
                                      }),
                                      buttons: [{
                                        text: this.translate.instant("ALERTS.6.BUTTONS.0"),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function handler(blah) {
                                          _this4.quitTeam();
                                        }
                                      }]
                                    });

                                  case 14:
                                    alert = _context3.sent;
                                    _context3.next = 17;
                                    return alert.present();

                                  case 17:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    prompt = _context4.sent;
                    prompt.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _controller_team_page__WEBPACK_IMPORTED_MODULE_7__["TeamPage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/settings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/pages/team/settings/settings.page.scss"))["default"]]
    })], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map