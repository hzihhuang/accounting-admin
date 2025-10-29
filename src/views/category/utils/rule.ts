import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
  file: [{ required: true, message: "分类图标为必填项", trigger: "blur" }],
  name: [{ required: true, message: "分类名称为必填项", trigger: "blur" }],
  type: [{ required: true, message: "类型为必填项", trigger: "blur" }]
});
