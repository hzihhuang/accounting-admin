<script lang="ts" setup>
import { useType } from "./useType";

// 组件名称
defineOptions({
  name: "TypeSelect"
});

const { typeList, loading, handleGetTypeList } = useType();
const model = defineModel();
</script>

<template>
  <el-select
    v-model="model"
    placeholder="选择类型"
    clearable
    class="w-[180px]!"
    :loading="loading"
    @visible-change="handleGetTypeList"
  >
    <el-option
      v-for="item in typeList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
