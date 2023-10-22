(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-team/join-team.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-team/join-team.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div [style.background]=\"'transparent'\" class=\"backgroundMask\"></div>\n<div class=\"coverBackground\" *ngIf=\"this.keyboardUp\"></div>\n<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon color=\"white\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"JOINTEAM.TITLE\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <canvas #canvas></canvas>\n  <p *ngIf=\"!this.keyboardUp && !this.coach\" class=\"instructions\">{{\"JOINTEAM.0\" | translate}}</p>\n  <p *ngIf=\"!this.keyboardUp && this.coach\" class=\"instructions\">{{\"JOINTEAM.0\" | translate}}</p>\n  <div [style.height.px]=\"height\" class=\"camerabox\"></div>\n  <p *ngIf=\"!this.keyboardUp\" class=\"or\">{{\"JOINTEAM.1\" | translate}}</p>\n  <ion-input [(ngModel)]=\"url\" #urlInput class=\"link\" placeholder=\"paste invitation link\" expand=\"block\" [value]=\"url\"></ion-input>\n  <ion-button (click)=\"joinTeam()\" class=\"joinButton\" expand=\"block\">{{\"JOINTEAM.2\" | translate}}</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/join-team/join-team.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/join-team/join-team.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body, ion-app, div.nav-decor, .ion-content, .app-root {\n  background-color: transparent !important;\n}\n\n.nav-decor, ion-app {\n  background-color: transparent !important;\n}\n\nion-content {\n  --background: transparent;\n}\n\ncanvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -10;\n  opacity: 0;\n}\n\n.backgroundMask {\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n.backgroundMask:after {\n  content: \"\";\n  position: absolute;\n  top: 190px;\n  left: 50%;\n  bottom: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  width: calc(100% - 100px);\n  box-shadow: 0px 0px 0px 2000px white;\n  transform: translateX(-50%);\n}\n\n.instructions {\n  font-size: 20px;\n  margin: 20px 50px 0px 50px;\n  color: gray;\n}\n\n.or {\n  text-align: center;\n  margin: 40px 20px 20px 20px;\n  color: lightslategray;\n}\n\n.link {\n  border-radius: 8px;\n  width: auto;\n  background-color: #f0f0f0;\n  margin: 20px;\n  color: gray;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\n.coverBackground {\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n}\n\n.joinButton {\n  margin: 20px;\n  --background: #25E481;\n}\n\n.camerabox {\n  width: 20px;\n  opacity: 0;\n}\n\n.input-code {\n  --padding-start: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL2pvaW4tdGVhbS9qb2luLXRlYW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2luLXRlYW0vam9pbi10ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUE4RCx3Q0FBQTtBQ0U5RDs7QUREQTtFQUFvQix3Q0FBQTtBQ0twQjs7QURKQTtFQUNJLHlCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNRSjs7QUROQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FDVUo7O0FEUkE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDV0o7O0FEUkE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNXSjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDYUo7O0FEVkE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNhSjs7QURWQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDYUo7O0FEWEE7RUFDSSxxQkFBQTtBQ2NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9pbi10ZWFtL2pvaW4tdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBpb24tYXBwLCBkaXYubmF2LWRlY29yLCAuaW9uLWNvbnRlbnQsIC5hcHAtcm9vdCB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cbi5uYXYtZGVjb3IsaW9uLWFwcHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmNhbnZhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICBvcGFjaXR5OiAwLjA7XG59XG4uYmFja2dyb3VuZE1hc2t7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmFja2dyb3VuZE1hc2s6YWZ0ZXJ7XG4gICAgY29udGVudDonJztcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDE5MHB4O1xuICAgIGxlZnQ6NTAlOyBcbiAgICBib3R0b206IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7IFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDIwMDBweCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uaW5zdHJ1Y3Rpb25ze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDIwcHggNTBweCAwcHggNTBweDtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLm9ye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDQwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuLmxpbmt7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuLmNvdmVyQmFja2dyb3VuZHtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmpvaW5CdXR0b257XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzI1RTQ4MTtcbn1cblxuLmNhbWVyYWJveHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBvcGFjaXR5OiAwLjA7XG59XG4uaW5wdXQtY29kZXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59IiwiaHRtbCwgYm9keSwgaW9uLWFwcCwgZGl2Lm5hdi1kZWNvciwgLmlvbi1jb250ZW50LCAuYXBwLXJvb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWRlY29yLCBpb24tYXBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmJhY2tncm91bmRNYXNrIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFja2dyb3VuZE1hc2s6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTkwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMjAwMHB4IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMjBweCA1MHB4IDBweCA1MHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHggMjBweCAyMHB4IDIwcHg7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cblxuLmxpbmsge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiBncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cbi5jb3ZlckJhY2tncm91bmQge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uam9pbkJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjVFNDgxO1xufVxuXG4uY2FtZXJhYm94IHtcbiAgd2lkdGg6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dC1jb2RlIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/join-team/join-team.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/join-team/join-team.page.ts ***!
  \***************************************************/
/*! exports provided: JoinTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTeamPage", function() { return JoinTeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/functions/call */ "./src/app/functions/call.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/functions/storage */ "./src/app/functions/storage.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let JoinTeamPage = class JoinTeamPage {
    constructor(translate, alertController, modal, qrScanner, cameraPreview, sanitizer, cd, loadingController, route) {
        this.translate = translate;
        this.alertController = alertController;
        this.modal = modal;
        this.qrScanner = qrScanner;
        this.cameraPreview = cameraPreview;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.loadingController = loadingController;
        this.route = route;
        this.height = 0;
        this.keyboardUp = true;
        this.url = "";
        this.playerId = "";
        this.mustGoBack = false;
        this.coach = false;
        this.route.queryParams.subscribe((queryParams) => {
            if (queryParams && queryParams.playerId) {
                this.playerId = queryParams.playerId;
            }
            else {
                this.coach = true;
            }
        });
    }
    ngOnInit() {
    }
    back() {
        this.modal.dismiss();
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mustGoBack) {
                this.back();
                this.mustGoBack = false;
                return;
            }
            const cameraPreviewOpts = {
                x: 50,
                y: 150,
                width: (this.canvas.nativeElement.getBoundingClientRect().width - 100),
                height: Math.min(this.canvas.nativeElement.getBoundingClientRect().height - 350, 300),
                camera: 'rear',
                tapPhoto: true,
                previewDrag: true,
                toBack: true,
                alpha: 1
            };
            this.height = Math.min(this.canvas.nativeElement.getBoundingClientRect().height - 250, 300);
            this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
                this.keyboardUp = false;
                this.startScanning();
            }).catch((err) => {
                this.keyboardUp = false;
                this.startScanning();
            });
        });
    }
    ionViewWillLeave() {
        this.cameraPreview.stopCamera();
    }
    ionViewDidLeave() {
        this.cameraPreview.stopCamera();
        this.cameraPreview.hide();
    }
    joinTeam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.presentLoading();
            this.cameraPreview.stopCamera();
            this.cameraPreview.hide();
            let params = this.getParams(this.url);
            if (!this.url.includes(".")) {
                params["teamId"] = this.url.split("-")[0];
                params["invitecode"] = this.url.split("-")[1];
            }
            params["playerId"] = this.playerId;
            params["token"] = yield Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_8__["get"])("token");
            if (this.coach) {
                let response = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/joinPending", params);
                try {
                    if (response == "done") {
                        const alert = yield this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: this.translate.instant("ALERTS.5.TITLE"),
                            message: this.translate.instant("ALERTS.5.MESSAGE"),
                            buttons: [this.translate.instant("ALERTS.5.BUTTONS.0")]
                        });
                        this.modal.dismiss();
                        alert.present();
                    }
                }
                catch (error) {
                }
                loading.dismiss();
            }
            else {
                let response = yield Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_6__["call"])("http://192.168.2.251:3000/api/joinTeam", params);
                try {
                    response = JSON.parse(response);
                    if (response.id) {
                        this.modal.dismiss(response);
                    }
                    else {
                        throw response;
                    }
                }
                catch (error) {
                }
                loading.dismiss();
            }
            loading.dismiss();
        });
    }
    getParams(url) {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }
    ;
    startScanning() {
        this.qrScanner.prepare().then((status) => {
            if (status.authorized) {
                let scanSub = this.qrScanner.scan().subscribe((text) => {
                    this.url = text;
                    this.joinTeam();
                    this.qrScanner.hide();
                    scanSub.unsubscribe();
                });
            }
        }).catch((e) => console.log('Error is', e));
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: this.translate.instant("ALERTS.13.MESSAGE"),
            });
            yield loading.present();
            return loading;
        });
    }
};
JoinTeamPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_5__["CameraPreview"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas')
], JoinTeamPage.prototype, "canvas", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('urlInput')
], JoinTeamPage.prototype, "urlInput", void 0);
JoinTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-join-team',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./join-team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/join-team/join-team.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./join-team.page.scss */ "./src/app/pages/join-team/join-team.page.scss")).default]
    })
], JoinTeamPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-event-event-module~pages-home-home-module~pages-join-team-join-team-module~pages-messa~bc0a7827-es2015.js.map