function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-player-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPlayerPlayerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{playerInfo.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [attr.invisible]=\"this.invisible\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n    <ion-segment-button value=\"Teams\">\n      <ion-label>{{\"PLAYERS.0\" | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Upcomming\">\n      <ion-label>{{\"PLAYERS.1\" | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>  \n  <div class=\"wrapper\">\n    <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state=='Teams'\">\n      <ion-card class=\"clickable\" *ngFor=\"let team of teams;let i = index\">\n        <ion-item lines=\"none\" (click)=\"selectTeam(i)\">\n         <app-team [name]=\"team.name\" [img]=\"team.image\" [category]=\"team.category\"></app-team>\n        </ion-item>\n      </ion-card>\n    </div>\n    <div class=\"cardContainer\" [@enterRight] *ngIf=\"this.state=='Upcomming' && loaded\">\n      <app-upcomming (presenceChanged)=\"changePresence($event)\" [index]=\"i\" (selected)=\"selectEvent($event)\" *ngFor=\"let event of (this.events); let i = index\" [teamId]=\"event.team\" [playerId]=\"this.params.playerId\" [id]=\"event.id\" [presence]=\"event.presence\" [place]=\"event.places\" [late]=\"event.late\" [name]=\"event.name\" [date]=\"event.date + '/' + event.month + '/' + event.year + '!' + ((event.startTime - event.startTime % 60) / 60) + ':' + ('0' + event.startTime % 60).slice(-2)\"></app-upcomming>\n      <ion-infinite-scroll *ngIf=\"this.state=='Upcomming' && loaded\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <div class=\"joinButton clickable\"  (click)=\"joinTeam()\">\n      <img src=\"../../../assets/qr.png\" alt=\"\">\n    </div>\n  </div>\n</ion-content>\n";
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
  "./src/app/pages/player/player-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/player/player-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PlayerPageRoutingModule */

  /***/
  function srcAppPagesPlayerPlayerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerPageRoutingModule", function () {
      return PlayerPageRoutingModule;
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


    var _player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player.page */
    "./src/app/pages/player/player.page.ts");

    var routes = [{
      path: '',
      component: _player_page__WEBPACK_IMPORTED_MODULE_3__["PlayerPage"]
    }];

    var PlayerPageRoutingModule = function PlayerPageRoutingModule() {
      _classCallCheck(this, PlayerPageRoutingModule);
    };

    PlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlayerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/player/player.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/player/player.module.ts ***!
    \***********************************************/

  /*! exports provided: PlayerPageModule */

  /***/
  function srcAppPagesPlayerPlayerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function () {
      return PlayerPageModule;
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


    var _player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./player-routing.module */
    "./src/app/pages/player/player-routing.module.ts");
    /* harmony import */


    var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./player.page */
    "./src/app/pages/player/player.page.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/team/team.component */
    "./src/app/components/team/team.component.ts");
    /* harmony import */


    var src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/upcomming/upcomming.component */
    "./src/app/components/upcomming/upcomming.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PlayerPageModule = function PlayerPageModule() {
      _classCallCheck(this, PlayerPageModule);
    };

    PlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _player_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], src_app_components_upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_8__["UpcommingModule"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamModule"]],
      declarations: [_player_page__WEBPACK_IMPORTED_MODULE_6__["PlayerPage"]]
    })], PlayerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/player/player.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/player/player.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPlayerPlayerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardContainer {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n  background-color: red;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n\nion-item {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.nothingButton {\n  margin: 20px 20px 20px 20px !important;\n}\n\nhtml, body, ion-app, div.nav-decor, ion-content, app-root, #background-content {\n  background-color: transparent !important;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.joinButton {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  margin: 20px 20px 20px 20px !important;\n  color: white;\n  font-size: 55px;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  background-color: #0088ff;\n  text-align: center;\n  padding: 12px 0px 0px 0px;\n  line-height: 40px;\n  box-shadow: 10px 7px 30px -16px rgba(0, 0, 0, 0.75);\n}\n\n.joinButton img {\n  width: 30px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  margin-left: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGF5ZXIvcGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEREE7RUFDSSw0Q0FBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksc0NBQUE7QUNNSjs7QURKQTtFQUFpRix3Q0FBQTtBQ1FqRjs7QUROQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyL3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZENvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmgze1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RoaW5nQnV0dG9ue1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xufVxuaHRtbCwgYm9keSwgaW9uLWFwcCwgZGl2Lm5hdi1kZWNvciwgaW9uLWNvbnRlbnQsIGFwcC1yb290LCAjYmFja2dyb3VuZC1jb250ZW50IHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4uY2xpY2thYmxlOmFjdGl2ZXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG4uam9pbkJ1dHRvbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDBweCAwcHggMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggN3B4IDMwcHggLTE2cHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cbi5qb2luQnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBmaWx0ZXI6IGludmVydCgxLjApO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xufSIsIi5jYXJkQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ub3RoaW5nQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsIGJvZHksIGlvbi1hcHAsIGRpdi5uYXYtZGVjb3IsIGlvbi1jb250ZW50LCBhcHAtcm9vdCwgI2JhY2tncm91bmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2FibGU6YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuXG4uam9pbkJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggN3B4IDMwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmpvaW5CdXR0b24gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/player/player.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/player/player.page.ts ***!
    \*********************************************/

  /*! exports provided: PlayerPage */

  /***/
  function srcAppPagesPlayerPlayerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerPage", function () {
      return PlayerPage;
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


    var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home/home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../join-team/join-team.page */
    "./src/app/pages/join-team/join-team.page.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");

    var PlayerPage = /*#__PURE__*/function () {
      function PlayerPage(router, route, modal) {
        var _this2 = this;

        _classCallCheck(this, PlayerPage);

        this.router = router;
        this.route = route;
        this.modal = modal;
        this.playerInfo = {};
        this.state = "Teams";
        this.invisible = false;
        this.teams = [];
        this.events = [];
        this.mustGoBack = false;
        this.loaded = false;
        this.params = {};
        this.nextEvent = 0;
        route.queryParams.subscribe(function (queryParams) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var filtered;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.params = queryParams;

                    if (!(queryParams && queryParams.playerId)) {
                      _context6.next = 11;
                      break;
                    }

                    filtered = _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].players.filter(function (el) {
                      return el.id == queryParams.playerId;
                    });

                    if (!(filtered.length == 0)) {
                      _context6.next = 6;
                      break;
                    }

                    this.mustGoBack = true;
                    return _context6.abrupt("return");

                  case 6:
                    this.playerInfo = filtered[0];
                    this.playerInfo.name = filtered[0].first + " " + filtered[0].last;
                    this.load();
                    _context6.next = 12;
                    break;

                  case 11:
                    this.mustGoBack = true;

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        });
      }

      _createClass(PlayerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var i;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".teams");

                  case 2:
                    if (!_context7.sent) {
                      _context7.next = 14;
                      break;
                    }

                    _context7.next = 5;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".teams");

                  case 5:
                    this.teams = _context7.sent;
                    i = 0;

                  case 7:
                    if (!(i < this.teams.length)) {
                      _context7.next = 14;
                      break;
                    }

                    _context7.next = 10;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("image." + this.teams[i].id);

                  case 10:
                    this.teams[i].image = _context7.sent;

                  case 11:
                    i++;
                    _context7.next = 7;
                    break;

                  case 14:
                    _context7.next = 16;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".upcomming");

                  case 16:
                    if (!_context7.sent) {
                      _context7.next = 20;
                      break;
                    }

                    _context7.next = 19;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("player." + this.playerInfo.id + ".upcomming");

                  case 19:
                    this.events = _context7.sent;

                  case 20:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this.mustGoBack) {
                      this.router.navigateByUrl("/home");
                      this.mustGoBack = false;
                    }

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!(this.playerInfo.teams.length != this.teams.length)) {
                      _context9.next = 5;
                      break;
                    }

                    _context9.next = 3;
                    return this.getTeams();

                  case 3:
                    _context9.next = 5;
                    return this.getUpcomming();

                  case 5:
                    this.loaded = true;

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getTeams",
        value: function getTeams() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this3 = this;

            var token, teams, _loop, i;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 2:
                    token = _context10.sent;
                    _context10.next = 5;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["call"])("http://192.168.2.251:3000/api/getTeams", {
                      token: token,
                      playerId: this.playerInfo.id
                    });

                  case 5:
                    teams = _context10.sent;
                    _context10.prev = 6;
                    teams = JSON.parse(teams);

                    if (!teams.error) {
                      _context10.next = 10;
                      break;
                    }

                    throw teams.error;

                  case 10:
                    ;
                    this.teams = teams;
                    Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["set"])("player." + this.playerInfo.id + ".teams", this.teams);

                    _loop = function _loop() {
                      var j = parseInt("" + i);
                      toDataURL(_this3.teams[j].image, function (base64) {
                        Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["set"])("image." + _this3.teams[j].id, base64 + "");
                      });
                    };

                    for (i = 0; i < this.teams.length; i++) {
                      _loop();
                    }

                    _context10.next = 19;
                    break;

                  case 17:
                    _context10.prev = 17;
                    _context10.t0 = _context10["catch"](6);

                  case 19:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[6, 17]]);
          }));
        }
      }, {
        key: "getUpcomming",
        value: function getUpcomming() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var token, events;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.nextEvent = 0;
                    _context11.next = 3;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 3:
                    token = _context11.sent;
                    _context11.next = 6;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["call"])("http://192.168.2.251:3000/api/getUpcommingEvents", {
                      token: token,
                      playerId: this.playerInfo.id,
                      nextEvent: this.nextEvent
                    });

                  case 6:
                    events = _context11.sent;
                    _context11.prev = 7;
                    events = JSON.parse(events);

                    if (!events.error) {
                      _context11.next = 11;
                      break;
                    }

                    throw events.error;

                  case 11:
                    ;
                    this.events = events;
                    this.nextEvent += events.length;
                    Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["set"])("player." + this.playerInfo.id + ".upcomming", this.events);
                    _context11.next = 19;
                    break;

                  case 17:
                    _context11.prev = 17;
                    _context11.t0 = _context11["catch"](7);

                  case 19:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[7, 17]]);
          }));
        }
      }, {
        key: "selectTeam",
        value: function selectTeam(index) {
          this.router.navigateByUrl("/team/events?teamId=".concat(this.teams[index].id, "&playerId=").concat(this.playerInfo.id));
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(index) {
          _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].currentEventInfo = this.events[index.index];
          var obj = {
            eventId: this.events[index.index].id,
            playerId: this.params.playerId,
            teamId: this.events[index.index].team
          };

          if (!this.params.playerId) {
            delete obj.playerId;
          }

          this.router.navigateByUrl("/event?" + Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_9__["serialize"])(obj));
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
        }
      }, {
        key: "joinTeam",
        value: function joinTeam() {
          var _this4 = this;

          this.modal.create({
            component: _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_6__["JoinTeamPage"]
          }).then(function (modal) {
            modal.present();
            _this4.invisible = true;
            modal.onDidDismiss().then(function (data) {
              _this4.invisible = false;

              if (data.data && !_this4.teams.map(function (x) {
                return x.id;
              }).includes(data.data.id)) {
                _this4.teams.push(data.data);
              }
            });
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.loaded = false;
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (!(this.state == 'Teams')) {
                      _context12.next = 6;
                      break;
                    }

                    _context12.next = 3;
                    return this.getTeams();

                  case 3:
                    event.target.complete();
                    _context12.next = 9;
                    break;

                  case 6:
                    _context12.next = 8;
                    return this.getUpcomming();

                  case 8:
                    event.target.complete();

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var token, events, i;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_7__["get"])("token");

                  case 2:
                    token = _context13.sent;
                    _context13.next = 5;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["call"])("http://192.168.2.251:3000/api/getUpcommingEvents", {
                      token: token,
                      playerId: this.playerInfo.id,
                      nextEvent: this.nextEvent
                    });

                  case 5:
                    events = _context13.sent;
                    _context13.prev = 6;
                    events = JSON.parse(events);

                    if (!events.error) {
                      _context13.next = 10;
                      break;
                    }

                    throw events.error;

                  case 10:
                    ;

                    for (i = 0; i < events.length; i++) {
                      this.events.push(events[i]);
                    }

                    this.nextEvent += events.length;
                    event.target.complete();
                    _context13.next = 18;
                    break;

                  case 16:
                    _context13.prev = 16;
                    _context13.t0 = _context13["catch"](6);

                  case 18:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[6, 16]]);
          }));
        }
      }]);

      return PlayerPage;
    }();

    PlayerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    PlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-player',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./player.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('enterLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(-100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(0px)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(0%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('enterRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(0px)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(0%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: "translateX(100%)"
      }))])])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./player.page.scss */
      "./src/app/pages/player/player.page.scss"))["default"]]
    })], PlayerPage);

    function toDataURL(url, callback) {
      var image;
      image = new Image();
      image.crossOrigin = 'Anonymous';
      image.addEventListener('load', function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        try {
          callback(canvas.toDataURL('image/png'));
        } catch (err) {
          console.error(err);
        }
      });
      image.src = url;
    }
    /***/

  }
}]);
//# sourceMappingURL=pages-player-player-module-es5.js.map