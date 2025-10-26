import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    token: string;
    user: {
      id: number;
      username: string;
      nickname: string;
      avatarUrl: string;
      status: number;
      createdAt: string;
      updatedAt: string;
    };
    permissions: string[];
    roles: string[];
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    token: string;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/admin/user/login", { data });
};

/** 刷新`token` */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/admin/user/refresh-token", {
    data
  });
};
