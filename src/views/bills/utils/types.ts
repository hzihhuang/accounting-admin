interface FormItemProps {
  id?: number;
  user?: {
    id: number;
    username: string;
    nickname: string;
    email: string;
    avatar: string;
    status: 1 | 0;
  };
  category?: {
    id: number;
    name: string;
    img: string;
    type: "expense" | "income";
  };
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
