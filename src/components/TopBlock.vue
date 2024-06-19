<template>
  <div class="topBlockWrapper">
    <div class="topBlock container-xxl">
      <div class="top">
        <h2><span>Оптимальные решения</span> под любой бюджет</h2>
        <div class="bottom">
          <p>
            Правильно подобранная система водоподготовки в загородных домах, квартирах, на даче или в офисных
            помещениях является гарантией того, что оборудование прослужит долго и качественно.
            Задача компании <span>DEWTON</span> — предложить своим клиентам оптимальную систему
            для обеспечение качественной водой.
          </p>
          <div class="button">
            <img src="../assets/svg/buttonLB.png" height="70" width="70"/>
            <img src="../assets/svg/buttonRB.png" height="70" width="70"/>
          </div>
        </div>
      </div>
      <div class="cardBlock">

        <div class="card">
          <img src="../assets/svg/cardImg.png" width="328" height="279"/>
          <h3>СИСТЕМА ОБЕЗЖЕЛЕЗИВАНИЯ ВОДЫ «ЭКОНОМ»</h3>
          <div class="bottom">
            <p>28 985₽</p>
            <p>ПОДРОБНЕЕ</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/svg/cardImg.png" width="328" height="279"/>
          <h3>СИСТЕМА комплексной очистки городской воды</h3>
          <div class="bottom">
            <p>34 960₽</p>
            <p>ПОДРОБНЕЕ</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/svg/cardImg.png" width="328" height="279"/>
          <h3>СИСТЕМА комплексной очистки «норма»</h3>
          <div class="bottom">
            <p>38 910₽</p>
            <p>ПОДРОБНЕЕ </p>
          </div>
        </div>

      </div>
      <div class="bottom-mobile">
        <img src="../assets/svg/buttonLB.png" height="70" width="70"/>
        <img src="../assets/svg/buttonRB.png" height="70" width="70"/>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.topBlockWrapper {
  background-image: url("./../assets/slide/bgtop.png");
  background-position: top right;
  background-repeat: no-repeat;

  .topBlock {
    text-align: left;
    padding: 150px 30px 60px 30px;
    display: grid;
    gap: 30px;


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
      }
    }

    .top {
      display: grid;
      gap: 24px;

      h2 {
        font-size: 44px;
        font-weight: 700;
        max-width: 720px;

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
          max-width: 840px;
          @media (max-width: 1000px){
            font-size: 12px;
          }
        }

        .button {
          display: flex;
          align-items: center;
          gap: 20px;

          img {
            cursor: pointer;
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