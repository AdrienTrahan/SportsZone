function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-languages-languages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/languages/languages.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/languages/languages.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsLanguagesLanguagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'SETTINGS.LANGUAGE.BACKTITLE' | translate}}\" color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"SETTINGS.LANGUAGE.TITLE\" | translate}}</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-item class=\"\" button>\n    <ion-label (click)=\"this.selectLanguage('fr')\">Français</ion-label>\n  </ion-item>\n  <ion-item class=\"\" button>\n    <ion-label (click)=\"this.selectLanguage('en')\">English</ion-label>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/settings/languages/languages-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/settings/languages/languages-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: LanguagesPageRoutingModule */

  /***/
  function srcAppPagesSettingsLanguagesLanguagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesPageRoutingModule", function () {
      return LanguagesPageRoutingModule;
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


    var _languages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./languages.page */
    "./src/app/pages/settings/languages/languages.page.ts");

    var routes = [{
      path: '',
      component: _languages_page__WEBPACK_IMPORTED_MODULE_3__["LanguagesPage"]
    }];

    var LanguagesPageRoutingModule = function LanguagesPageRoutingModule() {
      _classCallCheck(this, LanguagesPageRoutingModule);
    };

    LanguagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LanguagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/languages/languages.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/settings/languages/languages.module.ts ***!
    \**************************************************************/

  /*! exports provided: LanguagesPageModule */

  /***/
  function srcAppPagesSettingsLanguagesLanguagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesPageModule", function () {
      return LanguagesPageModule;
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


    var _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./languages-routing.module */
    "./src/app/pages/settings/languages/languages-routing.module.ts");
    /* harmony import */


    var _languages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./languages.page */
    "./src/app/pages/settings/languages/languages.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LanguagesPageModule = function LanguagesPageModule() {
      _classCallCheck(this, LanguagesPageModule);
    };

    LanguagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagesPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_languages_page__WEBPACK_IMPORTED_MODULE_6__["LanguagesPage"]]
    })], LanguagesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/languages/languages.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/settings/languages/languages.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsLanguagesLanguagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2xhbmd1YWdlcy9sYW5ndWFnZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/settings/languages/languages.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/settings/languages/languages.page.ts ***!
    \************************************************************/

  /*! exports provided: LanguagesPage */

  /***/
  function srcAppPagesSettingsLanguagesLanguagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesPage", function () {
      return LanguagesPage;
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


    var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/language.service */
    "./src/app/services/language.service.ts");

    var LanguagesPage = /*#__PURE__*/function () {
      function LanguagesPage() {
        _classCallCheck(this, LanguagesPage);
      }

      _createClass(LanguagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectLanguage",
        value: function selectLanguage(lang) {
          src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"].setLanguage(lang);
        }
      }]);

      return LanguagesPage;
    }();

    LanguagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-languages',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./languages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/languages/languages.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./languages.page.scss */
      "./src/app/pages/settings/languages/languages.page.scss"))["default"]]
    })], LanguagesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-settings-languages-languages-module-es5.js.map