<template>
  <main>
    <br />
    <button @click="decrement">-</button>
    <span>Counter value: {{ counterStore.count }} </span>
    <button @click="increment">+</button>
    <br />
    <p>Counter Digit Length: {{ counterStore.digitLength }}</p>
  </main>
</template>

<script setup>
import { UseCounterStore } from "@/stores/Counter";
import { computed } from "@vue/runtime-core";
const counterStore = UseCounterStore();

const increment = () => {
  counterStore.count++;
};

const decrement = () => {
  if (counterStore.count <= 0) return;
  counterStore.count--;
};

// const digitLength = computed(() => counterStore.count.toString().length);
// const digitLength = counterStore.count.toString().length;
</script>
