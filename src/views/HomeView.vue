<script setup>
import { storeToRefs } from "pinia";
import HomeTask from "@/components/HomeTask.vue";
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/Auth";
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);

// function logOut() {
//   // authStore.$state = { isAuthenticated: false, user: {} };

//   // more better way
//   authStore.$patch((state) => {
//     (state.isAuthenticated = false), (state.user = {});
//   });
// }
// function logIn() {
//   authStore.$patch((state) => {
//     (state.isAuthenticated = true),
//       (state.user = { name: "jahid", email: "jahid@gmail.com" });
//   });
// }
// function logIn() {
//   authStore.$reset();
// }
</script>

<template>
  <main>
    <!-- <HomeTask /> -->
    <button v-if="!isAuthenticated" @click="authStore.logIn">Log in</button>
    <button v-if="isAuthenticated" @click="authStore.logOut">Log Out</button>
    <h3 v-if="isAuthenticated">User Name: {{ user.name }}</h3>
    <Counter />
  </main>
</template>
