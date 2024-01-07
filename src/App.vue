<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  const appToken = window.localStorage.getItem("userToken");
  if (!appToken) {
    window.localStorage.setItem("userToken", "token");
  }
});
</script>

<style scoped></style>
