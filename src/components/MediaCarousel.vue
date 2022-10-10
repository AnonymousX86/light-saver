<script setup lang="ts">
import { useImagesStore } from "@/stores/images";
import MediaItem from "@/components/MediaItem.vue";

const store = useImagesStore();
</script>

<template>
  <div class="media-carousel">
    <h3>Saved media</h3>
    <p v-if="!store.images.length">No images saved yet</p>
    <div v-else class="media-carousel__items">
      <MediaItem
        v-for="(image, index) in store.images"
        :key="index"
        :img-src="image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.media-carousel {
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
</style>
