import { u as g } from "./columns-Bxqh4qHK.js";
import { u as d } from "./hooks-avKaykaq.js";
import {
  d as f,
  p as C,
  o as h,
  e as o,
  u as e,
  w as t,
  b as a,
  _ as b
} from "./index-DeFtvjuQ.js";
import "./dayjs.min-CQm-uH6z.js";
import "./bill-line-CitwULps.js";
const w = f({
    __name: "index",
    setup(x) {
      const {
        loading: i,
        columns: r,
        dataList: s,
        pagination: n,
        Empty: c,
        onCurrentChange: l
      } = g();
      return (y, k) => {
        const p = o("el-empty"),
          m = o("el-button"),
          u = o("pure-table");
        return (
          h(),
          C(
            u,
            {
              "row-key": "id",
              alignWhole: "center",
              showOverflowTooltip: "",
              loading: e(i),
              "loading-config": { background: "transparent" },
              data: e(s).slice(
                (e(n).currentPage - 1) * e(n).pageSize,
                e(n).currentPage * e(n).pageSize
              ),
              columns: e(r),
              pagination: e(n),
              onPageCurrentChange: e(l)
            },
            {
              empty: t(() => [
                a(
                  p,
                  { description: "暂无数据", "image-size": 60 },
                  { image: t(() => [a(e(c))]), _: 1 }
                )
              ]),
              operation: t(({ row: _ }) => [
                a(
                  m,
                  {
                    plain: "",
                    circle: "",
                    size: "small",
                    title: `查看序号为${_.id}的详情`,
                    icon: e(d)("ri:search-line")
                  },
                  null,
                  8,
                  ["title", "icon"]
                )
              ]),
              _: 1
            },
            8,
            ["loading", "data", "columns", "pagination", "onPageCurrentChange"]
          )
        );
      };
    }
  }),
  S = b(w, [["__scopeId", "data-v-9c9e3126"]]);
export { S as default };
