<script setup lang="ts">
const counter = useCounterStore();
</script>

<template>
  <hr />
  <h2>Pinia state manager</h2>
  counter: {{ counter.count }}
  <button @click="counter.increment">increment</button>
</template>

<route lang="yaml">
meta:
  title: 'Pinia'
  link: 'https://pinia.vuejs.org/zh'
</route>
