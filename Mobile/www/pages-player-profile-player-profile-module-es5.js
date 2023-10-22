function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-profile-player-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player-profile/player-profile.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player-profile/player-profile.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPlayerProfilePlayerProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" defaultHref=\"/\" icon=\"close\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\" *ngIf=\"this.playerInformation.first\">{{this.playerInformation.first + \" \" + this.playerInformation.last}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"this.playerInformation != {}\" class=\"imageCenter\">\n    <img [src]=\"this.playerInformation.image\" class=\"profileImage\" alt=\"\">\n  </div>\n  <h1 *ngIf=\"this.playerInformation.first\" class=\"nameTitle\">{{this.playerInformation.first + \" \" + this.playerInformation.last}}</h1>\n  <h2 class=\"tutorTitle\" *ngIf=\"this.playerInformation.role == 'player'\">{{this.playerInformation.p_first + \" \" + this.playerInformation.p_last}}</h2>\n  <br>\n  <br>\n  <ion-item-divider *ngIf=\"this.playerInformation.age || this.playerInformation.sex || this.playerInformation.position || this.playerInformation.shirtnumber\">\n    <ion-label>\n      {{\"PLAYERPROFILE.INFO\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item *ngIf=\"this.playerInformation.sex && this.playerInformation.sex != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.SEX\" | translate}}</ion-label>\n    {{\"GENDER.\" + this.playerInformation.sex | translate}}\n  </ion-item>\n  <ion-item *ngIf=\"this.playerInformation.age && this.playerInformation.age != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.AGE\" | translate}}</ion-label>\n    {{this.playerInformation.age}}\n  </ion-item>\n  <ion-item *ngIf=\"this.playerInformation.shirtnumber && this.playerInformation.shirtnumber != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.SHIRT\" | translate}}</ion-label>\n    {{this.playerInformation.shirtnumber}}\n  </ion-item>\n  <ion-item *ngIf=\"this.playerInformation.position && this.playerInformation.position != 'undefined'\">\n    <ion-label class=\"\">{{\"PLAYERPROFILE.POSITION\" | translate}}</ion-label>\n    {{this.playerInformation.position}}\n  </ion-item>\n  <br>\n  <ion-item-divider *ngIf=\"this.playerInformation.contacts && this.playerInformation.contacts.length > 0 && this.playerInformation.role != 'player'\">\n    <ion-label>\n      {{\"PLAYERPROFILE.CONTACT\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item-divider *ngIf=\"this.playerInformation.contacts && this.playerInformation.contacts.length > 0 && this.playerInformation.role == 'player'\">\n    <ion-label>\n      {{\"PLAYERPROFILE.CONTACTPARENT\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let contact of this.playerInformation.contacts; let i = index;\">\n    <ion-label class=\"\">{{contact.name}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'phone'\" class=\"highlighted\" (click)=\"callPhoneNumber(i, false)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'email'\" class=\"highlighted\" (click)=\"sendEmail(i, false)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'text'\" class=\"highlighted\">{{contact.data}}</ion-label>\n    <ion-button (click)=\"copyData(i, false)\" class=\"copyButton\"><ion-icon name=\"copy\"></ion-icon></ion-button>\n  </ion-item>\n  <br>\n  <ion-item-divider *ngIf=\"this.playerInformation.playerContacts && this.playerInformation.playerContacts.length > 0\">\n    <ion-label>\n      {{\"PLAYERPROFILE.CONTACTPLAYER\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let contact of this.playerInformation.playerContacts; let i = index;\">\n    <ion-label class=\"\">{{contact.name}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'phone'\" class=\"highlighted\" (click)=\"callPhoneNumber(i, true)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'email'\" class=\"highlighted\" (click)=\"sendEmail(i, true)\" >{{contact.data}}</ion-label>\n    <ion-label *ngIf=\"contact.type == 'text'\" class=\"highlighted\">{{contact.data}}</ion-label>\n    <ion-button (click)=\"copyData(i, true)\" class=\"copyButton\"><ion-icon name=\"copy\"></ion-icon></ion-button>\n  </ion-item>\n</ion-content>\n";
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
  "./src/app/pages/player-profile/player-profile-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/player-profile/player-profile-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PlayerProfilePageRoutingModule */

  /***/
  function srcAppPagesPlayerProfilePlayerProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerProfilePageRoutingModule", function () {
      return PlayerProfilePageRoutingModule;
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


    var _player_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player-profile.page */
    "./src/app/pages/player-profile/player-profile.page.ts");

    var routes = [{
      path: '',
      component: _player_profile_page__WEBPACK_IMPORTED_MODULE_3__["PlayerProfilePage"]
    }];

    var PlayerProfilePageRoutingModule = function PlayerProfilePageRoutingModule() {
      _classCallCheck(this, PlayerProfilePageRoutingModule);
    };

    PlayerProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlayerProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/player-profile/player-profile.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/player-profile/player-profile.module.ts ***!
    \***************************************************************/

  /*! exports provided: PlayerProfilePageModule */

  /***/
  function srcAppPagesPlayerProfilePlayerProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerProfilePageModule", function () {
      return PlayerProfilePageModule;
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


    var _player_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./player-profile-routing.module */
    "./src/app/pages/player-profile/player-profile-routing.module.ts");
    /* harmony import */


    var _player_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./player-profile.page */
    "./src/app/pages/player-profile/player-profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PlayerProfilePageModule = function PlayerProfilePageModule() {
      _classCallCheck(this, PlayerProfilePageModule);
    };

    PlayerProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _player_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerProfilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_player_profile_page__WEBPACK_IMPORTED_MODULE_6__["PlayerProfilePage"]]
    })], PlayerProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/player-profile/player-profile.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/player-profile/player-profile.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPlayerProfilePlayerProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profileImage {\n  border-radius: 50%;\n  width: calc(50% - 50px);\n  max-width: 200px;\n  min-width: 75px;\n}\n\n.imageCenter {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  padding: 50px 0px 20px 0px;\n}\n\n.nameTitle {\n  font-size: 22px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  color: black;\n}\n\n.tutorTitle {\n  font-size: 16px;\n  text-align: center;\n  margin: 2.5px 0px 0px 0px;\n  padding: 0px;\n  color: gray;\n}\n\n.highlighted {\n  color: #0098ff;\n  float: right;\n  display: span;\n  text-align: right;\n}\n\n.copyButton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3BsYXllci1wcm9maWxlL3BsYXllci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZXtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDc1cHg7XG59XG4uaW1hZ2VDZW50ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweCAwcHggMjBweCAwcHg7XG59XG4ubmFtZVRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi50dXRvclRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyLjVweCAwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5oaWdobGlnaHRlZHtcbiAgICBjb2xvcjogIzAwOThmZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogc3BhbjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb3B5QnV0dG9ue1xuICAgIG1hcmdpbjogNXB4O1xufSIsIi5wcm9maWxlSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi5pbWFnZUNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDBweCAyMHB4IDBweDtcbn1cblxuLm5hbWVUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50dXRvclRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMi41cHggMHB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjMDA5OGZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IHNwYW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY29weUJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/player-profile/player-profile.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/player-profile/player-profile.page.ts ***!
    \*************************************************************/

  /*! exports provided: PlayerProfilePage */

  /***/
  function srcAppPagesPlayerProfilePlayerProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerProfilePage", function () {
      return PlayerProfilePage;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PlayerProfilePage = /*#__PURE__*/function () {
      function PlayerProfilePage(translate, clipboard, route, callNumber, alertController, emailComposer) {
        var _this2 = this;

        _classCallCheck(this, PlayerProfilePage);

        this.translate = translate;
        this.clipboard = clipboard;
        this.route = route;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.emailComposer = emailComposer;
        this.playerInformation = {};
        this.params = {};
        this.route.queryParams.subscribe(function (queryParams) {
          _this2.params = queryParams;
        });
      }

      _createClass(PlayerProfilePage, [{
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
                    _context6.next = 2;
                    return this.getPlayerInfo();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPlayerInfo",
        value: function getPlayerInfo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var token, obj, result, i, alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 2:
                    token = _context7.sent;
                    obj = {
                      token: token,
                      id: this.params.teamId,
                      player: this.params.player
                    };

                    if (this.params.playerId && this.params.playerId != "undefined") {
                      obj.playerId = this.params.playerId;
                    }

                    _context7.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getPlayerInformation", obj);

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

                    for (i = 0; i < result.contacts.length; i++) {
                      if (result.contacts[i].type == "phone") {
                        result.contacts[i].data = formatPhoneNumber(result.contacts[i].data.replace(/\D/g, ''));
                      }
                    }

                    for (i = 0; i < result.playerContacts.length; i++) {
                      if (result.playerContacts[i].type == "phone") {
                        result.playerContacts[i].data = formatPhoneNumber(result.playerContacts[i].data.replace(/\D/g, ''));
                      }
                    }

                    this.playerInformation = result;
                    _context7.next = 25;
                    break;

                  case 18:
                    _context7.prev = 18;
                    _context7.t0 = _context7["catch"](8);
                    _context7.next = 22;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.8.TITLE"),
                      message: this.translate.instant("ALERTS.8.MESSAGE"),
                      buttons: [{
                        text: this.translate.instant("ALERTS.8.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 22:
                    alert = _context7.sent;
                    _context7.next = 25;
                    return alert.present();

                  case 25:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[8, 18]]);
          }));
        }
      }, {
        key: "callPhoneNumber",
        value: function callPhoneNumber(i, second) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this3 = this;

            var phone, alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    phone = "";

                    if (second) {
                      phone = this.playerInformation.playerContacts[i].data;
                    } else {
                      phone = this.playerInformation.contacts[i].data;
                    }

                    _context8.next = 4;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.9.TITLE"),
                      message: this.translate.instant("ALERTS.9.MESSAGE", {
                        phone: phone
                      }),
                      buttons: [{
                        text: this.translate.instant("ALERTS.9.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant("ALERTS.9.BUTTONS.1"),
                        handler: function handler() {
                          _this3.callNumber.callNumber(phone.replace(/\D/g, ''), true).then(function (res) {
                            return console.log('Launched dialer!', res);
                          })["catch"](function (err) {
                            return console.log('Error launching dialer', err);
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context8.sent;
                    _context8.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(i, second) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var email, _email;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (second) {
                      email = {
                        to: this.playerInformation.playerContacts[i].data
                      };
                      this.emailComposer.open(email);
                    } else {
                      _email = {
                        to: this.playerInformation.contacts[i].data
                      };
                      this.emailComposer.open(_email);
                    }

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "copyData",
        value: function copyData(i, second) {
          if (second) {
            this.clipboard.copy(this.playerInformation.playerContacts[i].data);
          } else {
            this.clipboard.copy(this.playerInformation.contacts[i].data);
          }
        }
      }]);

      return PlayerProfilePage;
    }();

    PlayerProfilePage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Clipboard"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"]
      }];
    };

    PlayerProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-player-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./player-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player-profile/player-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./player-profile.page.scss */
      "./src/app/pages/player-profile/player-profile.page.scss"))["default"]]
    })], PlayerProfilePage);

    function formatPhoneNumber(phoneNumberString) {
      if (!phoneNumberString) {
        return;
      }

      var cleaned = ('' + phoneNumberString).replace(/\D/g, '');

      if (cleaned.length > 10) {
        var firstCharacters = cleaned.substring(0, 10);
        var lastCharacters = cleaned.substring(10, cleaned.length);
        var match = firstCharacters.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3] + " #" + lastCharacters;
        }

        return null;
      } else {
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }

        return null;
      }
    }
    /***/

  }
}]);
//# sourceMappingURL=pages-player-profile-player-profile-module-es5.js.map