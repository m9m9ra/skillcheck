<template>
  <div class="main container-fluid">
    <div class="content">
      <Navbar class="navbar"/>
      <router-view/>
      <Footbar/>
    </div>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import Footbar from "@/components/Footbar.vue";


</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-xxl {
  padding: 0;
  margin: 0;
}
.container-fluid {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Inter", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  @media (min-width: 1400px) {
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1360px;
    }
  }

  .main {
    padding: 0;
  }

  .content {
    padding: 0;
  }
}
</style>
