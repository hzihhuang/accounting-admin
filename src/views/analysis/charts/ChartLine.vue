<script setup lang="ts">
import { type PropType, ref, computed, watch } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";

const { data = [], title = "" } = defineProps<{
  data?: { value: number; name: string }[];
  title?: string;
}>();

const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const chartRef = ref();
const { setOptions } = useECharts(chartRef, {
  theme,
  renderer: "svg"
});

// 过滤有效数据
const chartData = computed(() => {
  return data.filter(item => item.value > 0);
});

// 监听数据和主题变化
watch(
  [chartData, theme],
  () => {
    const hasData = chartData.value.length > 0;

    setOptions({
      title: {
        text: title,
        left: "center",
        top: 0,
        textStyle: {
          fontSize: 18,
          fontWeight: "bold"
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        },
        formatter: (params: any) => {
          const item = Array.isArray(params) ? params[0] : params;
          return `${item.name}: ${item.value}`;
        }
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          saveAsImage: { show: true },
          dataView: { show: true, readOnly: true }
        }
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "10%",
        top: "15%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: hasData ? chartData.value.map(item => item.name) : [],
        axisLabel: {
          interval: 0,
          rotate: chartData.value.length > 8 ? 45 : 0
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}"
        }
      },
      series: [
        {
          name: "数据",
          type: "line",
          data: hasData ? chartData.value.map(item => item.value) : [0],
          smooth: true, // 平滑曲线
          symbol: "circle", // 数据点显示为圆点
          symbolSize: 8,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: "#fff",
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          },
          areaStyle: hasData
            ? {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(64, 158, 255, 0.6)"
                    },
                    {
                      offset: 1,
                      color: "rgba(64, 158, 255, 0.1)"
                    }
                  ]
                }
              }
            : undefined,
          label: {
            show: true,
            position: "top",
            formatter: "{c}",
            fontSize: 12
          },
          emphasis: {
            focus: "series",
            itemStyle: {
              borderWidth: 3,
              shadowBlur: 20
            }
          }
        }
      ]
    });
  },
  { immediate: true }
);
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>
