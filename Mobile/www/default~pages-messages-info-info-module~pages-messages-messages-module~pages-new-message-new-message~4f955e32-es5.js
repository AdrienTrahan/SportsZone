function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shareteam/shareteam.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shareteam/shareteam.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShareteamShareteamPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{\"SHARETEAM.TITLE\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container>\n  <canvas #canvas></canvas>\n  <p class=\"instructions\">{{\"SHARETEAM.0\" | translate}}</p>\n  <div class=\"qrcodeWrapper\">\n    <qr-code  class=\"qrcode\" [value]=\"url\" [size]=\"this.screensize\"></qr-code>\n  </div>\n  <p class=\"or\">or</p>\n  <ion-input class=\"link\" expand=\"block\" [value]=\"code\" readonly></ion-input>\n  <div (click)=\"copyUrl()\" class=\"linkOverlay\"></div>\n  <ion-button (click)=\"shareUrl()\" class=\"shareButton\" expand=\"block\">{{\"SHARETEAM.2\" | translate}}</ion-button>\n  <ion-button (click)=\"inviteUrl()\" class=\"genButton\" expand=\"block\">{{\"SHARETEAM.3\" | translate}}</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/controller/team.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/controller/team.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamControllerTeamPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\" *ngIf=\"this.selectedPage == 0\">\n      <ion-back-button *ngIf=\"!this.deleting\" color=\"light\" defaultHref=\"../\"></ion-back-button>\n      <ion-button *ngIf=\"this.deleting && this.selectedPage == 0 && (alias.teamInfo.access == 2 || alias.teamInfo.access == 3)\" color=\"white\" (click)=\"cancelDeleteEvents()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{\"CONTROLLER.\" + this.selectedPage | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!this.deleting && this.selectedPage == 0 && (alias.teamInfo.access == 2 || alias.teamInfo.access == 3)\" color=\"white\" (click)=\"deleteEvents()\">\n        <ion-icon name=\"pencil-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"this.deleting && this.selectedPage == 0 && (alias.teamInfo.access == 2 || alias.teamInfo.access == 3)\" color=\"white\" (click)=\"deleteEventsTrash()\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!this.deleting && this.selectedPage == 0 && (alias.teamInfo.access == 2 || alias.teamInfo.access == 3)\" color=\"white\" (click)=\"newEvent()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"this.selectedPage == 1 && (alias.teamInfo.access == 2 || alias.teamInfo.access == 3)\" color=\"white\" (click)=\"shareTeam()\">\n        <ion-icon name=\"link-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"this.selectedPage == 2\" color=\"white\" (click)=\"newMessageThread()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-tabs #tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button [tab]=\"'events?' + parameters\" (click)=\"selectPage(0)\">\n        <ion-icon [color]=\"(this.selectedPage == 0) ? 'navbar-theme' : ''\" name=\"baseball-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button [tab]=\"'people?' + parameters\" (click)=\"selectPage(1)\">\n        <ion-icon [color]=\"(this.selectedPage == 1) ? 'navbar-theme' : ''\" name=\"people-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button [tab]=\"'mail?' + parameters\" (click)=\"selectPage(2)\">\n        <ion-icon [color]=\"(this.selectedPage == 2) ? 'navbar-theme' : ''\" name=\"mail-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button [tab]=\"'settings?' + parameters\" (click)=\"selectPage(3)\">\n        <ion-icon [color]=\"(this.selectedPage == 3) ? 'navbar-theme' : ''\" name=\"settings-outline\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>";
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
  "./src/app/pages/shareteam/shareteam.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/shareteam/shareteam.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShareteamShareteamPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -10;\n  opacity: 0;\n}\n\n.instructions {\n  font-size: 20px;\n  margin: 20px 50px 0px 50px;\n  color: gray;\n}\n\n.qrcodeWrapper {\n  margin: 20px 50px 0px 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.or {\n  text-align: center;\n  margin: 20px;\n  color: lightslategray;\n}\n\n.shareButton {\n  margin: 20px;\n}\n\n.genButton {\n  margin: 20px;\n}\n\n.link {\n  border-radius: 8px;\n  width: auto;\n  background-color: #f0f0f0;\n  margin: 20px;\n  color: gray;\n  position: relative;\n}\n\n.linkOverlay {\n  height: 40px;\n  position: relative;\n  top: -60px;\n  margin: 0px 20px -60px 20px;\n  background-color: none;\n  width: auto;\n  z-index: 10;\n}\n\nion-input {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\nion-input {\n  pointer-events: all !important;\n}\n\nion-input > * {\n  pointer-events: all !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3NoYXJldGVhbS9zaGFyZXRlYW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyZXRlYW0vc2hhcmV0ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQ01KOztBREhBO0VBQ0ksOEJBQUE7QUNNSjs7QURKQTtFQUNJLDhCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaGFyZXRlYW0vc2hhcmV0ZWFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICBvcGFjaXR5OiAwLjA7XG59XG4uaW5zdHJ1Y3Rpb25ze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDIwcHggNTBweCAwcHggNTBweDtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5xcmNvZGVXcmFwcGVye1xuICAgIG1hcmdpbjogMjBweCA1MHB4IDBweCA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9ye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuXG4uc2hhcmVCdXR0b257XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuLmdlbkJ1dHRvbntcbiAgICBtYXJnaW46IDIwcHg7XG59XG4ubGlua3tcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpbmtPdmVybGF5e1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNjBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4IC02MHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuaW9uLWlucHV0e1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuXG5pb24taW5wdXR7XG4gICAgcG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtcbn1cbmlvbi1pbnB1dCA+ICp7XG4gICAgcG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtcbn0iLCJjYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDUwcHggMHB4IDUwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ucXJjb2RlV3JhcHBlciB7XG4gIG1hcmdpbjogMjBweCA1MHB4IDBweCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cblxuLnNoYXJlQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZ2VuQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpbmtPdmVybGF5IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTYwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHggLTYwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIHotaW5kZXg6IDEwO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0ID4gKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/shareteam/shareteam.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/shareteam/shareteam.page.ts ***!
    \***************************************************/

  /*! exports provided: ShareteamPage */

  /***/
  function srcAppPagesShareteamShareteamPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareteamPage", function () {
      return ShareteamPage;
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


    var _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../team/controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var _functions_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../functions/serializer */
    "./src/app/functions/serializer.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Share;

    var ShareteamPage = /*#__PURE__*/function () {
      function ShareteamPage(translate, alertController, modal, platform, clipboard, toastController) {
        _classCallCheck(this, ShareteamPage);

        this.translate = translate;
        this.alertController = alertController;
        this.modal = modal;
        this.platform = platform;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this.url = "";
        this.screensize = 200;
        this.code = "";
        this.socialSharing = new _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]();
        var object = {
          teamId: _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.id,
          invitecode: _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.invitecode + ""
        };
        var ending = Object(_functions_serializer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(object);
        this.url = "http://192.168.2.251:3000/api/joinTeam?" + ending;
        this.screensize = Math.min(this.platform.width() - 100, this.platform.height());
        this.code = _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.id + "-" + _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.invitecode;
      }

      _createClass(ShareteamPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.screensize = Math.min(this.canvas.nativeElement.getBoundingClientRect().width - 100, this.canvas.nativeElement.getBoundingClientRect().height - 250);
        }
      }, {
        key: "close",
        value: function close() {
          this.modal.dismiss();
        }
      }, {
        key: "copyUrl",
        value: function copyUrl() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.clipboard.copy(this.code);
                    _context6.next = 3;
                    return this.toastController.create({
                      message: this.translate.instant("ALERTS.15.MESSAGE"),
                      duration: 1000
                    });

                  case 3:
                    toast = _context6.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "shareUrl",
        value: function shareUrl() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Share.share({
                      title: this.translate.instant("ALERTS.17.TITLE"),
                      text: this.translate.instant("ALERTS.17.MESSAGE", {
                        code: this.code
                      }),
                      dialogTitle: this.translate.instant("ALERTS.17.DIALOG")
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "inviteUrl",
        value: function inviteUrl() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.10.TITLE"),
                      message: this.translate.instant("ALERTS.10.MESSAGE"),
                      buttons: [{
                        text: this.translate.instant("ALERTS.10.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant("ALERTS.10.BUTTONS.1"),
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                            var token, obj, result, object, ending;
                            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                              while (1) {
                                switch (_context8.prev = _context8.next) {
                                  case 0:
                                    _context8.next = 2;
                                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_9__["get"])("token");

                                  case 2:
                                    token = _context8.sent;
                                    obj = {
                                      token: token,
                                      id: _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.id
                                    };
                                    _context8.next = 6;
                                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_5__["call"])("http://192.168.2.251:3000/api/generateNewInviteCode", obj);

                                  case 6:
                                    result = _context8.sent;
                                    _context8.prev = 7;
                                    result = JSON.parse(result);

                                    if (!(result.error || !result.code)) {
                                      _context8.next = 11;
                                      break;
                                    }

                                    throw result.error;

                                  case 11:
                                    ;
                                    _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.invitecode = result.code;
                                    object = {
                                      teamId: _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.id,
                                      invitecode: result.code + ""
                                    };
                                    ending = Object(_functions_serializer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(object);
                                    this.url = "http://192.168.2.251:3000/api/joinTeam?" + ending;
                                    this.code = _team_controller_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"].teamInfo.id + "-" + result.code;
                                    _context8.next = 21;
                                    break;

                                  case 19:
                                    _context8.prev = 19;
                                    _context8.t0 = _context8["catch"](7);

                                  case 21:
                                  case "end":
                                    return _context8.stop();
                                }
                              }
                            }, _callee8, this, [[7, 19]]);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return ShareteamPage;
    }();

    ShareteamPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas')], ShareteamPage.prototype, "canvas", void 0);
    ShareteamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shareteam',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shareteam.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shareteam/shareteam.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shareteam.page.scss */
      "./src/app/pages/shareteam/shareteam.page.scss"))["default"]]
    })], ShareteamPage);
    /***/
  },

  /***/
  "./src/app/pages/team/controller/team.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/team/controller/team.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamControllerTeamPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vY29udHJvbGxlci90ZWFtLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/team/controller/team.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/team/controller/team.page.ts ***!
    \****************************************************/

  /*! exports provided: TeamPage */

  /***/
  function srcAppPagesTeamControllerTeamPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamPage", function () {
      return TeamPage;
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


    var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shareteam_shareteam_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shareteam/shareteam.page */
    "./src/app/pages/shareteam/shareteam.page.ts");
    /* harmony import */


    var src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/functions/serializer */
    "./src/app/functions/serializer.ts");
    /* harmony import */


    var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-page-transitions/ngx */
    "./node_modules/@ionic-native/native-page-transitions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TeamPage_1;

    var TeamPage = TeamPage_1 = /*#__PURE__*/function () {
      function TeamPage(router, route, modal, nativePageTransitions) {
        var _this3 = this;

        _classCallCheck(this, TeamPage);

        this.router = router;
        this.route = route;
        this.modal = modal;
        this.nativePageTransitions = nativePageTransitions;
        this.section = ["Events", "Players", "Mail", "Settings"];
        this.selectedPage = 0;
        this.alias = TeamPage_1;
        this.parameters = "";
        this.deleting = false;
        this.loadingObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.deletingObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.newMessageObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.queryParams = {};
        this.route.queryParams.subscribe(function (queryParams) {
          _this3.parameters = Object(src_app_functions_serializer__WEBPACK_IMPORTED_MODULE_8__["serialize"])(queryParams);

          if (queryParams && queryParams.teamId) {
            _this3.queryParams = queryParams;

            _this3.loadGeneralTeam(queryParams.teamId, queryParams.playerId);
          }
        });
      }

      _createClass(TeamPage, [{
        key: "finishLoading",
        value: function finishLoading(data) {
          this.loadingObservable.next(data);
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.loadingObservable;
        }
      }, {
        key: "getDeletingObservable",
        value: function getDeletingObservable() {
          return this.deletingObservable;
        }
      }, {
        key: "getNewMessageObservable",
        value: function getNewMessageObservable() {
          return this.newMessageObservable;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var i;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("controller." + (this.queryParams.playerId ? this.queryParams.playerId : "token") + "." + this.queryParams.teamId + ".teamInfo");

                  case 2:
                    if (!_context10.sent) {
                      _context10.next = 15;
                      break;
                    }

                    _context10.next = 5;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("controller." + (this.queryParams.playerId ? this.queryParams.playerId : "token") + "." + this.queryParams.teamId + ".teamInfo");

                  case 5:
                    TeamPage_1.teamInfo = _context10.sent;
                    i = 0;

                  case 7:
                    if (!(i < TeamPage_1.teamInfo.players.length)) {
                      _context10.next = 14;
                      break;
                    }

                    _context10.next = 10;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("image." + TeamPage_1.teamInfo.players[i].id);

                  case 10:
                    TeamPage_1.teamInfo.players[i].image = _context10.sent;

                  case 11:
                    i++;
                    _context10.next = 7;
                    break;

                  case 14:
                    this.finishLoading();

                  case 15:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "selectPage",
        value: function selectPage(index) {
          this.selectedPage = index;
        }
      }, {
        key: "deleteEvents",
        value: function deleteEvents() {
          this.deletingObservable.next({});
          this.deleting = true;
        }
      }, {
        key: "deleteEventsTrash",
        value: function deleteEventsTrash() {
          this.deletingObservable.next({
            execute: true
          });
          this.deleting = false;
        }
      }, {
        key: "cancelDeleteEvents",
        value: function cancelDeleteEvents() {
          this.deletingObservable.next({
            cancel: true
          });
          this.deleting = false;
        }
      }, {
        key: "loadGeneralTeam",
        value: function loadGeneralTeam(teamId, playerId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var token, obj, result, _loop, i;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 2:
                    token = _context11.sent;
                    obj = {
                      token: token,
                      id: teamId
                    };

                    if (playerId) {
                      obj.playerId = playerId;
                    }

                    _context11.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getGeneralTeamInfo", obj);

                  case 7:
                    result = _context11.sent;
                    _context11.prev = 8;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context11.next = 12;
                      break;
                    }

                    throw result.error;

                  case 12:
                    ;
                    TeamPage_1.teamInfo = result;
                    TeamPage_1.teamInfo.playerId = playerId;
                    Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["set"])("controller." + (this.queryParams.playerId ? this.queryParams.playerId : "token") + "." + this.queryParams.teamId + ".teamInfo", TeamPage_1.teamInfo);

                    _loop = function _loop() {
                      var j = parseInt("" + i);
                      toDataURL(TeamPage_1.teamInfo.players[j].image, function (base64) {
                        Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["set"])("image." + TeamPage_1.teamInfo.players[j].id, base64 + "");
                      });
                    };

                    for (i = 0; i < TeamPage_1.teamInfo.players.length; i++) {
                      _loop();
                    }

                    this.finishLoading();
                    _context11.next = 25;
                    break;

                  case 21:
                    _context11.prev = 21;
                    _context11.t0 = _context11["catch"](8);
                    _context11.t0 = _context11.t0 + "";

                    if (_context11.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 25:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[8, 21]]);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["logout"])();

                  case 2:
                    _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"].userInformation = {};
                    this.router.navigateByUrl("/");

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "shareTeam",
        value: function shareTeam() {
          this.modal.create({
            component: _shareteam_shareteam_page__WEBPACK_IMPORTED_MODULE_7__["ShareteamPage"]
          }).then(function (modal) {
            modal.present();
          })["catch"](function (err) {});
        }
      }, {
        key: "newEvent",
        value: function newEvent() {
          var options = {
            direction: 'up',
            duration: 200,
            slowdownfactor: -1,
            iosdelay: 100
          };
          this.nativePageTransitions.slide(options);
          this.router.navigateByUrl("/createevent?" + this.parameters);
        }
      }, {
        key: "newMessageThread",
        value: function newMessageThread() {
          this.newMessageObservable.next();
        }
      }]);

      return TeamPage;
    }();

    TeamPage.teamInfo = {};

    TeamPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
      }];
    };

    TeamPage = TeamPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./team.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/controller/team.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./team.page.scss */
      "./src/app/pages/team/controller/team.page.scss"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TeamPage);

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
//# sourceMappingURL=default~pages-messages-info-info-module~pages-messages-messages-module~pages-new-message-new-message~4f955e32-es5.js.map