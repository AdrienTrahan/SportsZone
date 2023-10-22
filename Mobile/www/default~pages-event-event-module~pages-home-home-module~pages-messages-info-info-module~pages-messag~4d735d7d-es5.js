function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newteam/newteam.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newteam/newteam.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNewteamNewteamPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"white\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"NEWTEAM.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"this.name == ''\" (click)=\"finish()\">\n        <ion-icon color=\"white\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item button (click)=\"selectPicture()\">\n    <ion-label>{{\"NEWTEAM.0\" | translate}}</ion-label>\n    <img class=\"profileImage\" [src]=\"this.imageUrlSafe || '../../assets/sportempty.png'\" alt=\"\">\n    <span class=\"spanChange\">{{\"NEWTEAM.1\" | translate}}</span>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWTEAM.2\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWTEAM.3\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" placeholder=\"ex. U16 D1\" [(ngModel)]=\"category\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"NEWTEAM.4\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"city\"></ion-input>\n  </ion-item>\n  <ion-button class=\"joinButton\" expand=\"block\" [disabled]=\"this.name == ''\" (click)=\"finish()\">{{\"NEWTEAM.5\" | translate}}</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/newteam/newteam.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/newteam/newteam.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNewteamNewteamPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profilePictureWrapper {\n  margin: 0px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.profilePicture {\n  height: 100px;\n  width: 100px;\n  margin: 40px 0px 20px 0px;\n  border-radius: 50%;\n  box-shadow: 0px 0px 0px 4px #56A0F6;\n  background-color: #F2F2F2;\n}\n\n.instructionsPicture {\n  position: absolute;\n  top: 90px;\n  left: 50%;\n  width: 90px;\n  text-align: center;\n  height: auto;\n  line-height: auto;\n  transform: translate(-50%, -50%);\n  margin: 0px;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: \"Roboto\";\n  z-index: 1;\n}\n\n.profilePictureWrapper:active {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n\nh2 {\n  float: left;\n  clear: both;\n  margin: 7.5px 10px 20px 20px;\n  font-family: \"Roboto\";\n  font-weight: 600;\n  font-size: 16px;\n}\n\ninput {\n  float: right;\n  border: none;\n  background-color: #F2F2F2;\n  margin: 0px 20px 20px 0px;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0px 10px 0px 10px;\n  width: 200px;\n  max-width: 40%;\n  min-width: 200px;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: 0px 0px 0px 2px #56A0F6;\n}\n\n.profilePictureWrapper:not([empty=true]) img {\n  -webkit-filter: brightness(0.6);\n          filter: brightness(0.6);\n}\n\n.profilePictureWrapper:not([empty=true]) .instructionsPicture {\n  color: white;\n}\n\n.joinButton {\n  margin: 20px;\n  --background: #25E481;\n}\n\n.profileImage {\n  width: 80px;\n  border-radius: 50%;\n  margin: 10px 10px 10px 10px;\n}\n\n.spanChange {\n  color: #0088FF;\n}\n\n.infoInput {\n  text-align: right;\n  --text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL25ld3RlYW0vbmV3dGVhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ld3RlYW0vbmV3dGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNHSjs7QURBQTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsbUNBQUE7QUNNSjs7QURKQTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ1FKOztBRExBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7QUNTSjs7QUROQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3RlYW0vbmV3dGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZVBpY3R1cmVXcmFwcGVye1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2ZpbGVQaWN0dXJle1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogNDBweCAwcHggMjBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCAjNTZBMEY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG4uaW5zdHJ1Y3Rpb25zUGljdHVyZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlUGljdHVyZVdyYXBwZXI6YWN0aXZle1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuaDJ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiA3LjVweCAxMHB4IDIwcHggMjBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlucHV0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgICBtYXJnaW46IDBweCAyMHB4IDIwcHggMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59XG5pbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjNTZBMEY2O1xufVxuLnByb2ZpbGVQaWN0dXJlV3JhcHBlcjpub3QoW2VtcHR5PVwidHJ1ZVwiXSkgaW1ne1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xufVxuLnByb2ZpbGVQaWN0dXJlV3JhcHBlcjpub3QoW2VtcHR5PVwidHJ1ZVwiXSkgLmluc3RydWN0aW9uc1BpY3R1cmV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uam9pbkJ1dHRvbntcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjVFNDgxO1xufVxuXG4ucHJvZmlsZUltYWdle1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG4uc3BhbkNoYW5nZXtcbiAgICBjb2xvcjogIzAwODhGRjtcbn1cblxuLmluZm9JbnB1dHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAtLXRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5wcm9maWxlUGljdHVyZVdyYXBwZXIge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9maWxlUGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA0MHB4IDBweCAyMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA0cHggIzU2QTBGNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cblxuLmluc3RydWN0aW9uc1BpY3R1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlUGljdHVyZVdyYXBwZXI6YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG5cbmgyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDcuNXB4IDEwcHggMjBweCAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pbnB1dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBtYXJnaW46IDBweCAyMHB4IDIwcHggMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICM1NkEwRjY7XG59XG5cbi5wcm9maWxlUGljdHVyZVdyYXBwZXI6bm90KFtlbXB0eT10cnVlXSkgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG59XG5cbi5wcm9maWxlUGljdHVyZVdyYXBwZXI6bm90KFtlbXB0eT10cnVlXSkgLmluc3RydWN0aW9uc1BpY3R1cmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5qb2luQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICMyNUU0ODE7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5zcGFuQ2hhbmdlIHtcbiAgY29sb3I6ICMwMDg4RkY7XG59XG5cbi5pbmZvSW5wdXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLS10ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/newteam/newteam.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/newteam/newteam.page.ts ***!
    \***********************************************/

  /*! exports provided: NewteamPage */

  /***/
  function srcAppPagesNewteamNewteamPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewteamPage", function () {
      return NewteamPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera;

    var NewteamPage = /*#__PURE__*/function () {
      function NewteamPage(translate, modal, actionSheetController, crop, sanitizer, http, transfer) {
        _classCallCheck(this, NewteamPage);

        this.translate = translate;
        this.modal = modal;
        this.actionSheetController = actionSheetController;
        this.crop = crop;
        this.sanitizer = sanitizer;
        this.http = http;
        this.transfer = transfer;
        this.imageUrlSafe = "";
        this.submitDisabled = false;
        this.imageUrl = "";
        this.name = "";
        this.category = "";
        this.city = "";
      }

      _createClass(NewteamPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.modal.dismiss();
        }
      }, {
        key: "finish",
        value: function finish() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var token, result, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.submitDisabled = true;
                    setTimeout(function () {
                      _this.submitDisabled = false;
                    }, 4000);
                    _context.next = 4;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_9__["get"])("token");

                  case 4:
                    token = _context.sent;
                    _context.next = 7;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_8__["upload"])('http://192.168.2.251:3000/api/newTeam', this.imageUrl, {
                      name: this.name,
                      category: this.category,
                      city: this.city,
                      token: token,
                      extension: "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop(),
                      defaultPicture: this.imageUrl == ''
                    }, this.http, this.transfer);

                  case 7:
                    result = _context.sent;

                    if (typeof result === "object") {
                      this.modal.dismiss(result);
                    } else {
                      data = undefined;

                      try {
                        data = JSON.parse(result);
                        this.modal.dismiss(data);
                      } catch (_a) {
                        this.submitDisabled = false;
                      }
                    }

                  case 9:
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

                    if (this.imageUrlSafe != "") {
                      removeImage = {
                        text: this.translate.instant("ALERTS.14.BUTTONS.3"),
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this2.imageUrlSafe = "";
                          _this2.imageUrl = "";
                        }
                      };
                      alertButtons.splice(2, 0, removeImage);
                    }

                    _context2.next = 4;
                    return this.actionSheetController.create({
                      header: this.translate.instant("ALERTS.14.TITLE"),
                      cssClass: 'my-custom-class',
                      buttons: alertButtons
                    });

                  case 4:
                    actionSheet = _context2.sent;
                    _context2.next = 7;
                    return actionSheet.present();

                  case 7:
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
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Photos,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Uri
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
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Camera,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Uri
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
                    this.imageUrlSafe = this.sanitizer.bypassSecurityTrustUrl(_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].convertFileSrc(imagePath));
                    this.imageUrl = imagePath;

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return NewteamPage;
    }();

    NewteamPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
      }];
    };

    NewteamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newteam',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./newteam.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newteam/newteam.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./newteam.page.scss */
      "./src/app/pages/newteam/newteam.page.scss"))["default"]]
    })], NewteamPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~4d735d7d-es5.js.map