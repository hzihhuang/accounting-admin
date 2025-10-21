interface FormItemProps {
  id?: number;
  /** 用于判断是`新增`还是`修改` */
  title: string;
  nickname: string;
  password: string;
  status: number;
  remark: string;
  file?: File;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
