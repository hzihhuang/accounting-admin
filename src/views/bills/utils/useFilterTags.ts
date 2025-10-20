import { ref } from "vue";
import { getTags } from "@/api/global";

export const useFilterTags = () => {
  const loading = ref(true);
  const tags = ref([]);
  const curTag = ref([]);
  const handleGetTags = async () => {
    if (tags.value.length > 0) {
      loading.value = false;
      return;
    } else {
      const apiTags = await getTags();
      if (apiTags.data) {
        loading.value = false;
        tags.value = apiTags.data?.map?.(i => ({
          label: i.name,
          value: i.id
        }));
      }
    }
  };

  return {
    filterTagLoading: loading,
    filterTagList: tags,
    handleGetTags,
    curTag
  };
};
