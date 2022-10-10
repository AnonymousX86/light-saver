<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="nav__wrapper">
      <nav class="nav">
        <RouterLink class="nav__link" to="/">Home</RouterLink>
        <RouterLink class="nav__link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.nav {
  display: flex;
  gap: 12px;

  &__wrapper {
    background-color: $blue;
    padding: 12px;
  }

  &__link {
    color: $white;
    text-decoration: none;
    font-size: 1.2rem;
    opacity: 0.7;
  }

  .router-link-exact-active {
    opacity: 1;
  }
}
</style>
