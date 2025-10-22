<script lang="ts" setup>
import ReCol from "@/components/ReCol";
import ChartPie from "./charts/ChartPie.vue";
import { reactive, ref } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import dayjs from "dayjs";

import Refresh from "~icons/ep/refresh";

defineOptions({
  name: "分类占比"
});

const chartData = [
  {
    title: "开支占比",
    data: [
      { value: 40, name: "购物" },
      { value: 38, name: "长辈" },
      { value: 32, name: "交通" },
      { value: 30, name: "住房" },
      { value: 28, name: "餐饮" },
      { value: 26, name: "旅游" },
      { value: 22, name: "医疗" },
      { value: 18, name: "娱乐" }
    ]
  },
  {
    title: "收入占比",
    data: [
      { value: 90, name: "工资" },
      { value: 38, name: "兼职" },
      { value: 20, name: "投资" }
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
            delay: 80 * (index + 1) + 80
          }
        }"
      >
        <el-card class="line-card" shadow="never">
          <div class="h-120">
            <ChartPie :title="item.title" :data="item.data" />
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
