import { R as _ } from "./index-ttNqQHi_.js";
import "./dayjs.min-CQm-uH6z.js";
import {
  d as j,
  ai as I,
  av as S,
  W as z,
  r as F,
  c as f,
  o as l,
  b as s,
  w as n,
  i as y,
  F as g,
  g as k,
  u as t,
  p as d,
  e as u,
  j as o,
  a9 as W,
  h as H,
  t as x,
  n as D,
  l as $,
  A as O,
  aw as T,
  _ as U
} from "./index-DeFtvjuQ.js";
import A from "./index-BfOCVPyd.js";
import { R as E } from "./index-CZLipCfb.js";
import { _ as L } from "./ChartBar.vue_vue_type_script_setup_true_lang-Sg7I7GaH.js";
import { _ as G } from "./ChartLine.vue_vue_type_script_setup_true_lang-DUCSF2qD.js";
import { R as J } from "./index-BrokqKHn.js";
import { c as K, b as R, p as M, l as P } from "./columns-Bxqh4qHK.js";
import "./hooks-avKaykaq.js";
import "./bill-line-CitwULps.js";
function Q(a) {
  return j({
    name: "ReFlicker",
    render() {
      var h, v, r, b, w;
      return I(
        "div",
        {
          class: "point point-flicker",
          style: {
            "--point-width":
              (h = a == null ? void 0 : a.width) != null ? h : "12px",
            "--point-height":
              (v = a == null ? void 0 : a.height) != null ? v : "12px",
            "--point-background":
              (r = a == null ? void 0 : a.background) != null
                ? r
                : "var(--el-color-primary)",
            "--point-border-radius":
              (b = a == null ? void 0 : a.borderRadius) != null ? b : "50%",
            "--point-scale":
              (w = a == null ? void 0 : a.scale) != null ? w : "2"
          }
        },
        { default: () => [] }
      );
    }
  });
}
const X = { class: "flex justify-between" },
  Y = { class: "text-md font-medium" },
  Z = { class: "flex justify-between items-start mt-3" },
  ee = { class: "w-1/2" },
  te = { class: "font-medium text-green-500" },
  oe = { class: "flex justify-between" },
  ae = { class: "flex justify-between items-start mt-3" },
  se = {
    class:
      "w-full h-full flex items-center justify-center opacity-0 cursor-pointer hover:opacity-100 transition-all duration-300"
  },
  ne = { class: "text-nowrap ml-2 text-text_color_regular text-sm" },
  le = { class: "text-text_color_regular text-sm" },
  ie = j({
    name: "Home",
    __name: "index",
    setup(a) {
      const { permissions: h } = S(),
        { isDark: v } = z();
      let r = F(1);
      const b = [{ label: "上周" }, { label: "本周" }];
      return (w, i) => {
        const C = u("IconifyIconOffline"),
          m = u("el-card"),
          V = u("el-timeline-item"),
          q = u("el-timeline"),
          B = u("el-scrollbar"),
          N = u("el-row"),
          p = H("motion");
        return (
          l(),
          f("div", null, [
            s(
              N,
              { gutter: 24, justify: "space-around" },
              {
                default: n(() => [
                  (l(!0),
                  f(
                    g,
                    null,
                    k(t(K), (e, c) =>
                      y(
                        (l(),
                        d(
                          t(_),
                          {
                            key: c,
                            class: "mb-[18px]",
                            value: 6,
                            md: 12,
                            sm: 12,
                            xs: 24,
                            initial: { opacity: 0, y: 100 },
                            enter: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 80 * (c + 1) }
                            }
                          },
                          {
                            default: n(() => [
                              s(
                                m,
                                { class: "line-card", shadow: "never" },
                                {
                                  default: n(() => [
                                    o("div", X, [
                                      o("span", Y, x(e.name), 1),
                                      o(
                                        "div",
                                        {
                                          class:
                                            "w-8 h-8 flex justify-center items-center rounded-md",
                                          style: D({
                                            backgroundColor: t(v)
                                              ? "transparent"
                                              : e.bgColor
                                          })
                                        },
                                        [
                                          s(
                                            C,
                                            {
                                              icon: e.icon,
                                              color: e.color,
                                              width: "18",
                                              height: "18"
                                            },
                                            null,
                                            8,
                                            ["icon", "color"]
                                          )
                                        ],
                                        4
                                      )
                                    ]),
                                    o("div", Z, [
                                      o("div", ee, [
                                        s(
                                          t(E),
                                          {
                                            duration: e.duration,
                                            fontSize: "1.6em",
                                            startVal: 100,
                                            endVal: e.value
                                          },
                                          null,
                                          8,
                                          ["duration", "endVal"]
                                        ),
                                        o("p", te, x(e.percent), 1)
                                      ]),
                                      s(
                                        t(G),
                                        {
                                          class: "w-1/2!",
                                          color: e.color,
                                          data: e.data
                                        },
                                        null,
                                        8,
                                        ["color", "data"]
                                      )
                                    ])
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            _: 2
                          },
                          1032,
                          ["enter"]
                        )),
                        [[p]]
                      )
                    ),
                    128
                  )),
                  y(
                    (l(),
                    d(
                      t(_),
                      {
                        class: "mb-[18px]",
                        value: 18,
                        xs: 24,
                        initial: { opacity: 0, y: 100 },
                        enter: { opacity: 1, y: 0, transition: { delay: 400 } }
                      },
                      {
                        default: n(() => [
                          s(
                            m,
                            { class: "bar-card", shadow: "never" },
                            {
                              default: n(() => [
                                o("div", oe, [
                                  i[1] ||
                                    (i[1] = o(
                                      "span",
                                      { class: "text-md font-medium" },
                                      "账单分析",
                                      -1
                                    )),
                                  s(
                                    t(J),
                                    {
                                      modelValue: t(r),
                                      "onUpdate:modelValue":
                                        i[0] ||
                                        (i[0] = e =>
                                          W(r) ? (r.value = e) : (r = e)),
                                      options: b
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                o("div", ae, [
                                  s(
                                    t(L),
                                    {
                                      requireData: t(R)[t(r)].requireData,
                                      questionData: t(R)[t(r)].questionData
                                    },
                                    null,
                                    8,
                                    ["requireData", "questionData"]
                                  )
                                ])
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    )),
                    [[p]]
                  ),
                  y(
                    (l(),
                    d(
                      t(_),
                      {
                        class: "mb-[18px]",
                        value: 6,
                        xs: 24,
                        initial: { opacity: 0, y: 100 },
                        enter: { opacity: 1, y: 0, transition: { delay: 480 } }
                      },
                      {
                        default: n(() => [
                          s(
                            m,
                            { class: "h-full", shadow: "never" },
                            {
                              default: n(() => [
                                i[2] ||
                                  (i[2] = o(
                                    "div",
                                    { class: "flex justify-between" },
                                    [
                                      o(
                                        "span",
                                        { class: "text-md font-medium" },
                                        "分类排行"
                                      )
                                    ],
                                    -1
                                  )),
                                (l(!0),
                                f(
                                  g,
                                  null,
                                  k(
                                    t(M),
                                    (e, c) => (
                                      l(),
                                      f(
                                        "div",
                                        {
                                          key: c,
                                          class: $([
                                            "flex",
                                            "items-center",
                                            c === 0 ? "mt-8" : "mt-[1.25rem]"
                                          ])
                                        },
                                        [
                                          o(
                                            "div",
                                            {
                                              class: "h-5 text-xs",
                                              style: D({
                                                width: e.percentage + "%",
                                                backgroundColor: e.color,
                                                borderRadius: "100px"
                                              })
                                            },
                                            [o("div", se, x(e.percentage), 1)],
                                            4
                                          ),
                                          o("span", ne, x(e.week), 1)
                                        ],
                                        2
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 1,
                              __: [2]
                            }
                          )
                        ]),
                        _: 1
                      }
                    )),
                    [[p]]
                  ),
                  y(
                    (l(),
                    d(
                      t(_),
                      {
                        class: "mb-[18px]",
                        value: 18,
                        xs: 24,
                        initial: { opacity: 0, y: 100 },
                        enter: { opacity: 1, y: 0, transition: { delay: 560 } }
                      },
                      {
                        default: n(() => [
                          s(
                            m,
                            { shadow: "never", class: "h-[580px]" },
                            {
                              default: n(() => [
                                i[3] ||
                                  (i[3] = o(
                                    "div",
                                    { class: "flex justify-between" },
                                    [
                                      o(
                                        "span",
                                        { class: "text-md font-medium" },
                                        "数据统计"
                                      )
                                    ],
                                    -1
                                  )),
                                s(A, { class: "mt-3" })
                              ]),
                              _: 1,
                              __: [3]
                            }
                          )
                        ]),
                        _: 1
                      }
                    )),
                    [[p]]
                  ),
                  y(
                    (l(),
                    d(
                      t(_),
                      {
                        class: "mb-[18px]",
                        value: 6,
                        xs: 24,
                        initial: { opacity: 0, y: 100 },
                        enter: { opacity: 1, y: 0, transition: { delay: 640 } }
                      },
                      {
                        default: n(() => [
                          s(
                            m,
                            { shadow: "never" },
                            {
                              default: n(() => [
                                i[4] ||
                                  (i[4] = o(
                                    "div",
                                    { class: "flex justify-between" },
                                    [
                                      o(
                                        "span",
                                        { class: "text-md font-medium" },
                                        "最新动态"
                                      )
                                    ],
                                    -1
                                  )),
                                s(
                                  B,
                                  { "max-height": "504", class: "mt-3" },
                                  {
                                    default: n(() => [
                                      s(q, null, {
                                        default: n(() => [
                                          (l(!0),
                                          f(
                                            g,
                                            null,
                                            k(
                                              t(P),
                                              (e, c) => (
                                                l(),
                                                d(
                                                  V,
                                                  {
                                                    key: c,
                                                    center: "",
                                                    placement: "top",
                                                    icon: O(
                                                      t(Q)({
                                                        background: t(T)({
                                                          randomizeHue: !0
                                                        })
                                                      })
                                                    ),
                                                    timestamp: e.date
                                                  },
                                                  {
                                                    default: n(() => [
                                                      o(
                                                        "p",
                                                        le,
                                                        x(
                                                          `新增 ${e.requiredNumber} 条问题，${e.resolveNumber} 条已解决`
                                                        ),
                                                        1
                                                      )
                                                    ]),
                                                    _: 2
                                                  },
                                                  1032,
                                                  ["icon", "timestamp"]
                                                )
                                              )
                                            ),
                                            128
                                          ))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1,
                              __: [4]
                            }
                          )
                        ]),
                        _: 1
                      }
                    )),
                    [[p]]
                  )
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  be = U(ie, [["__scopeId", "data-v-77b5be49"]]);
export { be as default };
