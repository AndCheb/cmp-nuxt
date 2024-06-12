<script setup>
import { ref } from 'vue';

const carNumber = ref('');
const region = ref('');
const certificate = ref('');
const notFilled = ref(false);

const checkFines = () => {
  carNumber.value = carNumber.value.trim();
  region.value = region.value.trim();
  certificate.value = certificate.value.trim();

  if (!carNumber.value || !region.value || !certificate.value) {
    notFilled.value = true;
  } else {
    alert('Ваши данные были успешно отправлены!');
    notFilled.value = false;
  }
};
</script>

<template>
  <div class="container">
    <h1>Проверьте штрафы и зарегистрируйтесь в 1 клик</h1>
    <form action="#">
      <label class="number">
        <p>Номер автомобиля</p>
        <input
          :class="{ warning: notFilled && !carNumber }"
          type="text"
          v-model="carNumber"
        />
      </label>
      <label class="region">
        <p>Регион</p>
        <input
          :class="{ warning: notFilled && !region }"
          type="text"
          v-model="region"
        />
      </label>
      <label class="registration">
        <p>Свидетельство о регистрации ТС</p>
        <input
          :class="{ warning: notFilled && !certificate }"
          type="text"
          v-model="certificate"
        />
      </label>
      <button class="button check" type="submit" @click.prevent="checkFines">
        Проверить штрафы
      </button>
      <AboutService></AboutService>
      <small
        >Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
        персональных данных и принимаете оферту</small
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '/scss/global/vars.scss';

.container {
  max-width: 563px;
}

h1 {
  padding-bottom: 25px;
  font-weight: 700;
  font-size: $Clamp-1160_41-320_24;
  line-height: 120%;
  letter-spacing: -1.5px;
}

form {
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 15px;
}

label {
  font-size: 12px;
  line-height: 120%;

  input {
    margin-top: 5px;
    padding: 5px;
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--color-quaternary);
    border-radius: 5px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 1px solid var(--color-tertiary);
    }
  }
}

small {
  font-size: 12px;
  line-height: 120%;
  color: var(--color-accent);
}

.number {
  min-width: 320px;
}

.region {
  flex-grow: 1;
}

.registration {
  width: 100%;
}

.warning {
  border-color: red;
}

.check {
  padding-right: 30px;
  min-height: 47px;
  font-size: 18px;
  background-image: url('~/assets/arrow.svg');
  background-repeat: no-repeat;
  background-position: right 10px top 19px;
  background-size: 14px 12.3px;
  border: 1px solid var(--color-tertiary);

  &:hover {
    color: var(--color-secondary);
    background-color: var(--color-quaternary);
  }
}

@media (max-width: 1015px) {
  .number {
    width: 100%;
    min-width: 250px;
  }
}

@media (max-width: 460px) {
  h1 {
    text-align: center;
  }
}
</style>
