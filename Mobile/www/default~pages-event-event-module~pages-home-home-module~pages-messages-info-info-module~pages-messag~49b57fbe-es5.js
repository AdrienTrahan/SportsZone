function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"white\" (click)=\"settings()\">\n        <ion-icon name=\"cog-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      <ion-button class=\"navbar-button\" (click)=\"changeRole($event)\" *ngIf=\"this.userInformation.availableRoles && this.userInformation.availableRoles.length > 1\">\n        <ion-label class=\"\">{{\"HOME.POPOVER.\" + this.role | translate}}</ion-label>\n        <ion-icon name=\"chevron-down-outline\" class=\"dropicon\"></ion-icon>\n      </ion-button>\n      <ion-label *ngIf=\"!this.userInformation.availableRoles || this.userInformation.availableRoles.length <= 1\">{{(\"HOME.TITLE.\" + this.role + \".\" + ((this.role == 0 ? this.state : this.state2).toUpperCase())) | translate}}</ion-label>\n    </ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content [attr.invisible]=\"this.invisible\">\n  \n  \n  <div *ngIf=\"(this.role == 0)\">\n    <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state\">\n      <ion-segment-button value=\"Players\">\n        <ion-label>{{ \"HOME.SEGMENTED.0\" | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Teams\">\n        <ion-label>{{ \"HOME.SEGMENTED.1\" | translate}}</ion-label>\n      </ion-segment-button>\n    </ion-segment> \n    <div class=\"wrapper\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <div class=\"cardContainer\" [@enterLeft] *ngIf=\"this.state=='Players'\">\n        <ion-card class=\"clickable\" *ngFor=\"let player of players;let i = index\">\n          <ion-item lines=\"none\"(click)=\"selectPlayer(i)\">\n           <app-player [first]=\"player.first\" [last]=\"player.last\" [img]=\"player.image\"></app-player>\n          </ion-item>\n        </ion-card>\n      </div>\n      <div class=\"nothingButton clickable\"  (click)=\"addPlayer()\">\n        <img src=\"../../../assets/plus.png\" alt=\"\">\n      </div>\n      <div class=\"cardContainer\" [@enterRight] *ngIf=\"this.state=='Teams'\">\n        <ion-card class=\"clickable\" *ngFor=\"let team of teams;let i = index\">\n          <ion-item lines=\"none\" (click)=\"selectTeam(i)\">\n           <app-team [name]=\"team.name\" [img]=\"team.image\" [category]=\"team.category\"></app-team>\n          </ion-item>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"(this.role == 1)\">\n    <ion-segment color=\"navbar-theme\" [(ngModel)]=\"state2\">\n      <ion-segment-button value=\"Teams\">\n        <ion-label>{{\"HOME.SEGMENTED.1\" | translate}}</ion-label>\n      </ion-segment-button>\n    </ion-segment> \n    <div class=\"wrapper\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <div class=\"cardContainer\" [@enterLeft]>\n        <ion-card class=\"clickable\" *ngFor=\"let hostedteam of (this.hostedTeams);let i = index\">\n          <ion-item lines=\"none\" (click)=\"selectHostedTeam(i)\">\n           <app-team [name]=\"hostedteam.name\" [img]=\"hostedteam.image\" [category]=\"hostedteam.category\"></app-team>\n          </ion-item>\n        </ion-card>\n      </div>\n      <div class=\"nothingButton clickable\"  (click)=\"addTeam()\">\n        <img src=\"../../../assets/plus.png\" alt=\"\">\n      </div>\n      <div class=\"joinButton clickable\"  (click)=\"joinTeam()\">\n        <img src=\"../../../assets/qr.png\" alt=\"\">\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rolechooser/rolechooser.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rolechooser/rolechooser.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRolechooserRolechooserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"flexcontainer\">\n    <h1><h2>{{\"SETTINGS.ROLECHOOSER.TITLE\" | translate}}</h2></h1>\n    <ion-icon *ngIf=\"!this.obligated\" (click)=\"close()\" name=\"close-outline\" size=\"large\" class=\"close\"></ion-icon>\n    <ion-button *ngIf=\"this.obligated\" size=\"small\" class=\"logoutButton\" (click)=\"logout()\" slot=\"end\" color=\"danger\"><h2>{{\"SETTINGS.LOGOUT\" | translate}}</h2></ion-button>\n    <div class=\"wrapper\">\n      <div class=\"card\" (click)=\"selectRole(0)\">\n        <img class=\"\" src=\"../../../assets/football-fans-group.svg\" alt=\"\">\n        <h2><h2>{{\"SETTINGS.ROLECHOOSER.0\" | translate}}</h2></h2>\n      </div>\n      <div class=\"card\" (click)=\"selectRole(1)\">\n        <img class=\"\" src=\"../../../assets/football-whistle-of-referee.svg\" alt=\"\">\n        <h2>{{\"SETTINGS.ROLECHOOSER.1\" | translate}}</h2>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardContainer {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: 0;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.nothingButton {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  margin: 20px 20px 20px 20px !important;\n  color: white;\n  font-size: 55px;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  background-color: #25E481;\n  text-align: center;\n  padding: 15px 0px 0px 0px;\n  line-height: 40px;\n  box-shadow: 10px 7px 30px -16px rgba(0, 0, 0, 0.75);\n}\n\n.nothingButton img {\n  width: 30px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.joinButton {\n  position: fixed;\n  bottom: 95px;\n  right: 10px;\n  margin: 20px 20px 20px 20px !important;\n  color: white;\n  font-size: 55px;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  background-color: #0088ff;\n  text-align: center;\n  padding: 12px 0px 0px 0px;\n  line-height: 40px;\n  box-shadow: 10px 7px 30px -16px rgba(0, 0, 0, 0.75);\n}\n\n.joinButton img {\n  width: 30px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  margin-left: -1px;\n}\n\n.dropicon {\n  position: relative;\n  top: 2px;\n  left: 5px;\n  width: 18px;\n}\n\nion-item {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.clickable:active {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n.navbar-button {\n  --background: #161B4A;\n  --background-activated: #161B4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDUUo7O0FETkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDVUo7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRDb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG59XG4ud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5vdGhpbmdCdXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1RTQ4MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG4ubm90aGluZ0J1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmpvaW5CdXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogOTVweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG4uam9pbkJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5kcm9waWNvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHdpZHRoOiAxOHB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jbGlja2FibGU6YWN0aXZle1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcbn1cblxuLm5hdmJhci1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYxQjRBO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMxNjFCNEE7XG59IiwiLmNhcmRDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGhpbmdCdXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVFNDgxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5ub3RoaW5nQnV0dG9uIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmpvaW5CdXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogOTVweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMHB4IDBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDdweCAzMHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5qb2luQnV0dG9uIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5kcm9waWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNsaWNrYWJsZTphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG5cbi5uYXZiYXItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTYxQjRBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMTYxQjRBO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _functions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _functions_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var _newplayer_newplayer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../newplayer/newplayer.page */
    "./src/app/pages/newplayer/newplayer.page.ts");
    /* harmony import */


    var src_app_components_rolepopover_rolepopover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/rolepopover/rolepopover.component */
    "./src/app/components/rolepopover/rolepopover.component.ts");
    /* harmony import */


    var _rolechooser_rolechooser_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../rolechooser/rolechooser.page */
    "./src/app/pages/rolechooser/rolechooser.page.ts");
    /* harmony import */


    var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/native-page-transitions/ngx */
    "./node_modules/@ionic-native/native-page-transitions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _newteam_newteam_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../newteam/newteam.page */
    "./src/app/pages/newteam/newteam.page.ts");
    /* harmony import */


    var _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../join-team/join-team.page */
    "./src/app/pages/join-team/join-team.page.ts");

    var HomePage_1;

    var HomePage = HomePage_1 = /*#__PURE__*/function () {
      function HomePage(router, modal, popoverController, nativePageTransitions) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.router = router;
        this.modal = modal;
        this.popoverController = popoverController;
        this.nativePageTransitions = nativePageTransitions;
        this.role = 10;
        this.state = "Players";
        this.loaded = false;
        this.roleName = "";
        this.invisible = false;
        this.state2 = "Teams";
        this.title = {
          "0": {
            Players: "Mes joueurs",
            Teams: "Mes équipes"
          },
          "1": {
            Teams: "Mes équipes"
          },
          "10": {
            Players: "",
            Teams: ""
          }
        };
        this.players = HomePage_1.players;
        this.teams = HomePage_1.teams;
        this.hostedTeams = HomePage_1.hostedTeams;
        this.userInformation = HomePage_1.userInformation;

        HomePage_1.updateInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getUserInformation(true);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
      }

      _createClass(HomePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.load();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.loaded = false;
                    _context4.next = 3;
                    return this.getUserInformation();

                  case 3:
                    _context4.next = 5;
                    return this.getPlayers();

                  case 5:
                    _context4.next = 7;
                    return this.getTeams();

                  case 7:
                    this.loaded = true;

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getUserInformation",
        value: function getUserInformation() {
          var staticaly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var token, information;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role");

                  case 2:
                    this.role = _context5.sent;
                    _context5.next = 5;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 5:
                    token = _context5.sent;
                    _context5.next = 8;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getUserInformation", {
                      token: token
                    });

                  case 8:
                    information = _context5.sent;
                    _context5.prev = 9;
                    information = JSON.parse(information);

                    if (!information.error) {
                      _context5.next = 13;
                      break;
                    }

                    throw information.error;

                  case 13:
                    ;
                    HomePage_1.userInformation = information;

                    if (!staticaly) {
                      this.userInformation = information;
                      this.verifyInformation();
                      Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.userInfo", this.userInformation);
                    }

                    _context5.next = 22;
                    break;

                  case 18:
                    _context5.prev = 18;
                    _context5.t0 = _context5["catch"](9);
                    _context5.t0 = _context5.t0 + "";

                    if (_context5.t0.includes("[993]")) {
                      if (!staticaly) {
                        this.logout();
                      }
                    }

                  case 22:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[9, 18]]);
          }));
        }
      }, {
        key: "showRoleChooser",
        value: function showRoleChooser() {
          var _this2 = this;

          this.modal.create({
            component: _rolechooser_rolechooser_page__WEBPACK_IMPORTED_MODULE_9__["RolechooserPage"],
            componentProps: {
              obligated: true
            }
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function () {
              _this2.load();
            });
          });
        }
      }, {
        key: "verifyInformation",
        value: function verifyInformation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var info, role;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    info = HomePage_1.userInformation;

                    if (info.availableRoles.length == 0) {
                      this.showRoleChooser();
                    }

                    _context6.next = 4;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role");

                  case 4:
                    _context6.t1 = _context6.sent;
                    _context6.t0 = _context6.t1 == null;

                    if (_context6.t0) {
                      _context6.next = 12;
                      break;
                    }

                    _context6.next = 9;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role");

                  case 9:
                    _context6.t2 = _context6.sent;
                    _context6.t3 = undefined;
                    _context6.t0 = _context6.t2 == _context6.t3;

                  case 12:
                    if (!_context6.t0) {
                      _context6.next = 15;
                      break;
                    }

                    _context6.next = 15;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("role", parseInt(info.availableRoles[0]));

                  case 15:
                    _context6.next = 17;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("role");

                  case 17:
                    role = _context6.sent;
                    this.role = role;

                    if (role == 1) {
                      this.getHostedTeams();
                    }

                  case 20:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPlayers",
        value: function getPlayers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            var token, players, _loop, i;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    token = _context7.sent;
                    _context7.next = 5;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getPlayers", {
                      token: token
                    });

                  case 5:
                    players = _context7.sent;
                    _context7.prev = 6;
                    players = JSON.parse(players);

                    if (!players.error) {
                      _context7.next = 10;
                      break;
                    }

                    throw "";

                  case 10:
                    ;
                    this.players = players;
                    Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.players", this.players);

                    _loop = function _loop() {
                      var j = parseInt("" + i);
                      toDataURL(_this3.players[j].image, function (base64) {
                        Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("image." + _this3.players[j].id, base64 + "");
                      });
                    };

                    for (i = 0; i < this.players.length; i++) {
                      _loop();
                    }

                    HomePage_1.players = players;
                    _context7.next = 20;
                    break;

                  case 18:
                    _context7.prev = 18;
                    _context7.t0 = _context7["catch"](6);

                  case 20:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[6, 18]]);
          }));
        }
      }, {
        key: "getHostedTeams",
        value: function getHostedTeams() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            var token, teams, _loop2, i;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    token = _context8.sent;
                    _context8.next = 5;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getHostedTeams", {
                      token: token
                    });

                  case 5:
                    teams = _context8.sent;
                    _context8.prev = 6;
                    teams = JSON.parse(teams);

                    if (!teams.error) {
                      _context8.next = 10;
                      break;
                    }

                    throw teams.error;

                  case 10:
                    ;
                    this.hostedTeams = teams;
                    Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.hostedTeams", this.hostedTeams);

                    _loop2 = function _loop2() {
                      var j = parseInt("" + i);
                      toDataURL(_this4.hostedTeams[j].image, function (base64) {
                        Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("image." + _this4.hostedTeams[j].id, base64 + "");
                      });
                    };

                    for (i = 0; i < this.hostedTeams.length; i++) {
                      _loop2();
                    }

                    HomePage_1.hostedTeams = teams;
                    _context8.next = 20;
                    break;

                  case 18:
                    _context8.prev = 18;
                    _context8.t0 = _context8["catch"](6);

                  case 20:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[6, 18]]);
          }));
        }
      }, {
        key: "getTeams",
        value: function getTeams() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this5 = this;

            var token, teams, _loop3, i;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("token");

                  case 2:
                    token = _context9.sent;
                    _context9.next = 5;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/getGlobalTeams", {
                      token: token
                    });

                  case 5:
                    teams = _context9.sent;
                    _context9.prev = 6;
                    teams = JSON.parse(teams);

                    if (!teams.error) {
                      _context9.next = 10;
                      break;
                    }

                    throw teams.error;

                  case 10:
                    ;
                    this.teams = teams;
                    Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("home.teams", this.teams);

                    _loop3 = function _loop3() {
                      var j = parseInt("" + i);
                      toDataURL(_this5.teams[j].image, function (base64) {
                        Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["set"])("image." + _this5.teams[j].id, base64 + "");
                      });
                    };

                    for (i = 0; i < this.teams.length; i++) {
                      _loop3();
                    }

                    HomePage_1.teams = teams;
                    _context9.next = 20;
                    break;

                  case 18:
                    _context9.prev = 18;
                    _context9.t0 = _context9["catch"](6);

                  case 20:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[6, 18]]);
          }));
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
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.userInfo");

                  case 2:
                    if (!_context10.sent) {
                      _context10.next = 9;
                      break;
                    }

                    _context10.next = 5;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.userInfo");

                  case 5:
                    HomePage_1.userInformation = _context10.sent;
                    _context10.next = 8;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.userInfo");

                  case 8:
                    this.userInformation = _context10.sent;

                  case 9:
                    _context10.next = 11;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.players");

                  case 11:
                    if (!_context10.sent) {
                      _context10.next = 26;
                      break;
                    }

                    _context10.next = 14;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.players");

                  case 14:
                    HomePage_1.players = _context10.sent;
                    _context10.next = 17;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.players");

                  case 17:
                    this.players = _context10.sent;
                    i = 0;

                  case 19:
                    if (!(i < this.players.length)) {
                      _context10.next = 26;
                      break;
                    }

                    _context10.next = 22;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("image." + this.players[i].id);

                  case 22:
                    this.players[i].image = _context10.sent;

                  case 23:
                    i++;
                    _context10.next = 19;
                    break;

                  case 26:
                    _context10.next = 28;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.teams");

                  case 28:
                    if (!_context10.sent) {
                      _context10.next = 43;
                      break;
                    }

                    _context10.next = 31;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.teams");

                  case 31:
                    HomePage_1.teams = _context10.sent;
                    _context10.next = 34;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.teams");

                  case 34:
                    this.teams = _context10.sent;
                    i = 0;

                  case 36:
                    if (!(i < this.teams.length)) {
                      _context10.next = 43;
                      break;
                    }

                    _context10.next = 39;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("image." + this.teams[i].id);

                  case 39:
                    this.teams[i].image = _context10.sent;

                  case 40:
                    i++;
                    _context10.next = 36;
                    break;

                  case 43:
                    _context10.next = 45;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.hostedTeams");

                  case 45:
                    if (!_context10.sent) {
                      _context10.next = 60;
                      break;
                    }

                    _context10.next = 48;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.hostedTeams");

                  case 48:
                    HomePage_1.hostedTeams = _context10.sent;
                    _context10.next = 51;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("home.hostedTeams");

                  case 51:
                    this.hostedTeams = _context10.sent;
                    i = 0;

                  case 53:
                    if (!(i < this.hostedTeams.length)) {
                      _context10.next = 60;
                      break;
                    }

                    _context10.next = 56;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_5__["get"])("image." + this.hostedTeams[i].id);

                  case 56:
                    this.hostedTeams[i].image = _context10.sent;

                  case 57:
                    i++;
                    _context10.next = 53;
                    break;

                  case 60:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "selectPlayer",
        value: function selectPlayer(index) {
          this.router.navigateByUrl("/player?playerId=".concat(this.players[index].id));
        }
      }, {
        key: "selectTeam",
        value: function selectTeam(index) {
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].teams.includes(this.teams[index].id)) {
              this.router.navigateByUrl("/team/events?teamId=".concat(this.teams[index].id, "&playerId=").concat(this.players[i].id));
              return;
            }
          }
        }
      }, {
        key: "selectHostedTeam",
        value: function selectHostedTeam(index) {
          this.router.navigateByUrl("/team/events?teamId=".concat(this.hostedTeams[index].id));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_6__["logout"])();

                  case 2:
                    this.players = [];
                    HomePage_1.players = [];
                    HomePage_1.userInformation = {};
                    this.userInformation = {};
                    this.router.navigateByUrl("/");

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "addPlayer",
        value: function addPlayer() {
          var _this6 = this;

          this.modal.create({
            component: _newplayer_newplayer_page__WEBPACK_IMPORTED_MODULE_7__["NewplayerPage"]
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              if ((data.data != undefined || data.data != null) && data.data.first) {
                _this6.players.push(data.data);
              }
            });
          });
        }
      }, {
        key: "changeRole",
        value: function changeRole(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this7 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_rolepopover_rolepopover_component__WEBPACK_IMPORTED_MODULE_8__["RolepopoverComponent"],
                      cssClass: 'my-custom-class',
                      event: ev,
                      translucent: true,
                      componentProps: {
                        roles: HomePage_1.userInformation.availableRoles
                      }
                    });

                  case 2:
                    popover = _context12.sent;
                    _context12.next = 5;
                    return popover.present().then(function (pop) {
                      popover.onDidDismiss().then(function () {
                        _this7.load();
                      });
                    });

                  case 5:
                    return _context12.abrupt("return", _context12.sent);

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "settings",
        value: function settings() {
          var options = {
            direction: 'up',
            duration: 200,
            slowdownfactor: -1,
            iosdelay: 100
          };
          this.nativePageTransitions.slide(options);
          this.router.navigateByUrl("/settings");
        }
      }, {
        key: "addTeam",
        value: function addTeam() {
          var _this8 = this;

          this.modal.create({
            component: _newteam_newteam_page__WEBPACK_IMPORTED_MODULE_11__["NewteamPage"]
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              _this8.load();
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.loaded = false;

                    if (!(this.role == 0)) {
                      _context13.next = 14;
                      break;
                    }

                    if (!(this.state == 'Players')) {
                      _context13.next = 8;
                      break;
                    }

                    _context13.next = 5;
                    return this.getPlayers();

                  case 5:
                    event.target.complete();
                    _context13.next = 12;
                    break;

                  case 8:
                    if (!(this.state == "Teams")) {
                      _context13.next = 12;
                      break;
                    }

                    _context13.next = 11;
                    return this.getTeams();

                  case 11:
                    event.target.complete();

                  case 12:
                    _context13.next = 18;
                    break;

                  case 14:
                    if (!(this.role == 1)) {
                      _context13.next = 18;
                      break;
                    }

                    _context13.next = 17;
                    return this.getHostedTeams();

                  case 17:
                    event.target.complete();

                  case 18:
                    this.loaded = true;

                  case 19:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "joinTeam",
        value: function joinTeam() {
          var _this9 = this;

          this.modal.create({
            component: _join_team_join_team_page__WEBPACK_IMPORTED_MODULE_12__["JoinTeamPage"]
          }).then(function (modal) {
            modal.present();
            _this9.invisible = true;
            modal.onDidDismiss().then(function (data) {
              _this9.invisible = false;

              if (data.data) {
                _this9.teams.push(data.data);
              }
            });
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.players = [];
    HomePage.teams = [];
    HomePage.hostedTeams = [];
    HomePage.currentEventInfo = {};
    HomePage.userInformation = {};

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__["NativePageTransitions"]
      }];
    };

    HomePage = HomePage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(-100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0px)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0px)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(0%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: "translateX(100%)"
      }))])])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    })], HomePage);

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

  },

  /***/
  "./src/app/pages/rolechooser/rolechooser.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/rolechooser/rolechooser.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRolechooserRolechooserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*, :root, html * {\n  font-family: \"Roboto\" !important;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.flexcontainer {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n\nh1 {\n  height: auto;\n  font-size: 30px;\n  padding: 40px 20px 0px 20px;\n}\n\n.close {\n  position: absolute;\n  top: 60px;\n  right: 10px;\n}\n\n.wrapper {\n  flex-grow: 1;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px;\n}\n\n.card {\n  padding: 20px 0px 20px 0px;\n  margin: 20px 20px 0px 20px;\n  background-color: #f6f6f6;\n  border-radius: 5px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.card:active {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n\n.card img {\n  margin: 0px;\n  width: 80px;\n  -webkit-filter: invert(31%) sepia(81%) saturate(3489%) hue-rotate(204deg) brightness(98%) contrast(107%);\n          filter: invert(31%) sepia(81%) saturate(3489%) hue-rotate(204deg) brightness(98%) contrast(107%);\n}\n\n.card h2 {\n  margin: 0px;\n  color: #036ffc;\n}\n\n.logoutButton {\n  width: 100px;\n  position: absolute;\n  top: 60px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3JvbGVjaG9vc2VyL3JvbGVjaG9vc2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcm9sZWNob29zZXIvcm9sZWNob29zZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDS0o7O0FEREE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FESEk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FDS1I7O0FERkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdHQUFBO1VBQUEsZ0dBQUE7QUNJUjs7QURGSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSVI7O0FEREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcm9sZWNob29zZXIvcm9sZWNob29zZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgOnJvb3QsIGh0bWwgKntcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4XG59XG4uZmxleGNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5oMXtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAwcHggMjBweDtcbn1cbi5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuLndyYXBwZXJ7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cblxuLmNhcmR7XG4gICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmOmFjdGl2ZXtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoODElKSBzYXR1cmF0ZSgzNDg5JSkgaHVlLXJvdGF0ZSgyMDRkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDclKTtcbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogIzAzNmZmYztcbiAgICB9XG59XG4ubG9nb3V0QnV0dG9ue1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuXG59IiwiKiwgOnJvb3QsIGh0bWwgKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZsZXhjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDQwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW46IDIwcHggMjBweCAwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuLmNhcmQgaW1nIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDgxJSkgc2F0dXJhdGUoMzQ4OSUpIGh1ZS1yb3RhdGUoMjA0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTA3JSk7XG59XG4uY2FyZCBoMiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzAzNmZmYztcbn1cblxuLmxvZ291dEJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/rolechooser/rolechooser.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/rolechooser/rolechooser.page.ts ***!
    \*******************************************************/

  /*! exports provided: RolechooserPage */

  /***/
  function srcAppPagesRolechooserRolechooserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolechooserPage", function () {
      return RolechooserPage;
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


    var _functions_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var _functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RolechooserPage = /*#__PURE__*/function () {
      function RolechooserPage(router, modal) {
        _classCallCheck(this, RolechooserPage);

        this.router = router;
        this.modal = modal;
      }

      _createClass(RolechooserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectRole",
        value: function selectRole(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var token, result;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 2:
                    token = _context14.sent;
                    _context14.next = 5;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_2__["call"])("http://192.168.2.251:3000/api/chooseRole", {
                      token: token,
                      role: index
                    });

                  case 5:
                    result = _context14.sent;
                    _context14.prev = 6;

                    if (typeof result != "object") {
                      result = JSON.parse(result);
                    }

                    if (!result.error) {
                      _context14.next = 10;
                      break;
                    }

                    throw result.error;

                  case 10:
                    ;

                    if (!(typeof parseInt(result.data) == "number")) {
                      _context14.next = 15;
                      break;
                    }

                    _context14.next = 14;
                    return Object(_functions_storage__WEBPACK_IMPORTED_MODULE_3__["set"])("role", parseInt(result.data));

                  case 14:
                    this.modal.dismiss();

                  case 15:
                    _context14.next = 20;
                    break;

                  case 17:
                    _context14.prev = 17;
                    _context14.t0 = _context14["catch"](6);

                    if (_context14.t0.includes("[993]")) {
                      this.logout();
                    }

                  case 20:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[6, 17]]);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return Object(_functions_call__WEBPACK_IMPORTED_MODULE_2__["logout"])();

                  case 2:
                    this.router.navigateByUrl("/");

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          this.modal.dismiss();
        }
      }]);

      return RolechooserPage;
    }();

    RolechooserPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    RolechooserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rolechooser',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rolechooser.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rolechooser/rolechooser.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rolechooser.page.scss */
      "./src/app/pages/rolechooser/rolechooser.page.scss"))["default"]]
    })], RolechooserPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-event-event-module~pages-home-home-module~pages-messages-info-info-module~pages-messag~49b57fbe-es5.js.map