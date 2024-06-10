<template>
  <div class="footbar">
    <ul>
      <li>
        <img src="../assets/footlogo.png" height="68" width="210"/>
      </li>
      <li>
        Политика конфиденциальности
      </li>
      <li>
        Пользовательское соглашение
      </li>
      <li>
        © 2024 Европейская Торговая Компания
      </li>
    </ul>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.footbar {
  padding: 40px 0;

  ul {
    margin: 0;
    padding: 0;

    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
