<template>
  <main>
    <h1>This is home page</h1>
    <h2>{{ TaskStore.name }}</h2>
  </main>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
const TaskStore = useTaskStore();
</script>
