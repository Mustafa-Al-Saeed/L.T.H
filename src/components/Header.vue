<template>
  <div class="py-3 mb-10 bg-zinc-400">
    <div class="container mx-auto text-center">
      <RouterLink to="/"
        ><button
          class="bg-slate-700 text-white px-2 py-1 mx-2 rounded-[7px] font-bold shadow-3xl border-[1px] border-black"
        >
          Home
        </button></RouterLink
      >
      <RouterLink to="/about"
        ><button
          class="bg-slate-700 text-white px-2 py-1 mx-2 rounded-[7px] font-bold shadow-3xl border-[1px] border-black"
        >
          About
        </button></RouterLink
      >
      <RouterLink to="/testing"
        ><button
          class="bg-slate-700 text-white px-2 py-1 mx-2 rounded-[7px] font-bold shadow-3xl border-[1px] border-black"
        >
          Testing
        </button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
