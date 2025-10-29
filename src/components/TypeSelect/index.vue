<script lang="ts" setup>
import { ref } from "vue";

defineOptions({
  name: "TypeSelect"
});
const { hideAll = false } = defineProps<{
  hideAll?: boolean;
}>();

const typeList = [
  ...(hideAll
    ? []
    : [
        {
          value: "all",
          label: "全部"
        }
      ]),
  {
    value: "expense",
    label: "支出"
  },
  {
    value: "income",
    label: "收入"
  }
];
const model = defineModel();
</script>

<template>
  <el-select
    v-model="model"
    placeholder="选择类型"
    clearable
    class="w-[180px]!"
  >
    <el-option
      v-for="item in typeList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
