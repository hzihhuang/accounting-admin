<script lang="ts" setup>
import { useUserList } from "./useUserList";

const { userOptions, loading, searchUsers } = useUserList();
const model = defineModel();
</script>

<template>
  <el-select
    v-model="model"
    clearable
    filterable
    remote
    :remote-method="searchUsers"
    tag-type="primary"
    :loading="loading"
    placeholder="请选择"
  >
    <el-option
      v-for="user in userOptions"
      :key="user.id"
      :label="user.nickname"
      :value="user.id"
    >
      {{ user.nickname ? user.nickname : user.username }}「{{ user.id }}」
    </el-option>
  </el-select>
</template>
