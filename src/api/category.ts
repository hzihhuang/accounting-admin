import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: {
      id: number;
      name: string;
      type: "expenses" | "income";
      remark: string;
      createTime: number;
    }[];
    /** 总条目数 */
    total?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
};

/** 获取账单标签 */
export const getCategoryList = (data?: object) => {
  return http.request<Result>("get", "/category", { data });
};
