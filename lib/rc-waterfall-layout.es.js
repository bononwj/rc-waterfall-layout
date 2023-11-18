var wr = Object.defineProperty;
var jr = (r, a, o) => a in r ? wr(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o;
var K = (r, a, o) => (jr(r, typeof a != "symbol" ? a + "" : a, o), o);
import de, { useRef as Ge, useEffect as Z, useMemo as xr } from "react";
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var le = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Pr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var r = de, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), P = Symbol.iterator, Q = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = P && e[P] || e[Q];
      return typeof t == "function" ? t : null;
    }
    var j = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        ee("error", e, n);
      }
    }
    function ee(e, t, n) {
      {
        var i = j.ReactDebugCurrentFrame, d = i.getStackAddendum();
        d !== "" && (t += "%s", n = n.concat([d]));
        var p = n.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var re = !1, W = !1, m = !1, C = !1, D = !1, L;
    L = Symbol.for("react.module.reference");
    function Qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === v || D || e === g || e === S || e === E || C || e === x || re || W || m || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === l || e.$$typeof === u || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function er(e, t, n) {
      var i = e.displayName;
      if (i)
        return i;
      var d = t.displayName || t.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case v:
          return "Profiler";
        case g:
          return "StrictMode";
        case S:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var t = e;
            return ve(t) + ".Consumer";
          case l:
            var n = e;
            return ve(n._context) + ".Provider";
          case h:
            return er(e, e.render, "ForwardRef");
          case R:
            var i = e.displayName || null;
            return i !== null ? i : k(e.type) || "Memo";
          case O: {
            var d = e, p = d._payload, c = d._init;
            try {
              return k(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, N = 0, pe, ge, he, me, be, ye, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function rr() {
      {
        if (N === 0) {
          pe = console.log, ge = console.info, he = console.warn, me = console.error, be = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function tr() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: pe
            }),
            info: F({}, e, {
              value: ge
            }),
            warn: F({}, e, {
              value: he
            }),
            error: F({}, e, {
              value: me
            }),
            group: F({}, e, {
              value: be
            }),
            groupCollapsed: F({}, e, {
              value: ye
            }),
            groupEnd: F({}, e, {
              value: Ee
            })
          });
        }
        N < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = j.ReactCurrentDispatcher, ne;
    function G(e, t, n) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (d) {
            var i = d.stack.trim().match(/\n( *(at )?)/);
            ne = i && i[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, B;
    {
      var nr = typeof WeakMap == "function" ? WeakMap : Map;
      B = new nr();
    }
    function Re(e, t) {
      if (!e || ae)
        return "";
      {
        var n = B.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      ae = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = te.current, te.current = null, rr();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch ($) {
              i = $;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch ($) {
              i = $;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            i = $;
          }
          e();
        }
      } catch ($) {
        if ($ && i && typeof $.stack == "string") {
          for (var f = $.stack.split(`
`), T = i.stack.split(`
`), b = f.length - 1, y = T.length - 1; b >= 1 && y >= 0 && f[b] !== T[y]; )
            y--;
          for (; b >= 1 && y >= 0; b--, y--)
            if (f[b] !== T[y]) {
              if (b !== 1 || y !== 1)
                do
                  if (b--, y--, y < 0 || f[b] !== T[y]) {
                    var w = `
` + f[b].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, w), w;
                  }
                while (b >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = p, tr(), Error.prepareStackTrace = d;
      }
      var I = e ? e.displayName || e.name : "", Ae = I ? G(I) : "";
      return typeof e == "function" && B.set(e, Ae), Ae;
    }
    function ar(e, t, n) {
      return Re(e, !1);
    }
    function ir(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function z(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, ir(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case S:
          return G("Suspense");
        case E:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ar(e.render);
          case R:
            return z(e.type, t, n);
          case O: {
            var i = e, d = i._payload, p = i._init;
            try {
              return z(p(d), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Te = {}, Se = j.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, n = z(e.type, e._source, t ? t.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    function or(e, t, n, i, d) {
      {
        var p = Function.call.bind(q);
        for (var c in e)
          if (p(e, c)) {
            var f = void 0;
            try {
              if (typeof e[c] != "function") {
                var T = Error((i || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              f = e[c](t, c, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              f = b;
            }
            f && !(f instanceof Error) && (J(d), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, c, typeof f), J(null)), f instanceof Error && !(f.message in Te) && (Te[f.message] = !0, J(d), _("Failed %s type: %s", n, f.message), J(null));
          }
      }
    }
    var ur = Array.isArray;
    function ie(e) {
      return ur(e);
    }
    function sr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function fr(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function we(e) {
      if (fr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), Oe(e);
    }
    var M = j.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, xe, oe;
    oe = {};
    function lr(e) {
      if (q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function dr(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vr(e, t) {
      if (typeof e.ref == "string" && M.current && t && M.current.stateNode !== t) {
        var n = k(M.current.type);
        oe[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(M.current.type), e.ref), oe[n] = !0);
      }
    }
    function pr(e, t) {
      {
        var n = function() {
          je || (je = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function gr(e, t) {
      {
        var n = function() {
          xe || (xe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var hr = function(e, t, n, i, d, p, c) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function mr(e, t, n, i, d) {
      {
        var p, c = {}, f = null, T = null;
        n !== void 0 && (we(n), f = "" + n), dr(t) && (we(t.key), f = "" + t.key), lr(t) && (T = t.ref, vr(t, d));
        for (p in t)
          q.call(t, p) && !cr.hasOwnProperty(p) && (c[p] = t[p]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (p in b)
            c[p] === void 0 && (c[p] = b[p]);
        }
        if (f || T) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && pr(c, y), T && gr(c, y);
        }
        return hr(e, f, T, d, i, M.current, c);
      }
    }
    var ue = j.ReactCurrentOwner, Ce = j.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var t = e._owner, n = z(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Pe() {
      {
        if (ue.current) {
          var e = k(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var ke = {};
    function yr(e) {
      {
        var t = Pe();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function $e(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = yr(t);
        if (ke[n])
          return;
        ke[n] = !0;
        var i = "";
        e && e._owner && e._owner !== ue.current && (i = " It was passed a child from " + k(e._owner.type) + "."), A(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), A(null);
      }
    }
    function De(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            fe(i) && $e(i, t);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = H(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), c; !(c = p.next()).done; )
              fe(c.value) && $e(c.value, t);
        }
      }
    }
    function Er(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === R))
          n = t.propTypes;
        else
          return;
        if (n) {
          var i = k(t);
          or(n, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !se) {
          se = !0;
          var d = k(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var i = t[n];
          if (i !== "children" && i !== "key") {
            A(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Fe(e, t, n, i, d, p) {
      {
        var c = Qe(e);
        if (!c) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = br(d);
          T ? f += T : f += Pe();
          var b;
          e === null ? b = "null" : ie(e) ? b = "array" : e !== void 0 && e.$$typeof === a ? (b = "<" + (k(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, f);
        }
        var y = mr(e, t, n, d, p);
        if (y == null)
          return y;
        if (c) {
          var w = t.children;
          if (w !== void 0)
            if (i)
              if (ie(w)) {
                for (var I = 0; I < w.length; I++)
                  De(w[I], e);
                Object.freeze && Object.freeze(w);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(w, e);
        }
        return e === s ? _r(y) : Er(y), y;
      }
    }
    function Rr(e, t, n) {
      return Fe(e, t, n, !0);
    }
    function Tr(e, t, n) {
      return Fe(e, t, n, !1);
    }
    var Sr = Tr, Or = Rr;
    Y.Fragment = s, Y.jsx = Sr, Y.jsxs = Or;
  }()), Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function kr() {
  if (We)
    return U;
  We = 1;
  var r = de, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, h, S) {
    var E, R = {}, O = null, x = null;
    S !== void 0 && (O = "" + S), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (x = h.ref);
    for (E in h)
      s.call(h, E) && !v.hasOwnProperty(E) && (R[E] = h[E]);
    if (u && u.defaultProps)
      for (E in h = u.defaultProps, h)
        R[E] === void 0 && (R[E] = h[E]);
    return { $$typeof: a, type: u, key: O, ref: x, props: R, _owner: g.current };
  }
  return U.Fragment = o, U.jsx = l, U.jsxs = l, U;
}
process.env.NODE_ENV === "production" ? le.exports = kr() : le.exports = Pr();
var Le = le.exports;
function $r(r, a) {
  var o = typeof Symbol == "function" && r[Symbol.iterator];
  if (!o)
    return r;
  var s = o.call(r), g, v = [], l;
  try {
    for (; (a === void 0 || a-- > 0) && !(g = s.next()).done; )
      v.push(g.value);
  } catch (u) {
    l = { error: u };
  } finally {
    try {
      g && !g.done && (o = s.return) && o.call(s);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return v;
}
function Dr(r, a, o) {
  if (o || arguments.length === 2)
    for (var s = 0, g = a.length, v; s < g; s++)
      (v || !(s in a)) && (v || (v = Array.prototype.slice.call(a, 0, s)), v[s] = a[s]);
  return r.concat(v || Array.prototype.slice.call(a));
}
var Be = function(r) {
  return typeof r == "function";
}, Fr = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
const ze = Fr;
function qe(r) {
  var a = Ge(r);
  return a.current = r, a;
}
var Ar = function(r) {
  ze && (Be(r) || console.error("useUnmount expected parameter is a function, got ".concat(typeof r)));
  var a = qe(r);
  Z(function() {
    return function() {
      a.current();
    };
  }, []);
};
const Ir = Ar;
function Wr(r) {
  var a = typeof r;
  return r != null && (a == "object" || a == "function");
}
var Je = Wr, Lr = typeof X == "object" && X && X.Object === Object && X, Nr = Lr, Mr = Nr, Yr = typeof self == "object" && self && self.Object === Object && self, Ur = Mr || Yr || Function("return this")(), Ke = Ur, Vr = Ke, Hr = function() {
  return Vr.Date.now();
}, Gr = Hr, Br = /\s/;
function zr(r) {
  for (var a = r.length; a-- && Br.test(r.charAt(a)); )
    ;
  return a;
}
var qr = zr, Jr = qr, Kr = /^\s+/;
function Xr(r) {
  return r && r.slice(0, Jr(r) + 1).replace(Kr, "");
}
var Zr = Xr, Qr = Ke, et = Qr.Symbol, Xe = et, Ne = Xe, Ze = Object.prototype, rt = Ze.hasOwnProperty, tt = Ze.toString, V = Ne ? Ne.toStringTag : void 0;
function nt(r) {
  var a = rt.call(r, V), o = r[V];
  try {
    r[V] = void 0;
    var s = !0;
  } catch {
  }
  var g = tt.call(r);
  return s && (a ? r[V] = o : delete r[V]), g;
}
var at = nt, it = Object.prototype, ot = it.toString;
function ut(r) {
  return ot.call(r);
}
var st = ut, Me = Xe, ft = at, ct = st, lt = "[object Null]", dt = "[object Undefined]", Ye = Me ? Me.toStringTag : void 0;
function vt(r) {
  return r == null ? r === void 0 ? dt : lt : Ye && Ye in Object(r) ? ft(r) : ct(r);
}
var pt = vt;
function gt(r) {
  return r != null && typeof r == "object";
}
var ht = gt, mt = pt, bt = ht, yt = "[object Symbol]";
function Et(r) {
  return typeof r == "symbol" || bt(r) && mt(r) == yt;
}
var _t = Et, Rt = Zr, Ue = Je, Tt = _t, Ve = 0 / 0, St = /^[-+]0x[0-9a-f]+$/i, Ot = /^0b[01]+$/i, wt = /^0o[0-7]+$/i, jt = parseInt;
function xt(r) {
  if (typeof r == "number")
    return r;
  if (Tt(r))
    return Ve;
  if (Ue(r)) {
    var a = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Ue(a) ? a + "" : a;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = Rt(r);
  var o = Ot.test(r);
  return o || wt.test(r) ? jt(r.slice(2), o ? 2 : 8) : St.test(r) ? Ve : +r;
}
var Ct = xt, Pt = Je, ce = Gr, He = Ct, kt = "Expected a function", $t = Math.max, Dt = Math.min;
function Ft(r, a, o) {
  var s, g, v, l, u, h, S = 0, E = !1, R = !1, O = !0;
  if (typeof r != "function")
    throw new TypeError(kt);
  a = He(a) || 0, Pt(o) && (E = !!o.leading, R = "maxWait" in o, v = R ? $t(He(o.maxWait) || 0, a) : v, O = "trailing" in o ? !!o.trailing : O);
  function x(m) {
    var C = s, D = g;
    return s = g = void 0, S = m, l = r.apply(D, C), l;
  }
  function P(m) {
    return S = m, u = setTimeout(j, a), E ? x(m) : l;
  }
  function Q(m) {
    var C = m - h, D = m - S, L = a - C;
    return R ? Dt(L, v - D) : L;
  }
  function H(m) {
    var C = m - h, D = m - S;
    return h === void 0 || C >= a || C < 0 || R && D >= v;
  }
  function j() {
    var m = ce();
    if (H(m))
      return _(m);
    u = setTimeout(j, Q(m));
  }
  function _(m) {
    return u = void 0, O && s ? x(m) : (s = g = void 0, l);
  }
  function ee() {
    u !== void 0 && clearTimeout(u), S = 0, s = h = g = u = void 0;
  }
  function re() {
    return u === void 0 ? l : _(ce());
  }
  function W() {
    var m = ce(), C = H(m);
    if (s = arguments, g = this, h = m, C) {
      if (u === void 0)
        return P(h);
      if (R)
        return clearTimeout(u), u = setTimeout(j, a), x(h);
    }
    return u === void 0 && (u = setTimeout(j, a)), l;
  }
  return W.cancel = ee, W.flush = re, W;
}
var At = Ft;
const It = /* @__PURE__ */ Cr(At);
function Wt(r, a) {
  var o;
  ze && (Be(r) || console.error("useDebounceFn expected parameter is a function, got ".concat(typeof r)));
  var s = qe(r), g = (o = a == null ? void 0 : a.wait) !== null && o !== void 0 ? o : 1e3, v = xr(function() {
    return It(function() {
      for (var l = [], u = 0; u < arguments.length; u++)
        l[u] = arguments[u];
      return s.current.apply(s, Dr([], $r(l), !1));
    }, g, a);
  }, []);
  return Ir(function() {
    v.cancel();
  }), {
    run: v,
    cancel: v.cancel,
    flush: v.flush
  };
}
class Lt {
  constructor({ containerWidth: a = 0, columnCount: o = 3, gutter: s = [0, 0] }) {
    K(this, "columnHeights", []);
    K(this, "itemWidth", 0);
    K(this, "gutter");
    a && (this.itemWidth = (a - (o - 1) * s[0]) / o), this.gutter = s, this.columnHeights = Array(o).fill(0);
  }
  maxHeight() {
    return Math.max(...this.columnHeights);
  }
  clear() {
    this.columnHeights = Array(this.columnHeights.length).fill(0);
  }
  add(a) {
    const o = Math.min(...this.columnHeights), s = this.columnHeights.indexOf(o), g = s * (this.itemWidth + this.gutter[0]), v = o, l = a.width && a.height ? a.width / a.height : 1, u = this.itemWidth / l;
    return this.columnHeights[s] = v + this.gutter[1] + u, {
      left: g,
      top: v,
      width: this.itemWidth,
      height: u
    };
  }
}
const Nt = (r) => {
  const { run: a } = Wt(r, {
    wait: 500
  });
  Z(() => (window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a);
  }), [r, a]);
};
function Ut(r) {
  const a = Ge({}), [o, s] = de.useState(null);
  function g() {
    const l = a.current;
    if (l) {
      const u = new Lt({
        containerWidth: l == null ? void 0 : l.clientWidth,
        columnCount: r.columnCount || 3,
        gutter: r.gutter || [8, 8]
      });
      s(u);
    }
  }
  function v(l) {
    const u = a.current;
    u && l && (l.clear(), (r.list || []).forEach((h, S) => {
      const { left: E, top: R, width: O, height: x } = l.add(
        h
      ), P = u == null ? void 0 : u.children[S];
      P.style.left = E + "px", P.style.top = R + "px", P.style.width = O + "px", P.style.height = x + "px";
    }), u.style.height = l.maxHeight() + "px");
  }
  return Z(() => {
    g();
  }, [a, r.list.length]), Z(() => {
    o && v(o);
  }, [r.list, o]), Nt(g), /* @__PURE__ */ Le.jsx(
    "div",
    {
      ref: a,
      style: {
        position: "relative"
      },
      children: r.list.map((l, u) => /* @__PURE__ */ Le.jsx(
        "div",
        {
          style: {
            position: "absolute",
            display: "inline-block",
            boxSizing: "border-box",
            transition: "all 0.1s ease-in-out"
          },
          children: r.item(l, u)
        },
        u
      ))
    }
  );
}
export {
  Ut as default
};
