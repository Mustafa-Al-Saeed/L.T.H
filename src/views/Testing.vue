<template>
  <div>
    <div class="container mx-auto relative">
      <div class="mb-4">
        <AddUserComp @addUser="setName" />
        <UserList :data="data" />
      </div>
    </div>

    <SearchComp :data="data" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchComp from "@/components/SearchComp.vue";
import AddUserComp from "@/components/AddUserComp.vue";
import UserList from "@/components/UserList.vue";

let data = ref([
  { name: "mostafa Mahmnoud" },
  { name: "Mahmnoud mostafa" },
  { name: "Ahmed Saeed" },
  { name: "Saeed Ahmed" },
  { name: "Abdo Saeed" },
]);

let setName = function (name) {
  name && data.value.push({ name });
};
</script>

<!-- <table class="mx-auto container border-[3px] border-black">
  <thead class="border-b-[3px] border-b-black">
    <tr class="">
      <th class="border-r-[3px] border-r-black">ID</th>
      <th class="border-r-[3px] border-r-black">Name</th>
      <th class="border-r-[3px] border-r-black">Age</th>
      <th class="border-r-[3px] border-r-black">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, index) in data" :key="index">
      <td
        class="border-r-[3px] border-r-black border-b-[3px] border-b-black px-2"
      >
        {{ value.id }}
      </td>
      <td
        class="border-r-[3px] border-r-black border-b-[3px] border-b-black px-2"
      >
        {{ value.name }}
      </td>
      <td
        class="border-r-[3px] border-r-black border-b-[3px] border-b-black px-2"
      >
        {{ value.age }}
      </td>
      <td
        class="border-r-[3px] border-r-black border-b-[3px] border-b-black px-2"
      >
        {{ value.email }}
      </td>
    </tr>
  </tbody>
</table> -->
