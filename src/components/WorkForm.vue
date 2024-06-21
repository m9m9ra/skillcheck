<template>
  <div class="container-fluid" style="background-color: #FFFFFF;">
    <div class="workForm container-xxl">
      <div :class="`${animated ? 'animated animatedFadeInUp fadeInUp' : false} top`"
           :style="`display: ${animated ? 'flex' : `none`}`">
        <img src="../assets/slide/topLeft.png"/>
        <div class="info">
          <div class="center">
            <h3>ПАВЕЛ МАЛЬШУКОВ</h3>
            <p>
              СТАТЬ ДИЛЛЕРОМ ИЛИ МОНТАЖНИКОМ КОМПАНИИ КАПЛЯ39 В РОССИИ
            </p>
            <button type="button" class="btn btn-primary" style="background: rgba(20, 114, 208, 1); padding: 20px 0;">
              ОТПРАВИТЬ ЗАЯВКУ
            </button>
          </div>
        </div>
      </div>

      <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} bottom`"
           :style="`display: ${animatedBottom ? 'flex' : `none`}`">
        <div class="info">
          <div class="center">
            <h3>АНАСТАСИЯ АРЕФЬЕВА</h3>
            <p>
              ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА ПО ВОДОПОДГОТОВКЕ
            </p>
            <button type="button" class="btn btn-primary" style="background: rgba(20, 114, 208, 1); padding: 20px 0;">
              ОБРАТНЫЙ ЗВОНОК
            </button>
          </div>
        </div>
        <img src="../assets/slide/bottom.png"/>
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
    if (windowScroll > 4700) {
      animated.value = true;
    }
    if (windowScroll > 5100) {
      animatedBottom.value = true;
    }

  })
})

</script>
<style scoped lang="scss">
.workForm {
  display: grid;
  text-align: left;
  padding: 20px 30px;
  background-color: #FFFFFF;

  @media (max-width: 1000px) {
    padding: 55px 10px 75px 10px;
  }

  .top {
    min-height: 386px;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1100px) {
      gap: 0;
    }


    img {
      max-width: 532px;

      @media (max-width: 600px) {
        width: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(236, 241, 247, 1);
      border-radius: 40px;
      width: 100%;
      height: 380px;
      position: relative;
      //padding-top: 40px;
      top: 40px;
      padding: 40px 10px 0px 10px;

      @media (max-width: 1100px) {
        border-radius: 20px;
        max-width: 540px;
        padding: 40px 12px 0 12px;
        max-height: 340px;
        max-height: 300px;
        top: 0;
      }

      .center {
        max-width: 436px;
        display: grid;
        gap: 40px;

        @media (max-width: 1100px) {
          gap: 10px;
        }

        button {
          max-width: 270px;
        }

        h3 {
          font-size: 20px;
          color: rgba(162, 160, 160, 1);
          font-weight: 400;

          @media (max-width: 1100px) {
            font-size: 12px;
          }
        }

        p {
          font-size: 26px;
          font-weight: 600;
          line-height: 30px;

          @media (max-width: 1100px) {
            font-size: 18px;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

  }

  .bottom {
    min-height: 386px;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1100px) {
      gap: 0;
    }


    img {
      max-width: 532px;

      @media (max-width: 600px) {
        width: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(236, 241, 247, 1);
      border-radius: 40px;
      width: 100%;
      padding: 20px 10px 80px 10px;
      position: relative;
      top: 14px;

      @media (max-width: 1100px) {
        border-radius: 20px;
        max-width: 540px;
        padding: 40px 12px 40px 12px;
        top: 0;
      }


      .center {
        max-width: 436px;
        display: grid;
        gap: 40px;

        @media (max-width: 1100px) {
          gap: 10px;
        }

        button {
          max-width: 270px;
        }

        h3 {
          font-size: 20px;
          color: rgba(162, 160, 160, 1);
          font-weight: 400;

          @media (max-width: 1100px) {
            font-size: 12px;
          }
        }

        p {
          font-size: 26px;
          font-weight: 600;
          line-height: 30px;

          @media (max-width: 1100px) {
            font-size: 18px;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
      align-items: center;
    }

  }
}
</style>