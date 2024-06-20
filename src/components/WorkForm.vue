<template>
  <div class="container-fluid" style="background-color: #FFFFFF;">
    <div class="workForm container-xxl">
      <div class="top">
        <img src="../assets/slide/topLeft.png"/>
        <div class="info">
          <div class="center">
            <h3>ПАВЕЛ МАЛЬШУКОВ</h3>
            <p>
              СТАТЬ ДИЛЛЕРОМ ИЛИ МОНТАЖНИКОМ КОМПАНИИ КАПЛЯ39 В РОССИИ
            </p>
            <button type="button" class="btn btn-primary">ОТПРАВИТЬ ЗАЯВКУ</button>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="info">
          <div class="center">
            <h3>АНАСТАСИЯ АРЕФЬЕВА</h3>
            <p>
              ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА ПО ВОДОПОДГОТОВКЕ
            </p>
            <button type="button" class="btn btn-primary">ОБРАТНЫЙ ЗВОНОК</button>
          </div>
        </div>
        <img src="../assets/slide/bottom.png"/>
      </div>
    </div>
  </div>
</template>
<script setup>


</script>
<style scoped lang="scss">
.workForm {
  display: grid;
  text-align: left;
  padding: 20px 30px;
  background-color: #FFFFFF;

  @media (max-width: 1000px){
    padding: 55px 10px 75px 10px;
  }

  .top {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1080px) {
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
      }
    }

    img {
      position: relative;
      top: 30px;
      min-width: 335px;
      width: 50%;
    }

    .info {
      width: 70%;
      height: 386px;
      background: rgba(236, 241, 247, 1);
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 500px) {
        width: 88%;
        padding: 15px;
      }


      .center {
        max-width: 410px;

        h3 {
          color: rgba(162, 160, 160, 1);
          font-size: 20px;
        }

        p {
          text-align: left;
          font-size: 28px;
          font-weight: 700;

          @media (max-width: 1000px) {
            font-size: 18px;
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-between;
    position: relative;
    bottom: 40px;

    @media (max-width: 1080px){
      flex-direction: column-reverse;
      align-items: center;

      img {
        width: 100%;
      }
    }
    img {
      position: relative;
      width: 50%;
      min-width: 335px;
      top: 30px;
    }

    .info {
      width: 70%;
      height: 386px;
      background: rgba(236, 241, 247, 1);
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 500px) {
        width: 88%;
        padding: 15px;
      }

      .center {
        max-width: 400px;

        h3 {
          color: rgba(162, 160, 160, 1);
          font-size: 20px;
        }
        p {
          font-size: 28px;
          font-weight: 700;

          @media (max-width: 1000px) {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>