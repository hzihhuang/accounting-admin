import { getCategoryList } from "@/api/category";
import { ref } from "vue";

export const useCategory = () => {
  const loading = ref(true);
  const categoryList = ref([]);
  const handleGetCategoryList = async () => {
    if (categoryList.value.length > 0) {
      loading.value = false;
      return;
    } else {
      const res = await getCategoryList({
        pageSize: 100
      });
      if (res.data) {
        loading.value = false;
        categoryList.value = res.data.list?.map?.(i => ({
          label: `${i.name}${i.name === "理财" ? (i.type === "expense" ? "「支出」" : "「收入」") : ""}`,
          value: i.id
        }));
      }
    }
  };

  return {
    loading,
    categoryList,
    handleGetCategoryList
  };
};
