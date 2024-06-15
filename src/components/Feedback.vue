<template>
  <div class="feedback">

    <div class="top">
      <h2>
        ЧИТАЙТЕ <span>ОТЗЫВЫ</span> НАШИХ ПОКУПАТЕЛЕЙ
      </h2>
    </div>

    <div class="bottom">

      <div class="left">
        <div class="header">

        </div>

        <div class="feed">
          <h3>СИСТЕМА ОБЕЗЖЕЛЕЗИВАНИЯ ВОДЫ «ЭКОНОМ»</h3>
          <p>
            Исходная вода из скважины превышает нормы по железу в 5 раз, мутна, изобилует кальцием и немного пахнет сероводородом.
            На самостоятельный монтаж ушёл полный день.
            Для сборки дополнительно понадобится пищевая силиконовая смазка для резиновых уплотнителей и
            армированный прозрачный шланг 13мм для устройства линии дренажа(стока) из клапана ранксин и
            линии дренажа из солевого ведра на случай перелива. Так же нужно понимать,
            что при правильной работе устройства, вода умягчится до, примерно, 0мг жёсткости,
            что приведёт к сложностям смывания мыла с кожи. Чтобы регулировать жёсткость,
            необходимо делать правильный подмес воды. В целом система рабочая. Рекомендую!
          </p>
        </div>
      </div>

      <div class="right">

      </div>
    </div>
  </div>
</template>
<script setup>


</script>
<style scoped lang="scss">
.feedback {
  display: grid;
  gap: 30px;
  text-align: left;
  padding: 90px 30px;
  background-image: url("./../assets/slide/feedbg.png");
  background-repeat: no-repeat;
  background-position: top right;

  @media (max-width: 1000px){
    padding: 55px 10px 75px 10px;
  }

  .bottom {
    .left {
      height: 652px;
      background-color: rgba(236, 241, 247, 1);
      border: 1px solid rgba(236, 241, 247, 1);
      border-radius: 40px;
      padding: 40px;

      .header {

      }

      .feed {

        h3 {
          font-size: 20px;
          font-weight: 700;
        }
        p {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }

  .top {
    display: grid;
    gap: 30px;

    h2 {
      font-size: 44px;
      font-weight: 700;
      max-width: 780px;

      span {
        color: rgba(20, 114, 208, 1);
      }

      @media (max-width: 1000px){
        font-size: 28px;
      }
    }
  }
}
</style>