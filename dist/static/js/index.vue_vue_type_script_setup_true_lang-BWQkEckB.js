import {
  d as c,
  aR as m,
  aQ as r,
  p,
  o as t,
  w as i,
  c as v,
  F as _,
  g as b,
  e as n,
  b as f
} from "./index-DeFtvjuQ.js";
const k = c({
  name: "TypeSelect",
  __name: "index",
  props: m(
    { hideAll: { type: Boolean, default: !1 } },
    { modelValue: {}, modelModifiers: {} }
  ),
  emits: ["update:modelValue"],
  setup(l) {
    const s = [
        ...(l.hideAll ? [] : [{ value: "all", label: "全部" }]),
        { value: "expense", label: "支出" },
        { value: "income", label: "收入" }
      ],
      a = r(l, "modelValue");
    return (V, o) => {
      const u = n("el-option"),
        d = n("el-select");
      return (
        t(),
        p(
          d,
          {
            modelValue: a.value,
            "onUpdate:modelValue": o[0] || (o[0] = e => (a.value = e)),
            placeholder: "选择类型",
            clearable: "",
            class: "w-[180px]!"
          },
          {
            default: i(() => [
              (t(),
              v(
                _,
                null,
                b(s, e =>
                  f(
                    u,
                    { key: e.value, label: e.label, value: e.value },
                    null,
                    8,
                    ["label", "value"]
                  )
                ),
                64
              ))
            ]),
            _: 1
          },
          8,
          ["modelValue"]
        )
      );
    };
  }
});
export { k as _ };
