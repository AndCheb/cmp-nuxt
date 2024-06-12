<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__container">
        <nuxt-link class="header__logo" to="/">
          <img src="~/assets/logo.svg" alt="Logotype" width="119" height="26" />
        </nuxt-link>
        <BurgerMenu></BurgerMenu>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding-block: 12px;
  min-height: 60px;
  color: var(--color-secondary);
  background: linear-gradient(90deg, #000 30%, #1c2734 73%);

  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 24px;
  }

  &__logo {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 765px) {
  .header {
    min-height: 0;
  }
}
</style>
