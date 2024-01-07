<template>
  <ul>
    <li v-for="(value, index) in data" :key="index">{{ value.name }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style></style>
