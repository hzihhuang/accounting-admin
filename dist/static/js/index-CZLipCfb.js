var X = Object.defineProperty;
var P = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty,
  J = Object.prototype.propertyIsEnumerable;
var C = (e, r, t) =>
    r in e
      ? X(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  O = (e, r) => {
    for (var t in r || (r = {})) H.call(r, t) && C(e, t, r[t]);
    if (P) for (var t of P(r)) J.call(r, t) && C(e, t, r[t]);
    return e;
  };
import {
  d as B,
  a as W,
  D as Q,
  S as Z,
  aj as ee,
  G as te,
  b as u,
  F as E,
  u as x,
  r as D,
  ak as re,
  U as ne,
  f as g,
  aq as z
} from "./index-DeFtvjuQ.js";
const ie = { silent: !1, logLevel: "warn" };
function v(e) {
  if (typeof e != "object" || e === null) return !1;
  const r = Object.getPrototypeOf(e);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
const ae = () => ({
    func: () => {},
    bool: !0,
    string: "",
    number: 0,
    array: () => [],
    object: () => ({}),
    integer: 0
  }),
  L = Object.prototype,
  M = L.toString,
  oe = L.hasOwnProperty,
  G = /^\s*function (\w+)/;
function F(e) {
  var t;
  const r = (t = e == null ? void 0 : e.type) != null ? t : e;
  if (r) {
    const n = r.toString().match(G);
    return n ? n[1] : "";
  }
  return "";
}
function se(e) {
  if (e == null) return "";
  const r = e.constructor.toString().match(G);
  return r ? r[1].replace(/^Async/, "") : "";
}
function q(e) {
  return "structuredClone" in globalThis
    ? structuredClone(e)
    : Array.isArray(e)
      ? [...e]
      : v(e)
        ? Object.assign({}, e)
        : e;
}
function le() {}
let l = le;
const V = (e, r) => oe.call(e, r),
  ue =
    Number.isInteger ||
    function (r) {
      return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
    },
  j =
    Array.isArray ||
    function (r) {
      return M.call(r) === "[object Array]";
    },
  _ = e => M.call(e) === "[object Function]",
  A = (e, r) =>
    v(e) && V(e, "_vueTypes_name") && (!r || e._vueTypes_name === r),
  I = e =>
    v(e) &&
    (V(e, "type") ||
      ["_vueTypes_name", "validator", "default", "required"].some(r =>
        V(e, r)
      ));
function U(e, r) {
  return Object.defineProperty(e.bind(r), "__original", { value: e });
}
function T(e, r, t = !1) {
  let n,
    i = !0,
    o = "";
  v(e) ? (n = e) : (n = { type: e });
  const a = A(n) ? n._vueTypes_name + " - " : "";
  if (I(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || (!n.required && r == null))
      return i;
    j(n.type)
      ? ((i = n.type.some(s => T(s, r, !0) === !0)),
        (o = n.type.map(s => F(s)).join(" or ")))
      : ((o = F(n)),
        o === "Array"
          ? (i = j(r))
          : o === "Object"
            ? (i = v(r))
            : o === "String" ||
                o === "Number" ||
                o === "Boolean" ||
                o === "Function"
              ? (i = se(r) === o)
              : (i = r instanceof n.type));
  }
  if (!i) {
    const s = `${a}value "${r}" should be of type "${o}"`;
    return t === !1 ? (l(s), !1) : s;
  }
  if (V(n, "validator") && _(n.validator)) {
    const s = l,
      c = [];
    if (
      ((l = f => {
        c.push(f);
      }),
      (i = n.validator(r)),
      (l = s),
      !i)
    ) {
      const f =
        (c.length > 1 ? "* " : "") +
        c.join(`
* `);
      return ((c.length = 0), t === !1 ? (l(f), i) : f);
    }
  }
  return i;
}
function m(e, r) {
  const t = Object.defineProperties(r, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get() {
          return ((this.required = !0), this);
        }
      },
      def: {
        value(i) {
          if (i === void 0) {
            if (
              this.type === Boolean ||
              (Array.isArray(this.type) && this.type.includes(Boolean))
            ) {
              this.default = void 0;
              return;
            }
            return (V(this, "default") && delete this.default, this);
          }
          return !_(i) && T(this, i, !0) !== !0
            ? (l(`${this._vueTypes_name} - invalid default value: "${i}"`),
              this)
            : (j(i)
                ? (this.default = () => q(i))
                : v(i)
                  ? (this.default = () => q(i))
                  : (this.default = i),
              this);
        }
      }
    }),
    { validator: n } = t;
  return (_(n) && (t.validator = U(n, t)), t);
}
function b(e, r) {
  const t = m(e, r);
  return Object.defineProperty(t, "validate", {
    value(n) {
      return (
        _(this.validator) &&
          l(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),
        (this.validator = U(n, this)),
        this
      );
    }
  });
}
function w(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const ce = () => b("any", {}),
  fe = () => b("function", { type: Function }),
  R = () => b("boolean", { type: Boolean }),
  de = () => b("string", { type: String }),
  ye = () => b("number", { type: Number }),
  pe = () => b("array", { type: Array }),
  me = () => b("object", { type: Object }),
  ge = () =>
    m("integer", {
      type: Number,
      validator(e) {
        const r = ue(e);
        return (r === !1 && l(`integer - "${e}" is not an integer`), r);
      }
    }),
  be = () =>
    m("symbol", {
      validator(e) {
        const r = typeof e == "symbol";
        return (r === !1 && l(`symbol - invalid value "${e}"`), r);
      }
    }),
  he = () =>
    Object.defineProperty(
      {
        type: null,
        validator(e) {
          const r = e === null;
          return (r === !1 && l("nullable - value should be null"), r);
        }
      },
      "_vueTypes_name",
      { value: "nullable" }
    );
function ve(e, r = "custom validation failed") {
  if (typeof e != "function")
    throw new TypeError(
      "[VueTypes error]: You must provide a function as argument"
    );
  return m(e.name || "<<anonymous function>>", {
    type: null,
    validator(t) {
      const n = e(t);
      return (n || l(`${this._vueTypes_name} - ${r}`), n);
    }
  });
}
function Te(e) {
  if (!j(e))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument."
    );
  const r = `oneOf - value should be one of "${e.map(n => (typeof n == "symbol" ? n.toString() : n)).join('", "')}".`,
    t = {
      validator(n) {
        const i = e.indexOf(n) !== -1;
        return (i || l(r), i);
      }
    };
  if (e.indexOf(null) === -1) {
    const n = e.reduce((i, o) => {
      if (o != null) {
        const a = o.constructor;
        i.indexOf(a) === -1 && i.push(a);
      }
      return i;
    }, []);
    n.length > 0 && (t.type = n);
  }
  return m("oneOf", t);
}
function Oe(e) {
  if (!j(e))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument"
    );
  let r = !1,
    t = !1,
    n = [];
  for (let o = 0; o < e.length; o += 1) {
    const a = e[o];
    if (I(a)) {
      if ((_(a.validator) && (r = !0), A(a, "oneOf") && a.type)) {
        n = n.concat(a.type);
        continue;
      }
      if (A(a, "nullable")) {
        t = !0;
        continue;
      }
      if (a.type === !0 || !a.type) {
        l('oneOfType - invalid usage of "true" and "null" as types.');
        continue;
      }
      n = n.concat(a.type);
    } else n.push(a);
  }
  n = n.filter((o, a) => n.indexOf(o) === a);
  const i = t === !1 && n.length > 0 ? n : null;
  return r
    ? m("oneOfType", {
        type: i,
        validator(o) {
          const a = [],
            s = e.some(c => {
              const f = T(c, o, !0);
              return (typeof f == "string" && a.push(f), f === !0);
            });
          return (
            s ||
              l(`oneOfType - provided value does not match any of the ${a.length} passed-in validators:
${w(
  a.join(`
`)
)}`),
            s
          );
        }
      })
    : m("oneOfType", { type: i });
}
function Ve(e) {
  return m("arrayOf", {
    type: Array,
    validator(r) {
      let t = "";
      const n = r.every(i => ((t = T(e, i, !0)), t === !0));
      return (
        n ||
          l(`arrayOf - value validation error:
${w(t)}`),
        n
      );
    }
  });
}
function je(e) {
  return m("instanceOf", { type: e });
}
function _e(e) {
  return m("objectOf", {
    type: Object,
    validator(r) {
      let t = "";
      if (!v(r)) return !1;
      const n = Object.keys(r).every(i => ((t = T(e, r[i], !0)), t === !0));
      return (
        n ||
          l(`objectOf - value validation error:
${w(t)}`),
        n
      );
    }
  });
}
function Se(e) {
  const r = Object.keys(e),
    t = r.filter(i => {
      var o;
      return !!((o = e[i]) != null && o.required);
    }),
    n = m("shape", {
      type: Object,
      validator(i) {
        if (!v(i)) return !1;
        const o = Object.keys(i);
        if (t.length > 0 && t.some(a => o.indexOf(a) === -1)) {
          const a = t.filter(s => o.indexOf(s) === -1);
          return (
            a.length === 1
              ? l(`shape - required property "${a[0]}" is not defined.`)
              : l(
                  `shape - required properties "${a.join('", "')}" are not defined.`
                ),
            !1
          );
        }
        return o.every(a => {
          if (r.indexOf(a) === -1)
            return this._vueTypes_isLoose === !0
              ? !0
              : (l(
                  `shape - shape definition does not include a "${a}" property. Allowed keys: "${r.join('", "')}".`
                ),
                !1);
          const s = e[a],
            c = T(s, i[a], !0);
          return (
            typeof c == "string" &&
              l(`shape - "${a}" property validation error:
 ${w(c)}`),
            c === !0
          );
        });
      }
    });
  return (
    Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }),
    Object.defineProperty(n, "loose", {
      get() {
        return ((this._vueTypes_isLoose = !0), this);
      }
    }),
    n
  );
}
var xe = Object.defineProperty,
  we = (e, r, t) =>
    r in e
      ? xe(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  p = (e, r, t) => (we(e, typeof r != "symbol" ? r + "" : r, t), t);
const $e = (() => {
  var e;
  return (
    (e = class {
      static get any() {
        return ce();
      }
      static get func() {
        return fe().def(this.defaults.func);
      }
      static get bool() {
        return this.defaults.bool === void 0
          ? R()
          : R().def(this.defaults.bool);
      }
      static get string() {
        return de().def(this.defaults.string);
      }
      static get number() {
        return ye().def(this.defaults.number);
      }
      static get array() {
        return pe().def(this.defaults.array);
      }
      static get object() {
        return me().def(this.defaults.object);
      }
      static get integer() {
        return ge().def(this.defaults.integer);
      }
      static get symbol() {
        return be();
      }
      static get nullable() {
        return he();
      }
      static extend(...r) {
        l(
          "VueTypes.extend has been removed. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details."
        );
      }
    }),
    p(e, "defaults", {}),
    p(e, "sensibleDefaults"),
    p(e, "config", ie),
    p(e, "custom", ve),
    p(e, "oneOf", Te),
    p(e, "instanceOf", je),
    p(e, "oneOfType", Oe),
    p(e, "arrayOf", Ve),
    p(e, "objectOf", _e),
    p(e, "shape", Se),
    p(e, "utils", {
      validate(r, t) {
        return T(t, r, !0) === !0;
      },
      toType(r, t, n = !1) {
        return n ? b(r, t) : m(r, t);
      }
    }),
    e
  );
})();
function Y(e = ae()) {
  var r;
  return (
    (r = class extends $e {
      static get sensibleDefaults() {
        return O({}, this.defaults);
      }
      static set sensibleDefaults(t) {
        if (t === !1) {
          this.defaults = {};
          return;
        }
        if (t === !0) {
          this.defaults = O({}, e);
          return;
        }
        this.defaults = O({}, t);
      }
    }),
    p(r, "defaults", O({}, e)),
    r
  );
}
class Re extends Y() {}
const Ae = Y({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
class y extends Ae {
  static get style() {
    return b("style", { type: [String, Object] });
  }
  static get VNodeChild() {
    return b("VNodeChild", { type: void 0 });
  }
}
const Ne = {
    startVal: y.number.def(0),
    endVal: y.number.def(2020),
    duration: y.number.def(1300),
    autoplay: y.bool.def(!0),
    decimals: {
      type: Number,
      required: !1,
      default: 0,
      validator(e) {
        return e >= 0;
      }
    },
    color: y.string.def(),
    fontSize: y.string.def(),
    decimal: y.string.def("."),
    separator: y.string.def(","),
    prefix: y.string.def(""),
    suffix: y.string.def(""),
    useEasing: y.bool.def(!0),
    easingFn: {
      type: Function,
      default(e, r, t, n) {
        return (t * (-Math.pow(2, (-10 * e) / n) + 1) * 1024) / 1023 + r;
      }
    }
  },
  Pe = B({
    name: "ReNormalCountTo",
    props: Ne,
    emits: ["mounted", "callback"],
    setup(e, { emit: r }) {
      const t = W({
          localStartVal: e.startVal,
          displayValue: a(e.startVal),
          printVal: null,
          paused: !1,
          localDuration: e.duration,
          startTime: null,
          timestamp: null,
          remaining: null,
          rAF: null,
          color: null,
          fontSize: "16px"
        }),
        n = Q(() => e.startVal > e.endVal);
      Z([() => e.startVal, () => e.endVal], () => {
        e.autoplay && i();
      });
      function i() {
        const { startVal: s, duration: c, color: f, fontSize: d } = e;
        ((t.localStartVal = s),
          (t.startTime = null),
          (t.localDuration = c),
          (t.paused = !1),
          (t.color = f),
          (t.fontSize = d),
          (t.rAF = requestAnimationFrame(o)));
      }
      function o(s) {
        const { useEasing: c, easingFn: f, endVal: d } = e;
        (t.startTime || (t.startTime = s), (t.timestamp = s));
        const h = s - t.startTime;
        ((t.remaining = t.localDuration - h),
          c
            ? x(n)
              ? (t.printVal =
                  t.localStartVal -
                  f(h, 0, t.localStartVal - d, t.localDuration))
              : (t.printVal = f(
                  h,
                  t.localStartVal,
                  d - t.localStartVal,
                  t.localDuration
                ))
            : x(n)
              ? (t.printVal =
                  t.localStartVal -
                  (t.localStartVal - d) * (h / t.localDuration))
              : (t.printVal =
                  t.localStartVal +
                  (d - t.localStartVal) * (h / t.localDuration)),
          x(n)
            ? (t.printVal = t.printVal < d ? d : t.printVal)
            : (t.printVal = t.printVal > d ? d : t.printVal),
          (t.displayValue = a(t.printVal)),
          h < t.localDuration
            ? (t.rAF = requestAnimationFrame(o))
            : r("callback"));
      }
      function a(s) {
        const {
          decimals: c,
          decimal: f,
          separator: d,
          suffix: h,
          prefix: k
        } = e;
        ((s = Number(s).toFixed(c)), (s += ""));
        const $ = s.split(".");
        let S = $[0];
        const K = $.length > 1 ? f + $[1] : "",
          N = /(\d+)(\d{3})/;
        if (d && !ee(d)) for (; N.test(S); ) S = S.replace(N, "$1" + d + "$2");
        return k + S + K + h;
      }
      return (
        te(() => {
          (e.autoplay && i(), r("mounted"));
        }),
        () =>
          u(E, null, [
            u("span", { style: { color: e.color, fontSize: e.fontSize } }, [
              t.displayValue
            ])
          ])
      );
    }
  }),
  Ce = {
    delay: y.number.def(1),
    blur: y.number.def(2),
    i: {
      type: Number,
      required: !1,
      default: 0,
      validator(e) {
        return e < 10 && e >= 0 && Number.isInteger(e);
      }
    }
  },
  De = B({
    name: "ReboundCountTo",
    props: Ce,
    setup(e) {
      const r = D(),
        t = D(null);
      return (
        re(() => {
          const n = navigator.userAgent.toLowerCase(),
            i = a => a.test(n);
          i(/safari/g) &&
            !i(/chrome/g) &&
            (t.value = setTimeout(() => {
              r.value.setAttribute(
                "style",
                `
        animation: none;
        transform: translateY(calc(var(--i) * -9.09%))
      `
              );
            }, e.delay * 1e3));
        }),
        ne(() => {
          clearTimeout(x(t));
        }),
        () =>
          u(E, null, [
            u(
              "div",
              {
                class: "scroll-num",
                style: { "--i": e.i, "--delay": e.delay }
              },
              [
                u("ul", { ref: "ulRef", style: { fontSize: "32px" } }, [
                  u("li", null, [g("0")]),
                  u("li", null, [g("1")]),
                  u("li", null, [g("2")]),
                  u("li", null, [g("3")]),
                  u("li", null, [g("4")]),
                  u("li", null, [g("5")]),
                  u("li", null, [g("6")]),
                  u("li", null, [g("7")]),
                  u("li", null, [g("8")]),
                  u("li", null, [g("9")]),
                  u("li", null, [g("0")])
                ]),
                u("svg", { width: "0", height: "0" }, [
                  u("filter", { id: "blur" }, [
                    u(
                      "feGaussianBlur",
                      { in: "SourceGraphic", stdDeviation: `0 ${e.blur}` },
                      null
                    )
                  ])
                ])
              ]
            )
          ])
      );
    }
  }),
  Be = z(Pe);
z(De);
export { Be as R };
