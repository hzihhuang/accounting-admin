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
    img: "",

    file: undefined,
    name: "",
    type: "",
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
        <el-form-item label="分类图标" prop="file">
          <UploadImg v-model="newFormInline.file" :url="newFormInline.img" />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="分类名称" prop="name">
          <el-input
            v-model="newFormInline.name"
            clearable
            maxlength="8"
            placeholder="请输入分类名称"
          />
        </el-form-item>
      </re-col>
      <re-col v-if="newFormInline.title === '新增'">
        <el-form-item label="类型" prop="type">
          <TypeSelect v-model="newFormInline.type" hideAll />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="newFormInline.remark"
            placeholder="请输入备注信息"
            type="textarea"
            maxlength="50"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
