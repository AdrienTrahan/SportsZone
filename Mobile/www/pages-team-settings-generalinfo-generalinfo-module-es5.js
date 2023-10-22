function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-settings-generalinfo-generalinfo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/generalinfo/generalinfo.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/generalinfo/generalinfo.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamSettingsGeneralinfoGeneralinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"GENERALTEAM.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]='(this.name == \"\" || (this.alias.teamInfo.name == this.name && this.alias.teamInfo.category == this.category && this.alias.teamInfo.city == this.city && this.unmodified.image == (this.imageUrl || this.image))) || !this.saveEnabled' (click)=\"this.save()\" class=\"\">\n        <ion-icon color=\"white\" name=\"save-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    {{\"GENERALTEAM.HEADER\" | translate}}\n  </ion-list-header>\n  <ion-item button (click)=\"selectPicture()\">\n    <ion-label>{{\"GENERALTEAM.0\" | translate}}</ion-label>\n    <img class=\"profileImage\" [src]=\"imageUrlSafe || image || '../../assets/sportempty.png'\" alt=\"\">\n    <span class=\"spanChange\">{{\"GENERALTEAM.1\" | translate}}</span>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"GENERALTEAM.2\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"name\" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"GENERALTEAM.3\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"category\" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"GENERALTEAM.4\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"city\" ></ion-input>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/team/settings/generalinfo/generalinfo-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/team/settings/generalinfo/generalinfo-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: GeneralinfoPageRoutingModule */

  /***/
  function srcAppPagesTeamSettingsGeneralinfoGeneralinfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralinfoPageRoutingModule", function () {
      return GeneralinfoPageRoutingModule;
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


    var _generalinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./generalinfo.page */
    "./src/app/pages/team/settings/generalinfo/generalinfo.page.ts");

    var routes = [{
      path: '',
      component: _generalinfo_page__WEBPACK_IMPORTED_MODULE_3__["GeneralinfoPage"]
    }];

    var GeneralinfoPageRoutingModule = function GeneralinfoPageRoutingModule() {
      _classCallCheck(this, GeneralinfoPageRoutingModule);
    };

    GeneralinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GeneralinfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/team/settings/generalinfo/generalinfo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/team/settings/generalinfo/generalinfo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: GeneralinfoPageModule */

  /***/
  function srcAppPagesTeamSettingsGeneralinfoGeneralinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralinfoPageModule", function () {
      return GeneralinfoPageModule;
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


    var _generalinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./generalinfo-routing.module */
    "./src/app/pages/team/settings/generalinfo/generalinfo-routing.module.ts");
    /* harmony import */


    var _generalinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./generalinfo.page */
    "./src/app/pages/team/settings/generalinfo/generalinfo.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var GeneralinfoPageModule = function GeneralinfoPageModule() {
      _classCallCheck(this, GeneralinfoPageModule);
    };

    GeneralinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _generalinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneralinfoPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_generalinfo_page__WEBPACK_IMPORTED_MODULE_6__["GeneralinfoPage"]]
    })], GeneralinfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/team/settings/generalinfo/generalinfo.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/team/settings/generalinfo/generalinfo.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamSettingsGeneralinfoGeneralinfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".infoInput {\n  text-align: right;\n  --text-align: right;\n}\n\n.profileImage {\n  width: 80px;\n  border-radius: 50%;\n  margin: 10px 10px 10px 10px;\n}\n\n.spanChange {\n  color: #0088FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vc2V0dGluZ3MvZ2VuZXJhbGluZm8vZ2VuZXJhbGluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWFtL3NldHRpbmdzL2dlbmVyYWxpbmZvL2dlbmVyYWxpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFtL3NldHRpbmdzL2dlbmVyYWxpbmZvL2dlbmVyYWxpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvSW5wdXR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLS10ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wcm9maWxlSW1hZ2V7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLnNwYW5DaGFuZ2V7XG4gICAgY29sb3I6ICMwMDg4RkY7XG59XG4iLCIuaW5mb0lucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC0tdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5zcGFuQ2hhbmdlIHtcbiAgY29sb3I6ICMwMDg4RkY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/team/settings/generalinfo/generalinfo.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/team/settings/generalinfo/generalinfo.page.ts ***!
    \*********************************************************************/

  /*! exports provided: GeneralinfoPage */

  /***/
  function srcAppPagesTeamSettingsGeneralinfoGeneralinfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralinfoPage", function () {
      return GeneralinfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _controller_team_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].Camera;

    var GeneralinfoPage = /*#__PURE__*/function () {
      function GeneralinfoPage(translate, actionSheetController, sanitizer, crop, http, transfer) {
        _classCallCheck(this, GeneralinfoPage);

        this.translate = translate;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.crop = crop;
        this.http = http;
        this.transfer = transfer;
        this.category = "";
        this.city = "";
        this.name = "";
        this.image = "";
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"];
        this.imageUrlSafe = "";
        this.imageUrl = "";
        this.unmodified = {
          name: "",
          category: "",
          city: "",
          image: ""
        };
        this.saveEnabled = true;
      }

      _createClass(GeneralinfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = this.alias.teamInfo.name;
          this.category = this.alias.teamInfo.category;
          this.city = this.alias.teamInfo.city;
          this.image = this.alias.teamInfo.image;
          this.unmodified = {
            name: this.name,
            category: this.category,
            city: this.city,
            image: this.image
          };
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var token, obj, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.saveEnabled = false;
                    setTimeout(function () {
                      _this.saveEnabled = true;
                    }, 2000);
                    _context.next = 4;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_8__["get"])("token");

                  case 4:
                    token = _context.sent;
                    obj = {
                      token: token,
                      name: this.name,
                      category: this.category,
                      city: this.city,
                      id: this.alias.teamInfo.id
                    };

                    if (!(this.name == "")) {
                      _context.next = 8;
                      break;
                    }

                    return _context.abrupt("return");

                  case 8:
                    if (!(this.unmodified.image != (this.imageUrl || this.image))) {
                      _context.next = 17;
                      break;
                    }

                    obj.extension = "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop();
                    obj.defaultPicture = this.imageUrl == '';
                    _context.next = 13;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_7__["upload"])('http://192.168.2.251:3000/api/saveTeamInfo', this.imageUrl, obj, this.http, this.transfer);

                  case 13:
                    result = _context.sent;

                    if (result == "done") {
                      _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"].teamInfo.name = this.name;
                      _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"].teamInfo.category = this.category;
                      _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"].teamInfo.city = this.city;
                    }

                    _context.next = 21;
                    break;

                  case 17:
                    _context.next = 19;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_7__["post"])("http://192.168.2.251:3000/api/saveTeamInfo", obj);

                  case 19:
                    result = _context.sent;

                    if (result == "done") {
                      _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"].teamInfo.name = this.name;
                      _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"].teamInfo.category = this.category;
                      _controller_team_page__WEBPACK_IMPORTED_MODULE_10__["TeamPage"].teamInfo.city = this.city;
                    }

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectPicture",
        value: function selectPicture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alertButtons, removeImage, actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    alertButtons = [{
                      text: this.translate.instant("ALERTS.14.BUTTONS.0"),
                      icon: 'camera',
                      handler: function handler() {
                        _this2.takePhoto();
                      }
                    }, {
                      text: this.translate.instant("ALERTS.14.BUTTONS.1"),
                      icon: 'image',
                      handler: function handler() {
                        _this2.selectPhotoFromLibrary();
                      }
                    }, {
                      text: this.translate.instant("ALERTS.14.BUTTONS.2"),
                      icon: 'close',
                      role: 'cancel',
                      handler: function handler() {}
                    }];

                    if (this.image != "") {
                      removeImage = {
                        text: this.translate.instant("ALERTS.14.BUTTONS.3"),
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this2.image = "";
                        }
                      };
                      alertButtons.splice(2, 0, removeImage);
                    }

                    if (this.imageUrl) {
                      alertButtons.splice(2, 0, {
                        text: this.translate.instant("ALERTS.14.BUTTONS.4"),
                        icon: 'arrow-undo',
                        handler: function handler() {
                          _this2.imageUrlSafe = "";
                          _this2.imageUrl = "";
                        }
                      });
                    }

                    _context2.next = 5;
                    return this.actionSheetController.create({
                      header: this.translate.instant("ALERTS.14.TITLE"),
                      cssClass: 'my-custom-class',
                      buttons: alertButtons
                    });

                  case 5:
                    actionSheet = _context2.sent;
                    _context2.next = 8;
                    return actionSheet.present();

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "selectPhotoFromLibrary",
        value: function selectPhotoFromLibrary() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Camera.getPhoto({
                      quality: 100,
                      allowEditing: false,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri
                    });

                  case 2:
                    result = _context3.sent;
                    this.cropPicture(result);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "takePhoto",
        value: function takePhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var result;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Camera.getPhoto({
                      quality: 100,
                      allowEditing: false,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri
                    });

                  case 2:
                    result = _context4.sent;
                    this.cropPicture(result);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "cropPicture",
        value: function cropPicture(result) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var imagePath;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return new Promise(function (resolve) {
                      _this3.crop.crop(result.path).then(function (imagePath) {
                        resolve(imagePath);
                      }, function (error) {});
                    });

                  case 2:
                    imagePath = _context5.sent;
                    imagePath = imagePath.split("?")[0];
                    this.imageUrlSafe = this.sanitizer.bypassSecurityTrustUrl(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(imagePath));
                    this.imageUrl = imagePath;
                    console.log(this.image, this.imageUrl, this.unmodified);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return GeneralinfoPage;
    }();

    GeneralinfoPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]
      }];
    };

    GeneralinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-generalinfo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./generalinfo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/generalinfo/generalinfo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./generalinfo.page.scss */
      "./src/app/pages/team/settings/generalinfo/generalinfo.page.scss"))["default"]]
    })], GeneralinfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-team-settings-generalinfo-generalinfo-module-es5.js.map