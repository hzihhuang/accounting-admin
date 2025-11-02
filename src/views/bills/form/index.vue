<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "../utils/rule";
import { FormProps } from "../utils/types";
import CategorySelect from "@/components/CategorySelect/index.vue";
import WebUserSelect from "@/components/WebUserSelect/index.vue";

const {
  formInline = {
    title: "新增",

    userId: undefined,
    categoryId: undefined,
    price: undefined,
    date: undefined,
    remark: ""
  }
} = defineProps<{
  formInline?: {
    userId: number;
    categoryId: number;
    price: number;
    date: string;
    remark: string;
  };
}>();

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
        <el-form-item label="用户昵称" prop="userId">
          <WebUserSelect v-model="newFormInline.userId" />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="标签" prop="categoryId">
          <CategorySelect v-model="newFormInline.categoryId" />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="金额" prop="price">
          <el-input
            v-model="newFormInline.price"
            clearable
            type="number"
            min="0"
            placeholder="请输入金额"
            oninput="value = value.replace(/[^0-9.]/g, '')"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="日期" prop="date">
          <el-date-picker
            v-model="newFormInline.date"
            type="date"
            placeholder="消费日期"
            value-format="YYYY-MM-DD"
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
