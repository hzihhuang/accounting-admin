var f = (r, n, t) =>
  new Promise((u, c) => {
    var o = l => {
        try {
          d(t.next(l));
        } catch (m) {
          c(m);
        }
      },
      s = l => {
        try {
          d(t.throw(l));
        } catch (m) {
          c(m);
        }
      },
      d = l => (l.done ? u(l.value) : Promise.resolve(l.value).then(o, s));
    d((t = t.apply(r, n)).next());
  });
import { d as L } from "./dayjs.min-CQm-uH6z.js";
import { _ } from "./index.vue_vue_type_script_setup_true_lang-DRuu41Z-.js";
import {
  aO as H,
  r as g,
  a as N,
  G as O,
  aa as R,
  b as j,
  ab as q,
  aD as h,
  aP as G,
  az as k,
  e as V,
  ai as B
} from "./index-DeFtvjuQ.js";
import { g as J, d as K, a as Q, b as U } from "./category-Cz9-Rw0q.js";
import "./index-ttNqQHi_.js";
import "./index.vue_vue_type_script_setup_true_lang-BxAzyghC.js";
import "./index.vue_vue_type_script_setup_true_lang-BWQkEckB.js";
const X = (r, n) => {
  const t = new FormData();
  return (
    t.append("file", r),
    n != null && n.folder && t.append("folder", n.folder),
    H.request("post", "/upload/image", { data: t })
  );
};
function re(r, n) {
  const t = g(),
    u = g([]),
    c = g(!0),
    o = g(0),
    s = N({ total: 0, pageSize: 10, currentPage: 1, background: !0 }),
    d = [
      {
        label: "勾选列",
        type: "selection",
        fixed: "left",
        reserveSelection: !0
      },
      { label: "分类ID", prop: "id", width: 90 },
      {
        label: "分类图标",
        prop: "img",
        cellRenderer: ({ row: e }) =>
          j(
            V("el-image"),
            {
              fit: "cover",
              "preview-teleported": !0,
              src: e.img,
              "preview-src-list": Array.of(e.img),
              class: "w-[24px] h-[24px] align-middle"
            },
            null
          ),
        width: 90
      },
      { label: "分类名称", prop: "name", minWidth: 130 },
      {
        label: "类型",
        prop: "type",
        minWidth: 130,
        formatter: ({ type: e }) => (e === "income" ? "收入" : "支出")
      },
      { label: "备注", prop: "remark", minWidth: 130 },
      {
        label: "创建时间",
        minWidth: 90,
        prop: "createTime",
        formatter: ({ createTime: e }) => L(e).format("YYYY-MM-DD HH:mm:ss")
      },
      { label: "操作", fixed: "right", width: 180, slot: "operation" }
    ];
  function l(e) {
    K(e.id).then(() => {
      (h(`删除「${e.name}」成功`, { type: "success" }), i());
    });
  }
  function m(e) {
    ((n.pageSize = e), i());
  }
  function z(e) {
    ((n.page = e), i());
  }
  function I(e) {
    ((o.value = e.length), r.value.setAdaptive());
  }
  function T() {
    ((o.value = 0), r.value.getTableRef().clearSelection());
  }
  function x() {
    const e = r.value.getTableRef().getSelectionRows();
    Q(k(e, "id")).then(() => {
      (h(`删除成功 「${k(e, "name")}」 的数据`, { type: "success" }),
        r.value.getTableRef().clearSelection(),
        i());
    });
  }
  function i() {
    return f(this, null, function* () {
      c.value = !0;
      const { data: e } = yield J(q(n));
      ((u.value = e.list),
        (s.total = e.total),
        (s.pageSize = e.pageSize),
        (s.currentPage = e.currentPage),
        setTimeout(() => {
          c.value = !1;
        }, 500));
    });
  }
  const $ = e => {
    e && (e.resetFields(), i());
  };
  function F(e = "新增", a) {
    var v, y, b, S;
    G({
      title: `${e}账单`,
      props: {
        formInline: {
          title: e,
          file: (v = a == null ? void 0 : a.img) != null ? v : "",
          img:
            (y = a == null ? void 0 : a.img) != null
              ? y
              : "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          name: (b = a == null ? void 0 : a.name) != null ? b : "",
          remark: (S = a == null ? void 0 : a.remark) != null ? S : ""
        }
      },
      width: "46%",
      draggable: !0,
      fullscreen: R(),
      fullscreenIcon: !0,
      closeOnClickModal: !1,
      contentRenderer: () => B(_, { ref: t, formInline: null }),
      beforeSure: (M, { options: P }) => {
        const W = t.value.getRef(),
          p = P.props.formInline;
        W.validate(Y =>
          f(null, null, function* () {
            if (Y && e === "新增") {
              const D = yield X(p.file, { folder: "category" });
              if (D.code !== 200) return;
              const A = {
                  img: D.data.url,
                  name: p.name,
                  type: p.type,
                  remark: p.remark
                },
                C = yield U(A);
              if (C.code !== 200) return;
              (h(`${e}「${C.data.name}}」成功`, { type: "success" }), M(), i());
            }
          })
        );
      }
    });
  }
  return (
    O(() =>
      f(null, null, function* () {
        i();
      })
    ),
    {
      loading: c,
      columns: d,
      dataList: u,
      selectedNum: o,
      pagination: s,
      deviceDetection: R,
      onSearch: i,
      resetForm: $,
      onbatchDel: x,
      openDialog: F,
      handleDelete: l,
      handleSizeChange: m,
      onSelectionCancel: T,
      handleCurrentChange: z,
      handleSelectionChange: I
    }
  );
}
export { re as useTags };
