<template>
  <main>
    <br />
    <button @click="counterStore.decrement">-</button>
    <span>Counter value: {{ count }} </span>
    <button @click="counterStore.increment">+</button>
    <br />
    <p>Counter Digit Length: {{ digitLength }}</p>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { UseCounterStore } from "@/stores/Counter";
import { computed } from "@vue/runtime-core";
const counterStore = UseCounterStore();

const { count, digitLength } = storeToRefs(counterStore);

// const increment = () => {
//   counterStore.count++;
// };

// const decrement = () => {
//   if (counterStore.count <= 0) return;
//   counterStore.count--;
// };

// const digitLength = computed(() => counterStore.count.toString().length);
// const digitLength = counterStore.count.toString().length;
</script>
