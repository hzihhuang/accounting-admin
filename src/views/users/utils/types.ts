interface FormItemProps {
  id?: number;
  /** 用于判断是`新增`还是`修改` */
  title: string;
  nickname: string;
  username: string;
  password: string;
  status: number;
  remark: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
