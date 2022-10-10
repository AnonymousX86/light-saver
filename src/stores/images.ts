import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Ref } from "vue";

export const useImagesStore = defineStore("images", () => {
  const images = ref<String[]>([]);
  function add(src: String) {
    if (images.value.includes(src)) {
      alert("Image already exists");
      return;
    }
    images.value.push(src);
  }

  const imagesFromStorage = localStorage.getItem("images");
  if (imagesFromStorage) {
    images.value = JSON.parse(imagesFromStorage);
  }

  watch(
    images,
    (imagesValue: Ref<String[]>) => {
      localStorage.setItem("images", JSON.stringify(imagesValue));
    },
    { deep: true }
  );

  return { images, add };
});
