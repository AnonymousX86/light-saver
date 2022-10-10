<script setup lang="ts">
import MediaCarousel from "@/components/MediaCarousel.vue";
import AddForm from "@/components/AddForm.vue";
</script>

<template>
  <div class="home">
    <h1>Light Saver</h1>

    <AddForm />

    <MediaCarousel />
  </div>
</template>

<style scoped lang="scss">
.home {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
