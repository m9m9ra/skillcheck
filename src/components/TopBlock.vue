<template>
  <div class="topBlockWrapper">
    <div class="topBlock container-xxl">
      <div :class="`${animated ? 'animated animatedFadeInUp fadeInUp' : false} top`" :style="`display: ${animated ? 'block' : `none`}`">
        <h2><span>Оптимальные решения</span> под любой бюджет</h2>
        <div class="bottom">
          <p>
            Правильно подобранная система водоподготовки в загородных домах, квартирах, на даче или в офисных
            помещениях является гарантией того, что оборудование прослужит долго и качественно.
            Задача компании <span>DEWTON</span> — предложить своим клиентам оптимальную систему
            для обеспечение качественной водой.
          </p>
          <div class="button">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="70" height="70" rx="35" fill="#2F2F2F"/>
              <path d="M50 36.5C50.8284 36.5 51.5 35.8284 51.5 35C51.5 34.1716 50.8284 33.5 50 33.5V36.5ZM18.9393 33.9393C18.3536 34.5251 18.3536 35.4749 18.9393 36.0607L28.4853 45.6066C29.0711 46.1924 30.0208 46.1924 30.6066 45.6066C31.1924 45.0208 31.1924 44.0711 30.6066 43.4853L22.1213 35L30.6066 26.5147C31.1924 25.9289 31.1924 24.9792 30.6066 24.3934C30.0208 23.8076 29.0711 23.8076 28.4853 24.3934L18.9393 33.9393ZM50 33.5H20V36.5H50V33.5Z" fill="white"/>
            </svg>

            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="70" height="70" rx="35" fill="#1472D0"/>
              <path d="M20 33.5C19.1716 33.5 18.5 34.1716 18.5 35C18.5 35.8284 19.1716 36.5 20 36.5V33.5ZM51.0607 36.0607C51.6464 35.4749 51.6464 34.5251 51.0607 33.9393L41.5147 24.3934C40.9289 23.8076 39.9792 23.8076 39.3934 24.3934C38.8076 24.9792 38.8076 25.9289 39.3934 26.5147L47.8787 35L39.3934 43.4853C38.8076 44.0711 38.8076 45.0208 39.3934 45.6066C39.9792 46.1924 40.9289 46.1924 41.5147 45.6066L51.0607 36.0607ZM20 36.5H50V33.5H20V36.5Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} cardBlock`" :style="`display: ${animatedBottom ? 'flex' : `none`}`">

        <div class="card">
          <img src="../assets/svg/cardImg.png" width="328" height="279"/>
          <h3>СИСТЕМА ОБЕЗЖЕЛЕЗИВАНИЯ ВОДЫ «ЭКОНОМ»</h3>
          <div class="bottom">
            <p>28 985₽</p>
            <p>ПОДРОБНЕЕ →</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/svg/cardImg.png" width="328" height="279"/>
          <h3>СИСТЕМА комплексной очистки городской воды</h3>
          <div class="bottom">
            <p>34 960₽</p>
            <p>ПОДРОБНЕЕ →</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/svg/cardImg.png" width="328" height="279"/>
          <h3>СИСТЕМА комплексной очистки «норма»</h3>
          <div class="bottom">
            <p>38 910₽</p>
            <p>ПОДРОБНЕЕ →</p>
          </div>
        </div>

      </div>
      <div class="bottom-mobile">
<!--        <img src="../assets/svg/buttonLB.png" height="70" width="70"/>-->
<!--        <img src="../assets/svg/buttonRB.png" height="70" width="70"/>-->
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="70" rx="35" fill="#2F2F2F"/>
          <path d="M50 36.5C50.8284 36.5 51.5 35.8284 51.5 35C51.5 34.1716 50.8284 33.5 50 33.5V36.5ZM18.9393 33.9393C18.3536 34.5251 18.3536 35.4749 18.9393 36.0607L28.4853 45.6066C29.0711 46.1924 30.0208 46.1924 30.6066 45.6066C31.1924 45.0208 31.1924 44.0711 30.6066 43.4853L22.1213 35L30.6066 26.5147C31.1924 25.9289 31.1924 24.9792 30.6066 24.3934C30.0208 23.8076 29.0711 23.8076 28.4853 24.3934L18.9393 33.9393ZM50 33.5H20V36.5H50V33.5Z" fill="white"/>
        </svg>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="70" rx="35" fill="#1472D0"/>
          <path d="M20 33.5C19.1716 33.5 18.5 34.1716 18.5 35C18.5 35.8284 19.1716 36.5 20 36.5V33.5ZM51.0607 36.0607C51.6464 35.4749 51.6464 34.5251 51.0607 33.9393L41.5147 24.3934C40.9289 23.8076 39.9792 23.8076 39.3934 24.3934C38.8076 24.9792 38.8076 25.9289 39.3934 26.5147L47.8787 35L39.3934 43.4853C38.8076 44.0711 38.8076 45.0208 39.3934 45.6066C39.9792 46.1924 40.9289 46.1924 41.5147 45.6066L51.0607 36.0607ZM20 36.5H50V33.5H20V36.5Z" fill="white"/>
        </svg>

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
    if (windowScroll > 350 ) {
      animated.value = true;
    }
    if (windowScroll > 600 ) {
      animatedBottom.value = true;
    }

  })
})
</script>
<style scoped lang="scss">
.topBlockWrapper {
  background-color: #FFFFFF;
  background-image: url("./../assets/slide/bgtop.png");
  background-position: top right;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    background-size: contain;
  }

  .topBlock {
    text-align: left;
    padding: 150px 30px 60px 30px;
    display: grid;
    gap: 30px;
    animation: fadeIn 1s;

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }


    @media (max-width: 1000px){
      padding: 55px 10px 75px 10px;
    }


    .cardBlock {
      display: flex;
      align-items: center;
      justify-content: space-between;
      //display: grid;
      //grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .card {
        padding: 20px 50px;
        display: grid;
        gap: 40px;
        background-color: rgba(236, 241, 247, 1);
        border: 1px solid rgba(236, 241, 247, 1);
        border-radius: 30px;
        transition: 0.3s;

        @media (max-width: 1399px) and (min-width: 1000px){
          &:last-child {
            display: none;
          }
        }
        @media (max-width: 1000px){
          padding: 10px 10px;

          &:last-child {
            display: none;
          }
          &:first-child {
            display: none;
          }
        }

        h3 {
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          p:first-child {
            font-size: 28px;
            font-weight: 600;
            color: rgba(20, 114, 208, 1);
          }
        }

        &:hover {
          cursor: pointer;
          background-color: rgba(20, 114, 208, 1);
          color: #FFFFFF;

          .bottom {
            transition: 1.2s;
            p {
              color: #FFFFFF;
            }
          }
        }
      }
    }

    .top {
      display: grid;
      gap: 24px;

      h2 {
        font-size: 44px;
        font-weight: 700;
        max-width: 720px;
        text-transform: uppercase;

        span {
          color: rgba(20, 114, 208, 1);
        }

        @media (max-width: 1000px){
          font-size: 28px;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;

        p {
          max-width: 940px;
          @media (max-width: 1000px){
            font-size: 12px;
          }
        }

        .button {
          display: flex;
          align-items: center;
          gap: 20px;

          svg {
            cursor: pointer;

            &:hover {
              scale: 1.1;
            }
          }

          @media (max-width: 1111px){
            display: none;
          }
        }
      }
    }

    .bottom-mobile {
      display: none;

      @media (max-width: 1000px){
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 30px;
      }
    }
  }
}
</style>