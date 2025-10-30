var f = (a, m, n) =>
  new Promise((p, r) => {
    var i = t => {
        try {
          s(n.next(t));
        } catch (c) {
          r(c);
        }
      },
      l = t => {
        try {
          s(n.throw(t));
        } catch (c) {
          r(c);
        }
      },
      s = t => (t.done ? p(t.value) : Promise.resolve(t.value).then(i, l));
    s((n = n.apply(a, m)).next());
  });
import { d as b } from "./dayjs.min-CQm-uH6z.js";
import { a as w } from "./index.vue_vue_type_script_setup_true_lang-pTGGJq22.js";
import {
  aO as z,
  r as u,
  a as T,
  G as H,
  aa as y,
  b as P,
  ab as A,
  aD as g,
  aP as F,
  az as $,
  e as B,
  ai as L
} from "./index-DeFtvjuQ.js";
import "./index-ttNqQHi_.js";
import "./category-Cz9-Rw0q.js";
const N = a => z.request("post", "/bills", { data: a });
function J(a, m) {
  const n = u(),
    p = u([]),
    r = u(!0),
    i = u(0),
    l = T({ total: 0, pageSize: 10, currentPage: 1, background: !0 }),
    s = [
      {
        label: "勾选列",
        type: "selection",
        fixed: "left",
        reserveSelection: !0
      },
      { label: "用户ID", prop: "id", width: 90 },
      { label: "用户昵称", prop: "nickname", minWidth: 130 },
      {
        label: "分类图标",
        prop: "categoryImg",
        cellRenderer: ({ row: e }) =>
          P(
            B("el-image"),
            {
              fit: "cover",
              "preview-teleported": !0,
              src: e.category.img,
              "preview-src-list": Array.of(e.category.img),
              class: "w-[24px] h-[24px] align-middle"
            },
            null
          ),
        width: 90
      },
      {
        label: "分类名称",
        prop: "category",
        formatter: ({ category: e }) => e.name,
        minWidth: 130
      },
      {
        label: "类型",
        prop: "type",
        formatter: ({ type: e }) => (e.name === "expenses" ? "支出" : "收入"),
        minWidth: 130
      },
      { label: "金额", prop: "price", minWidth: 130 },
      { label: "备注", prop: "remark", minWidth: 130 },
      {
        label: "日期",
        minWidth: 90,
        prop: "time",
        formatter: ({ createTime: e }) => b(e).format("YYYY-MM-DD HH:mm:ss")
      },
      {
        label: "创建时间",
        minWidth: 90,
        prop: "createTime",
        formatter: ({ createTime: e }) => b(e).format("YYYY-MM-DD HH:mm:ss")
      },
      { label: "操作", fixed: "right", width: 180, slot: "operation" }
    ];
  function t(e) {
    (g(`您删除了用户ID为${e.id}的这条数据`, { type: "success" }), o());
  }
  function c(e) {}
  function D(e) {}
  function S(e) {
    ((i.value = e.length), a.value.setAdaptive());
  }
  function I() {
    ((i.value = 0), a.value.getTableRef().clearSelection());
  }
  function Y() {
    const e = a.value.getTableRef().getSelectionRows();
    (g(`已删除用户ID为 ${$(e, "id")} 的数据`, { type: "success" }),
      a.value.getTableRef().clearSelection(),
      o());
  }
  function o() {
    return f(this, null, function* () {
      r.value = !0;
      const { data: e } = yield N(A(m));
      ((p.value = e.list),
        (l.total = e.total),
        (l.pageSize = e.pageSize),
        (l.currentPage = e.currentPage),
        setTimeout(() => {
          r.value = !1;
        }, 500));
    });
  }
  const C = e => {
    e && (e.resetFields(), o());
  };
  function R(e = "新增", d) {
    var h;
    F({
      title: `${e}账单`,
      props: {
        formInline: {
          title: e,
          remark: (h = d == null ? void 0 : d.remark) != null ? h : ""
        }
      },
      width: "46%",
      draggable: !0,
      fullscreen: y(),
      fullscreenIcon: !0,
      closeOnClickModal: !1,
      contentRenderer: () => L(w, { ref: n, formInline: null }),
      beforeSure: (W, { options: k }) => {
        const x = n.value.getRef();
        k.props.formInline;
        function v() {
          (g("aaasds", { type: "success" }), W(), o());
        }
        x.validate(M => {
          M && v();
        });
      }
    });
  }
  return (
    H(() =>
      f(null, null, function* () {
        o();
      })
    ),
    {
      loading: r,
      columns: s,
      dataList: p,
      selectedNum: i,
      pagination: l,
      deviceDetection: y,
      onSearch: o,
      resetForm: C,
      onbatchDel: Y,
      openDialog: R,
      handleDelete: t,
      handleSizeChange: c,
      onSelectionCancel: I,
      handleCurrentChange: D,
      handleSelectionChange: S
    }
  );
}
export { J as useBill };
