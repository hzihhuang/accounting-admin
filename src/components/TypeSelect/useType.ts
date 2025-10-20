import { getTypeList } from "@/api/global";
import { ref } from "vue";

export const useType = () => {
  const loading = ref(true);
  const typeList = ref([]);
  const handleGetTypeList = async () => {
    if (typeList.value.length > 0) {
      loading.value = false;
      return;
    } else {
      const res = await getTypeList();
      if (res.data) {
        loading.value = false;
        typeList.value = res.data.list?.map?.(i => ({
          label: i.name === "expenses" ? "支出" : "收入",
          value: i.id
        }));
      }
    }
  };

  return {
    loading,
    typeList,
    handleGetTypeList
  };
};
