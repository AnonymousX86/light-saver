<template>
  <div class="about">
    <h1>What is Light Saver?</h1>
    <div class="about__content">
      <section>
        <h3>Quick answer</h3>
        <p>
          No, this app doesn't remind you to put the light off. (But you should
          save the energy anyway.) It's a lightweight web app to save media (for
          now only images) as links, not the files itself.
        </p>
      </section>
      <section>
        <h3>Links</h3>
        <div class="about__content__links">
          <a href="https://github.com/AnonymousX86/light-saver">GitHub</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.about {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__content {
    display: flex;
    gap: 30px;

    section {
      flex: 1;

      h3 {
        margin-bottom: 12px;
      }
    }

    &__links {
      display: flex;
      gap: 12px;

      &::before {
        content: "[";
      }

      &::after {
        content: "]";
      }

      a {
        color: $darkBlue;
      }
    }
  }
}
</style>
