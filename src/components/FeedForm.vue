<template>
  <div class="container-fluid" style="background-color: white; padding: 0;margin: 0;">
    <div class="feeedForm">
      <div class="content container-xxl">
        <div class="top">
          <h2>
            ЧТО ЕЩЁ ВЫ ПОЛУЧИТЕ РАБОТАЯ С НАМИ?
          </h2>
          <p>
            Свои поставки химии и оборудования для очистки промышленной и питьевой воды с 2007 года и своя складская программа.
            Поставляем напрямую из Китая, Индии и России.
            Поставили сотни работающих систем от Санкт-Петербурга до Барнаула.
          </p>
        </div>

        <div class="middle">
          <div class="card">
            <img src="../assets/formCard/01.png" height="60" width="60"/>
            <div class="divider"></div>
            <h3>ПРОВЕРЕННЫЕ БРЕНДЫ</h3>
            <p>Выбор основан на опыте поставок с 2007г.</p>
          </div>

          <div class="current card">
            <img src="../assets/formCard/02.png" height="60" width="60"/>
            <div class="divider"></div>
            <h3>ЦЕНЫ НИЖЕ РЫНОЧНЫХ</h3>
            <p>Прямые поставки без посредников</p>
          </div>

          <div class="card">
            <img src="../assets/formCard/03.png" height="60" width="60"/>
            <div class="divider"></div>
            <h3>ОТГРУЗКА В ДЕНЬ ЗАЯВКИ</h3>
            <p>Отлаженная логистическая сеть</p>
          </div>

          <div class="card">
            <img src="../assets/formCard/04.png" height="60" width="60"/>
            <div class="divider"></div>
            <h3>НАЛИЧИЕ</h3>
            <p>Вся продукция всегда на складе</p>
          </div>

          <div class="card">
            <img src="../assets/formCard/05.png" height="60" width="60"/>
            <div class="divider"></div>
            <h3>ОПТИМАЛЬНЫЙ КОМПЛЕКТ</h3>
            <p>Более 14-ти лет помогаем собирать системы очистки</p>
          </div>

          <div class="card">
            <img src="../assets/formCard/06.png" height="60" width="60"/>
            <div class="divider"></div>
            <h3>ГАРАНТИЯ</h3>
            <p>При заказе оборудования гарантия 1 год.</p>
          </div>
        </div>

        <div class="bottom">
          <h1>
            БЕСПЛАТНО ПОДБЕРЁМ ОБОРУДОВАНИЕ ДЛЯ ВАШЕГО ДОМА ИЛИ КВАРТИРЫ
          </h1>
          <button type="button" class="btn btn-light" style="color: rgba(20, 114, 208, 1); padding: 14px 33px; font-weight: 700;">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>


</script>
<style scoped lang="scss">
.feeedForm {
  display: grid;
  gap: 30px;
  text-align: left;
  padding: 90px 30px 240px 30px;
  background-color: rgba(20, 114, 208, 1);
  border-radius: 80px;
  background-repeat: no-repeat;
  background-image: url("./../assets/slide/bgFeed.png");
  background-position: bottom center;
  //background-size: ;

  @media (max-width: 1000px){
    padding: 55px 10px 75px 10px;
    border-radius: 20px;
  }

  .content {

    .bottom {

      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 678px;
      margin: 166px auto;
      text-align: center;
      color: #FFFFFF;
      gap: 40px;

      h1 {
        font-size: 44px;
        font-weight: 700;
        line-height: 60px;

        @media (max-width: 1000px) {
          font-size: 24px;
        }
      }
    }

    .middle {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      @media (max-width: 1200px) and (min-width: 520px){
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 521px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .card {
        padding: 40px 40px 65px 40px;
        border-radius: 30px;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
          font-size: 20px;
          font-weight: 700;
        }

        p {
          font-size: 14px;
        }

        .divider {
          height: 20px;
        }
      }

      .current {
        background: linear-gradient(120.99deg, #B4CDED 4.24%, #DBF1FF 95.76%);
        color: #FFFFFF;
      }
    }

    .top {
      display: grid;
      gap: 30px;

      h2 {
        font-size: 44px;
        font-weight: 700;
        max-width: 780px;
        color: #FFFFFF;

        @media (max-width: 1000px){
          font-size: 28px;
        }
      }

      p {
        color: white;
        max-width: 840px;
        @media (max-width: 1000px){
          font-size: 12px;
        }
      }
    }
  }
}
</style>