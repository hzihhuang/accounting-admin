<script lang="ts" setup>
import { useDark } from "@pureadmin/utils";
import ReCol from "@/components/ReCol";
import { computed, onBeforeMount, reactive, ref } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import dayjs from "dayjs";
import WebUserSelect from "@/components/WebUserSelect/index.vue";

import Refresh from "~icons/ep/refresh";
import GroupLine from "~icons/ri/group-line";
import Bills from "~icons/mingcute/bill-line";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { getTrendChartData } from "@/api/charts";
import ChartLine from "./charts/ChartLine.vue";

defineOptions({
  name: "趋势分析"
});
const { isDark } = useDark();

// 总数统计
const chartDataAll = [
  {
    icon: GroupLine,
    bgColor: "#effaff",
    color: "#41b6ff",
    duration: 2200,
    name: "收入总额",
    value: 36000,
    percent: "+88%",
    data: [2101, 5288, 4239, 4962, 6752, 5208, 7450] // 平滑折线图数据
  },
  {
    icon: Bills,
    bgColor: "#fff5f4",
    color: "#e85f33",
    duration: 1600,
    name: "支出总额",
    value: 16580,
    percent: "+70%",
    data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
  },
  {
    icon: GroupLine,
    bgColor: "#effaff",
    color: "#41b6ff",
    duration: 2200,
    name: "今日收入",
    value: 36000,
    percent: "+88%",
    data: [2101, 5288, 4239, 4962, 6752, 5208, 7450] // 平滑折线图数据
  },
  {
    icon: Bills,
    bgColor: "#fff5f4",
    color: "#e85f33",
    duration: 1600,
    name: "今日支出",
    value: 16580,
    percent: "+70%",
    data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
  }
];

const formRef = ref();
const form = reactive({
  mode: "month",
  date: [],
  userId: ""
});
const pickerType = computed(() => {
  switch (form.mode) {
    case "year":
      return "yearrange";
    case "monthrange":
      return "month";
    case "week":
      return "daterange";
    case "day":
      return "daterange";
    default:
      return "monthrange";
  }
});
const chartData = ref([]);
onBeforeMount(() => onSearch());
function generateHarmoniousColor(
  index,
  total,
  saturation = 70,
  lightness = 60
) {
  // 基于色相环均匀分布颜色
  const hue = ((index * 360) / total) % 360;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
const onSearch = () => {
  getTrendChartData({
    mode: form.mode,
    userId: form.userId,
    startDate: (() => {
      const today = dayjs();
      switch (form.mode) {
        case "year":
          return today
            .subtract(11, "year")
            .startOf("year")
            .format("YYYY-MM-DD");
        case "month":
          return today
            .subtract(11, "month")
            .startOf("month")
            .format("YYYY-MM-DD");
        case "week":
          return today
            .subtract(11, "week")
            .startOf("week")
            .format("YYYY-MM-DD");
        case "day":
        default:
          return today.subtract(29, "day").format("YYYY-MM-DD");
      }
    })(),
    endDate: dayjs().format("YYYY-MM-DD")
  }).then(res => {
    if (res.success) {
      const expenseData = [];
      const incomeData = [];
      res.data.forEach((i, index, array) => {
        expenseData.push({
          name: i.date,
          value: i.expense,
          color: generateHarmoniousColor(index, array.length)
        });
        incomeData.push({
          name: i.date,
          value: i.income,
          color: generateHarmoniousColor(index, array.length)
        });
      });
      chartData.value = [
        {
          title: "支出",
          data: expenseData
        },
        {
          title: "收入",
          data: incomeData
        }
      ];
    }
  });
};
const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
  onSearch();
};
</script>

<template>
  <div>
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="search-form bg-bg_color w-full pl-8 pt-[12px] overflow-auto"
    >
      <el-form-item label="用户: " prop="userId">
        <WebUserSelect v-model="form.userId" />
      </el-form-item>
      <el-form-item label="日期范围: " prop="date">
        <el-date-picker
          v-model="form.date"
          :type="pickerType"
          range-separator="到"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
      </el-form-item>
      <el-form-item label="展示模式: " prop="mode">
        <el-segmented
          v-model="form.mode"
          :options="[
            { label: '日', value: 'day' },
            { label: '周', value: 'week' },
            { label: '月', value: 'month' },
            { label: '年', value: 'year' }
          ]"
          size="default"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri/search-line')"
          @click="onSearch"
        >
          搜索
        </el-button>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <el-row class="mt-4" :gutter="24" justify="space-around">
      <!-- <re-col
        v-for="(item, index) in chartDataAll"
        :key="index"
        v-motion
        class="mb-[18px]"
        :value="6"
        :md="12"
        :sm="12"
        :xs="24"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * (index + 1)
          }
        }"
      >
        <el-card class="line-card" shadow="never">
          <div class="flex justify-between">
            <span class="text-md font-medium">
              {{ item.name }}
            </span>
            <div
              class="w-8 h-8 flex justify-center items-center rounded-md"
              :style="{
                backgroundColor: isDark ? 'transparent' : item.bgColor
              }"
            >
              <IconifyIconOffline
                :icon="item.icon"
                :color="item.color"
                width="18"
                height="18"
              />
            </div>
          </div>
          <div class="flex justify-between items-start mt-3">
            <div class="w-1/2">
              <ReNormalCountTo
                :duration="item.duration"
                :fontSize="'1.6em'"
                :startVal="100"
                :endVal="item.value"
              />
              <p class="font-medium text-green-500">{{ item.percent }}</p>
            </div>
            <ChartLine class="w-1/2!" :color="item.color" :data="item.data" />
          </div>
        </el-card>
      </re-col> -->
      <re-col
        v-for="(item, index) in chartData"
        :key="index"
        v-motion
        class="mb-[18px]"
        :value="12"
        :md="12"
        :sm="12"
        :xs="32"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * (index + 3)
          }
        }"
      >
        <el-card class="line-card" shadow="never">
          <div class="h-120">
            <ChartLine :data="item.data" :title="item.title" />
          </div>
        </el-card>
      </re-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  --el-card-border-color: none;

  /* 解决概率进度条宽度 */
  .el-progress--line {
    width: 85%;
  }

  /* 解决概率进度条字体大小 */
  .el-progress-bar__innerText {
    font-size: 15px;
  }

  /* 隐藏 el-scrollbar 滚动条 */
  .el-scrollbar__bar {
    display: none;
  }

  /* el-timeline 每一项上下、左右边距 */
  .el-timeline-item {
    margin: 0 6px;
  }
}

.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}

.main-content {
  margin: 24px 24px 0 !important;
}
</style>
