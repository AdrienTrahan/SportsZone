function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/mail/mail.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/mail/mail.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamMailMailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-item (click)=\"selectConvo(message.id)\" class=\"messageItem\" button *ngFor=\"let message of this.messages; let i = index\">\n        <div class=\"resizer\"></div>\n        <h1 class=\"title\">{{message.title}}</h1>\n        <h2 class=\"desc\">{{message.lastMessage}}</h2>\n    </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/team/mail/mail-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/team/mail/mail-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: MailPageRoutingModule */

  /***/
  function srcAppPagesTeamMailMailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailPageRoutingModule", function () {
      return MailPageRoutingModule;
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


    var _mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mail.page */
    "./src/app/pages/team/mail/mail.page.ts");

    var routes = [{
      path: '',
      component: _mail_page__WEBPACK_IMPORTED_MODULE_3__["MailPage"]
    }];

    var MailPageRoutingModule = function MailPageRoutingModule() {
      _classCallCheck(this, MailPageRoutingModule);
    };

    MailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/team/mail/mail.module.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/team/mail/mail.module.ts ***!
    \************************************************/

  /*! exports provided: MailPageModule */

  /***/
  function srcAppPagesTeamMailMailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailPageModule", function () {
      return MailPageModule;
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


    var _mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mail-routing.module */
    "./src/app/pages/team/mail/mail-routing.module.ts");
    /* harmony import */


    var _mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mail.page */
    "./src/app/pages/team/mail/mail.page.ts");

    var MailPageModule = function MailPageModule() {
      _classCallCheck(this, MailPageModule);
    };

    MailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MailPageRoutingModule"]],
      declarations: [_mail_page__WEBPACK_IMPORTED_MODULE_6__["MailPage"]]
    })], MailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/team/mail/mail.page.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/team/mail/mail.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamMailMailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  position: absolute;\n  top: 17px;\n  left: 0px;\n  right: 50px;\n  height: 20px;\n  color: #303030;\n  font-size: 20px;\n  margin: 0px;\n}\n\n.desc {\n  position: absolute;\n  top: 44px;\n  left: 0px;\n  right: 50px;\n  height: 20px;\n  bottom: 10px;\n  color: #D2D2D2;\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0px;\n}\n\n.resizer {\n  height: 80px;\n}\n\n.messageItem {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vbWFpbC9tYWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVhbS9tYWlsL21haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFtL21haWwvbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTdweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5kZXNje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ0cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICNEMkQyRDI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ucmVzaXplcntcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4ubWVzc2FnZUl0ZW17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSIsIi50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNEMkQyRDI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yZXNpemVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubWVzc2FnZUl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/team/mail/mail.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/team/mail/mail.page.ts ***!
    \**********************************************/

  /*! exports provided: MailPage */

  /***/
  function srcAppPagesTeamMailMailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailPage", function () {
      return MailPage;
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


    var _controller_team_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_message_new_message_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../new-message/new-message.page */
    "./src/app/pages/new-message/new-message.page.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");

    var MailPage = /*#__PURE__*/function () {
      function MailPage(router, ControllerObservable, modalController) {
        var _this = this;

        _classCallCheck(this, MailPage);

        this.router = router;
        this.ControllerObservable = ControllerObservable;
        this.modalController = modalController;
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_2__["TeamPage"];
        this.messages = [];
        this.loaded = false;
        this.ControllerObservable.getNewMessageObservable().subscribe(function (data) {
          _this.createNewMessageThread();
        });
        this.ControllerObservable.getObservable().subscribe(function (data) {
          _this.loaded = true;

          _this.onEnter();
        });
      }

      _createClass(MailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("mail." + (this.alias.teamInfo.playerId ? this.alias.teamInfo.playerId : "token") + "." + this.alias.teamInfo.id + ".messages");

                  case 2:
                    if (!_context.sent) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("mail." + (this.alias.teamInfo.playerId ? this.alias.teamInfo.playerId : "token") + "." + this.alias.teamInfo.id + ".messages");

                  case 5:
                    this.messages = _context.sent;
                    this.messages = this.messages.sort(function (a, b) {
                      return (b.lastDate != undefined ? b.lastDate : 0) - (a.lastDate != undefined ? a.lastDate : 0);
                    });

                  case 7:
                    if (this.alias.teamInfo != {}) {
                      this.loaded = true;
                    }

                    this.subscription = this.router.events.subscribe(function (event) {
                      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"] && event.url && event.url.startsWith('/team/mail')) {
                        _this2.onEnter();
                      }
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectConvo",
        value: function selectConvo(id) {
          this.router.navigateByUrl("/messages?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__["serialize"])({
            convoId: id
          }));
        }
      }, {
        key: "createNewMessageThread",
        value: function createNewMessageThread() {
          var _this3 = this;

          this.modalController.create({
            component: _new_message_new_message_page__WEBPACK_IMPORTED_MODULE_4__["NewMessagePage"]
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              if (data.data) {
                _this3.selectConvo(data.data);
              } else {}
            });
          });
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var token, obj, result, i;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    token = _context2.sent;
                    obj = {
                      token: token,
                      id: this.alias.teamInfo.id
                    };

                    if (this.alias.teamInfo.playerId) {
                      obj.playerId = this.alias.teamInfo.playerId;
                    }

                    _context2.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getConversations", obj);

                  case 7:
                    result = _context2.sent;
                    _context2.prev = 8;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context2.next = 12;
                      break;
                    }

                    throw result.error;

                  case 12:
                    ;

                    for (i = 0; i < result.length; i++) {
                      if (!result[i].title) {
                        if (result[i].participants.length > 2) {
                          result[i].title = result[i].participants.map(function (elem) {
                            return elem.first;
                          }).join(", ");
                        } else {
                          result[i].title = result[i].participants.map(function (elem) {
                            return elem.first + " " + elem.last;
                          }).join(", ");
                        }
                      }
                    }

                    this.messages = result;
                    Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("mail." + (this.alias.teamInfo.playerId ? this.alias.teamInfo.playerId : "token") + "." + this.alias.teamInfo.id + ".messages", this.messages);
                    this.messages.sort(function (a, b) {
                      return (b.lastDate != undefined ? b.lastDate : 0) - (a.lastDate != undefined ? a.lastDate : 0);
                    });
                    _context2.next = 21;
                    break;

                  case 19:
                    _context2.prev = 19;
                    _context2.t0 = _context2["catch"](8);

                  case 21:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[8, 19]]);
          }));
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.load();

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    try {
                      this.load();

                      if (event.target != undefined) {
                        event.target.complete();
                      }
                    } catch (error) {}

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return MailPage;
    }();

    MailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _controller_team_page__WEBPACK_IMPORTED_MODULE_2__["TeamPage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    MailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/mail/mail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mail.page.scss */
      "./src/app/pages/team/mail/mail.page.scss"))["default"]]
    })], MailPage);
    /***/
  }
}]);
//# sourceMappingURL=mail-mail-module-es5.js.map