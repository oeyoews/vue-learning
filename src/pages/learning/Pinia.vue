<script setup lang="ts">
const header: LearningHeader = {
  title: 'Pinia',
  link: 'https://pinia.vuejs.org/zh',
};

const counter = useCounterStore();
</script>

<template>
  <Title :title="header.title" :link="header.link" />
  <hr />
  <h2>Pinia state manager</h2>
  counter: {{ counter.count }}
  <button @click="counter.increment">increment</button>
</template>
