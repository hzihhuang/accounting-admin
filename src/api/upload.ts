// upload.api.ts
import { http } from "@/utils/http";

export interface UploadResult {
  code: number;
  success: boolean;
  message: string;
  data: {
    url: string;
    filename: string;
  };
}

export interface UploadOptions {
  folder?: string; // 文件夹参数
  category?: string;
}

// 上传图片
export const uploadImage = (file: File, options?: UploadOptions) => {
  const formData = new FormData();
  formData.append("file", file); // 字段名必须是 'file'

  // 添加文件夹参数
  if (options?.folder) {
    formData.append("folder", options.folder);
  }

  return http.request<UploadResult>("post", "/upload/image", {
    data: formData
  });
};
