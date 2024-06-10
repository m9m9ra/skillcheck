<template>
  <div class="mainSlider">
    <div class="top" >
      <h1>
        {{slider[currentIndex].text}}
      </h1>
    </div>

    <div class="bottom">

      <div class="card">
        <h3>1300+</h3>
        <p>ПОСТОЯННЫХ КЛИЕНТОВ</p>
      </div>

      <div class="divider"/>

      <div class="card">
        <h3>0,35%</h3>
        <p>ОТ СТОИМОСТИ ИНВОЙСА</p>
      </div>

      <div class="divider"/>

      <div class="card">
        <h3>800</h3>
        <p>ДЕКЛАРАЦИЙ В ГОД</p>
      </div>

      <div class="divider"/>

      <div class="card">
        <h3>95%</h3>
        <p>ДОСТАВКА ТОВАРА В СРОК</p>
      </div>
    </div>
  </div>
</template>
<script setup>

import {onMounted, ref} from "vue";

const slider = ref([
  {
    id: 0,
    image: require("../assets/slide/02.png"),
    text: "Быстрое\nТаможенное\nОформление"
  },
  {
    id: 1,
    image: require("../assets/slide/02.png"),
    text: "Безопасные\nМеждународные\nПеревозки"
  },
  {
    id: 2,
    image: require("../assets/slide/02.png"),
    text: "Аутсорсинг\nВнешнеэкономической\nДеятельности"
  },
  {
    id: 3,
    image: require("../assets/slide/02.png"),
    text: "Дополнительные\nУслуги\nЛогистики"
  },
]);

const currentIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentIndex.value === 3 ? currentIndex.value = 0 : currentIndex.value += 1;
  }, 1500);
})


</script>
<style scoped lang="scss">
.mainSlider {
  height: 660px;
  background-position: center;
  background-image: url("../assets/slide/02.png");
  color: white;

  padding: 10px 56px 0px 95px;

  .top {
    padding-top: 20px;
    margin-bottom: 220px;

    h1 {
      white-space: pre-wrap;
      text-align: left;
      font-size: 70px;
      font-weight: 600;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .card {

      h3 {
        font-size: 36px;
        font-weight: 400;
        margin: 0;
        padding: 0;
      }
    }

    .divider {
      width: 1px;
      background-color: white;
      height: 77px;
    }
  }
}
</style>
