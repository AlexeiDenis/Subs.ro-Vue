<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <Header />
  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
}
html {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
}
header{position:sticky;top:0;z-index:999;}
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    359.72deg,
    #e9e6d3 15.09%,
    #efecdb 55.14%,
    rgba(234, 233, 224, 0.991977) 90.57%,
    rgba(235, 234, 227, 0.99) 99.3%
  );
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: currentColor;
}
a:focus {
  color: #ee2f16;
}
</style>
