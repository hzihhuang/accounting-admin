<script lang="ts" setup>
import GroupLine from "~icons/ri/group-line";
import Bills from "~icons/mingcute/bill-line";
import Tags from "~icons/mdi/tag-outline";
import NewBill from "~icons/fluent/clock-bill-24-regular";
import { useDark } from "@pureadmin/utils";
import ReCol from "@/components/ReCol";
import ChartPie from "./charts/ChartPie.vue";

defineOptions({
  name: "分类占比"
});

const { isDark } = useDark();
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
</script>

<template>
  <div>
    <el-row :gutter="24" justify="space-around">
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
            delay: 80 * (index + 1)
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

.main-content {
  margin: 20px 20px 0 !important;
}
</style>
