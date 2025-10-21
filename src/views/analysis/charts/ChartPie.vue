<script setup lang="ts">
import { type PropType, ref, computed } from "vue";
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
    formatter: function (params) {
      return `${params.name}: ${params.value}`;
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
      roseType: "area",
      itemStyle: {
        borderRadius: 8
      },
      label: {
        show: true,
        formatter: "{b}: {d}%" // {b}表示名称，{d}表示百分比
      },
      data: data
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>
