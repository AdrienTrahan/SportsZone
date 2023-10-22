function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-settings-playerinfo-playerinfo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/playerinfo/playerinfo.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/playerinfo/playerinfo.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamSettingsPlayerinfoPlayerinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"PLAYERSETTINGS.TITLE\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!this.buttonEnabled\" (click)=\"this.save()\" class=\"\">\n        <ion-icon color=\"white\" name=\"save-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    {{\"PLAYERSETTINGS.HEADER\" | translate}}\n  </ion-list-header>\n  <ion-item button (click)=\"selectPicture()\">\n    <ion-label>{{\"PLAYERSETTINGS.0\" | translate}}</ion-label>\n    <img class=\"profileImage\" [src]=\"imageUrlSafe || image || '../../assets/emptyProfile.png'\" alt=\"\">\n    <span class=\"spanChange\">{{\"PLAYERSETTINGS.1\" | translate}}</span>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"PLAYERSETTINGS.2\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"firstname\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"PLAYERSETTINGS.3\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"lastname\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"PLAYERSETTINGS.4\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"age\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"PLAYERSETTINGS.5\" | translate}}</ion-label>\n    <ion-select [(ngModel)]=\"sex\" value=\"Male\">\n      <ion-select-option value=\"Male\">{{\"PLAYERSETTINGS.6\" | translate}}</ion-select-option>\n      <ion-select-option value=\"Female\">{{\"PLAYERSETTINGS.7\" | translate}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <ion-item-divider>\n    <ion-label>\n      {{\"PLAYERSETTINGS.HEADER2\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-label>{{\"PLAYERSETTINGS.8\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"shirtnumber\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{\"PLAYERSETTINGS.9\" | translate}}</ion-label>\n    <ion-input type=\"text\" class=\"infoInput\" [(ngModel)]=\"position\"></ion-input>\n  </ion-item>\n  <br>\n  <ion-item-divider>\n    <ion-label>\n      {{\"PLAYERSETTINGS.HEADER3\" | translate}}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item class=\"\" *ngFor=\"let contact of this.contacts; let i = index\">\n    <ion-label class=\"\">{{contact.name}}<p>{{contact.data}}</p></ion-label>\n    <ion-icon (click)=\"deleteContact(i);$event.stopPropagation();\" class=\"trash\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n  </ion-item>\n  <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingContact\">\n    <ion-label>{{\"PLAYERSETTINGS.10\" | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"this.newContact.name\" class=\"right\" placeholder=\"ex: Alicia's phone number\"></ion-input>\n  </ion-item>\n  <ion-item class=\"\" lines=\"none\" *ngIf=\"this.addingContact\">\n    <ion-label>{{\"PLAYERSETTINGS.11\" | translate}}</ion-label>\n    <ion-select [(ngModel)]=\"this.newContact.type\" (ionChange)=\"changedSelection($event)\" value=\"phone\" interface=\"popover\">\n      <ion-select-option value=\"phone\">{{\"PLAYERSETTINGS.12\" | translate}}</ion-select-option>\n      <ion-select-option value=\"email\">{{\"PLAYERSETTINGS.13\" | translate}}</ion-select-option>\n      <ion-select-option value=\"text\">{{\"PLAYERSETTINGS.14\" | translate}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" *ngIf=\"this.addingContact\">\n    <ion-label>\n      {{\"PLAYERSETTINGS.15\" | translate}}\n    </ion-label>\n    <ion-input #phoneInput (input)=\"mask($event)\" class=\"right\" [placeholder]=\"this.types[this.newContact.type]\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"this.addingContact\" class=\"splitButton\" class=\"\">\n    <ion-button (click)=\"closeContact()\" class=\"closeButton\">{{\"PLAYERSETTINGS.16\" | translate}}</ion-button>\n    <ion-button (click)=\"insertContact()\" [disabled]=\"!this.newContact.name || !this.newContact.data\" class=\"addButton\">{{\"PLAYERSETTINGS.17\" | translate}}</ion-button>\n  </ion-item>\n  <ion-item (click)=\"addContact()\" *ngIf=\"!this.addingContact\"class=\"\" button color=\"primary\">\n    {{\"PLAYERSETTINGS.18\" | translate}}\n  </ion-item>\n</ion-content>\n";
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
  "./src/app/pages/team/settings/playerinfo/playerinfo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/team/settings/playerinfo/playerinfo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: PlayerinfoPageRoutingModule */

  /***/
  function srcAppPagesTeamSettingsPlayerinfoPlayerinfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerinfoPageRoutingModule", function () {
      return PlayerinfoPageRoutingModule;
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


    var _playerinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./playerinfo.page */
    "./src/app/pages/team/settings/playerinfo/playerinfo.page.ts");

    var routes = [{
      path: '',
      component: _playerinfo_page__WEBPACK_IMPORTED_MODULE_3__["PlayerinfoPage"]
    }];

    var PlayerinfoPageRoutingModule = function PlayerinfoPageRoutingModule() {
      _classCallCheck(this, PlayerinfoPageRoutingModule);
    };

    PlayerinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlayerinfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/team/settings/playerinfo/playerinfo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/team/settings/playerinfo/playerinfo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PlayerinfoPageModule */

  /***/
  function srcAppPagesTeamSettingsPlayerinfoPlayerinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerinfoPageModule", function () {
      return PlayerinfoPageModule;
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


    var _playerinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./playerinfo-routing.module */
    "./src/app/pages/team/settings/playerinfo/playerinfo-routing.module.ts");
    /* harmony import */


    var _playerinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./playerinfo.page */
    "./src/app/pages/team/settings/playerinfo/playerinfo.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PlayerinfoPageModule = function PlayerinfoPageModule() {
      _classCallCheck(this, PlayerinfoPageModule);
    };

    PlayerinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _playerinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerinfoPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_playerinfo_page__WEBPACK_IMPORTED_MODULE_6__["PlayerinfoPage"]]
    })], PlayerinfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/team/settings/playerinfo/playerinfo.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/team/settings/playerinfo/playerinfo.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamSettingsPlayerinfoPlayerinfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".infoInput {\n  text-align: right;\n  --text-align: right;\n}\n\n.profileImage {\n  width: 80px;\n  border-radius: 50%;\n  margin: 10px 10px 10px 10px;\n}\n\n.spanChange {\n  color: #0088FF;\n}\n\n.closeButton {\n  --background: var(--ion-color-danger);\n  flex: 1;\n  height: 40px;\n  margin: 0px 10px 0px 0px;\n  padding: 0px;\n  color: white;\n}\n\n.addButton {\n  --background: var(--ion-color-primary);\n  flex: 1;\n  height: 40px;\n  margin: 0px 0px 0px 10px;\n  padding: 0px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3RlYW0vc2V0dGluZ3MvcGxheWVyaW5mby9wbGF5ZXJpbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVhbS9zZXR0aW5ncy9wbGF5ZXJpbmZvL3BsYXllcmluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QURBQTtFQUNJLHFDQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxzQ0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS9zZXR0aW5ncy9wbGF5ZXJpbmZvL3BsYXllcmluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9JbnB1dHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAtLXRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnByb2ZpbGVJbWFnZXtcbiAgICB3aWR0aDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuLnNwYW5DaGFuZ2V7XG4gICAgY29sb3I6ICMwMDg4RkY7XG59XG5cbi5jbG9zZUJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmFkZEJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iLCIuaW5mb0lucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC0tdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5zcGFuQ2hhbmdlIHtcbiAgY29sb3I6ICMwMDg4RkY7XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZEJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/team/settings/playerinfo/playerinfo.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/team/settings/playerinfo/playerinfo.page.ts ***!
    \*******************************************************************/

  /*! exports provided: PlayerinfoPage */

  /***/
  function srcAppPagesTeamSettingsPlayerinfoPlayerinfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerinfoPage", function () {
      return PlayerinfoPage;
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


    var src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/functions/call */
    "./src/app/functions/call.ts");
    /* harmony import */


    var src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/functions/storage */
    "./src/app/functions/storage.ts");
    /* harmony import */


    var src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/pages/home/home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _controller_team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../controller/team.page */
    "./src/app/pages/team/controller/team.page.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var text_mask_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! text-mask-core */
    "./node_modules/text-mask-core/dist/textMaskCore.js");
    /* harmony import */


    var text_mask_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(text_mask_core__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Camera;

    var PlayerinfoPage = /*#__PURE__*/function () {
      function PlayerinfoPage(translate, actionSheetController, sanitizer, crop, http, transfer) {
        _classCallCheck(this, PlayerinfoPage);

        this.translate = translate;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.crop = crop;
        this.http = http;
        this.transfer = transfer;
        this.firstname = "";
        this.lastname = "";
        this.alias = _controller_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"];
        this.image = "";
        this.imageUrlSafe = "";
        this.imageUrl = "";
        this.age = "";
        this.sex = "";
        this.unmodified = {
          firstname: "",
          lastname: "",
          image: "",
          age: "",
          sex: "",
          shirtnumber: "",
          position: ""
        };
        this.shirtnumber = "";
        this.position = "";
        this.buttonEnabled = true;
        this.phonenumberString = "";
        this.phonenumber = "";
        this.contacts = [];
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

      _createClass(PlayerinfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.load();
          var player = src_app_pages_home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"].players.find(function (player) {
            return player.id == _this.alias.teamInfo.playerId;
          });
          this.firstname = player.first;
          this.lastname = player.last;
          this.image = player.image;
          this.unmodified = {
            firstname: player.first,
            lastname: player.last,
            image: player.image,
            age: "",
            sex: "",
            shirtnumber: "",
            position: ""
          };
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

                    maskedInput = Object(text_mask_core__WEBPACK_IMPORTED_MODULE_12__["createTextMaskInputElement"])({
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
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Photos,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Uri
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
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Camera,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Uri
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
                    this.imageUrlSafe = this.sanitizer.bypassSecurityTrustUrl(_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].convertFileSrc(imagePath));
                    this.imageUrl = imagePath;

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var token, obj, result;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.buttonEnabled = false;
                    setTimeout(function () {
                      _this4.buttonEnabled = true;
                    }, 2000);
                    _context6.next = 4;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 4:
                    token = _context6.sent;
                    obj = {
                      token: token,
                      id: _controller_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"].teamInfo.id,
                      playerId: this.alias.teamInfo.playerId,
                      last: this.lastname,
                      first: this.firstname,
                      contacts: JSON.stringify(this.contacts),
                      sex: this.sex,
                      age: this.age,
                      position: this.position,
                      shirtnumber: this.shirtnumber
                    };

                    if (!(this.unmodified.image != (this.imageUrl || this.image))) {
                      _context6.next = 15;
                      break;
                    }

                    obj.extension = "." + this.imageUrl.split("/")[this.imageUrl.split("/").length - 1].split('.').pop();
                    obj.defaultPicture = this.imageUrl == '';
                    this.unmodified = {
                      firstname: this.firstname,
                      lastname: this.lastname,
                      image: this.imageUrl || this.image,
                      age: this.age,
                      sex: this.sex,
                      position: this.position,
                      shirtnumber: this.shirtnumber
                    };
                    _context6.next = 12;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["upload"])('http://192.168.2.251:3000/api/savePlayerInfo', this.imageUrl, obj, this.http, this.transfer);

                  case 12:
                    result = _context6.sent;
                    _context6.next = 19;
                    break;

                  case 15:
                    this.unmodified = {
                      firstname: this.firstname,
                      lastname: this.lastname,
                      image: this.imageUrl || this.image,
                      age: this.age,
                      sex: this.sex,
                      position: this.position,
                      shirtnumber: this.shirtnumber
                    };
                    _context6.next = 18;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["post"])('http://192.168.2.251:3000/api/savePlayerInfo', obj);

                  case 18:
                    result = _context6.sent;

                  case 19:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
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
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var token, result, i;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_functions_storage__WEBPACK_IMPORTED_MODULE_4__["get"])("token");

                  case 2:
                    token = _context7.sent;
                    _context7.next = 5;
                    return Object(src_app_functions_call__WEBPACK_IMPORTED_MODULE_3__["call"])("http://192.168.2.251:3000/api/getPlayerPublicInfo", {
                      token: token,
                      playerId: this.alias.teamInfo.playerId
                    });

                  case 5:
                    result = _context7.sent;
                    _context7.prev = 6;
                    result = JSON.parse(result);

                    if (!result.error) {
                      _context7.next = 10;
                      break;
                    }

                    throw result.error;

                  case 10:
                    ;

                    for (i = 0; i < result.contacts.length; i++) {
                      if (result.contacts[i].type == "phone") {
                        result.contacts[i].data = formatPhoneNumber(result.contacts[i].data);
                      }
                    }

                    if (result.age && result.age != "undefined") {
                      this.age = result.age;
                    }

                    if (result.sex && result.sex != "undefined") {
                      this.sex = result.sex;
                    }

                    if (result.shirtnumber) {
                      this.shirtnumber = result.shirtnumber[_controller_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"].teamInfo.id];
                    }

                    if (result.position) {
                      this.position = result.position[_controller_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"].teamInfo.id];
                    }

                    this.contacts = result.contacts;
                    _context7.next = 21;
                    break;

                  case 19:
                    _context7.prev = 19;
                    _context7.t0 = _context7["catch"](6);

                  case 21:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[6, 19]]);
          }));
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
          var _this5 = this;

          if (!value) {
            return;
          }

          value.getInputElement().then(function (input) {
            return _this5.registerTextMask(input);
          });
        }
      }, {
        key: "phoneNumber",
        get: function get() {
          return this.phonenumberString;
        }
      }]);

      return PlayerinfoPage;
    }();

    PlayerinfoPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phoneInput')], PlayerinfoPage.prototype, "phoneInput", null);
    PlayerinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-playerinfo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./playerinfo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/settings/playerinfo/playerinfo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./playerinfo.page.scss */
      "./src/app/pages/team/settings/playerinfo/playerinfo.page.scss"))["default"]]
    })], PlayerinfoPage);

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
//# sourceMappingURL=pages-team-settings-playerinfo-playerinfo-module-es5.js.map