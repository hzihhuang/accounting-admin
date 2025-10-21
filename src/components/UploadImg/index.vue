<script lang="ts" setup>
import { ref } from "vue";

const file = defineModel<File | undefined>();
const {
  url = "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
} = defineProps<{ url?: string }>();

const urlRef = ref(url);
const uploadFile = async options => {
  try {
    const uploadFile = options.file;
    file.value = uploadFile;
    urlRef.value = URL.createObjectURL(uploadFile);
    options.onSuccess();
  } catch (err) {
    options.onError(err);
  }
};
</script>

<template>
  <el-upload
    class="avatar-uploader"
    :http-request="uploadFile"
    :show-file-list="false"
  >
    <el-avatar :size="136" shape="square" :src="urlRef" />
  </el-upload>
</template>
