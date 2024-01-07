<template>
  <div v-if="showMessage">
    <PopupSucssesVue />
  </div>
  <form action="" @submit.prevent="setName">
    <input
      v-model="name"
      type="text"
      class="border-2 border-black mr-2 py-[2px]"
    />

    <button class="bg-slate-700 text-white px-2 py-1 rounded" type="submit">
      Add User
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import PopupSucssesVue from "@/components/popups/PopupSucsses.vue";

const emit = defineEmits(["addUser"]);
let name = ref("");
let showMessage = ref(false);

const setName = () => {
  emit("addUser", name.value);
  name.value = "";

  showMessage.value = true;

  setTimeout(() => {
    showMessage.value = false;
  }, 2000);
};
</script>

<style></style>
