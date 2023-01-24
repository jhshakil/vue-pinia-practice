<script setup>
import HomeTask from "@/components/HomeTask.vue";
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/Auth";
const authStore = useAuthStore();

function logOut() {
  // authStore.$state = { isAuthenticated: false, user: {} };

  // more better way
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {});
  });
}
</script>

<template>
  <main>
    <!-- <HomeTask /> -->
    <button @click="logOut">Log Out</button>
    <h3 v-if="authStore.isAuthenticated">
      User Name: {{ authStore.user.name }}
    </h3>
    <Counter />
  </main>
</template>
