import { R as m } from "./index-ttNqQHi_.js";
import { _ as b } from "./index.vue_vue_type_script_setup_true_lang-BxAzyghC.js";
import { _ as k } from "./index.vue_vue_type_script_setup_true_lang-BWQkEckB.js";
import {
  a as y,
  d as x,
  r as f,
  e as n,
  p as s,
  o as i,
  w as r,
  b as e,
  k as w,
  u as t
} from "./index-DeFtvjuQ.js";
const R = y({
    file: [{ required: !0, message: "分类图标为必填项", trigger: "blur" }],
    name: [{ required: !0, message: "分类名称为必填项", trigger: "blur" }],
    type: [{ required: !0, message: "类型为必填项", trigger: "blur" }]
  }),
  B = x({
    __name: "index",
    props: {
      formInline: {
        default: () => ({
          title: "新增",
          img: "",
          file: void 0,
          name: "",
          type: "",
          remark: ""
        })
      }
    },
    setup(_, { expose: v }) {
      const d = f(),
        l = f(_.formInline);
      function V() {
        return d.value;
      }
      return (
        v({ getRef: V }),
        (C, a) => {
          const u = n("el-form-item"),
            p = n("el-input"),
            g = n("el-row"),
            c = n("el-form");
          return (
            i(),
            s(
              c,
              {
                ref_key: "ruleFormRef",
                ref: d,
                model: l.value,
                rules: t(R),
                "label-width": "82px"
              },
              {
                default: r(() => [
                  e(
                    g,
                    { gutter: 30 },
                    {
                      default: r(() => [
                        e(t(m), null, {
                          default: r(() => [
                            e(
                              u,
                              { label: "分类图标", prop: "file" },
                              {
                                default: r(() => [
                                  e(
                                    b,
                                    {
                                      modelValue: l.value.file,
                                      "onUpdate:modelValue":
                                        a[0] ||
                                        (a[0] = o => (l.value.file = o)),
                                      url: l.value.img
                                    },
                                    null,
                                    8,
                                    ["modelValue", "url"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }),
                        e(t(m), null, {
                          default: r(() => [
                            e(
                              u,
                              { label: "分类名称", prop: "name" },
                              {
                                default: r(() => [
                                  e(
                                    p,
                                    {
                                      modelValue: l.value.name,
                                      "onUpdate:modelValue":
                                        a[1] ||
                                        (a[1] = o => (l.value.name = o)),
                                      clearable: "",
                                      placeholder: "请输入分类名称"
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
                        l.value.title === "新增"
                          ? (i(),
                            s(
                              t(m),
                              { key: 0 },
                              {
                                default: r(() => [
                                  e(
                                    u,
                                    { label: "类型", prop: "type" },
                                    {
                                      default: r(() => [
                                        e(
                                          k,
                                          {
                                            modelValue: l.value.type,
                                            "onUpdate:modelValue":
                                              a[2] ||
                                              (a[2] = o => (l.value.type = o)),
                                            hideAll: ""
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
                              }
                            ))
                          : w("", !0),
                        e(t(m), null, {
                          default: r(() => [
                            e(
                              u,
                              { label: "备注", prop: "remark" },
                              {
                                default: r(() => [
                                  e(
                                    p,
                                    {
                                      modelValue: l.value.remark,
                                      "onUpdate:modelValue":
                                        a[3] ||
                                        (a[3] = o => (l.value.remark = o)),
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
export { B as _ };
