(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-controller-team-module"],{

/***/ "./src/app/pages/team/controller/team-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/team/controller/team-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageRoutingModule", function() { return TeamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.page */ "./src/app/pages/team/controller/team.page.ts");




const routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"],
        children: [
            {
                path: "events",
                loadChildren: () => Promise.all(/*! import() | events-events-module */[__webpack_require__.e("default~events-events-module~pages-home-home-module~pages-player-player-module"), __webpack_require__.e("events-events-module")]).then(__webpack_require__.bind(null, /*! ../events/events.module */ "./src/app/pages/team/events/events.module.ts")).then(m => m.EventsPageModule)
            },
            {
                path: "people",
                loadChildren: () => Promise.all(/*! import() | people-people-module */[__webpack_require__.e("common"), __webpack_require__.e("people-people-module")]).then(__webpack_require__.bind(null, /*! ../people/people.module */ "./src/app/pages/team/people/people.module.ts")).then(m => m.PeoplePageModule)
            },
            {
                path: "mail",
                loadChildren: () => Promise.all(/*! import() | mail-mail-module */[__webpack_require__.e("default~mail-mail-module~pages-new-message-new-message-module"), __webpack_require__.e("mail-mail-module")]).then(__webpack_require__.bind(null, /*! ../mail/mail.module */ "./src/app/pages/team/mail/mail.module.ts")).then(m => m.MailPageModule)
            },
            {
                path: "settings",
                loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "./src/app/pages/team/settings/settings.module.ts")).then(m => m.SettingsPageModule)
            }
        ]
    },
    {
        path: "team",
        redirectTo: "",
        pathMatch: 'full'
    }
];
let TeamPageRoutingModule = class TeamPageRoutingModule {
};
TeamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/controller/team.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/team/controller/team.module.ts ***!
  \******************************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/pages/team/controller/team-routing.module.ts");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.page */ "./src/app/pages/team/controller/team.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let TeamPageModule = class TeamPageModule {
};
TeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
    })
], TeamPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-team-controller-team-module-es2015.js.map