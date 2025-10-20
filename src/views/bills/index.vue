<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useBill } from "./utils/hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import CategorySelect from "@/components/CategorySelect/index.vue";
import TypeSelect from "@/components/TypeSelect/index.vue";

import Delete from "~icons/ep/delete";
import EditPen from "~icons/ep/edit-pen";
import Refresh from "~icons/ep/refresh";
import AddFill from "~icons/ri/add-circle-line";

import dayjs from "dayjs";

defineOptions({
  name: "SystemUser"
});

const formRef = ref();
const tableRef = ref();

const form = reactive({
  nickname: "",
  categoryId: "",
  typeId: "",
  minPrice: "",
  maxPrice: "",
  date: [dayjs().startOf("month").toDate(), dayjs().endOf("month").toDate()]
});

const {
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
} = useBill(tableRef, form);
</script>

<template>
  <div :class="['flex', 'justify-between', deviceDetection() && 'flex-wrap']">
    <div class="w-full mt-2">
      <el-form
        ref="formRef"
        :inline="true"
        :model="form"
        class="search-form bg-bg_color w-full pl-8 pt-[12px] overflow-auto"
      >
        <el-form-item label="用户名称：" prop="nickname">
          <el-input
            v-model="form.nickname"
            placeholder="输入用户名称"
            clearable
            class="w-[180px]!"
          />
        </el-form-item>
        <el-form-item label="标签" prop="categoryId">
          <CategorySelect v-model="form.categoryId" />
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <TypeSelect v-model="form.typeId" />
        </el-form-item>
        <el-form-item label="最低价" prop="minPrice">
          <el-input
            v-model="form.minPrice"
            class="w-40"
            placeholder="最低价"
            clearable
            style="width: 110px"
          />
        </el-form-item>
        <el-form-item label="最高价" prop="maxPrice">
          <el-input
            v-model="form.maxPrice"
            placeholder="最高价"
            clearable
            style="width: 110px"
          />
        </el-form-item>
        <el-form-item label="日期范围" prop="date">
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="到"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :icon="useRenderIcon('ri/search-line')"
            :loading="loading"
            @click="onSearch"
          >
            搜索
          </el-button>
          <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
            重置
          </el-button>
        </el-form-item>
      </el-form>

      <PureTableBar title="用户管理" :columns="columns" @refresh="onSearch">
        <template #buttons>
          <el-button
            type="primary"
            :icon="useRenderIcon(AddFill)"
            @click="openDialog()"
          >
            新增账单
          </el-button>
        </template>
        <template v-slot="{ size, dynamicColumns }">
          <div
            v-if="selectedNum > 0"
            v-motion-fade
            class="bg-[var(--el-fill-color-light)] w-full h-[46px] mb-2 pl-4 flex items-center"
          >
            <div class="flex-auto">
              <span
                style="font-size: var(--el-font-size-base)"
                class="text-[rgba(42,46,54,0.5)] dark:text-[rgba(220,220,242,0.5)]"
              >
                已选 {{ selectedNum }} 项
              </span>
              <el-button type="primary" text @click="onSelectionCancel">
                取消选择
              </el-button>
            </div>
            <el-popconfirm title="是否确认删除?" @confirm="onbatchDel">
              <template #reference>
                <el-button type="danger" text class="mr-1!">
                  批量删除
                </el-button>
              </template>
            </el-popconfirm>
          </div>
          <pure-table
            ref="tableRef"
            row-key="id"
            adaptive
            :adaptiveConfig="{ offsetBottom: 108 }"
            align-whole="center"
            table-layout="auto"
            :loading="loading"
            :size="size"
            :data="dataList"
            :columns="dynamicColumns"
            :pagination="{ ...pagination, size }"
            :header-cell-style="{
              background: 'var(--el-fill-color-light)',
              color: 'var(--el-text-color-primary)'
            }"
            @selection-change="handleSelectionChange"
            @page-size-change="handleSizeChange"
            @page-current-change="handleCurrentChange"
          >
            <template #operation="{ row }">
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(EditPen)"
                @click="openDialog('修改', row)"
              >
                修改
              </el-button>
              <el-popconfirm
                :title="`是否确认删除用户ID为${row.id}的这条数据`"
                @confirm="handleDelete(row)"
              >
                <template #reference>
                  <el-button
                    class="reset-margin"
                    link
                    type="primary"
                    :size="size"
                    :icon="useRenderIcon(Delete)"
                  >
                    删除
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </pure-table>
        </template>
      </PureTableBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

:deep(.el-button:focus-visible) {
  outline: none;
}

.main-content {
  margin: 24px 24px 0 !important;
}

.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}
</style>
