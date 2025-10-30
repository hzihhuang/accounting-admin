import "./reset.css";
import dayjs from "dayjs";
import editForm from "../form/index.vue";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";
import type { PaginationProps } from "@pureadmin/table";
import type { FormItemProps } from "./types";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import {
  getCategoryList,
  deleteCategory,
  deleteCategoryList,
  addCategory,
  updateCategory
} from "@/api/category";
import { uploadImage } from "@/api/upload";
import { type Ref, h, ref, toRaw, reactive, onMounted } from "vue";

export function useTags(tableRef: Ref, form) {
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
      label: "分类ID",
      prop: "id",
      width: 90
    },
    {
      label: "分类图标",
      prop: "img",
      cellRenderer: ({ row }) => (
        <el-image
          fit="cover"
          preview-teleported={true}
          src={row.img}
          preview-src-list={Array.of(row.img)}
          class="w-[24px] h-[24px] align-middle"
        />
      ),
      width: 90
    },
    {
      label: "分类名称",
      prop: "name",
      minWidth: 130
    },
    {
      label: "类型",
      prop: "type",
      minWidth: 130,
      formatter: ({ type }) => (type === "income" ? "收入" : "支出")
    },
    {
      label: "备注",
      prop: "remark",
      minWidth: 130
    },
    {
      label: "创建时间",
      minWidth: 90,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation"
    }
  ];

  function handleDelete(row) {
    deleteCategory(row.id).then(() => {
      message(`删除「${row.name}」成功`, { type: "success" });
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
    deleteCategoryList(getKeyList(curSelected, "id")).then(() => {
      message(`删除成功 「${getKeyList(curSelected, "name")}」 的数据`, {
        type: "success"
      });
      tableRef.value.getTableRef().clearSelection();
      onSearch();
    });
  }

  async function onSearch() {
    loading.value = true;
    const { data } = await getCategoryList(toRaw(form));
    dataList.value = data.list;
    pagination.total = data.total;
    pagination.pageSize = data.pageSize;
    pagination.currentPage = data.currentPage;

    setTimeout(() => {
      loading.value = false;
    }, 500);
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
          file: row?.img ?? "",
          img:
            row?.img ??
            "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          name: row?.name ?? "",
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
        const curData = options.props.formInline as FormItemProps;
        FormRef.validate(async valid => {
          if (valid) {
            if (title === "新增") {
              // 1、上传图标
              const uploadRes = await uploadImage(curData.file, {
                folder: "category"
              });
              if (uploadRes.code !== 200) return;
              const data = {
                img: uploadRes.data.url,
                name: curData.name,
                type: curData.type,
                remark: curData.remark
              };
              // 2、增加标签
              const res = await addCategory(data);
              if (res.code !== 200) return;
              message(`${title}「${res.data.name}}」成功`, {
                type: "success"
              });
            } else {
              let img = curData.file as unknown as string;
              if (typeof img !== "string") {
                // 修改了图标，需要重新上传。
                const { data } = await uploadImage(curData.file, {
                  folder: "category"
                });
                img = data.url;
              }
              const data = {
                img,
                name: curData.name,
                remark: curData.remark
              };
              const res = await updateCategory(row.id, data);
              if (res.code !== 200) return;
              message(`${title}「${res.data.name}}」成功`, {
                type: "success"
              });
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
