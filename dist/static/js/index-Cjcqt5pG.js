import {
  d as b,
  D as g,
  r as w,
  av as c,
  e as l,
  c as m,
  o as d,
  j as n,
  b as o,
  w as t,
  F as C,
  g as h,
  t as k,
  n as x,
  B,
  Q as S,
  aC as V
} from "./index-DeFtvjuQ.js";
const P = { class: "card-header" },
  D = b({
    name: "PermissionPage",
    __name: "index",
    setup(U) {
      var r;
      const i = g(() => ({ width: "85vw", justifyContent: "start" })),
        a = w((r = c()) == null ? void 0 : r.username),
        p = [
          { value: "admin", label: "管理员角色" },
          { value: "common", label: "普通角色" }
        ];
      function v() {
        c()
          .loginByUsername({ username: a.value, password: "admin123" })
          .then(u => {
            u.success &&
              (B().removeItem("async-routes"), S().clearAllCachePage(), V());
          });
      }
      return (u, s) => {
        const _ = l("el-option"),
          f = l("el-select"),
          y = l("el-card");
        return (
          d(),
          m("div", null, [
            s[1] ||
              (s[1] = n(
                "p",
                { class: "mb-2!" },
                " 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ",
                -1
              )),
            o(
              y,
              { shadow: "never", style: x(i.value) },
              {
                header: t(() => [
                  n("div", P, [n("span", null, "当前角色：" + k(a.value), 1)])
                ]),
                default: t(() => [
                  o(
                    f,
                    {
                      modelValue: a.value,
                      "onUpdate:modelValue":
                        s[0] || (s[0] = e => (a.value = e)),
                      class: "w-[160px]!",
                      onChange: v
                    },
                    {
                      default: t(() => [
                        (d(),
                        m(
                          C,
                          null,
                          h(p, e =>
                            o(
                              _,
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
                ]),
                _: 1
              },
              8,
              ["style"]
            )
          ])
        );
      };
    }
  });
export { D as default };
