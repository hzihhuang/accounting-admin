<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "../utils/rule";
import { FormProps } from "../utils/types";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    title: "新增",
    nickname: "",
    remark: ""
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
        <el-form-item label="用户ID" prop="nickname">
          <el-input
            v-model="newFormInline.nickname"
            clearable
            placeholder="请输入用户ID"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="标签" prop="nickname">
          <el-input
            v-model="newFormInline.nickname"
            clearable
            placeholder="请输入标签"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="类型" prop="nickname">
          <el-input
            v-model="newFormInline.nickname"
            clearable
            placeholder="请输入类型"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="金额" prop="nickname">
          <el-input
            v-model="newFormInline.nickname"
            clearable
            placeholder="请输入金额"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="日期">
          <el-date-picker
            v-model="newFormInline.remark"
            type="date"
            placeholder="Pick a day"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="备注">
          <el-input
            v-model="newFormInline.remark"
            placeholder="请输入备注信息"
            type="textarea"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
