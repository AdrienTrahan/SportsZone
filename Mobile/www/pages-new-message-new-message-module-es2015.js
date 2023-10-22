(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-message-new-message-module"],{

/***/ "./src/app/pages/new-message/new-message-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/new-message/new-message-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePageRoutingModule", function() { return NewMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-message.page */ "./src/app/pages/new-message/new-message.page.ts");




const routes = [
    {
        path: '',
        component: _new_message_page__WEBPACK_IMPORTED_MODULE_3__["NewMessagePage"]
    }
];
let NewMessagePageRoutingModule = class NewMessagePageRoutingModule {
};
NewMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/new-message/new-message.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-message/new-message.module.ts ***!
  \*********************************************************/
/*! exports provided: NewMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePageModule", function() { return NewMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-message-routing.module */ "./src/app/pages/new-message/new-message-routing.module.ts");
/* harmony import */ var _new_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-message.page */ "./src/app/pages/new-message/new-message.page.ts");
/* harmony import */ var src_app_components_tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/tag-input/tag-input.component */ "./src/app/components/tag-input/tag-input.component.ts");
/* harmony import */ var src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/smallplayer/smallplayer.component */ "./src/app/components/smallplayer/smallplayer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let NewMessagePageModule = class NewMessagePageModule {
};
NewMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewMessagePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            src_app_components_smallplayer_smallplayer_component__WEBPACK_IMPORTED_MODULE_8__["SmallplayerModule"]
        ],
        declarations: [_new_message_page__WEBPACK_IMPORTED_MODULE_6__["NewMessagePage"], src_app_components_tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"]]
    })
], NewMessagePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-new-message-new-message-module-es2015.js.map