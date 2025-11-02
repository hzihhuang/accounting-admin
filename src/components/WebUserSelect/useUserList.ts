import { getWebUserList } from "@/api/webUser";
import { ElMessage } from "element-plus";
import { ref } from "vue";

export const useUserList = () => {
  const loading = ref(true);
  const userOptions = ref([]);
  const searchUsers = async query => {
    loading.value = true;
    try {
      const { data } = await getWebUserList({ keyword: query });
      userOptions.value = data.list;
    } catch (error) {
      ElMessage.error("搜索用户失败", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    userOptions,
    searchUsers
  };
};
