interface FormItemProps {
  id?: number;
  userId?: number;
  categoryId?: number;
  price?: number;
  date?: string;
  remark?: string;
  /** 用于判断是`新增`还是`修改` */
  title: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
