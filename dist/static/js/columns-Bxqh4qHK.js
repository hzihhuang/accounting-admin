import { d as i } from "./dayjs.min-CQm-uH6z.js";
import { G as g, B as b } from "./bill-line-CitwULps.js";
import {
  A as s,
  c as r,
  o,
  j as l,
  a8 as v,
  r as m,
  a as w,
  G as M,
  b as n,
  T as x,
  f as C,
  e as _
} from "./index-DeFtvjuQ.js";
function c(t, e) {
  return Math.floor(Math.random() * (e - t + 1)) + t;
}
const y = { viewBox: "0 0 24 24", width: "1em", height: "1em" };
function L(t, e) {
  return (
    o(),
    r(
      "svg",
      y,
      e[0] ||
        (e[0] = [
          l(
            "path",
            {
              fill: "currentColor",
              d: "m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5"
            },
            null,
            -1
          )
        ])
    )
  );
}
const D = s({ name: "mdi-tag-outline", render: L }),
  k = { viewBox: "0 0 24 24", width: "1em", height: "1em" };
function A(t, e) {
  return (
    o(),
    r(
      "svg",
      k,
      e[0] ||
        (e[0] = [
          l(
            "path",
            {
              fill: "currentColor",
              d: "M4.5 11a8.5 8.5 0 1 1 6.502 8.264V20.5q0 .15-.013.298q.976.2 2.011.202c5.523 0 10-4.477 10-10S18.523 1 13 1S3 5.477 3 11v.036Q3.246 11 3.501 11zm8.493-5.352a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 16.25 11H13V5.75zM1 14.5A2.5 2.5 0 0 1 3.5 12h4a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 7.5 23h-4A2.5 2.5 0 0 1 1 20.5zm6.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m0 3h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m0 3h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1"
            },
            null,
            -1
          )
        ])
    )
  );
}
const B = s({ name: "fluent-clock-bill-24-regular", render: A }),
  N = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  E = [
    {
      icon: g,
      bgColor: "#effaff",
      color: "#41b6ff",
      duration: 2200,
      name: "总用户数",
      value: 36e3,
      percent: "+88%",
      data: [2101, 5288, 4239, 4962, 6752, 5208, 7450]
    },
    {
      icon: b,
      bgColor: "#fff5f4",
      color: "#e85f33",
      duration: 1600,
      name: "账单总量",
      value: 16580,
      percent: "+70%",
      data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
    },
    {
      icon: D,
      bgColor: "#eff8f4",
      color: "#26ce83",
      duration: 1500,
      name: "分类种类",
      value: 24,
      percent: "+99%",
      data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
    },
    {
      icon: B,
      bgColor: "#f6f4fe",
      color: "#7846e5",
      duration: 100,
      name: "今日新增账单",
      value: 100,
      percent: "+100%",
      data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
    }
  ],
  I = [
    {
      requireData: [2101, 5288, 4239, 4962, 6752, 5208, 7450],
      questionData: [2216, 1148, 1255, 1788, 4821, 1973, 4379]
    },
    {
      requireData: [2101, 3280, 4400, 4962, 5752, 6889, 7600],
      questionData: [2116, 3148, 3255, 3788, 4821, 4970, 5390]
    }
  ],
  Q = [
    { week: "交通", percentage: 20, color: "#41b6ff" },
    { week: "餐饮", percentage: 15, color: "#41b6ff" },
    { week: "购物", percentage: 32, color: "#41b6ff" },
    { week: "旅行", percentage: 2, color: "#41b6ff" },
    { week: "住房", percentage: 15, color: "#26ce83" },
    { week: "宠物", percentage: 2, color: "#26ce83" },
    { week: "礼物", percentage: 3, color: "#26ce83" },
    { week: "长辈", percentage: 30, color: "#26ce83" }
  ].sort((t, e) => e.percentage - t.percentage),
  d = Array.from({ length: 30 }).map((t, e) => ({
    id: e + 1,
    requiredNumber: c(13500, 19999),
    questionNumber: c(12600, 16999),
    resolveNumber: c(13500, 17999),
    satisfaction: c(95, 100),
    date: i().subtract(e, "day").format("YYYY-MM-DD")
  })),
  U = v(d)
    .slice(0, 14)
    .map((t, e) =>
      Object.assign(t, {
        date: `${i().subtract(e, "day").format("YYYY-MM-DD")} ${N[i().subtract(e, "day").day()]}`
      })
    ),
  V = { viewBox: "0 0 24 24", width: "1em", height: "1em" };
function $(t, e) {
  return (
    o(),
    r(
      "svg",
      V,
      e[0] ||
        (e[0] = [
          l(
            "path",
            {
              fill: "currentColor",
              d: "M14.6 8H21a2 2 0 0 1 2 2v2.105c0 .26-.051.52-.15.761l-3.095 7.515a1 1 0 0 1-.925.62H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.424L11.752.851a.5.5 0 0 1 .632-.159l1.814.908a2.5 2.5 0 0 1 1.305 2.852zM7 10.588V19h11.16L21 12.105V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.57l-.661-.331l-4.71 6.672c-.25.354-.57.645-.933.858M5 11H3v8h2z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const q = s({ name: "ri-thumb-up-line", render: $ }),
  z = { viewBox: "0 0 24 24", width: "1em", height: "1em" };
function H(t, e) {
  return (
    o(),
    r(
      "svg",
      z,
      e[0] ||
        (e[0] = [
          l(
            "path",
            {
              fill: "currentColor",
              d: "M19.243 4.757a6 6 0 0 1 1.65 5.38c.568.16 1.106.463 1.554.908a3.55 3.55 0 0 1 0 5.047L17 21.5l-3.022-3L11 21.485l-8.48-8.492A6 6 0 0 1 11 4.529a6 6 0 0 1 8.242.228m-6.281 7.708a1.55 1.55 0 0 0 0 2.208L17 18.682l4.038-4.009a1.55 1.55 0 0 0 0-2.208a1.614 1.614 0 0 0-2.268.002l-1.772 1.754l-1.407-1.396l-.363-.36a1.613 1.613 0 0 0-2.266 0m-8.79-6.293a4 4 0 0 0-.192 5.451L11 18.654l1.559-1.562l-1.006-1a3.55 3.55 0 0 1 0-5.047a3.614 3.614 0 0 1 5.084 0l.363.36l.363-.36a3.6 3.6 0 0 1 1.465-.882a4 4 0 0 0-1.001-3.993a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.494.154"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Y = s({ name: "ri-hearts-line", render: H }),
  j = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    class: "empty-icon",
    viewBox: "0 0 1024 1024"
  };
function S(t, e) {
  return (
    o(),
    r(
      "svg",
      j,
      e[0] ||
        (e[0] = [
          l(
            "path",
            {
              d: "M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18M673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4zm146.5-486.1c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8m-444.5 51.6L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4M512 239.3h2.5c19.5.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const T = { render: S };
function O() {
  const t = m([]),
    e = m(!0),
    p = [
      { sortable: !0, label: "序号", prop: "id" },
      {
        sortable: !0,
        label: "需求人数",
        prop: "requiredNumber",
        filterMultiple: !1,
        filterClassName: "pure-table-filter",
        filters: [
          { text: "≥16000", value: "more" },
          { text: "<16000", value: "less" }
        ],
        filterMethod: (a, { requiredNumber: f }) =>
          a === "more" ? f >= 16e3 : f < 16e3
      },
      { sortable: !0, label: "提问数量", prop: "questionNumber" },
      { sortable: !0, label: "解决数量", prop: "resolveNumber" },
      {
        sortable: !0,
        label: "用户满意度",
        minWidth: 100,
        prop: "satisfaction",
        cellRenderer: ({ row: a }) =>
          n("div", { class: "flex justify-center w-full" }, [
            n("span", { class: "flex items-center w-[60px]" }, [
              n("span", { class: "ml-auto mr-2" }, [a.satisfaction, C("%")]),
              n(
                _("iconifyIconOffline"),
                { icon: a.satisfaction > 98 ? Y : q, color: "#e85f33" },
                null
              )
            ])
          ])
      },
      { sortable: !0, label: "统计日期", prop: "date" },
      { label: "操作", fixed: "right", slot: "operation" }
    ],
    u = w({
      pageSize: 10,
      currentPage: 1,
      layout: "prev, pager, next",
      total: 0,
      align: "center"
    });
  function h(a) {
    ((e.value = !0),
      x(300).then(() => {
        e.value = !1;
      }));
  }
  return (
    M(() => {
      ((t.value = d), (u.total = t.value.length), (e.value = !1));
    }),
    {
      Empty: T,
      loading: e,
      columns: p,
      dataList: t,
      pagination: u,
      onCurrentChange: h
    }
  );
}
const W = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useColumns: O },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { W as a, I as b, E as c, U as l, Q as p, O as u };
