<script setup lang="ts">
import { type PropType, ref, computed } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";

const { data = [], title = "" } = defineProps<{
  data?: { value: number; name: string; color?: string }[];
  title?: string;
}>();

const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const chartRef = ref();
const { setOptions } = useECharts(chartRef, {
  theme,
  renderer: "svg"
});

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
    formatter: params => {
      const item = params[0];
      return `${item.name}: ${item.value}`;
    }
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: "5%",
    right: "5%",
    bottom: "10%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: data.map(item => item.name),
    axisTick: { alignWithLabel: true }
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      type: "bar",
      data: data.map(item => ({
        value: item.value,
        itemStyle: { color: item.color } // 从数据中读取颜色
      })),
      barWidth: "50%",
      itemStyle: { borderRadius: [6, 6, 0, 0] },
      label: {
        show: true,
        position: "top",
        formatter: "{c}"
      }
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>
