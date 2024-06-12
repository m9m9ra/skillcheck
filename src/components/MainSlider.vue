<template>
  <div :class="`mainSlider bgimg${currentIndex+1} `">
    <div :class="`top`">
      <h1>
        {{slider[currentIndex].text.slice(0, showChars)}}
      </h1>
      <div class="slider">
        <div :class="`slide ${slide.id == currentIndex ? 'current' : false}`"
             v-for="slide in slider"
             :key="slide.id">
          <p>0{{slide.id+1}}</p>
          <div class="divider"/>
        </div>
      </div>
    </div>

    <div class="bottom">

      <div class="card">
        <h3>{{ clients }}+</h3>
        <p>ПОСТОЯННЫХ КЛИЕНТОВ</p>
      </div>

      <div class="divider"/>

      <div class="card">
        <h3>{{ invoice.toFixed(2) }}%</h3>
        <p>ОТ СТОИМОСТИ ИНВОЙСА</p>
      </div>

      <div class="divider"/>

      <div class="card">
        <h3>{{ declar }}</h3>
        <p>ДЕКЛАРАЦИЙ В ГОД</p>
      </div>

      <div class="divider"/>

      <div class="card">
        <h3>{{persent}}%</h3>
        <p>ДОСТАВКА ТОВАРА В СРОК</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
const showChars = ref(0);

const clients = ref(0); // 1300
const declar = ref(0); //800
const invoice = ref(0); //0,35
const persent = ref(0); //95

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
  currentIndex.value === 3 ? currentIndex.value = 0 : currentIndex.value += 1;

  const intervalNumber = setInterval(() => {
    clients.value < 1300 ? clients.value += 1 : clearInterval(intervalNumber);
    declar.value < 800 ? declar.value += 1 : false;
    invoice.value < 0.35 ? invoice.value += 0.01 : false;
    persent.value < 95 ? persent.value += 1 : false;

    // if (++showChars.value === slider.value[currentIndex.value].text.length) {
    //   clearInterval(intervalNumber);
    // }
  }, 10);

  const intervalID = setInterval(() => {
    if (++showChars.value === slider.value[currentIndex.value].text.length) {
      clearInterval(intervalID);
    }
  }, 120);

  showChars.value = 0;

  setInterval(() => {
    currentIndex.value === 3 ? currentIndex.value = 0 : currentIndex.value += 1;

    const intervalID = setInterval(() => {
      if (++showChars.value === slider.value[currentIndex.value].text.length) {
        clearInterval(intervalID);
      }
    }, 120);

    showChars.value = 0;

  }, 6200);


})


</script>
<style scoped lang="scss">
.mainSlider {
  height: 640px;
  background-position: center;
  //background-image: url("../assets/slide/02.png");
  background-repeat: no-repeat;
  color: white;

  padding: 10px 56px 20px 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 0 13px 14px 13px;
    background-position: right;
  }

  .top {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;



    @media (max-width: 690px) {
      flex-direction: column;

      h1 {
        height: 105px;
      }
    }

    .slider {
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 46px;

      .slide {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #A2A0A0;

        @media (max-width: 690px) {
          .divider {
            height: 60px;
          }
        }

        p {
          font-size: 12px;
          font-weight: 400;
        }

        .divider {
          height: 80px;
          width: 2px;
          background-color: #A2A0A0;
        }
      }

      .current {
        p {
          font-size: 24px;
          color: #FFFFFF;
        }

        .divider {
          background-color: #FFFFFF;
        }
      }
    }

    @media (max-width: 1280px) {
    }

    h1 {
      white-space: pre-wrap;
      text-align: left;
      font-size: 70px;
      font-weight: 600;

      @media (max-width: 700px) {
        font-size: 26px;
      }

      @media (max-width: 1280px) and (min-width: 701px){
        font-size: 48px;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 700px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .card {

      h3 {
        font-size: 36px;
        font-weight: 400;
        margin: 0;
        padding: 0;

        @media (max-width: 1024px) {
          font-size: 24px;
        }
      }
      p {
        margin: 0;
        padding: 0;
        @media (max-width: 1024px) {
          font-size: 8px;
        }
      }
    }

    .divider {
      width: 1px;
      background-color: white;
      height: 77px;

      @media (max-width: 700px) {
        display: none;
      }
    }
  }
}
.bgimg1 {
  background-image: url("../assets/slide/01.jpg");
}
.bgimg2 {
  background-image: url("../assets/slide/02.png");
}
.bgimg3 {
  background-image: url("../assets/slide/03.jpg");
}
.bgimg4 {
  background-image: url("../assets/slide/04.jpg");
}
</style>
