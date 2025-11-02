interface FormItemProps {
  id?: number;
  /** 用于判断是`新增`还是`修改` */
  img: string;
  title: string;

  username: string;
  password: string;
  file?: File;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
