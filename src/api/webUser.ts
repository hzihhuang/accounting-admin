import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    list: {
      id: number;
      username: string;
      nickname: string;
      email: string;
      avatar: string;
      status: 1 | 0;
    }[];
  };
};

/** 登录 */
export const getWebUserList = (params?: object) => {
  return http.request<UserResult>("get", "/admin/web-user", { params });
};
