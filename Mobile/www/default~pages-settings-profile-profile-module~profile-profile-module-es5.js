function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-settings-profile-profile-module~profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/profile/profile.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/profile/profile.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'SETTINGS.CHANGECONTACT.BACKTITLE' | translate}}\" color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"SETTINGS.CHANGECONTACT.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!this.enabledButton\" (click)=\"this.save()\" class=\"\">\n        <ion-icon color=\"white\" name=\"save-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>\n      {{\"SETTINGS.CHANGECONTACT.0\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let contact of this.contacts; let i = index\">\n    <ion-label class=\"\">{{contact.name}}<p>{{contact.data}}</p></ion-label>\n    <ion-icon (click)=\"deleteContact(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n  </ion-item>\n  <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingContact\">\n    <ion-label>{{\"SETTINGS.CHANGECONTACT.1\" | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"this.newContact.name\" class=\"right\" placeholder=\"ex: John's phone number\"></ion-input>\n  </ion-item>\n  <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingContact\">\n    <ion-label>{{\"SETTINGS.CHANGECONTACT.2\" | translate}}</ion-label>\n    <ion-select [(ngModel)]=\"this.newContact.type\" (ionChange)=\"changedSelection($event)\" value=\"phone\" interface=\"popover\">\n      <ion-select-option value=\"phone\">{{\"SETTINGS.CHANGECONTACT.3\" | translate}}</ion-select-option>\n      <ion-select-option value=\"email\">{{\"SETTINGS.CHANGECONTACT.4\" | translate}}</ion-select-option>\n      <ion-select-option value=\"text\">{{\"SETTINGS.CHANGECONTACT.5\" | translate}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" *ngIf=\"this.addingContact\">\n    <ion-label>\n      {{\"SETTINGS.CHANGECONTACT.6\" | translate}}\n    </ion-label>\n    <ion-input #phoneInput (input)=\"mask($event)\" class=\"right\" [placeholder]=\"this.types[this.newContact.type]\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"this.addingContact\" class=\"splitButton\" class=\"\">\n    <ion-button (click)=\"closeContact()\" class=\"closeButton\">{{\"SETTINGS.CHANGECONTACT.7\" | translate}}</ion-button>\n    <ion-button (click)=\"insertContact()\" [disabled]=\"!this.newContact.name || !this.newContact.data\" class=\"addButton\">{{\"SETTINGS.CHANGECONTACT.8\" | translate}}</ion-button>\n  </ion-item>\n  <ion-item (click)=\"addContact()\" *ngIf=\"!this.addingContact\"class=\"\" button color=\"primary\">\n    {{\"SETTINGS.CHANGECONTACT.9\" | translate}}\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/text-mask-core/dist/textMaskCore.js":
  /*!**********************************************************!*\
    !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesTextMaskCoreDistTextMaskCoreJs(module, exports, __webpack_require__) {
    !function (e, r) {
      true ? module.exports = r() : undefined;
    }(this, function () {
      return function (e) {
        function r(n) {
          if (t[n]) return t[n].exports;
          var o = t[n] = {
            exports: {},
            id: n,
            loaded: !1
          };
          return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
        }

        var t = {};
        return r.m = e, r.c = t, r.p = "", r(0);
      }([function (e, r, t) {
        "use strict";

        function n(e) {
          return e && e.__esModule ? e : {
            "default": e
          };
        }

        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var o = t(3);
        Object.defineProperty(r, "conformToMask", {
          enumerable: !0,
          get: function get() {
            return n(o)["default"];
          }
        });
        var i = t(2);
        Object.defineProperty(r, "adjustCaretPosition", {
          enumerable: !0,
          get: function get() {
            return n(i)["default"];
          }
        });
        var a = t(5);
        Object.defineProperty(r, "createTextMaskInputElement", {
          enumerable: !0,
          get: function get() {
            return n(a)["default"];
          }
        });
      }, function (e, r) {
        "use strict";

        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.placeholderChar = "_", r.strFunction = "function";
      }, function (e, r) {
        "use strict";

        function t(e) {
          var r = e.previousConformedValue,
              t = void 0 === r ? o : r,
              i = e.previousPlaceholder,
              a = void 0 === i ? o : i,
              u = e.currentCaretPosition,
              l = void 0 === u ? 0 : u,
              s = e.conformedValue,
              f = e.rawValue,
              d = e.placeholderChar,
              c = e.placeholder,
              p = e.indexesOfPipedChars,
              v = void 0 === p ? n : p,
              h = e.caretTrapIndexes,
              m = void 0 === h ? n : h;
          if (0 === l || !f.length) return 0;
          var y = f.length,
              g = t.length,
              b = c.length,
              C = s.length,
              P = y - g,
              k = P > 0,
              x = 0 === g,
              O = P > 1 && !k && !x;
          if (O) return l;
          var T = k && (t === s || s === c),
              w = 0,
              M = void 0,
              S = void 0;
          if (T) w = l - P;else {
            var j = s.toLowerCase(),
                _ = f.toLowerCase(),
                V = _.substr(0, l).split(o),
                A = V.filter(function (e) {
              return j.indexOf(e) !== -1;
            });

            S = A[A.length - 1];
            var N = a.substr(0, A.length).split(o).filter(function (e) {
              return e !== d;
            }).length,
                E = c.substr(0, A.length).split(o).filter(function (e) {
              return e !== d;
            }).length,
                F = E !== N,
                R = void 0 !== a[A.length - 1] && void 0 !== c[A.length - 2] && a[A.length - 1] !== d && a[A.length - 1] !== c[A.length - 1] && a[A.length - 1] === c[A.length - 2];
            !k && (F || R) && N > 0 && c.indexOf(S) > -1 && void 0 !== f[l] && (M = !0, S = f[l]);

            for (var I = v.map(function (e) {
              return j[e];
            }), J = I.filter(function (e) {
              return e === S;
            }).length, W = A.filter(function (e) {
              return e === S;
            }).length, q = c.substr(0, c.indexOf(d)).split(o).filter(function (e, r) {
              return e === S && f[r] !== e;
            }).length, L = q + W + J + (M ? 1 : 0), z = 0, B = 0; B < C; B++) {
              var D = j[B];
              if (w = B + 1, D === S && z++, z >= L) break;
            }
          }

          if (k) {
            for (var G = w, H = w; H <= b; H++) {
              if (c[H] === d && (G = H), c[H] === d || m.indexOf(H) !== -1 || H === b) return G;
            }
          } else if (M) {
            for (var K = w - 1; K >= 0; K--) {
              if (s[K] === S || m.indexOf(K) !== -1 || 0 === K) return K;
            }
          } else for (var Q = w; Q >= 0; Q--) {
            if (c[Q - 1] === d || m.indexOf(Q) !== -1 || 0 === Q) return Q;
          }
        }

        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r["default"] = t;
        var n = [],
            o = "";
      }, function (e, r, t) {
        "use strict";

        function n() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

          if (!(0, i.isArray)(r)) {
            if (("undefined" == typeof r ? "undefined" : o(r)) !== a.strFunction) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
            r = r(e, t), r = (0, i.processCaretTraps)(r).maskWithoutCaretTraps;
          }

          var n = t.guide,
              s = void 0 === n || n,
              f = t.previousConformedValue,
              d = void 0 === f ? l : f,
              c = t.placeholderChar,
              p = void 0 === c ? a.placeholderChar : c,
              v = t.placeholder,
              h = void 0 === v ? (0, i.convertMaskToPlaceholder)(r, p) : v,
              m = t.currentCaretPosition,
              y = t.keepCharPositions,
              g = s === !1 && void 0 !== d,
              b = e.length,
              C = d.length,
              P = h.length,
              k = r.length,
              x = b - C,
              O = x > 0,
              T = m + (O ? -x : 0),
              w = T + Math.abs(x);

          if (y === !0 && !O) {
            for (var M = l, S = T; S < w; S++) {
              h[S] === p && (M += p);
            }

            e = e.slice(0, T) + M + e.slice(T, b);
          }

          for (var j = e.split(l).map(function (e, r) {
            return {
              "char": e,
              isNew: r >= T && r < w
            };
          }), _ = b - 1; _ >= 0; _--) {
            var V = j[_]["char"];

            if (V !== p) {
              var A = _ >= T && C === k;
              V === h[A ? _ - x : _] && j.splice(_, 1);
            }
          }

          var N = l,
              E = !1;

          e: for (var F = 0; F < P; F++) {
            var R = h[F];

            if (R === p) {
              if (j.length > 0) for (; j.length > 0;) {
                var I = j.shift(),
                    J = I["char"],
                    W = I.isNew;

                if (J === p && g !== !0) {
                  N += p;
                  continue e;
                }

                if (r[F].test(J)) {
                  if (y === !0 && W !== !1 && d !== l && s !== !1 && O) {
                    for (var q = j.length, L = null, z = 0; z < q; z++) {
                      var B = j[z];
                      if (B["char"] !== p && B.isNew === !1) break;

                      if (B["char"] === p) {
                        L = z;
                        break;
                      }
                    }

                    null !== L ? (N += J, j.splice(L, 1)) : F--;
                  } else N += J;

                  continue e;
                }

                E = !0;
              }
              g === !1 && (N += h.substr(F, P));
              break;
            }

            N += R;
          }

          if (g && O === !1) {
            for (var D = null, G = 0; G < N.length; G++) {
              h[G] === p && (D = G);
            }

            N = null !== D ? N.substr(0, D + 1) : l;
          }

          return {
            conformedValue: N,
            meta: {
              someCharsRejected: E
            }
          };
        }

        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        r["default"] = n;
        var i = t(4),
            a = t(1),
            u = [],
            l = "";
      }, function (e, r, t) {
        "use strict";

        function n() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.placeholderChar;
          if (!o(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
          if (e.indexOf(r) !== -1) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(r) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e)));
          return e.map(function (e) {
            return e instanceof RegExp ? r : e;
          }).join("");
        }

        function o(e) {
          return Array.isArray && Array.isArray(e) || e instanceof Array;
        }

        function i(e) {
          return "string" == typeof e || e instanceof String;
        }

        function a(e) {
          return "number" == typeof e && void 0 === e.length && !isNaN(e);
        }

        function u(e) {
          return "undefined" == typeof e || null === e;
        }

        function l(e) {
          for (var r = [], t = void 0; t = e.indexOf(d), t !== -1;) {
            r.push(t), e.splice(t, 1);
          }

          return {
            maskWithoutCaretTraps: e,
            indexes: r
          };
        }

        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.convertMaskToPlaceholder = n, r.isArray = o, r.isString = i, r.isNumber = a, r.isNil = u, r.processCaretTraps = l;
        var s = t(1),
            f = [],
            d = "[]";
      }, function (e, r, t) {
        "use strict";

        function n(e) {
          return e && e.__esModule ? e : {
            "default": e
          };
        }

        function o(e) {
          var r = {
            previousConformedValue: void 0,
            previousPlaceholder: void 0
          };
          return {
            state: r,
            update: function update(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                  o = n.inputElement,
                  s = n.mask,
                  d = n.guide,
                  m = n.pipe,
                  g = n.placeholderChar,
                  b = void 0 === g ? v.placeholderChar : g,
                  C = n.keepCharPositions,
                  P = void 0 !== C && C,
                  k = n.showMask,
                  x = void 0 !== k && k;

              if ("undefined" == typeof t && (t = o.value), t !== r.previousConformedValue) {
                ("undefined" == typeof s ? "undefined" : l(s)) === y && void 0 !== s.pipe && void 0 !== s.mask && (m = s.pipe, s = s.mask);
                var O = void 0,
                    T = void 0;

                if (s instanceof Array && (O = (0, p.convertMaskToPlaceholder)(s, b)), s !== !1) {
                  var w = a(t),
                      M = o.selectionEnd,
                      S = r.previousConformedValue,
                      j = r.previousPlaceholder,
                      _ = void 0;

                  if (("undefined" == typeof s ? "undefined" : l(s)) === v.strFunction) {
                    if (T = s(w, {
                      currentCaretPosition: M,
                      previousConformedValue: S,
                      placeholderChar: b
                    }), T === !1) return;
                    var V = (0, p.processCaretTraps)(T),
                        A = V.maskWithoutCaretTraps,
                        N = V.indexes;
                    T = A, _ = N, O = (0, p.convertMaskToPlaceholder)(T, b);
                  } else T = s;

                  var E = {
                    previousConformedValue: S,
                    guide: d,
                    placeholderChar: b,
                    pipe: m,
                    placeholder: O,
                    currentCaretPosition: M,
                    keepCharPositions: P
                  },
                      F = (0, c["default"])(w, T, E),
                      R = F.conformedValue,
                      I = ("undefined" == typeof m ? "undefined" : l(m)) === v.strFunction,
                      J = {};
                  I && (J = m(R, u({
                    rawValue: w
                  }, E)), J === !1 ? J = {
                    value: S,
                    rejected: !0
                  } : (0, p.isString)(J) && (J = {
                    value: J
                  }));
                  var W = I ? J.value : R,
                      q = (0, f["default"])({
                    previousConformedValue: S,
                    previousPlaceholder: j,
                    conformedValue: W,
                    placeholder: O,
                    rawValue: w,
                    currentCaretPosition: M,
                    placeholderChar: b,
                    indexesOfPipedChars: J.indexesOfPipedChars,
                    caretTrapIndexes: _
                  }),
                      L = W === O && 0 === q,
                      z = x ? O : h,
                      B = L ? z : W;
                  r.previousConformedValue = B, r.previousPlaceholder = O, o.value !== B && (o.value = B, i(o, q));
                }
              }
            }
          };
        }

        function i(e, r) {
          document.activeElement === e && (g ? b(function () {
            return e.setSelectionRange(r, r, m);
          }, 0) : e.setSelectionRange(r, r, m));
        }

        function a(e) {
          if ((0, p.isString)(e)) return e;
          if ((0, p.isNumber)(e)) return String(e);
          if (void 0 === e || null === e) return h;
          throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e));
        }

        Object.defineProperty(r, "__esModule", {
          value: !0
        });

        var u = Object.assign || function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];

            for (var n in t) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }

          return e;
        },
            l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };

        r["default"] = o;
        var s = t(2),
            f = n(s),
            d = t(3),
            c = n(d),
            p = t(4),
            v = t(1),
            h = "",
            m = "none",
            y = "object",
            g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
      }]);
    });
    /***/
  },

  /***/
  "./src/app/pages/settings/profile/profile-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/settings/profile/profile-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesSettingsProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/settings/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/profile/profile.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/settings/profile/profile.module.ts ***!
    \**********************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesSettingsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/settings/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/settings/profile/profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/profile/profile.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/settings/profile/profile.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".phoneInput {\n  color: #008dff;\n  text-align: right;\n}\n\n.mailInput {\n  color: #008dff;\n  text-align: right;\n}\n\n.ion-valid {\n  --highlight-background: transparent !important;\n}\n\n.right {\n  text-align: right;\n}\n\n.closeButton {\n  --background: var(--ion-color-danger);\n  flex: 1;\n  height: 40px;\n  margin: 0px 10px 0px 0px;\n  padding: 0px;\n  color: white;\n}\n\n.addButton {\n  --background: var(--ion-color-primary);\n  flex: 1;\n  height: 40px;\n  margin: 0px 0px 0px 10px;\n  padding: 0px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksOENBQUE7QUNHSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQ0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksc0NBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvbmVJbnB1dHtcbiAgICBjb2xvcjogIzAwOGRmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWlsSW5wdXR7XG4gICAgY29sb3I6ICMwMDhkZmY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaW9uLXZhbGlkIHtcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5cbi5yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNsb3NlQnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWRkQnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufSIsIi5waG9uZUlucHV0IHtcbiAgY29sb3I6ICMwMDhkZmY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWFpbElucHV0IHtcbiAgY29sb3I6ICMwMDhkZmY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZEJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/settings/profile/profile.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/settings/profile/profile.page.ts ***!
    \********************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesSettingsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var text_mask_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! text-mask-core */
    "./node_modules/text-mask-core/dist/textMaskCore.js");
    /* harmony import */


    var text_mask_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text_mask_core__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage() {
        _classCallCheck(this, ProfilePage);

        this.phonenumberString = "";
        this.phonenumber = "";
        this.contacts = [];
        this.enabledButton = true;
        this.addingContact = false;
        this.newContact = {
          name: "",
          data: "",
          type: "phone"
        };
        this.types = {
          phone: "ex: (123) 456-789",
          email: "ex: abc@def.xyz",
          text: "ex: 10 place vignory"
        };
        this.input = {
          phone: "number",
          email: "text",
          text: "text"
        };
        this.email = "";
        this.saveEnabled = false;
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', '#', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/];
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.load();
        }
      }, {
        key: "telInputObject",
        value: function telInputObject(obj) {// obj.intlTelInput('setCountry', 'in');
        }
      }, {
        key: "registerTextMask",
        value: function registerTextMask(inputElement) {
          this.inputElement = inputElement;
        }
      }, {
        key: "mask",
        value: function mask(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var maskedInput;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.newContact.type != "phone")) {
                      _context.next = 3;
                      break;
                    }

                    this.newContact.data = event.target.value;
                    return _context.abrupt("return");

                  case 3:
                    if (event.inputType == "deleteContentBackward" && this.newContact.data == event.target.value.replace(/\D/g, '')) {
                      event.target.value = event.target.value.replace(/\D/g, '').substring(0, event.target.value.replace(/\D/g, '').length - 1);
                    }

                    maskedInput = Object(text_mask_core__WEBPACK_IMPORTED_MODULE_2__["createTextMaskInputElement"])({
                      inputElement: this.inputElement,
                      mask: this.phoneMask,
                      guide: false
                    });
                    _context.next = 7;
                    return maskedInput.update(event.target.value.replace(/\D/g, '') + "");

                  case 7:
                    this.newContact.data = event.target.value.replace(/\D/g, '');

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var token, result, i;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 2:
                    token = _context2.sent;
                    _context2.next = 5;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getPublicInfo", {
                      token: token
                    });

                  case 5:
                    result = _context2.sent;
                    _context2.prev = 6;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context2.next = 10;
                      break;
                    }

                    throw result.error;

                  case 10:
                    ;

                    for (i = 0; i < result.length; i++) {
                      if (result[i].type == "phone") {
                        result[i].data = formatPhoneNumber(result[i].data);
                      }
                    }

                    this.contacts = result;
                    _context2.next = 17;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](6);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[6, 15]]);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var token, obj;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.enabledButton = false;
                    setTimeout(function () {
                      _this.enabledButton = true;
                    }, 2000);
                    _context3.next = 4;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 4:
                    token = _context3.sent;
                    obj = {
                      token: token,
                      contacts: JSON.stringify(this.contacts)
                    };
                    _context3.next = 8;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/savePublicInfo", obj);

                  case 8:
                    this.saveEnabled = false;

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addContact",
        value: function addContact() {
          this.addingContact = true;
        }
      }, {
        key: "closeContact",
        value: function closeContact() {
          this.addingContact = false;
          this.newContact = {
            name: "",
            data: "",
            type: "phone"
          };
        }
      }, {
        key: "insertContact",
        value: function insertContact() {
          this.addingContact = false;
          this.contacts.push(JSON.parse(JSON.stringify(this.newContact)));
          this.newContact = {
            name: "",
            data: "",
            type: "phone"
          };
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(i) {
          this.contacts.splice(i, 1);
        }
      }, {
        key: "changedSelection",
        value: function changedSelection(event) {
          this.inputElement.value = "";
          this.newContact.data = "";
        }
      }, {
        key: "_phonenumber",
        set: function set(data) {
          this.phonenumber = data;
          this.saveEnabled = (this.phonenumber.replace(/\D/g, "").length == 0 || this.phonenumber.replace(/\D/g, "").length >= 10) && (this.email == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email));
        },
        get: function get() {
          return this.phonenumber;
        }
      }, {
        key: "_email",
        set: function set(data) {
          this.email = data;
          this.saveEnabled = (this.phonenumber.replace(/\D/g, "").length == 0 || this.phonenumber.replace(/\D/g, "").length >= 10) && (this.email == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email));
        },
        get: function get() {
          return this.email;
        }
      }, {
        key: "phoneInput",
        set: function set(value) {
          var _this2 = this;

          if (!value) {
            return;
          }

          value.getInputElement().then(function (input) {
            return _this2.registerTextMask(input);
          });
        }
      }, {
        key: "phoneNumber",
        get: function get() {
          return this.phonenumberString;
        }
      }]);

      return ProfilePage;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phoneInput')], ProfilePage.prototype, "phoneInput", null);
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/settings/profile/profile.page.scss"))["default"]]
    })], ProfilePage);

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
//# sourceMappingURL=default~pages-settings-profile-profile-module~profile-profile-module-es5.js.map