var y = (d, s, m) =>
  new Promise((u, e) => {
    var c = t => {
        try {
          l(m.next(t));
        } catch (o) {
          e(o);
        }
      },
      r = t => {
        try {
          l(m.throw(t));
        } catch (o) {
          e(o);
        }
      },
      l = t => (t.done ? u(t.value) : Promise.resolve(t.value).then(c, r));
    l((m = m.apply(d, s)).next());
  });
import { R as _ } from "./index-ttNqQHi_.js";
import {
  a as x,
  r as g,
  d as b,
  aQ as w,
  p as V,
  o as v,
  w as n,
  c as L,
  F as R,
  g as U,
  u as i,
  e as f,
  b as a
} from "./index-DeFtvjuQ.js";
import { g as F } from "./category-Cz9-Rw0q.js";
const B = x({}),
  G = () => {
    const d = g(!0),
      s = g([]);
    return {
      loading: d,
      categoryList: s,
      handleGetCategoryList: () =>
        y(null, null, function* () {
          var u, e;
          if (s.value.length > 0) {
            d.value = !1;
            return;
          } else {
            const c = yield F();
            c.data &&
              ((d.value = !1),
              (s.value =
                (e = (u = c.data.list) == null ? void 0 : u.map) == null
                  ? void 0
                  : e.call(u, r => ({
                      label: `${r.name}${r.name === "理财" ? (r.type === "expenses" ? "「支出」" : "「收入」") : ""}`,
                      value: r.id
                    }))));
          }
        })
    };
  },
  $ = b({
    __name: "index",
    props: { modelValue: {}, modelModifiers: {} },
    emits: ["update:modelValue"],
    setup(d) {
      const { categoryList: s, loading: m, handleGetCategoryList: u } = G(),
        e = w(d, "modelValue");
      return (c, r) => {
        const l = f("el-option"),
          t = f("el-select");
        return (
          v(),
          V(
            t,
            {
              modelValue: e.value,
              "onUpdate:modelValue": r[0] || (r[0] = o => (e.value = o)),
              multiple: "",
              filterable: "",
              "tag-type": "primary",
              loading: i(m),
              onVisibleChange: i(u)
            },
            {
              default: n(() => [
                (v(!0),
                L(
                  R,
                  null,
                  U(
                    i(s),
                    o => (
                      v(),
                      V(
                        l,
                        { key: o.value, label: o.label, value: o.value },
                        null,
                        8,
                        ["label", "value"]
                      )
                    )
                  ),
                  128
                ))
              ]),
              _: 1
            },
            8,
            ["modelValue", "loading", "onVisibleChange"]
          )
        );
      };
    }
  }),
  N = b({
    __name: "index",
    props: {
      formInline: {
        default: () => ({
          title: "新增",
          userId: void 0,
          categoryId: void 0,
          price: void 0,
          date: void 0,
          remark: ""
        })
      }
    },
    setup(d, { expose: s }) {
      const m = d,
        u = g(),
        e = g(m.formInline);
      function c() {
        return u.value;
      }
      return (
        s({ getRef: c }),
        (r, l) => {
          const t = f("el-input"),
            o = f("el-form-item"),
            I = f("el-date-picker"),
            k = f("el-row"),
            C = f("el-form");
          return (
            v(),
            V(
              C,
              {
                ref_key: "ruleFormRef",
                ref: u,
                model: e.value,
                rules: i(B),
                "label-width": "82px"
              },
              {
                default: n(() => [
                  a(
                    k,
                    { gutter: 30 },
                    {
                      default: n(() => [
                        a(i(_), null, {
                          default: n(() => [
                            a(
                              o,
                              { label: "用户ID", prop: "userId" },
                              {
                                default: n(() => [
                                  a(
                                    t,
                                    {
                                      modelValue: e.value.userId,
                                      "onUpdate:modelValue":
                                        l[0] ||
                                        (l[0] = p => (e.value.userId = p)),
                                      clearable: "",
                                      placeholder: "请输入用户ID"
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }),
                        a(i(_), null, {
                          default: n(() => [
                            a(
                              o,
                              { label: "标签", prop: "categoryId" },
                              {
                                default: n(() => [
                                  a(
                                    $,
                                    {
                                      modelValue: e.value.categoryId,
                                      "onUpdate:modelValue":
                                        l[1] ||
                                        (l[1] = p => (e.value.categoryId = p))
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }),
                        a(i(_), null, {
                          default: n(() => [
                            a(
                              o,
                              { label: "金额", prop: "price" },
                              {
                                default: n(() => [
                                  a(
                                    t,
                                    {
                                      modelValue: e.value.price,
                                      "onUpdate:modelValue":
                                        l[2] ||
                                        (l[2] = p => (e.value.price = p)),
                                      clearable: "",
                                      placeholder: "请输入金额"
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }),
                        a(i(_), null, {
                          default: n(() => [
                            a(
                              o,
                              { label: "日期" },
                              {
                                default: n(() => [
                                  a(
                                    I,
                                    {
                                      modelValue: e.value.date,
                                      "onUpdate:modelValue":
                                        l[3] ||
                                        (l[3] = p => (e.value.date = p)),
                                      type: "date",
                                      placeholder: "Pick a day"
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }),
                        a(i(_), null, {
                          default: n(() => [
                            a(
                              o,
                              { label: "备注" },
                              {
                                default: n(() => [
                                  a(
                                    t,
                                    {
                                      modelValue: e.value.remark,
                                      "onUpdate:modelValue":
                                        l[4] ||
                                        (l[4] = p => (e.value.remark = p)),
                                      placeholder: "请输入备注信息",
                                      type: "textarea"
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              },
              8,
              ["model", "rules"]
            )
          );
        }
      );
    }
  });
export { $ as _, N as a };
