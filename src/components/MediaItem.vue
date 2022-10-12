<script setup lang="ts">
import { useImagesStore } from "@/stores/images";

const props = defineProps<{
  imgSrc: String;
}>();

const store = useImagesStore();

async function copyLink() {
  try {
    await navigator.clipboard.writeText(props.imgSrc.toString());
  } catch (e) {
    console.log(e);
    return;
  }
  alert("Copied to clipboard!");
}

const remove = () => {
  store.remove(props.imgSrc.toString());
};
</script>

<template>
  <div class="media-item">
    <div
      :style="{ backgroundImage: 'url(' + props.imgSrc + ')' }"
      class="media-item__img"
    ></div>
    <div class="media-item__overlay">
      <div class="media-item__overlay__button">
        <a :href="props.imgSrc.toString()">Open</a>
      </div>
      <div class="media-item__overlay__button" @click="copyLink">Copy</div>
      <div class="media-item__overlay__button media-item__overlay__button--remove" @click="remove">Remove</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.media-item {
  display: flex;
  align-items: center;
  position: relative;

  &__img {
    height: calc(100vw / 3);
    width: 100%;
    border: solid 1px $gray;
    border-radius: 4px;
    background-color: $black;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__overlay {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    padding-bottom: 24px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba($black, 0.7);
    transition: all 0.3s ease-out;

    &:hover {
      opacity: 1;
    }

    &__button {
      border: solid $white 3px;
      border-radius: 500px;
      padding: 8px 20px;
      color: $white;
      opacity: 0.5;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &--remove {
        border-color: $red;
        color: $red;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
