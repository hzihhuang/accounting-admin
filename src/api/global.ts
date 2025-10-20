import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: {
    id?: number;
    name?: string;
    description?: string;
  }[];
};

/** 获取账单标签 */
export const getTags = (data?: object) => {
  return http.request<Result>("get", "/tags", { data });
};

/** 获取账单类型 */
export const getTypes = (data?: object) => {
  return http.request<Result>("get", "/types", { data });
};
