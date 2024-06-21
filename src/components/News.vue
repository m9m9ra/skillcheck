<template>
  <div class="container-fluid" style="background-color: #FFFFFF;">
    <div class="news container-xxl">

      <div :class="`${animated ? 'animated animatedFadeInUp fadeInUp' : false} top`" :style="`display: ${animated ? 'block' : `none`}`">
        <h2>
          НОВОСТИ
        </h2>
      </div>

      <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} bottom`" :style="`display: ${animatedBottom ? 'grid' : `none`}`">

        <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} card`">
          <img src="../assets/card/card1.png"/>
          <h4>03.05.2024</h4>
          <p>Вода из-под крана или вода бутилированная: что выбираете вы?</p>
        </div>

        <div class="card">
          <img src="../assets/card/card2.png"/>
          <h4>03.05.2024</h4>
          <p>Вода из-под крана или вода бутилированная: что выбираете вы?</p>
        </div>

        <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} card`">
          <img src="../assets/card/card3.png"/>
          <h4>03.05.2024</h4>
          <p>Выбираем систему очистки воды: 5 главных «нельзя»</p>
        </div>

        <div class="card">
          <img src="../assets/card/card4.png"/>
          <h4>03.05.2024</h4>
          <p>Выбираем систему очистки воды: 5 главных «нельзя»</p>
        </div>

      </div>

    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

const animated = ref(false);
const animatedBottom = ref(false);

onMounted(() => {
  document.addEventListener(`scroll`, (e) => {
    const windowScroll = window.scrollY;
    if (windowScroll > 5500 ) {
      animated.value = true;
    }
    if (windowScroll > 5700 ) {
      animatedBottom.value = true;
    }

  })
})

</script>
<style scoped lang="scss">
.news {
  display: grid;
  gap: 30px;
  text-align: left;
  padding: 90px 30px 180px 30px;

  @media (max-width: 1000px){
    padding: 55px 10px 75px 10px;
  }

  .bottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1000px) and (min-width: 600px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .card {
      display: grid;
      gap: 14px;
      border: none;

      img {
        width: 100%;

        @media (max-width: 900px) {
          height: 70%;
          object-fit: cover;
          object-position: 0 0;
          border-radius: 20px;
        }
      }

      h4 {
        font-size: 12px;
        color: rgba(162, 160, 160, 1);
        margin: 0;
        padding: 0;

        @media (max-width: 900px) {
          position: relative;
          bottom: 50px;
        }
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 700;

        @media (max-width: 900px) {
          position: relative;
          bottom: 50px;
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