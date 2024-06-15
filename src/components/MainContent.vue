<template>
  <div class="content">
    <div class="left">
      <h1>
        <span>ПРОДВИНУТЫЕ СИСТЕМЫ</span> ОБЕЗЖЕЛЕЗИВАНИЯ И ОБЕЗЗАРАЖИВАНИЯ ВОДЫ
        <h3>
          Гарантия чистой воды
        </h3>
      </h1>
      <h3>Гарантия чистой воды</h3>

      <div class="button">
        <img src="../assets/svg/buttonL.png" height="70" width="70"/>
        <img src="../assets/svg/buttonR.png" height="70" width="70"/>
      </div>
    </div>
  </div>
</template>
<script setup>


</script>
<style scoped lang="scss">
.content {
  background-image: url("./../assets/slide/main.jpg");
  height: 830px;

  .left {
    text-align: left;
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 680px;
    gap: 40px;

    @media (max-width: 900px) {
      padding: 30px 13px;
      padding-top: 190px;
    }

    @media (max-width: 900px) {
      justify-content: space-between;
    }

    h1 {
      font-size: 44px;
      font-weight: 700;

      span {
        color: rgba(20, 114, 208, 1);
      }

      h3 {
        display: none;
      }

      @media (max-width: 600px) {
        font-size: 28px;
        h3 {
          display: block;
          margin-top: 20px;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
    h3 {
      font-size: 20px;
      font-weight: 400;

      @media (max-width: 600px) {
        font-size: 12px;
        display: none;
      }
    }

    .button {
      display: flex;
      align-items: center;
      gap: 20px;

      @media (max-width: 900px) {
        height: 20%;
      }
    }
  }
}
</style>