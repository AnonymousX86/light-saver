import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref, watch } from "vue";

export const useImagesStore = defineStore("images", () => {
  const images = ref<String[]>([]);
  function add(src: String) {
    if (images.value.includes(src)) {
      alert("Image already exists");
      return;
    }
    images.value.push(src);
  }

  function remove(src: String) {
    if (!images.value.includes(src)) {
      alert("Image doesn't exists");
      return;
    }
    const imagesCopy = images.value.slice();
    images.value = imagesCopy.filter((x) => {
      return x !== src;
    });
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

  return { images, add, remove };
});
