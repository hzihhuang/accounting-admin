import { http } from "@/utils/http";
import type { BaseResult } from "./request";

type addResult = BaseResult<{
  img: string;
  name: string;
  type: "expense" | "income";
  remark: string;
  id: number;
  createdTime: string;
  updatedTime: string;
}>;

/** 增加分类 */
export const addCategory = (data: {
  img: string;
  name: string;
  type: "expense" | "income";
  remark?: string;
}) => {
  return http.request<addResult>("post", "/web/tags", { data });
};

type Result = BaseResult<{
  /** 列表数据 */
  list: {
    id: number;
    name: string;
    type: "expense" | "income";
    remark: string;
    createTime: number;
  }[];
  /** 总条目数 */
  total?: number;
  /** 每页显示条目个数 */
  pageSize?: number;
  /** 当前页数 */
  currentPage?: number;
}>;

/** 获取分类 */
export const getCategoryList = (params?: object) => {
  return http.request<Result>("get", "/web/tags", { params });
};

/** 删除单个分类 */
export const deleteCategory = (id: number) => {
  return http.request<Result>("delete", `/web/tags/${id}`);
};

/** 删除多个分类 */
export const deleteCategoryList = (ids: number[]) => {
  return http.request<Result>("post", `/web/tags/batch`, {
    data: {
      ids
    }
  });
};
