<template>
  <div class="main">
    <Navbar class="navbar"/>
    <router-view/>
    <Footbar/>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import Footbar from "@/components/Footbar.vue";


</script>
<style lang="scss">
#app {
  font-family: "Involve", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 40px;

    @media (max-width: 700px) {
      padding: 0 10px;
    }

    .navbar {
      //position: sticky;
      //top: 0;
    }
  }
}
</style>
