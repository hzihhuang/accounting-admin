<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import UploadImg from "@/components/UploadImg/index.vue";
import TypeSelect from "@/components/TypeSelect/index.vue";
import { formRules } from "../utils/rule";
import { FormProps } from "../utils/types";

const {
  formInline = {
    title: "新增",
    file: undefined,

    name: "",
    typeId: "",
    remark: ""
  }
} = defineProps<FormProps>();

const ruleFormRef = ref();
const newFormInline = ref(formInline);

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
        <el-form-item label="分类图标">
          <UploadImg v-model="newFormInline.file" />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="分类昵称" prop="name">
          <el-input
            v-model="newFormInline.name"
            clearable
            placeholder="请输入标签"
          />
        </el-form-item>
      </re-col>
      <re-col v-if="newFormInline.title === '新增'">
        <el-form-item label="类型" prop="typeId">
          <TypeSelect v-model="newFormInline.typeId" />
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
