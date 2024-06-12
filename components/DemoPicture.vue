<template>
  <div class="image-wrapper">
    <img src="~/assets/layout.png" alt="layout" width="532" height="335" />
  </div>
</template>

<style scoped>
.image-wrapper {
  max-width: 532px;
  min-width: 400px;
}

img {
  width: 100%;
  height: auto;
}

@media (max-width: 465px) {
  img {
    display: none;
  }
}
</style>
