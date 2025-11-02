import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
  userId: [{ required: true, message: "用户为必填项", trigger: "blur" }],
  categoryId: [
    { required: true, message: "分类名称为必填项", trigger: "blur" }
  ],
  price: [{ required: true, message: "价格为必填项", trigger: "blur" }],
  date: [{ required: true, message: "日期为必填项", trigger: "blur" }]
});
