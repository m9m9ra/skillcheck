<template>
  <div class="container-fluid" style="background-color: #FFFFFF;">
    <div class="sliderTop container-xxl">
      <div :class="`${animated ? 'animated animatedFadeInUp fadeInUp' : false} top`" :style="`display: ${animated ? 'block' : `none`}`" >
        <h2>
          НАШИ СИСТЕМЫ ОЧИСТКИ ВОДЫ
          <span>ПОМОГУТ РЕШИТЬ ПРОБЛЕМЫ</span>
        </h2>
        <p>
          Правильно подобранная система водоподготовки в загородных домах, квартирах,
          на даче или в офисных помещениях является гарантией того, что оборудование прослужит долго и
          качественно. Задача компании <span>DEWTON</span> — предложить своим клиентам оптимальную систему для
          обеспечение качественной водой.
        </p>
      </div>
      <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} bottom`" :style="`display: ${animatedBottom ? 'flex' : `none`}`">
        <div class="left">
          <h3 :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false}`">{{slider[currentIndex].header}}</h3>
          <p :class="`${animated ? 'animated animatedFadeInUp fadeInUp' : false}`">
            Главный признак, указывающий на присутствие сероводорода в воде — это неприятный «протухший»
            запах и сладковатый привкус воды, оставляющий металлическое послевкусие.
            Однако при незначительной концентрации сероводорода в воде,
            уловить запах может быть проблематично. Наоборот, при высоком содержании, H2S блокирует обонятельные рецепторы и
            может создать ложное ощущение того, что газа в воде нет.
          </p>

          <div class="slide">

            <div class="lf">
              <p><span>0{{currentIndex+1}} /</span> 0{{slider.length}}</p>
            </div>

            <div class="rt">
              <svg @click="currentIndex == 0 ? currentIndex = slider.length - 1 : currentIndex -= 1" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.570312" width="50" height="50" rx="25" fill="white"/>
                <path d="M35 26.5703C35.5523 26.5703 36 26.1226 36 25.5703C36 25.018 35.5523 24.5703 35 24.5703V26.5703ZM14.2929 24.8632C13.9024 25.2537 13.9024 25.8869 14.2929 26.2774L20.6569 32.6414C21.0474 33.0319 21.6805 33.0319 22.0711 32.6414C22.4616 32.2509 22.4616 31.6177 22.0711 31.2272L16.4142 25.5703L22.0711 19.9135C22.4616 19.5229 22.4616 18.8898 22.0711 18.4992C21.6805 18.1087 21.0474 18.1087 20.6569 18.4992L14.2929 24.8632ZM35 24.5703H15V26.5703H35V24.5703Z" fill="#B4CDED"/>
              </svg>

              <svg @click="currentIndex == slider.length-1 ? currentIndex = 0 : currentIndex += 1" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.570312" width="50" height="50" rx="25" fill="white"/>
                <path d="M15 24.5703C14.4477 24.5703 14 25.018 14 25.5703C14 26.1226 14.4477 26.5703 15 26.5703V24.5703ZM35.7071 26.2774C36.0976 25.8869 36.0976 25.2537 35.7071 24.8632L29.3431 18.4992C28.9526 18.1087 28.3195 18.1087 27.9289 18.4992C27.5384 18.8898 27.5384 19.5229 27.9289 19.9135L33.5858 25.5703L27.9289 31.2272C27.5384 31.6177 27.5384 32.2509 27.9289 32.6414C28.3195 33.0319 28.9526 33.0319 29.3431 32.6414L35.7071 26.2774ZM15 26.5703L35 26.5703V24.5703L15 24.5703V26.5703Z" fill="#2F2F2F"/>
              </svg>

            </div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/slide/sl01.jpg" />
          <!--        <img src="../assets/slide/sl01small.png" height="254" width="340"/>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

const slider = ref([
  {
    id: 0,
    header: `СОДЕРЖАНИЯ ПРЕВЫШЕНИЕ СЕРОВОДОРОДА`,
    text: `Главный признак, указывающий на присутствие сероводорода в воде — это неприятный «протухший»
            запах и сладковатый привкус воды, оставляющий металлическое послевкусие.
            Однако при незначительной концентрации сероводорода в воде,
            уловить запах может быть проблематично. Наоборот, при высоком содержании, H2S блокирует обонятельные рецепторы и
            может создать ложное ощущение того, что газа в воде нет.`
  },
  {
    id: 1,
    header: `СЕРОВОДОРОДА СЕРОВОДОРОДА СЕРОВОДОРОДА`,
    text: `Главный признак, указывающий на присутствие сероводорода в воде — это неприятный «протухший»
            запах и сладковатый привкус воды, оставляющий металлическое послевкусие.
            Однако при незначительной концентрации сероводорода в воде,
            уловить запах может быть проблематично. Наоборот, при высоком содержании, H2S блокирует обонятельные рецепторы и
            может создать ложное ощущение того, что газа в воде нет.`
  },
  {
    id: 2,
    header: `СЕРОВОДОРОДА ПРЕВЫШЕНИЕ СОДЕРЖАНИЯ`,
    text: `Главный признак, указывающий на присутствие сероводорода в воде — это неприятный «протухший»
            запах и сладковатый привкус воды, оставляющий металлическое послевкусие.
            Однако при незначительной концентрации сероводорода в воде,
            уловить запах может быть проблематично. Наоборот, при высоком содержании, H2S блокирует обонятельные рецепторы и
            может создать ложное ощущение того, что газа в воде нет.`
  },
  {
    id: 3,
    header: `СЕРОВОДОРОДА ПРЕВЫШЕНИЕ СОДЕРЖАНИЯ`,
    text: `Главный признак, указывающий на присутствие сероводорода в воде — это неприятный «протухший»
            запах и сладковатый привкус воды, оставляющий металлическое послевкусие.
            Однако при незначительной концентрации сероводорода в воде,
            уловить запах может быть проблематично. Наоборот, при высоком содержании, H2S блокирует обонятельные рецепторы и
            может создать ложное ощущение того, что газа в воде нет.`
  },
]);

const currentIndex = ref(0);

const animated = ref(false);
const animatedBottom = ref(false);

onMounted(() => {
  document.addEventListener(`scroll`, (e) => {
    const windowScroll = window.scrollY;
    if (windowScroll > 1200 ) {
      animated.value = true;
    }
    if (windowScroll > 1400 ) {
      animatedBottom.value = true;
    }

  })
})

</script>
<style scoped lang="scss">
.sliderTop {
  display: grid;
  gap: 30px;
  text-align: left;
  padding: 90px 30px;

  @media (max-width: 1000px){
    padding: 55px 10px 75px 10px;
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

    p {
      max-width: 940px;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;

      span {
        color: rgba(20, 114, 208, 1);
      }

      @media (max-width: 1000px){
        font-size: 12px;
      }
    }
  }

  .bottom {
    max-height: 557px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

    @media (max-width: 1270px) {
      flex-direction: column;
      justify-content: space-between;
      max-height: 740px;
    }

    .left {
      height: 537px;
      background-color: rgba(20, 114, 208, 1);
      border-radius: 40px 0px 0px 40px;
      padding: 50px 60px 0 60px;
      display: grid;
      align-content: space-between;

      @media (max-width: 1270px) {
        border-radius: 20px 20px 0 0;
        max-width: 767px;
        padding: 20px 20px 0 20px;
      }

      h3 {
        font-size: 28px;
        margin-bottom: 20px;
        @media (max-width: 1080px) {
          font-size: 18px;
        }
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        @media (max-width: 1080px) {
          font-size: 12px;
          bottom: 0;
        }
        position: relative;
        bottom: 50px;
      }

      .slide {
        background-image: url("./../assets/slide/bgsl1.png");
        background-repeat: repeat-x;
        background-position: bottom;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;

        @media (max-width: 1000px) {
          padding-bottom: 0;
        }

        .lf {

          p {
            color: rgba(180, 205, 237, 1);
            font-weight: 600;
            font-size: 24px;
            bottom: 0;

            span {
              font-size: 56px;
              font-weight: 700;
              color: white;
            }

            @media (max-width: 1080px) {
              font-size: 14px;
              bottom: 0;

              span {
                font-size: 28px;
              }
            }
          }
        }

        .rt {
          position: relative;
          bottom: 20px;
          display: flex;
          gap: 20px;

          @media (min-width: 1080px) {
            scale: 1.2;
          }

          svg:hover {
            scale: 1.1;
            cursor: pointer;
          }
        }
      }
    }
    .right {
      max-width: 767px;
      //background-image: url("./../assets/slide/sl01.jpg");

      img {
        @media (max-width: 1270px) {
          width: 100%;
          border-radius: 0 0 20px 20px;
        }
      }
    }
  }
}
</style>