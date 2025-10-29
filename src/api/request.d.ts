export interface BaseResult<T = any> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
