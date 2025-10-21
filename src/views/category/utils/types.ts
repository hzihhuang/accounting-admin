interface FormItemProps {
  title: string;
  file?: File;
  /** 用于判断是`新增`还是`修改` */
  name: string;
  typeId: string;
  remark: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
