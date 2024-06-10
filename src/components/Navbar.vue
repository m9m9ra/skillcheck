<template>
  <div class="navbar">
    <img src="../assets/ETC.png"
         height="18"
         width="69"/>

    <ul>
      <li>О КОМПАНИИ</li>
      <li>УСЛУГИ</li>
      <li>КОНТАКТЫ</li>
    </ul>

    <div class="menu">
      <p>
        СВЯЗАТЬСЯ
      </p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 33px;
  padding-bottom: 27px;
  background-color: #FFFFFF;

  ul {
    outline: none;
    display: flex;
    gap: 30px;
    list-style: none;
    @media (max-width: 700px) {
      display: none;
    }

    li {
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
