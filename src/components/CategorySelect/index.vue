<script lang="ts" setup>
import { useCategory } from "./useCategory";

const { categoryList, loading, handleGetCategoryList } = useCategory();
const model = defineModel();
</script>

<template>
  <el-select
    v-model="model"
    filterable
    tag-type="primary"
    :loading="loading"
    @visible-change="handleGetCategoryList"
  >
    <el-option
      v-for="item in categoryList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
