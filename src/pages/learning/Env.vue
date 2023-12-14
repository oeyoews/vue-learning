<script setup lang="ts">
const env = import.meta.env;
const header: LearningHeader = {
  title: '环境变量',
  link: 'https://cn.vitejs.dev/guide/env-and-mode.html#env-files',
};
</script>

<template>
  <Title :title="header.title" :link="header.link" />

  <hr />
  <h2>环境变量(vite)</h2>
  <p>VITE_API is {{ env.VITE_API }}</p>
</template>
