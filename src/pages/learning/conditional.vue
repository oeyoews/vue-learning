<script setup lang="ts">
import img from '~/assets/learning/conditional.png';
const seel = ref(true);

const toggleSeel = () => {
  seel.value = !seel.value;
};
</script>

<template>
  <h2>条件渲染</h2>
  <p v-if="seel" class="font-bold">可见</p>
  <del v-else>可见</del>

  <img :src="img" class="rounded w-96" />
  <p>v-if, v-else, v-if-else</p>

  <button @click="toggleSeel">toggle</button>
</template>

<route lang="yaml">
meta:
  title: '条件渲染'
  link: 'https://cn.vuejs.org/guide/essentials/conditional.html'
</route>
