<template>
  <div class="my-10">
    <label for="search">Search</label>
    <input
      v-model="searchInput"
      type="search"
      id="search"
      class="border-2 border-black"
      @keyup="handleSearch"
    />
    <ul>
      <li v-for="(user, index) in dataSearch" :key="index">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  data: Array,
});
let searchInput = ref("");
let dataSearch = ref([]);

let handleSearch = function () {
  dataSearch.value = props.data.filter((user) => {
    return user.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  if (searchInput.value.trim() == "") {
    dataSearch.value = [];
  }
};
</script>

<style></style>
