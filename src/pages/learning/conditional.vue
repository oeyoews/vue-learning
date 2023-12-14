<script setup lang="ts">
const seel = ref(true);

const toggleSeel = () => {
  seel.value = !seel.value;
};
</script>

<template>
  <h2>条件渲染</h2>
  <p v-if="seel">seen</p>
  <p v-if="!seel">unseen</p>

  <button @click="toggleSeel">toggle</button>
</template>

<route lang="yaml">
meta:
  title: '条件渲染'
  link: 'https://cn.vuejs.org/guide/essentials/conditional.html'
</route>
