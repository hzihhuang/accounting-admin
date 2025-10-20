import { ref } from "vue";
import { getTypes } from "@/api/global";

export const useFilterTypes = () => {
  const loading = ref(true);
  const types = ref([]);
  const curType = ref([]);
  const handleGetTypes = async () => {
    if (types.value.length > 0) {
      loading.value = false;
      return;
    } else {
      const apiTags = await getTypes();
      if (apiTags.data) {
        loading.value = false;
        types.value = apiTags.data?.map?.(i => ({
          label: i.name,
          value: i.id
        }));
      }
    }
  };

  return {
    filterTypeLoading: loading,
    filterTypeList: types,
    handleGetTypes,
    curType
  };
};
