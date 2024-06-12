<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const burgerToggle = () => {
  isOpen.value = !isOpen.value;
  document.body.classList.toggle('scroll-none');
};
</script>

<template>
  <div class="menu">
    <nav class="menu__nav" :class="{ 'menu__nav--open': isOpen }">
      <ul class="menu__list">
        <li class="menu__item">
          <nuxt-link
            class="menu__link"
            to="/rates"
            @click="isOpen ? burgerToggle() : ''"
            >Тарифы</nuxt-link
          >
        </li>
        <li class="menu__item">
          <nuxt-link
            class="menu__link"
            to="/contacts"
            @click="isOpen ? burgerToggle() : ''"
            >Контакты</nuxt-link
          >
        </li>
        <li class="menu__item menu__item--bold">
          <a class="menu__link" href="tel:+74951184422">+7 495 118-44-22</a>
        </li>
        <li class="menu__item">
          <button class="menu__enter" type="button">Вход</button>
        </li>
        <li class="menu__item">
          <button class="button" type="button">Регистрация</button>
        </li>
      </ul>
    </nav>

    <button
      class="menu__button"
      :class="{ 'menu__button--active': isOpen }"
      type="button"
      aria-label="toggle burger menu"
      @click="burgerToggle"
    >
      <span class="menu__icon"></span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  flex-grow: 1;

  &__nav {
    width: 100%;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 30px;
  }

  &__link,
  &__enter {
    color: var(--color-secondary);
  }

  &__enter {
    font-size: 18px;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-tertiary);
    }
  }

  &__item--bold {
    margin-left: auto;
    font-weight: 700;
  }
}

.menu__button {
  position: relative;
  display: none;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  margin-left: auto;
  width: 30px;
  height: 18px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

.menu__icon {
  width: 80%;
  height: 2px;
  transform: scale(1);
  background-color: #fff;
}

.menu__button.menu__button--active .menu__icon {
  transform: scale(0);
}

.menu__button.menu__button--active::before {
  top: 50%;
  transform: rotate(-45deg) translateY(-50%);
}

.menu__button.menu__button--active::after {
  bottom: 50%;
  transform: rotate(45deg) translateY(50%);
}

@keyframes burgerAnimation {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 765px) {
  .menu__button {
    display: flex;
  }

  .menu__nav {
    position: fixed;
    inset: 0;
    z-index: 1;
    display: none;
    flex-direction: column;
    justify-content: start;
    padding: 50px 40px;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #000 30%, #1c2734 73%);
    overflow-y: auto;
    animation: burgerAnimation 0.4s;
    box-sizing: border-box;
  }

  .menu__nav--open {
    display: flex;
  }

  .menu__list {
    flex-direction: column;
    row-gap: 50px;
  }

  .menu__item--bold {
    margin: auto;
  }
}
</style>
