import { R as s } from "./index-ttNqQHi_.js";
import { _ as R } from "./index.vue_vue_type_script_setup_true_lang-BxAzyghC.js";
import {
  a as C,
  W as U,
  D as b,
  d as S,
  r as g,
  e as m,
  p as i,
  o as f,
  w as t,
  b as l,
  k as _,
  u,
  n as q
} from "./index-DeFtvjuQ.js";
const F = C({
  nickname: [{ required: !0, message: "用户昵称为必填项", trigger: "blur" }],
  username: [{ required: !0, message: "用户名称为必填项", trigger: "blur" }],
  password: [{ required: !0, message: "用户密码为必填项", trigger: "blur" }]
});
function I() {
  const { isDark: o } = U(),
    c = b(() => ({
      "--el-switch-on-color": "#6abe39",
      "--el-switch-off-color": "#e84749"
    })),
    p = b(
      () => d =>
        d === 1
          ? {
              "--el-tag-text-color": o.value ? "#6abe39" : "#389e0d",
              "--el-tag-bg-color": o.value ? "#172412" : "#f6ffed",
              "--el-tag-border-color": o.value ? "#274a17" : "#b7eb8f"
            }
          : {
              "--el-tag-text-color": o.value ? "#e84749" : "#cf1322",
              "--el-tag-bg-color": o.value ? "#2b1316" : "#fff1f0",
              "--el-tag-border-color": o.value ? "#58191c" : "#ffa39e"
            }
    );
  return { isDark: o, switchStyle: c, tagStyle: p };
}
const W = S({
  __name: "index",
  props: {
    formInline: {
      default: () => ({
        title: "新增",
        nickname: "",
        password: "",
        status: 1,
        remark: "",
        file: void 0
      })
    }
  },
  setup(o, { expose: c }) {
    const p = o,
      d = g(),
      { switchStyle: k } = I(),
      e = g(p.formInline);
    function w() {
      return d.value;
    }
    return (
      c({ getRef: w }),
      (h, a) => {
        const v = m("el-input"),
          n = m("el-form-item"),
          V = m("el-switch"),
          x = m("el-row"),
          y = m("el-form");
        return (
          f(),
          i(
            y,
            {
              ref_key: "ruleFormRef",
              ref: d,
              model: e.value,
              rules: u(F),
              "label-width": "82px"
            },
            {
              default: t(() => [
                l(
                  x,
                  { gutter: 30 },
                  {
                    default: t(() => [
                      l(u(s), null, {
                        default: t(() => [
                          l(
                            n,
                            { label: "用户昵称", prop: "nickname" },
                            {
                              default: t(() => [
                                l(
                                  v,
                                  {
                                    modelValue: e.value.nickname,
                                    "onUpdate:modelValue":
                                      a[0] ||
                                      (a[0] = r => (e.value.nickname = r)),
                                    clearable: "",
                                    placeholder: "请输入用户昵称"
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
                      e.value.title === "新增"
                        ? (f(),
                          i(
                            u(s),
                            { key: 0, value: 12, xs: 24, sm: 24 },
                            {
                              default: t(() => [
                                l(
                                  n,
                                  { label: "用户密码", prop: "password" },
                                  {
                                    default: t(() => [
                                      l(
                                        v,
                                        {
                                          modelValue: e.value.password,
                                          "onUpdate:modelValue":
                                            a[1] ||
                                            (a[1] = r =>
                                              (e.value.password = r)),
                                          clearable: "",
                                          placeholder: "请输入用户密码"
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
                        : _("", !0),
                      e.value.title === "新增"
                        ? (f(),
                          i(
                            u(s),
                            { key: 1 },
                            {
                              default: t(() => [
                                l(
                                  n,
                                  { label: "用户状态" },
                                  {
                                    default: t(() => [
                                      l(
                                        V,
                                        {
                                          modelValue: e.value.status,
                                          "onUpdate:modelValue":
                                            a[2] ||
                                            (a[2] = r => (e.value.status = r)),
                                          "inline-prompt": "",
                                          "active-value": 1,
                                          "inactive-value": 0,
                                          "active-text": "启用",
                                          "inactive-text": "停用",
                                          style: q(u(k))
                                        },
                                        null,
                                        8,
                                        ["modelValue", "style"]
                                      )
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ))
                        : _("", !0),
                      e.value.title === "新增"
                        ? (f(),
                          i(
                            u(s),
                            { key: 2 },
                            {
                              default: t(() => [
                                l(
                                  n,
                                  { label: "头像" },
                                  {
                                    default: t(() => [
                                      l(
                                        R,
                                        {
                                          modelValue: e.value.file,
                                          "onUpdate:modelValue":
                                            a[3] ||
                                            (a[3] = r => (e.value.file = r))
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
                        : _("", !0),
                      l(u(s), null, {
                        default: t(() => [
                          l(
                            n,
                            { label: "备注" },
                            {
                              default: t(() => [
                                l(
                                  v,
                                  {
                                    modelValue: e.value.remark,
                                    "onUpdate:modelValue":
                                      a[4] ||
                                      (a[4] = r => (e.value.remark = r)),
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
export { W as _, I as u };
