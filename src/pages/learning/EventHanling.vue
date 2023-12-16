<script setup lang="ts">
const count = ref(0);
const increment = () => {
  count.value++;
};
const handleEvent = (event: any) => {
  console.log(event.target.textContent);
};
</script>

<template>
  <span>{{ count }}</span>
  <button @click="(event) => handleEvent(event)">hi</button>
  <h3>事件修饰符</h3>
  <li>prevent, stop, capture,once, passive</li>
  <h3>按键修饰符</h3>
  <li>@keyup enter page-down page-up</li>
  <a href="https://vitejs.dev" @click.prevent="count++">link prevent</a>

  <button @click.once="count++">once</button>

  <button @click="count++">count inc</button>
  <button @click="increment">inc</button>
</template>

<route lang="yaml">
meta:
  title: '事件处理'
  link: 'https://cn.vuejs.org/guide/essentials/event-handling.html'
</route>
