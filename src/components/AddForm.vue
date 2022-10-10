<script setup lang="ts">
import { ref } from "vue";
import { useImagesStore } from "@/stores/images";

const store = useImagesStore();

const inputText = ref("");

const addImage = () => {
  if (!inputText.value.length) return;
  store.add(inputText.value);
  inputText.value = "";
};
</script>

<template>
  <div class="add-form">
    <h3>Add new media</h3>
    <form action="" method="get" class="add-form__interactions">
      <input
        type="text"
        class="add-form__interactions__input"
        v-model="inputText"
        placeholder="https://..."
      />
      <button
        type="button"
        class="add-form__interactions__button add-form__interactions__clear"
      >
        Clear
      </button>
      <button
        type="submit"
        class="add-form__interactions__button add-form__interactions__add"
        @click.prevent="addImage"
      >
        Add
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.add-form {
  &__interactions {
    display: flex;
    gap: 12px;

    &__input,
    &__button {
      padding: 6px 12px;
      border: solid $gray 1px;
      border-radius: 4px;
    }

    &__button {
      background-color: $blue;
      color: $white;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: $darkBlue;
      }
    }

    &__clear {
      background-color: $red;

      &:hover {
        background-color: $darkRed;
      }
    }
  }
}
</style>
