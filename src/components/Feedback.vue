<template>
  <div class="feedback container-xxl">

    <div class="top">
      <h2>
        ЧИТАЙТЕ <span>ОТЗЫВЫ</span> НАШИХ ПОКУПАТЕЛЕЙ
      </h2>
    </div>

    <div class="bottom">

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

            <img src="../assets/slide/buttonLB.png" height="71" width="70"/>
            <img src="../assets/slide/buttonRB.png" height="71" width="70"/>
          </div>

          <img src="../assets/svg/yandex.png" height="54" width="183"/>

        </div>
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
      height: 652px;
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

          p {
            margin: 0;
            padding: 0;

            &:first-child {
              font-weight: 700;
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
        }

        p {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    .right {

      .bottom {
        height: 50%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .button {
          display: flex;
          gap: 20px;
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
          padding: 40px;

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

              p {
                margin: 0;
                padding: 0;

                &:first-child {
                  font-weight: 700;
                  position: relative;
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