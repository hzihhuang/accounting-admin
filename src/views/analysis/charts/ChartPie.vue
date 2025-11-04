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
      legend: {
        top: "bottom"
      },
      tooltip: {
        trigger: "item",
        formatter: function (params: any) {
          return `${params.name}: ${params.percent}%`;
        }
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          center: ["50%", "50%"],
          itemStyle: {
            borderRadius: 8
          },
          label: {
            show: true
          },
          data:
            chartData.value.length > 0
              ? chartData.value
              : [{ value: 1, name: "暂无数据" }]
        }
      ]
    });
  },
  { immediate: true }
); // immediate: true 确保初始化时执行
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>
