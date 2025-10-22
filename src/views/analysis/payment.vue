<script lang="ts" setup>
import { useDark } from "@pureadmin/utils";
import ReCol from "@/components/ReCol";
import ChartBar from "./charts/ChartBar.vue";
import { reactive, ref } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import dayjs from "dayjs";

import Refresh from "~icons/ep/refresh";
import GroupLine from "~icons/ri/group-line";
import Bills from "~icons/mingcute/bill-line";
import { ReNormalCountTo } from "@/components/ReCountTo";

defineOptions({
  name: "收支统计"
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
    name: "开支总额",
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
    name: "今日开支",
    value: 16580,
    percent: "+70%",
    data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
  }
];

const chartData = [
  {
    title: "开支金额",
    data: [
      { value: 40, name: "购物", color: "#5470C6" },
      { value: 38, name: "长辈", color: "#91CC75" },
      { value: 32, name: "交通", color: "#EE6666" },
      { value: 30, name: "住房", color: "#FAC858" },
      { value: 28, name: "餐饮", color: "#73C0DE" },
      { value: 26, name: "旅游", color: "#3BA272" },
      { value: 22, name: "医疗", color: "#FC8452" },
      { value: 18, name: "娱乐", color: "#9A60B4" }
    ]
  },
  {
    title: "收入金额",
    data: [
      { value: 90, name: "工资", color: "#5470C6" },
      { value: 38, name: "兼职", color: "#91CC75" },
      { value: 20, name: "投资", color: "#EE6666" }
    ]
  }
];

const formRef = ref();
const form = reactive({
  date: [dayjs().startOf("month").toDate(), dayjs().endOf("month").toDate()]
});
const onSearch = () => {};
const resetForm = () => {};
</script>

<template>
  <div>
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="search-form bg-bg_color w-full pl-8 pt-[12px] overflow-auto"
    >
      <el-form-item label="日期范围: " prop="date">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="到"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
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
      <re-col
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
      </re-col>
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
            <ChartBar :data="item.data" :title="item.title" />
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
