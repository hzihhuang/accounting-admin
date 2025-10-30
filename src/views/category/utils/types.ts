interface FormItemProps {
  /** 用于判断是`新增`还是`修改` */
  title: string;
  img: string;

  id: number;
  file?: File;
  name: string;
  type: "expense" | "income";
  remark: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
