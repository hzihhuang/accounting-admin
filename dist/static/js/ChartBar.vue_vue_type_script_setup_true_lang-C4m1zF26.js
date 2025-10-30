import {
  d as l,
  W as n,
  D as c,
  r as u,
  aN as d,
  c as m,
  o as h
} from "./index-DeFtvjuQ.js";
const p = l({
  __name: "ChartBar",
  props: { data: { default: () => [] }, title: { default: "" } },
  setup(e) {
    const { isDark: o } = n(),
      s = c(() => (o.value ? "dark" : "light")),
      r = u(),
      { setOptions: i } = d(r, { theme: s, renderer: "svg" });
    return (
      i({
        title: {
          text: e.title,
          left: "center",
          top: 0,
          textStyle: { fontSize: 18, fontWeight: "bold" }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          formatter: t => {
            const a = t[0];
            return `${a.name}: ${a.value}`;
          }
        },
        toolbox: {
          show: !0,
          feature: { mark: { show: !0 }, saveAsImage: { show: !0 } }
        },
        grid: { left: "5%", right: "5%", bottom: "10%", containLabel: !0 },
        xAxis: {
          type: "category",
          data: e.data.map(t => t.name),
          axisTick: { alignWithLabel: !0 }
        },
        yAxis: { type: "value" },
        series: [
          {
            type: "bar",
            data: e.data.map(t => ({
              value: t.value,
              itemStyle: { color: t.color }
            })),
            barWidth: "50%",
            itemStyle: { borderRadius: [6, 6, 0, 0] },
            label: { show: !0, position: "top", formatter: "{c}" }
          }
        ]
      }),
      (t, a) => (
        h(),
        m(
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
