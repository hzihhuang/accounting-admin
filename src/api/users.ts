import { http } from "@/utils/http";
import type { BaseResult } from "./request";

type ResultTable = BaseResult<{
  /** 列表数据 */
  list: Array<any>;
  /** 总条目数 */
  total?: number;
  /** 每页显示条目个数 */
  pageSize?: number;
  /** 当前页数 */
  currentPage?: number;
}>;

/** 获取系统管理-用户管理列表 */
export const getUserList = (params?: object) => {
  return http.request<ResultTable>("get", "/admin/web-user", { params });
};
