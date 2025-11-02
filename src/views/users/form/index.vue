<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import UploadImg from "@/components/UploadImg/index.vue";
import { formRules } from "../utils/rule";
import { FormProps } from "../utils/types";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    title: "新增",
    img: "",
    username: "",
    password: "",
    file: undefined
  })
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
  >
    <el-row :gutter="30">
      <re-col>
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="newFormInline.username"
            clearable
            placeholder="请输入用户名"
          />
        </el-form-item>
      </re-col>
      <re-col v-if="newFormInline.title === '新增'">
        <el-form-item label="用户密码" prop="password">
          <el-input
            v-model="newFormInline.password"
            clearable
            placeholder="请输入用户密码"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="头像">
          <UploadImg v-model="newFormInline.file" />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
