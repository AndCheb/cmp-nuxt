<script setup>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const sliderData = [
  {
    title: 'Лицензионный договор',
    text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.',
    link: '/license',
  },
  {
    title: 'Политика обработки персональных данных',
    text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
    link: '/data-processing',
  },
  {
    title: 'Информация об оплате',
    text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
    link: '/payment-information',
  },
  {
    title: 'Политика обработки персональных данных',
    text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
    link: '/data-processing',
  },
];
</script>

<template>
  <carousel
    :itemsToShow="3"
    :breakpoints="{
      300: { itemsToShow: 1.1, wrapAround: true, snapAlign: 'right' },
      470: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center',
      },
      1024: { itemsToShow: 3 },
    }"
  >
    <slide class="slide" v-for="slide in sliderData" :key="slide">
      <div class="slide-container">
        <h2 class="slide-title">{{ slide.title }}</h2>
        <p class="slide-text">{{ slide.text }}</p>
        <a href="#"
          ><nuxt-link class="button slide-link" :to="slide.link"
            >Перейти</nuxt-link
          ></a
        >
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style lang="scss" scoped>
@import '~/scss/global/vars.scss';

.slide-container {
  display: flex;
  flex-direction: column;
  padding: $Clamp-1160_25-320_05;
  min-height: 100%;
  border: 1px solid #eeeff1;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
}

.slide-title {
  margin-bottom: 15px;
  font-size: $Clamp-1160_27-320_18;
  line-height: 140%;
  text-align: left;
  letter-spacing: 0.4px;
  color: var(--color-text-accent);
}

.slide-text {
  flex-grow: 1;
  font-size: $Clamp-1160_16-320_13;
  text-align: left;
}

.slide-link {
  display: block;
  border: 1px solid var(--color-tertiary);
}

@media (max-width: 380px) {
  .slide-title {
    text-align: center;
  }
}
</style>
