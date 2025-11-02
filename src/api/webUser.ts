import { http } from "@/utils/http";
import type { BaseResult } from "./request";

export type UserResult = BaseResult<{
  list: {
    id: number;
    username: string;
    nickname: string;
    email: string;
    avatar: string;
    status: 1 | 0;
  }[];
}>;

/** 用户列表 */
export const getWebUserList = (params?: object) => {
  return http.request<UserResult>("get", "/admin/web-user", { params });
};

// 更新用户状态
export const updateWebUserStatus = (id: number, status: 1 | 0) => {
  return http.request<BaseResult>("patch", `/admin/web-user/${id}`, {
    data: { status }
  });
};

// 新增用户
export const addWebUser = (data: object) => {
  return http.request<
    BaseResult<{
      id: number;
    }>
  >("post", "/admin/web-user", { data });
};

// 删除用户
export const deleteWebUser = (id: number) => {
  return http.request<BaseResult>("delete", `/admin/web-user/${id}`);
};
