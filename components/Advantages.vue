<template>
  <section>
    <div class="container">
      <h2 class="title">
        Плюсы использования сервиса «Компас» для анализа штрафов
      </h2>
      <ul class="list">
        <li class="item">
          <h3 class="headline">Неограниченый автопарк</h3>
          <p class="text">
            Можно добавить неограниченное количество машин и водителей
          </p>
        </li>
        <li class="item">
          <h3 class="headline">Сокращение затрат до 50%</h3>
          <p class="text">
            Максимально быстро узнаете о штрафах в автоматическом режиме, тем
            самым у вас есть время оплатить по скидке
          </p>
        </li>
        <li class="item">
          <h3 class="headline">Безопасность</h3>
          <p class="text">
            Данные передаются в зашифрованном виде, они доступны только
            получателю
          </p>
        </li>
        <li class="item">
          <h3 class="headline">Уведомление о погашении</h3>
          <p class="text">
            Мы оповестим вас о том, что штраф был погашен и соответствующая
            запись создана в ГИС ГМП
          </p>
        </li>
        <li class="item">
          <h3 class="headline">Квитанция об оплате</h3>
          <p class="text">
            После совершения оплаты банковской картой на Вашу электронную почту
            придет квитанция об успешной оплате.
          </p>
        </li>
        <li class="item">
          <h3 class="headline">Все история сохраняется по каждой машине</h3>
          <p class="text">
            Вся история штрафов сохраняется по машине и водителю, позволяет
            анализировать статистику по штрафам
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '/scss/global/vars.scss';

.container {
  padding-bottom: 85px;
}

.title {
  margin-bottom: 40px;
  font-size: $Clamp-1160_34-320_20;
  line-height: 120%;
  text-align: center;
  letter-spacing: -1.5px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 35px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 20px;
  padding-left: 95px;
  max-width: 362px;
  min-height: 127px;

  background-color: var(--color-card);

  background-repeat: no-repeat;
  background-position: 20px center;

  border: 1px solid #eeeff1;
  border-radius: 10px;
}

.item:nth-child(1) {
  background-image: url('~/assets/icon-1.svg');
}

.item:nth-child(2) {
  background-image: url('~/assets/icon-2.svg');
}

.item:nth-child(3) {
  background-image: url('~/assets/icon-3.svg');
}

.item:nth-child(4) {
  background-image: url('~/assets/icon-4.svg');
}

.item:nth-child(5) {
  background-image: url('~/assets/icon-5.svg');
}

.item:nth-child(6) {
  background-image: url('~/assets/icon-6.svg');
}

.headline {
  margin-bottom: 10px;
  font-size: 18px;
  color: var(--color-text-accent);
}

.text {
  font-size: 14px;
  line-height: 1.15;
}

@media (max-width: 1210px) {
  .list {
    justify-content: space-evenly;
    gap: 25px;
  }
}

@media (max-width: 815px) {
  .list {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
  }

  .item {
    padding: 10px;
    padding-top: 95px;
    min-width: 250px;
    min-height: 100px;
    text-align: center;
    background-position: center 15px;

    &:nth-child(1) {
      background-position: center 40px;
    }
  }
}

@media (max-width: 400px) {
  .item {
    min-width: 200px;
  }

  .headline {
    font-size: 14px;
  }

  .text {
    font-size: 13px;
  }
}
</style>
