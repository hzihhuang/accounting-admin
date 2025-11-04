import "./reset.css";
import dayjs from "dayjs";
import editForm from "../form/index.vue";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";
import type { PaginationProps } from "@pureadmin/table";
import type { FormItemProps } from "./types";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import {
  addBill,
  deleteBatchBill,
  deleteBill,
  getBillList,
  updateBill
} from "@/api/bills";
import { type Ref, h, ref, reactive, onMounted } from "vue";

export function useBill(tableRef: Ref, form) {
  const formRef = ref();
  const dataList = ref([]);
  const loading = ref(true);
  // 上传头像信息
  const selectedNum = ref(0);
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });

  const columns: TableColumnList = [
    {
      label: "勾选列", // 如果需要表格多选，此处label必须设置
      type: "selection",
      fixed: "left",
      reserveSelection: true // 数据刷新后保留选项
    },
    {
      label: "账单ID",
      prop: "id",
      width: 90
    },
    {
      label: "用户昵称",
      prop: "nickname",
      minWidth: 130,
      formatter: ({ user }) => user.nickname || user.username
    },
    {
      label: "分类图标",
      prop: "categoryImg",
      cellRenderer: ({ row }) => (
        <el-image
          fit="cover"
          preview-teleported={true}
          src={row?.category?.img}
          preview-src-list={Array.of(row?.category?.img)}
          class="w-[24px] h-[24px] align-middle"
        />
      ),
      width: 90
    },
    {
      label: "分类名称",
      prop: "category",
      formatter: ({ category }) => category?.name ?? "分类已删除",
      minWidth: 130
    },
    {
      label: "类型",
      prop: "type",
      formatter: ({ category }) =>
        category.type === "expense" ? "支出" : "收入",
      minWidth: 130
    },
    {
      label: "金额",
      prop: "price",
      minWidth: 130
    },
    {
      label: "备注",
      prop: "remark",
      minWidth: 130
    },
    {
      label: "日期",
      minWidth: 90,
      prop: "date",
      formatter: ({ date }) => {
        return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
      }
    },
    {
      label: "创建时间",
      minWidth: 90,
      prop: "createdAt",
      formatter: ({ createdAt }) =>
        dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation"
    }
  ];

  function handleDelete(row) {
    deleteBill(row.id).then(() => {
      message(`删除「${row.id}」成功`, { type: "success" });
      onSearch();
    });
  }

  function handleSizeChange(val: number) {
    form.pageSize = val;
    onSearch();
  }

  function handleCurrentChange(val: number) {
    form.page = val;
    onSearch();
  }

  /** 当CheckBox选择项发生变化时会触发该事件 */
  function handleSelectionChange(val) {
    selectedNum.value = val.length;
    // 重置表格高度
    tableRef.value.setAdaptive();
  }

  /** 取消选择 */
  function onSelectionCancel() {
    selectedNum.value = 0;
    // 用于多选表格，清空用户的选择
    tableRef.value.getTableRef().clearSelection();
  }

  /** 批量删除 */
  function onbatchDel() {
    // 返回当前选中的行
    const curSelected = tableRef.value.getTableRef().getSelectionRows();
    deleteBatchBill(getKeyList(curSelected, "id")).then(res => {
      if (res.success) {
        message(`已删除用户ID为 ${getKeyList(curSelected, "id")} 的数据`, {
          type: "success"
        });
        tableRef.value.getTableRef().clearSelection();
        onSearch();
      }
    });
  }

  async function onSearch() {
    loading.value = true;
    const params = {
      ...form,
      startDate: form.date?.[0]
        ? dayjs(form.date[0]).format("YYYY-MM-DD")
        : undefined,
      endDate: form.date?.[1]
        ? dayjs(form.date[1]).format("YYYY-MM-DD")
        : undefined
    };
    delete params.date;
    try {
      const { data } = await getBillList(params);
      dataList.value = data.list;
      pagination.total = data.total;
      pagination.pageSize = data.pageSize;
      pagination.currentPage = data.currentPage;
      loading.value = false;
    } catch (error) {
      console.log(error);
      loading.value = false;
    }
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  function openDialog(title = "新增", row?: FormItemProps) {
    addDialog({
      title: `${title}账单`,
      props: {
        formInline: {
          title,

          userId: row?.user?.id,
          nickname: row?.user?.nickname,
          categoryId: row?.category?.id,
          categoryName: row?.category?.name,
          price: row?.price,
          date: row?.date ?? dayjs().format("YYYY-MM-DD"),
          remark: row?.remark ?? ""
        }
      },
      width: "46%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as any;
        FormRef.validate(async valid => {
          if (valid) {
            const data = {
              userId: curData.userId,
              categoryId: curData.categoryId,
              price: curData.price,
              date: curData.date,
              remark: curData.remark
            };

            if (title === "新增") {
              const res = await addBill(data);
              if (res.success) {
                message(`新增成功`, {
                  type: "success"
                });
              }
            } else {
              const res = await updateBill(row.id, data);
              if (res.success) {
                message(`修改成功`, {
                  type: "success"
                });
              }
            }
            done(); // 关闭弹框
            onSearch(); // 刷新表格数据
          }
        });
      }
    });
  }

  onMounted(async () => {
    onSearch();
  });

  return {
    loading,
    columns,
    dataList,
    selectedNum,
    pagination,
    deviceDetection,
    onSearch,
    resetForm,
    onbatchDel,
    openDialog,
    handleDelete,
    handleSizeChange,
    onSelectionCancel,
    handleCurrentChange,
    handleSelectionChange
  };
}
