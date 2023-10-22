function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-editprofile-editprofile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/editprofile/editprofile.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/editprofile/editprofile.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsEditprofileEditprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'SETTINGS.ACCOUNTINFO.BACKTITLE' | translate}}\" color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"SETTINGS.ACCOUNTINFO.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]='this.firstname == this.unmodified.firstname && this.lastname == this.unmodified.lastname && this.email == this.unmodified.email' (click)=\"this.save()\" class=\"\">\n        <ion-icon color=\"white\" name=\"save-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.ACCOUNTINFO.0\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input [(ngModel)]=\"firstname\"></ion-input>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.ACCOUNTINFO.1\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input [(ngModel)]=\"lastname\"></ion-input>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.ACCOUNTINFO.2\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input [(ngModel)]=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.ACCOUNTINFO.3\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item routerLink=\"/password\" routerLinkActive=\"active\" class=\"\" button color=\"primary\">\n    {{\"SETTINGS.ACCOUNTINFO.4\" | translate}}\n  </ion-item>\n</ion-content>\n";
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
  "./src/app/pages/settings/editprofile/editprofile-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/settings/editprofile/editprofile-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: EditprofilePageRoutingModule */

  /***/
  function srcAppPagesSettingsEditprofileEditprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
      return EditprofilePageRoutingModule;
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


    var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editprofile.page */
    "./src/app/pages/settings/editprofile/editprofile.page.ts");

    var routes = [{
      path: '',
      component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }];

    var EditprofilePageRoutingModule = function EditprofilePageRoutingModule() {
      _classCallCheck(this, EditprofilePageRoutingModule);
    };

    EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditprofilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/editprofile/editprofile.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/settings/editprofile/editprofile.module.ts ***!
    \******************************************************************/

  /*! exports provided: EditprofilePageModule */

  /***/
  function srcAppPagesSettingsEditprofileEditprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
      return EditprofilePageModule;
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


    var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editprofile-routing.module */
    "./src/app/pages/settings/editprofile/editprofile-routing.module.ts");
    /* harmony import */


    var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editprofile.page */
    "./src/app/pages/settings/editprofile/editprofile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var EditprofilePageModule = function EditprofilePageModule() {
      _classCallCheck(this, EditprofilePageModule);
    };

    EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
    })], EditprofilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/editprofile/editprofile.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/settings/editprofile/editprofile.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsEditprofileEditprofilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rightEdit {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJpZ2h0RWRpdHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIucmlnaHRFZGl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/settings/editprofile/editprofile.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/settings/editprofile/editprofile.page.ts ***!
    \****************************************************************/

  /*! exports provided: EditprofilePage */

  /***/
  function srcAppPagesSettingsEditprofileEditprofilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
      return EditprofilePage;
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


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");

    var EditprofilePage = /*#__PURE__*/function () {
      function EditprofilePage() {
        _classCallCheck(this, EditprofilePage);

        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.unmodified = {
          firstname: "",
          lastname: "",
          email: ""
        };
        this.load();
      }

      _createClass(EditprofilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var token, result;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 2:
                    token = _context6.sent;
                    _context6.next = 5;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/getAccountInfo", {
                      token: token
                    });

                  case 5:
                    result = _context6.sent;
                    _context6.prev = 6;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context6.next = 10;
                      break;
                    }

                    throw result.error;

                  case 10:
                    ;
                    this.firstname = capitalizeFirstLetter(result.first);
                    this.lastname = capitalizeFirstLetter(result.last);
                    this.email = capitalizeFirstLetter(result.email);
                    this.unmodified = {
                      firstname: this.firstname,
                      lastname: this.lastname,
                      email: this.email
                    };
                    _context6.next = 19;
                    break;

                  case 17:
                    _context6.prev = 17;
                    _context6.t0 = _context6["catch"](6);

                  case 19:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[6, 17]]);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var token, obj, result;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 2:
                    token = _context7.sent;
                    obj = {
                      token: token
                    };

                    if (this.firstname != this.unmodified.firstname) {
                      obj.firstname = this.firstname;
                    }

                    if (this.lastname != this.unmodified.lastname) {
                      obj.lastname = this.lastname;
                    }

                    if (this.email != this.unmodified.email) {
                      obj.email = this.email;
                    }

                    _context7.next = 9;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/setAccountInfo", obj);

                  case 9:
                    result = _context7.sent;

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return EditprofilePage;
    }();

    EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editprofile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editprofile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/editprofile/editprofile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editprofile.page.scss */
      "./src/app/pages/settings/editprofile/editprofile.page.scss"))["default"]]
    })], EditprofilePage);

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    /***/

  }
}]);
//# sourceMappingURL=pages-settings-editprofile-editprofile-module-es5.js.map