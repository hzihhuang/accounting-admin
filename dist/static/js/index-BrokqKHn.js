var w = Object.defineProperty;
var R = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty,
  B = Object.prototype.propertyIsEnumerable;
var k = (a, s, t) =>
    s in a
      ? w(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[s] = t),
  o = (a, s) => {
    for (var t in s || (s = {})) A.call(s, t) && k(a, t, s[t]);
    if (R) for (var t of R(s)) B.call(s, t) && k(a, t, s[t]);
    return a;
  };
import { u as L } from "./hooks-avKaykaq.js";
import {
  d as W,
  r,
  W as X,
  aj as z,
  ax as q,
  S as I,
  b as n,
  Z,
  i as j,
  h as x,
  ai as V,
  ay as D,
  $ as f,
  H,
  aq as N
} from "./index-DeFtvjuQ.js";
const T = {
    options: { type: Array, default: () => [] },
    modelValue: { type: void 0, require: !1, default: "0" },
    block: { type: Boolean, default: !1 },
    size: { type: String },
    disabled: { type: Boolean, default: !1 },
    resize: { type: Boolean, default: !1 }
  },
  U = W({
    name: "ReSegmented",
    props: T,
    emits: ["change", "update:modelValue"],
    setup(a, { emit: s }) {
      const t = r(0),
        v = r(0),
        { isDark: b } = X(),
        g = r(!1),
        c = r(-1),
        i = r(""),
        m = H(),
        d = z(a.modelValue) ? q(a, "modelValue") : r(0);
      function S({ option: e, index: l }, u) {
        a.disabled ||
          e.disabled ||
          (u.preventDefault(),
          z(a.modelValue) ? s("update:modelValue", l) : (d.value = l),
          (i.value = ""),
          s("change", { index: l, option: e }));
      }
      function $({ option: e, index: l }, u) {
        a.disabled ||
          (u.preventDefault(),
          (c.value = l),
          e.disabled || d.value === l
            ? (i.value = "")
            : (i.value = b.value ? "#1f1f1f" : "rgba(0, 0, 0, 0.06)"));
      }
      function C(e, l) {
        a.disabled || (l.preventDefault(), (c.value = -1));
      }
      function h(e = d.value) {
        f(() => {
          var u;
          const l =
            (u = m == null ? void 0 : m.proxy) == null
              ? void 0
              : u.$refs[`labelRef${e}`];
          l &&
            ((t.value = l.clientWidth),
            (v.value = l.offsetLeft),
            (g.value = !0));
        });
      }
      function y() {
        Z(".pure-segmented", () => {
          f(() => {
            h(d.value);
          });
        });
      }
      ((a.block || a.resize) && y(),
        I(
          () => d.value,
          e => {
            f(() => {
              h(e);
            });
          },
          { immediate: !0 }
        ),
        I(() => a.size, y, { immediate: !0 }));
      const M = () =>
        a.options.map((e, l) =>
          n(
            "label",
            {
              ref: `labelRef${l}`,
              class: [
                "pure-segmented-item",
                (a.disabled || (e == null ? void 0 : e.disabled)) &&
                  "pure-segmented-item-disabled"
              ],
              style: {
                background: c.value === l ? i.value : "",
                color: a.disabled
                  ? null
                  : !e.disabled && (d.value === l || c.value === l)
                    ? b.value
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(0,0,0,.88)"
                    : ""
              },
              onMouseenter: u => $({ option: e, index: l }, u),
              onMouseleave: u => C({}, u),
              onClick: u => S({ option: e, index: l }, u)
            },
            [
              n("input", { type: "radio", name: "segmented" }, null),
              j(
                n("div", { class: "pure-segmented-item-label" }, [
                  e.icon && !D(e.label)
                    ? n(
                        "span",
                        {
                          class: "pure-segmented-item-icon",
                          style: { marginRight: e.label ? "6px" : 0 }
                        },
                        [V(L(e.icon, o({}, e == null ? void 0 : e.iconAttrs)))]
                      )
                    : null,
                  e.label
                    ? D(e.label)
                      ? V(e.label)
                      : n("span", null, [e.label])
                    : null
                ]),
                [
                  [
                    x("tippy"),
                    { content: e == null ? void 0 : e.tip, zIndex: 41e3 }
                  ]
                ]
              )
            ]
          )
        );
      return () =>
        n(
          "div",
          {
            class: {
              "pure-segmented": !0,
              "pure-segmented-block": a.block,
              "pure-segmented--large": a.size === "large",
              "pure-segmented--small": a.size === "small"
            }
          },
          [
            n("div", { class: "pure-segmented-group" }, [
              n(
                "div",
                {
                  class: "pure-segmented-item-selected",
                  style: {
                    width: `${t.value}px`,
                    transform: `translateX(${v.value}px)`,
                    display: g.value ? "block" : "none"
                  }
                },
                null
              ),
              M()
            ])
          ]
        );
    }
  }),
  G = N(U);
export { G as R };
