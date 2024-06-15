<template>
  <div class="sliderTop">
    <div class="top">
      <h2>
        НАШИ СИСТЕМЫ ОЧИСТКИ ВОДЫ
        <span>ПОМОГУТ РЕШИТЬ ПРОБЛЕМЫ</span>
      </h2>
      <p>
        Правильно подобранная система водоподготовки в загородных домах, квартирах,
        на даче или в офисных помещениях является гарантией того, что оборудование прослужит долго и
        качественно. Задача компании DEWTON — предложить своим клиентам оптимальную систему для
        обеспечение качественной водой.
      </p>
    </div>
    <div class="bottom">
      <div class="left">
        <h3>ПРЕВЫШЕНИЕ СОДЕРЖАНИЯ СЕРОВОДОРОДА</h3>
        <p>
          Главный признак, указывающий на присутствие сероводорода в воде — это неприятный «протухший»
          запах и сладковатый привкус воды, оставляющий металлическое послевкусие.
          Однако при незначительной концентрации сероводорода в воде,
          уловить запах может быть проблематично. Наоборот, при высоком содержании, H2S блокирует обонятельные рецепторы и
          может создать ложное ощущение того, что газа в воде нет.
        </p>

        <div class="slide">

          <div class="lf">
            <p><span>01 /</span> 04</p>
          </div>

          <div class="rt">

          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/slide/sl01.jpg" />
<!--        <img src="../assets/slide/sl01small.png" height="254" width="340"/>-->
      </div>
    </div>
  </div>
</template>
<script setup>


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
      max-width: 840px;
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
    }

    .left {
      height: 537px;
      background-color: rgba(20, 114, 208, 1);
      border-radius: 40px 0px 0px 40px;
      padding: 60px 40px 0 40px;
      display: grid;
      align-content: space-between;

      @media (max-width: 1270px) {
        border-radius: 40px 40px 0 0;
        max-width: 767px;
      }

      h3 {
        font-size: 28px;
        @media (max-width: 1080px) {
          font-size: 18px;
        }
      }
      p {
        font-size: 14px;
        @media (max-width: 1080px) {
          font-size: 12px;
        }
      }

      .slide {
        background-image: url("./../assets/slide/bgsl1.png");
        background-repeat: repeat-x;
        padding-bottom: 20px;

        .lf {

        }

        .rt {

        }
      }
    }
    .right {
      max-width: 767px;
      //background-image: url("./../assets/slide/sl01.jpg");

      img {
        @media (max-width: 1270px) {
          width: 100%;
          border-radius: 0 0 40px 40px;
        }
      }
    }
  }
}
</style>