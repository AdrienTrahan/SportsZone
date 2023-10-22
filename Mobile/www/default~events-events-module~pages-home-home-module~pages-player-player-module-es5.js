function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~events-events-module~pages-home-home-module~pages-player-player-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upcomming/upcomming.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upcomming/upcomming.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpcommingUpcommingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"container\">\n  <ion-card class=\"date\">\n    <div>\n      <div [innerHTML]=\"this.translatedDate\"></div>\n      <span class=\"hour\">  {{ hour }}  </span>\n    </div>\n  </ion-card>\n  <ion-card [class]=\"'information ' + (this.deleting ? 'deletinginformation' : '')\" (click)=\"selectEvent($event)\">\n    <h1 class=\"name\">{{name}}</h1>\n    <h1 class=\"place\" *ngFor=\"let place of places\">{{place.name}}</h1>\n    <div *ngIf=\"!this.deleting\" ignore=\"true\" (click)=\"changePresence()\" class=\"presence\" [attr.presence]=\"((this.presence == 'YES' && this.late != '0' && this.late) ? 'LATE' : this.presence)\">\n      <img ignore=\"true\" [src]=\"'../../../../assets/' + symbole[this.presence]\" alt=\"\">\n    </div>\n  </ion-card>  \n  <div *ngIf=\"this.deleting\" [class]=\"'selectionCircle ' + (this.selectedEvent ? 'selectedSelectionCircle' : '')\"></div>\n</ion-card>";
    /***/
  },

  /***/
  "./src/app/components/upcomming/upcomming.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/upcomming/upcomming.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpcommingUpcommingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  padding: 0px 0px 0px 0px;\n  box-shadow: none;\n  color: black;\n  overflow: visible;\n  font-weight: 400;\n  font-family: \"Roboto\";\n  white-space: nowrap;\n}\n\n.date {\n  clear: both;\n  width: 80px !important;\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: black;\n  margin: 0px 0px 0px 0px;\n  white-space: nowrap;\n  max-width: 80px;\n  min-width: 80px;\n  flex: 1;\n}\n\n.date div {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.day {\n  font-size: 28px;\n  margin-right: 5px;\n  white-space: nowrap;\n}\n\n.month {\n  font-size: 18px;\n  white-space: nowrap;\n}\n\n.hour {\n  margin-top: 15px;\n  font-size: 18px;\n  white-space: nowrap;\n}\n\n.information {\n  float: left;\n  color: black;\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  flex-grow: 1;\n}\n\n.name {\n  font-size: 17px;\n  margin: 15px 15px 5px 15px;\n}\n\n.place {\n  font-size: 15px;\n  margin: 5px 15px 5px 15px;\n  color: #00c671;\n}\n\n.presence {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.presence[presence=YES] {\n  background-color: #00c671;\n}\n\n.presence[presence=MAYBE] {\n  background-color: #e6e6e6;\n}\n\n.presence[presence=NO] {\n  background-color: #ff004c;\n}\n\n.presence[presence=LATE] {\n  background-color: orange;\n}\n\nimg {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  width: 60%;\n}\n\n.deletinginformation {\n  margin-right: 50px;\n}\n\n.selectionCircle {\n  width: 20px;\n  height: 20px;\n  margin: 0px 0px 0px 10px;\n  border: 2px solid #bfbfbf;\n  border-radius: 50%;\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 10px);\n}\n\n.selectedSelectionCircle {\n  border: none;\n  background-color: #3880ff;\n}\n\n.container:active > .date, .container:active > .information {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n\n:host ::ng-deep .day {\n  font-size: 28px;\n  margin-right: 5px;\n  white-space: nowrap;\n}\n\n:host ::ng-deep .month {\n  font-size: 18px;\n  white-space: nowrap;\n}\n\n:host ::ng-deep .hour {\n  margin-top: 15px;\n  font-size: 18px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvdXBjb21taW5nL3VwY29tbWluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGNvbW1pbmcvdXBjb21taW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUNLSjs7QUREQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0lKOztBRERBO0VBQ0kseUJBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREpBO0VBQ0ksd0JBQUE7QUNPSjs7QURMQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDV0o7O0FEVEE7RUFDUSxnQ0FBQTtVQUFBLHdCQUFBO0FDWVI7O0FEUkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1dSOztBRFRJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDV1I7O0FEVEk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGNvbW1pbmcvdXBjb21taW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kYXRle1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGZsZXg6IDE7XG59XG4uZGF0ZSBkaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGF5e1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1vbnRoe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhvdXJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmluZm9ybWF0aW9ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLm5hbWV7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDVweCAxNXB4O1xuICAgIFxufVxuXG4ucGxhY2V7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogNXB4IDE1cHggNXB4IDE1cHg7XG4gICAgY29sb3I6ICMwMGM2NzE7XG59XG5cbi5wcmVzZW5jZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJlc2VuY2VbcHJlc2VuY2U9XCJZRVNcIl17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzY3MTtcbn1cbi5wcmVzZW5jZVtwcmVzZW5jZT1cIk1BWUJFXCJde1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4ucHJlc2VuY2VbcHJlc2VuY2U9XCJOT1wiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDRjO1xufVxuLnByZXNlbmNlW3ByZXNlbmNlPVwiTEFURVwiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5pbWd7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICB3aWR0aDogNjAlO1xufVxuLmRlbGV0aW5naW5mb3JtYXRpb257XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLnNlbGVjdGlvbkNpcmNsZXtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG59XG4uc2VsZWN0ZWRTZWxlY3Rpb25DaXJjbGV7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG59XG4uY29udGFpbmVyOmFjdGl2ZSA+IC5kYXRlLCAuY29udGFpbmVyOmFjdGl2ZSA+IC5pbmZvcm1hdGlvbntcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXB7XG4gICAgLmRheXtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLm1vbnRoe1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIC5ob3Vye1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIFxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGF0ZSB7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgZmxleDogMTtcbn1cblxuLmRhdGUgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRheSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tb250aCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhvdXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAxNXB4IDE1cHggNXB4IDE1cHg7XG59XG5cbi5wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA1cHggMTVweCA1cHggMTVweDtcbiAgY29sb3I6ICMwMGM2NzE7XG59XG5cbi5wcmVzZW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcmVzZW5jZVtwcmVzZW5jZT1ZRVNdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzY3MTtcbn1cblxuLnByZXNlbmNlW3ByZXNlbmNlPU1BWUJFXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5wcmVzZW5jZVtwcmVzZW5jZT1OT10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDRjO1xufVxuXG4ucHJlc2VuY2VbcHJlc2VuY2U9TEFURV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbmltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB3aWR0aDogNjAlO1xufVxuXG4uZGVsZXRpbmdpbmZvcm1hdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLnNlbGVjdGlvbkNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG59XG5cbi5zZWxlY3RlZFNlbGVjdGlvbkNpcmNsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbn1cblxuLmNvbnRhaW5lcjphY3RpdmUgPiAuZGF0ZSwgLmNvbnRhaW5lcjphY3RpdmUgPiAuaW5mb3JtYXRpb24ge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF5IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9udGgge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmhvdXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/upcomming/upcomming.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/upcomming/upcomming.component.ts ***!
    \*************************************************************/

  /*! exports provided: UpcommingComponent, UpcommingModule */

  /***/
  function srcAppComponentsUpcommingUpcommingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcommingComponent", function () {
      return UpcommingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcommingModule", function () {
      return UpcommingModule;
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


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    var symbole = {
      YES: "checkmark.png",
      NO: "x.png",
      MAYBE: "ellipsis.png"
    };

    var UpcommingComponent = /*#__PURE__*/function () {
      function UpcommingComponent(alertController, translate, domSanitizer) {
        _classCallCheck(this, UpcommingComponent);

        this.alertController = alertController;
        this.translate = translate;
        this.domSanitizer = domSanitizer;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.presenceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.day = 0;
        this.month = "";
        this.hour = "";
        this.symbole = symbole;
        this.params = {
          day: "23",
          month: "asd"
        };
        this.translatedDate = "";
      }

      _createClass(UpcommingComponent, [{
        key: "selectEvent",
        value: function selectEvent(event) {
          if (event.target.getAttribute("ignore") != "true" && !this.deleting) {
            this.selected.emit({
              index: parseInt(this.index)
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.day = parseInt(this.date.split("/")[0]);
          this.month = months[parseInt(this.date.split("/")[1])];
          this.hour = this.date.split("!")[1].replace(":", "h");
          this.translatedDate = this.translate.instant("UPCOMMING.DATE", {
            DAY: this.day,
            MONTH: this.translate.instant("ABREVIATIONS." + parseInt(this.date.split("/")[1]))
          });
          console.log(this.places, this.selectedEvent);
        }
      }, {
        key: "changePresence",
        value: function changePresence() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.deleting) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    _context.next = 4;
                    return this.alertController.create({
                      cssClass: 'containerAlert',
                      header: this.translate.instant("ALERTS.0.TITLE"),
                      message: this.translate.instant("ALERTS.0.MESSAGE", {
                        name: this.name
                      }),
                      buttons: [{
                        text: this.translate.instant("ALERTS.0.BUTTONS.0"),
                        cssClass: 'noButtonAlert',
                        handler: function handler(blah) {
                          _this.changeRole(2);
                        }
                      }, {
                        text: this.translate.instant("ALERTS.0.BUTTONS.1"),
                        cssClass: "maybeButtonAlert",
                        handler: function handler(blah) {
                          _this.changeRole(1);
                        }
                      }, {
                        text: this.translate.instant("ALERTS.0.BUTTONS.2"),
                        cssClass: 'yesButtonAlert',
                        handler: function handler() {
                          _this.changeRole(0);
                        }
                      }, {
                        text: this.translate.instant("ALERTS.0.BUTTONS.3"),
                        cssClass: 'lateButtonAlert',
                        handler: function handler() {
                          _this.lateByMinutes();
                        }
                      }]
                    });

                  case 4:
                    alert = _context.sent;
                    _context.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "lateByMinutes",
        value: function lateByMinutes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.translate.instant("ALERTS.1.TITLE"),
                      subHeader: this.translate.instant("ALERTS.1.MESSAGE"),
                      inputs: [{
                        name: 'minutes',
                        id: 'minutes',
                        type: 'number',
                        placeholder: 'ex: 10 min'
                      }],
                      buttons: [{
                        text: this.translate.instant("ALERTS.1.BUTTONS.0"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: this.translate.instant("ALERTS.1.BUTTONS.1"),
                        handler: function handler(alertData) {
                          _this2.changeRole(0, alertData.minutes);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeRole",
        value: function changeRole(role, late) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var token, obj, result, presence, roles;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_3__["get"])("token");

                  case 3:
                    token = _context3.sent;
                    obj = {
                      event: this.id,
                      id: this.teamId,
                      token: token,
                      presence: role,
                      playerId: this.playerId
                    };

                    if (!obj.playerId) {
                      delete obj.playerId;
                    }

                    if (late) {
                      obj.late = parseInt(late);
                    }

                    _context3.next = 9;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_4__["call"])("http://192.168.2.251:3000/api/changePresence", obj);

                  case 9:
                    result = _context3.sent;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context3.next = 13;
                      break;
                    }

                    throw result.error;

                  case 13:
                    presence = parseInt(result.presence);
                    roles = ["YES", "MAYBE", "NO"];
                    this.presence = roles[presence];
                    this.late = result.late;
                    this.presenceChanged.emit({
                      index: this.index,
                      presence: presence,
                      late: late
                    });
                    _context3.next = 22;
                    break;

                  case 20:
                    _context3.prev = 20;
                    _context3.t0 = _context3["catch"](0);

                  case 22:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 20]]);
          }));
        }
      }]);

      return UpcommingComponent;
    }();

    UpcommingComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('name')], UpcommingComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('place')], UpcommingComponent.prototype, "places", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('date')], UpcommingComponent.prototype, "date", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('id')], UpcommingComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('teamId')], UpcommingComponent.prototype, "teamId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('playerId')], UpcommingComponent.prototype, "playerId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('late')], UpcommingComponent.prototype, "late", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('presence')], UpcommingComponent.prototype, "presence", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index')], UpcommingComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('deleting')], UpcommingComponent.prototype, "deleting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('selectedEvent')], UpcommingComponent.prototype, "selectedEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UpcommingComponent.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UpcommingComponent.prototype, "presenceChanged", void 0);
    UpcommingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upcomming',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./upcomming.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upcomming/upcomming.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./upcomming.component.scss */
      "./src/app/components/upcomming/upcomming.component.scss"))["default"]]
    })], UpcommingComponent);

    var UpcommingModule = function UpcommingModule() {
      _classCallCheck(this, UpcommingModule);
    };

    UpcommingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
      declarations: [UpcommingComponent],
      exports: [UpcommingComponent],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], UpcommingModule);
    /***/
  }
}]);
//# sourceMappingURL=default~events-events-module~pages-home-home-module~pages-player-player-module-es5.js.map