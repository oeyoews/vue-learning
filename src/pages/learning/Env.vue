<script setup lang="ts">
const env = import.meta.env;
</script>

<template>
  <p>VITE_API is {{ env.VITE_API }}</p>
</template>

<route lang="yaml">
meta:
  title: '环境变量'
  link: 'https://cn.vitejs.dev/guide/env-and-mode.html#env-files'
</route>
