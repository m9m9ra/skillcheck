<template>
  <div class="container-fluid" style="background-color: #FFFFFF;">
    <div class="feedback container-xxl">

      <div :class="`${animated ? 'animated animatedFadeInUp fadeInUp' : false} top`" :style="`display: ${animated ? 'block' : `none`}`">
        <h2>
          ЧИТАЙТЕ <span>ОТЗЫВЫ</span> НАШИХ ПОКУПАТЕЛЕЙ
        </h2>
      </div>

      <div :class="`${animatedBottom ? 'animated animatedFadeInUp fadeInUp' : false} bottom`" :style="`display: ${animatedBottom ? 'flex' : `none`}`">

        <div class="left">
          <div class="header">
            <img src="../assets/svg/man.png" height="101" width="100"/>

            <div class="rt">
              <p>Валерий К.</p>
              <div class="star">
                <img src="../assets/svg/star.png" height="19" width="18"/>
                <img src="../assets/svg/star.png" height="19" width="18"/>
                <img src="../assets/svg/star.png" height="19" width="18"/>
                <img src="../assets/svg/star.png" height="19" width="18"/>
                <img src="../assets/svg/star.png" height="19" width="18"/>
              </div>
              <p>03.05.2024</p>
            </div>
          </div>

          <div class="feed">
            <h3>СИСТЕМА ОБЕЗЖЕЛЕЗИВАНИЯ ВОДЫ «ЭКОНОМ»</h3>
            <p>
              Исходная вода из скважины превышает нормы по железу в 5 раз, мутна, изобилует кальцием и немного пахнет
              сероводородом.
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

          <div class="top">
            <div class="card">
              <div class="header">
                <img src="../assets/icon/olga.png" height="71" width="70"/>


                <div class="rt">
                  <p>Ольга В.</p>
                  <div class="star">
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                  </div>
                  <p>03.05.2024</p>
                </div>
              </div>

              <div class="feed">
                <h3>СИСТЕМА ОБЕЗЖЕЛЕЗИВАНИЯ ВОДЫ «ЭКОНОМ»</h3>
                <p>
                  Читать отзыв
                </p>
              </div>
            </div>

            <div class="card">
              <div class="header">
                <img src="../assets/svg/manS.png" height="71" width="70"/>


                <div class="rt">
                  <p>Валерий К.</p>
                  <div class="star">
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                    <img src="../assets/svg/star.png" height="19" width="18"/>
                  </div>
                  <p>03.05.2024</p>
                </div>
              </div>

              <div class="feed">
                <h3>СИСТЕМА КОМПЛЕКСНОЙ ОЧИСТКИ «НОРМА»</h3>
                <p>
                  Читать отзыв
                </p>
              </div>
            </div>
          </div>

          <div class="bottom">
            <div class="button">
              <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="2.47852" width="67" height="67" rx="33.5" stroke="#B4CDED" stroke-width="3"/>
                <path d="M50 37.4785C50.8284 37.4785 51.5 36.8069 51.5 35.9785C51.5 35.1501 50.8284 34.4785 50 34.4785V37.4785ZM18.9393 34.9179C18.3536 35.5036 18.3536 36.4534 18.9393 37.0392L28.4853 46.5851C29.0711 47.1709 30.0208 47.1709 30.6066 46.5851C31.1924 45.9993 31.1924 45.0496 30.6066 44.4638L22.1213 35.9785L30.6066 27.4932C31.1924 26.9074 31.1924 25.9577 30.6066 25.3719C30.0208 24.7861 29.0711 24.7861 28.4853 25.3719L18.9393 34.9179ZM50 34.4785H20V37.4785H50V34.4785Z" fill="#B4CDED"/>
              </svg>

              <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="2.47852" width="67" height="67" rx="33.5" stroke="#1472D0" stroke-width="3"/>
                <path d="M20 34.4785C19.1716 34.4785 18.5 35.1501 18.5 35.9785C18.5 36.8069 19.1716 37.4785 20 37.4785V34.4785ZM51.0607 37.0392C51.6464 36.4534 51.6464 35.5036 51.0607 34.9179L41.5147 25.3719C40.9289 24.7861 39.9792 24.7861 39.3934 25.3719C38.8076 25.9577 38.8076 26.9074 39.3934 27.4932L47.8787 35.9785L39.3934 44.4638C38.8076 45.0496 38.8076 45.9993 39.3934 46.5851C39.9792 47.1709 40.9289 47.1709 41.5147 46.5851L51.0607 37.0392ZM20 37.4785H50V34.4785H20V37.4785Z" fill="#1472D0"/>
              </svg>

              <p>
                +12 ОТЗЫВОВ
              </p>

              <!--              <img src="../assets/slide/buttonLB.png" height="71" width="70"/>-->
<!--              <img src="../assets/slide/buttonRB.png" height="71" width="70"/>-->
            </div>

            <svg width="183" height="54" viewBox="0 0 183 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_348_182)">
                <path d="M174.473 47.1285C178.064 47.1285 180.607 46.4785 182.501 45.0785V38.7285C180.557 40.0785 178.213 40.9285 174.922 40.9285C169.387 40.9285 167.094 36.6285 167.094 29.8285C167.094 22.6785 169.886 19.0285 174.972 19.0285C177.964 19.0285 180.906 20.0785 182.452 21.0785V14.4785C180.806 13.5785 177.964 12.9285 174.074 12.9285C164.152 12.9285 159.016 20.0785 159.016 30.0785C159.065 41.0285 164.102 47.1285 174.473 47.1285ZM125.956 44.2285V37.8785C123.562 39.5285 119.474 40.9785 115.734 40.9785C110.049 40.9785 107.905 38.2785 107.556 32.7785H126.305V28.6785C126.305 17.2285 121.269 12.9285 113.54 12.9285C104.066 12.9285 99.578 20.1785 99.578 30.1285C99.578 41.5785 105.213 47.1285 115.086 47.1285C120.022 47.1285 123.662 45.7785 125.956 44.2285ZM54.8003 13.5285V26.5285H44.4286V13.5285H36.6499V46.4785H44.4286V32.7285H54.8003V46.4785H62.5791V13.5285H54.8003ZM97.6333 40.2785H94.1927V13.5285H71.5545V16.3285C71.5545 24.3785 71.0559 34.7785 68.3134 40.2785H65.8202V53.9785H73.0006V46.4785H90.403V53.9785H97.5834V40.2785H97.6333ZM150.738 46.4785H159.564L147.098 28.7285L158.068 13.5285H150.24L139.27 28.7285V13.5285H131.491V46.4785H139.27V30.2785L150.738 46.4785ZM113.34 19.0285C117.18 19.0285 118.377 22.2285 118.377 26.3785V27.0285H107.556C107.756 21.7785 109.65 19.0285 113.34 19.0285ZM86.4139 40.2785H75.4439C77.5881 35.3285 78.1864 26.3285 78.1864 20.6285V19.6285H86.4139V40.2785Z" fill="#2F2F2F"/>
                <path d="M30.1676 46.4785H22.2392V7.12852H18.6989C12.2166 7.12852 8.82589 10.3785 8.82589 15.2285C8.82589 20.7285 11.1695 23.2785 16.0063 26.5285L19.9954 29.2285L8.5267 46.4785H0L10.3218 31.0785C4.38801 26.8285 1.04714 22.6785 1.04714 15.6785C1.04714 6.92852 7.13052 0.978516 18.649 0.978516H30.1177V46.4785H30.1676Z" fill="#FC3F1D"/>
              </g>
              <defs>
                <clipPath id="clip0_348_182">
                  <rect width="183" height="53" fill="white" transform="translate(0 0.978516)"/>
                </clipPath>
              </defs>
            </svg>

          </div>
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
    if (windowScroll > 2000 ) {
      animated.value = true;
    }
    if (windowScroll > 2140 ) {
      animatedBottom.value = true;
    }

  })
})

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

  @media (max-width: 1000px) {
    padding: 55px 10px 75px 10px;
  }

  .bottom {
    display: flex;
    gap: 20px;

    @media (max-width: 890px) {
      flex-direction: column;
      align-items: center;
    }

    .left {
      min-height: 500px;
      background-color: rgba(236, 241, 247, 1);
      border: 1px solid rgba(236, 241, 247, 1);
      border-radius: 40px;
      padding: 40px;
      max-width: 652px;

      @media (max-width: 440px) {
        height: auto;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 20px;

        .rt {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 15px 0;
          gap: 15px;

          .star {
            display: flex;
            gap: 10px;
          }

          p {
            margin: 0;
            padding: 0;
            color: rgba(162, 160, 160, 1);
            font-size: 12px;
            text-transform: uppercase;

            &:first-child {
              font-weight: 700;
              color: black;
              position: relative;
              top: 10px;
              font-size: 16px;
            }
          }
        }
      }

      .feed {

        h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 20px 0;
        }

        p {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .bottom {
        height: 35%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        @media (max-width: 1000px) {
          height: auto;
        }

        .button {
          display: flex;
          align-items: flex-end;
          gap: 20px;
          p {
            margin: 0;
            padding: 0;
            font-size: 16px;
            color: rgba(162, 160, 160, 1);
            font-weight: 700;

            @media (max-width: 1220px) {
              display: none;
            }
          }
        }
      }

      .top {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0;

        @media (max-width: 1280px) {
          grid-template-columns: repeat(1, 1fr);
        }

        .card {
          background-color: white;
          border: 1px solid white;
          border-radius: 40px;
          padding: 20px;

          &:last-child {
            @media (max-width: 1280px) {
              display: none;
            }
          }

          &:first-child {
            @media (max-width: 890px) {
              display: none;
            }
          }

          .header {
            display: flex;
            align-items: center;
            gap: 20px;

            .rt {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 15px 0;
              gap: 15px;

              .star {
                display: flex;
                gap: 10px;
              }

              p {
                margin: 0;
                padding: 0;
                color: rgba(162, 160, 160, 1);
                font-size: 12px;
                text-transform: uppercase;

                &:first-child {
                  font-weight: 700;
                  position: relative;
                  color: black;
                  top: 10px;
                  font-size: 16px;
                }
              }
            }
          }

          .feed {

            h3 {
              font-size: 16px;
              font-weight: 700;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              text-decoration: underline;
            }
          }
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
      color: black;

      span {
        color: rgba(20, 114, 208, 1);
      }

      @media (max-width: 1000px) {
        font-size: 28px;
      }
    }
  }
}
</style>