import {
  d as n,
  W as i,
  D as l,
  r as c,
  aN as d,
  c as f,
  o as m
} from "./index-DeFtvjuQ.js";
const p = n({
  __name: "ChartPie",
  props: { data: { default: () => [] }, title: { default: "" } },
  setup(t) {
    const { isDark: a } = i(),
      o = l(() => (a.value ? "dark" : "light")),
      r = c(),
      { setOptions: s } = d(r, { theme: o, renderer: "svg" });
    return (
      s({
        title: {
          text: t.title,
          left: "center",
          top: 0,
          textStyle: { fontSize: 18, fontWeight: "bold" }
        },
        legend: { top: "bottom" },
        tooltip: {
          trigger: "item",
          formatter: function (e) {
            return `${e.name}: ${e.value}`;
          }
        },
        toolbox: {
          show: !0,
          feature: { mark: { show: !0 }, saveAsImage: { show: !0 } }
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: { borderRadius: 8 },
            label: { show: !0, formatter: "{b}: {d}%" },
            data: t.data
          }
        ]
      }),
      (e, u) => (
        m(),
        f(
          "div",
          {
            ref_key: "chartRef",
            ref: r,
            style: { width: "100%", height: "100%" }
          },
          null,
          512
        )
      )
    );
  }
});
export { p as _ };
