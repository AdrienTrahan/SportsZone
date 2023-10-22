function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-presenceboard-presenceboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presenceboard/presenceboard.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presenceboard/presenceboard.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPresenceboardPresenceboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Presence</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <div *ngFor=\"let pres of (this.present); let i = index\">\n      <ion-card (click)=\"selectPlayer(0, i)\" class=\"clickable\">\n        <app-smallplayer pres=\"0\" [img]=\"pres.image\" [first]=\"pres.first\" [last]=\"pres.last\" [role]=\"pres.role\" [late]=\"pres.late\"></app-smallplayer>\n      </ion-card>\n    </div>\n    <div *ngFor=\"let may of (this.maybe); let i = index\">\n      <ion-card (click)=\"selectPlayer(1, i)\" class=\"clickable\">\n        <app-smallplayer pres=\"1\" [img]=\"may.image\" [first]=\"may.first\" [last]=\"may.last\" [role]=\"may.role\"></app-smallplayer>\n      </ion-card>\n    </div>\n    <div *ngFor=\"let abs of (this.absent); let i = index\">\n      <ion-card (click)=\"selectPlayer(2, i)\" class=\"clickable\">\n        <app-smallplayer pres=\"2\" [img]=\"abs.image\" [first]=\"abs.first\" [last]=\"abs.last\" [role]=\"abs.role\"></app-smallplayer>\n      </ion-card>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/functions/call.ts":
  /*!***********************************!*\
    !*** ./src/app/functions/call.ts ***!
    \***********************************/

  /*! exports provided: call, post, upload, logout */

  /***/
  function srcAppFunctionsCallTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "call", function () {
      return call;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "post", function () {
      return post;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upload", function () {
      return upload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logout", function () {
      return logout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./serializer */
    "./src/app/functions/serializer.ts");
    /* harmony import */


    var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./storage */
    "./src/app/functions/storage.ts");

    function call(url, object) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  var request = new XMLHttpRequest();

                  request.onreadystatechange = function () {
                    if (request.readyState == 4 && request.status == 200) {
                      resolve(request.responseText);
                    } else {
                      setTimeout(function () {
                        resolve("error");
                      }, 1000);
                    }
                  };

                  var complete = url;

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

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }

    function post(url, object) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return new Promise(function (resolve) {
                  var request = new XMLHttpRequest();

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

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }

    function upload(url, imagePath, object, http, transfer) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this = this;

        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return new Promise(function (resolve) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    var result, fileTransfer, uploadOpts;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(imagePath == "")) {
                              _context3.next = 7;
                              break;
                            }

                            _context3.next = 3;
                            return post(url, object);

                          case 3:
                            result = _context3.sent;
                            resolve(result);
                            _context3.next = 11;
                            break;

                          case 7:
                            fileTransfer = transfer.create();
                            uploadOpts = {
                              fileKey: 'image',
                              httpMethod: 'POST',
                              fileName: new Date().getTime() + Math.random() + Math.random() + ".jpg",
                              chunkedMode: false
                            };

                            if (object.token) {
                              uploadOpts.headers = {
                                auth: object.token
                              };
                              delete object.token;
                            }

                            fileTransfer.upload(imagePath, url + "?" + Object(_serializer__WEBPACK_IMPORTED_MODULE_1__["serialize"])(object), uploadOpts).then(function (data) {
                              if (data.response) {
                                resolve(data.response);
                              }
                            }, function (err) {
                              resolve(err);
                            });

                          case 11:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                });

              case 2:
                response = _context4.sent;
                return _context4.abrupt("return", response);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }

    function logout() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var token;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_storage__WEBPACK_IMPORTED_MODULE_2__["get"])("token");

              case 2:
                token = _context5.sent;
                _context5.next = 5;
                return call("http://192.168.2.251:3000/api/logout", {
                  token: token
                });

              case 5:
                _context5.next = 7;
                return Object(_storage__WEBPACK_IMPORTED_MODULE_2__["remove"])("token");

              case 7:
                _context5.next = 9;
                return Object(_storage__WEBPACK_IMPORTED_MODULE_2__["remove"])("role");

              case 9:
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
  "./src/app/functions/serializer.ts":
  /*!*****************************************!*\
    !*** ./src/app/functions/serializer.ts ***!
    \*****************************************/

  /*! exports provided: serialize */

  /***/
  function srcAppFunctionsSerializerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serialize", function () {
      return serialize;
    });

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
    /***/

  },

  /***/
  "./src/app/pages/presenceboard/presenceboard-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/presenceboard/presenceboard-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PresenceboardPageRoutingModule */

  /***/
  function srcAppPagesPresenceboardPresenceboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresenceboardPageRoutingModule", function () {
      return PresenceboardPageRoutingModule;
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


    var _presenceboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./presenceboard.page */
    "./src/app/pages/presenceboard/presenceboard.page.ts");

    var routes = [{
      path: '',
      component: _presenceboard_page__WEBPACK_IMPORTED_MODULE_3__["PresenceboardPage"]
    }];

    var PresenceboardPageRoutingModule = function PresenceboardPageRoutingModule() {
      _classCallCheck(this, PresenceboardPageRoutingModule);
    };

    PresenceboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PresenceboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/presenceboard/presenceboard.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/presenceboard/presenceboard.module.ts ***!
    \*************************************************************/

  /*! exports provided: PresenceboardPageModule */

  /***/
  function srcAppPagesPresenceboardPresenceboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresenceboardPageModule", function () {
      return PresenceboardPageModule;
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


    var _presenceboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./presenceboard-routing.module */
    "./src/app/pages/presenceboard/presenceboard-routing.module.ts");
    /* harmony import */


    var _presenceboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./presenceboard.page */
    "./src/app/pages/presenceboard/presenceboard.page.ts");
    /* harmony import */


    var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/smallplayer/smallplayer.component */
    "./src/app/components/smallplayer/smallplayer.component.ts");

    var PresenceboardPageModule = function PresenceboardPageModule() {
      _classCallCheck(this, PresenceboardPageModule);
    };

    PresenceboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _presenceboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["PresenceboardPageRoutingModule"], src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_7__["SmallplayerModule"]],
      declarations: [_presenceboard_page__WEBPACK_IMPORTED_MODULE_6__["PresenceboardPage"]]
    })], PresenceboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/presenceboard/presenceboard.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/presenceboard/presenceboard.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPresenceboardPresenceboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3ByZXNlbmNlYm9hcmQvcHJlc2VuY2Vib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZXNlbmNlYm9hcmQvcHJlc2VuY2Vib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzZW5jZWJvYXJkL3ByZXNlbmNlYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWNrYWJsZTphY3RpdmV7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufSIsIi5jbGlja2FibGU6YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/presenceboard/presenceboard.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/presenceboard/presenceboard.page.ts ***!
    \***********************************************************/

  /*! exports provided: PresenceboardPage */

  /***/
  function srcAppPagesPresenceboardPresenceboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresenceboardPage", function () {
      return PresenceboardPage;
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


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");

    var PresenceboardPage = /*#__PURE__*/function () {
      function PresenceboardPage(router, route) {
        var _this2 = this;

        _classCallCheck(this, PresenceboardPage);

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
        this.route.queryParams.subscribe(function (queryParams) {
          if (queryParams && queryParams.eventId) {
            _this2.params = queryParams;
          } else {}
        });
      }

      _createClass(PresenceboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.load();
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.exceededPres = false;
                    this.exceededMay = false;
                    this.exceededAbs = false;
                    this.nextPresence = 0;
                    this.present = [];
                    _context6.next = 7;
                    return this.getPresentPlayers();

                  case 7:
                    this.nextMaybe = 0;
                    this.maybe = [];

                    if (!(this.present.length < 15)) {
                      _context6.next = 12;
                      break;
                    }

                    _context6.next = 12;
                    return this.getMaybePlayers();

                  case 12:
                    this.nextAbsence = 0;
                    this.absent = [];

                    if (!(this.present.length + this.maybe.length < 15)) {
                      _context6.next = 17;
                      break;
                    }

                    _context6.next = 17;
                    return this.getAbsentPlayers();

                  case 17:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPresentPlayers",
        value: function getPresentPlayers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var token, obj, result, i;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 2:
                    token = _context7.sent;
                    obj = {
                      token: token,
                      id: this.params.teamId,
                      eventId: this.params.eventId,
                      nextPresence: this.nextPresence
                    };

                    if (this.params.playerId && this.params.playerId != "undefined") {
                      obj.playerId = this.params.playerId;
                    }

                    _context7.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getPresence", obj);

                  case 7:
                    result = _context7.sent;
                    _context7.prev = 8;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context7.next = 12;
                      break;
                    }

                    throw result.error;

                  case 12:
                    ;

                    for (i = 0; i < result.length; i++) {
                      this.present.push(result[i]);
                    }

                    if (!(result.length == 0)) {
                      _context7.next = 22;
                      break;
                    }

                    this.nextMaybe = 0;
                    this.maybe = [];
                    _context7.next = 19;
                    return this.getMaybePlayers();

                  case 19:
                    this.exceededPres = true;
                    _context7.next = 23;
                    break;

                  case 22:
                    this.nextPresence += result.length;

                  case 23:
                    _context7.next = 27;
                    break;

                  case 25:
                    _context7.prev = 25;
                    _context7.t0 = _context7["catch"](8);

                  case 27:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[8, 25]]);
          }));
        }
      }, {
        key: "getAbsentPlayers",
        value: function getAbsentPlayers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var token, obj, result, i;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 2:
                    token = _context8.sent;
                    obj = {
                      token: token,
                      id: this.params.teamId,
                      eventId: this.params.eventId,
                      nextAbsence: this.nextAbsence
                    };

                    if (this.params.playerId && this.params.playerId != "undefined") {
                      obj.playerId = this.params.playerId;
                    }

                    _context8.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getAbsence", obj);

                  case 7:
                    result = _context8.sent;
                    _context8.prev = 8;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context8.next = 12;
                      break;
                    }

                    throw result.error;

                  case 12:
                    ;

                    for (i = 0; i < result.length; i++) {
                      this.absent.push(result[i]);
                    }

                    this.nextAbsence += result.length;
                    _context8.next = 19;
                    break;

                  case 17:
                    _context8.prev = 17;
                    _context8.t0 = _context8["catch"](8);

                  case 19:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[8, 17]]);
          }));
        }
      }, {
        key: "getMaybePlayers",
        value: function getMaybePlayers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var token, obj, result, i;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 2:
                    token = _context9.sent;
                    obj = {
                      token: token,
                      id: this.params.teamId,
                      eventId: this.params.eventId,
                      nextMaybe: this.nextMaybe
                    };

                    if (this.params.playerId && this.params.playerId != "undefined") {
                      obj.playerId = this.params.playerId;
                    }

                    _context9.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/getMaybe", obj);

                  case 7:
                    result = _context9.sent;
                    _context9.prev = 8;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context9.next = 12;
                      break;
                    }

                    throw result.error;

                  case 12:
                    ;

                    for (i = 0; i < result.length; i++) {
                      this.maybe.push(result[i]);
                    }

                    if (!(result.length == 0)) {
                      _context9.next = 22;
                      break;
                    }

                    this.nextAbsence = 0;
                    this.absent = [];
                    _context9.next = 19;
                    return this.getAbsentPlayers();

                  case 19:
                    this.exceededMay = true;
                    _context9.next = 23;
                    break;

                  case 22:
                    this.nextMaybe += result.length;

                  case 23:
                    _context9.next = 27;
                    break;

                  case 25:
                    _context9.prev = 25;
                    _context9.t0 = _context9["catch"](8);

                  case 27:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[8, 25]]);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.exceededPres) {
                      _context10.next = 5;
                      break;
                    }

                    _context10.next = 3;
                    return this.getPresentPlayers();

                  case 3:
                    _context10.next = 13;
                    break;

                  case 5:
                    if (this.exceededMay) {
                      _context10.next = 10;
                      break;
                    }

                    _context10.next = 8;
                    return this.getMaybePlayers();

                  case 8:
                    _context10.next = 13;
                    break;

                  case 10:
                    if (this.exceededAbs) {
                      _context10.next = 13;
                      break;
                    }

                    _context10.next = 13;
                    return this.getAbsentPlayers();

                  case 13:
                    event.target.complete();

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.load();
                    event.target.complete();

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "selectPlayer",
        value: function selectPlayer(pres, index) {
          var obj = {
            teamId: this.params.teamId
          };

          if (this.params.playerId && this.params.playerId != "undefined") {
            obj.playerId = this.params.playerId;
          }

          if (pres == 0) {
            obj.player = this.present[index].id;
          } else if (pres == 1) {
            obj.player = this.maybe[index].id;
          } else if (pres == 2) {
            obj.player = this.absent[index].id;
          }

          this.router.navigateByUrl("/player-profile?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_5__["serialize"])(obj));
        }
      }]);

      return PresenceboardPage;
    }();

    PresenceboardPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PresenceboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-presenceboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./presenceboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presenceboard/presenceboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./presenceboard.page.scss */
      "./src/app/pages/presenceboard/presenceboard.page.scss"))["default"]]
    })], PresenceboardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-presenceboard-presenceboard-module-es5.js.map