import type { BaseResult } from "./request";
import { http } from "@/utils/http";

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
export const getBillList = (params?: object) => {
  return http.request<ResultTable>("get", "/admin/bills", { params });
};

/** 删除 */
export const deleteBill = (id: number) => {
  return http.request<BaseResult>("delete", `/admin/bills/${id}`);
};

/** 批量删除 */
export const deleteBatchBill = (ids: Array<number>) => {
  return http.request<BaseResult>("post", "/admin/bills/batch", {
    data: { ids }
  });
};

/** 新增 */
export const addBill = (data: object) => {
  return http.request<BaseResult>("post", "/admin/bills", { data });
};

/** 修改 */
export const updateBill = (id: number, data: object) => {
  return http.request<BaseResult>("put", `/admin/bills/${id}`, { data });
};
