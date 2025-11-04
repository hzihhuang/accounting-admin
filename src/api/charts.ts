import { http } from "@/utils/http";
import type { BaseResult } from "./request";

type CategoryChartDataRes = BaseResult<
  {
    category: string;
    income: number;
    expense: number;
  }[]
>;

type TrendChartDataRes = BaseResult<
  {
    date: string;
    income: number;
    expense: number;
  }[]
>;

/** 分类占比（金额） */
export const getCategoryChartData = (params?: any) => {
  return http.request<CategoryChartDataRes>("get", "/admin/charts/category", {
    params
  });
};

export const getTrendChartData = (params?: any) => {
  return http.request<TrendChartDataRes>("get", "/admin/charts/trend", {
    params
  });
};
