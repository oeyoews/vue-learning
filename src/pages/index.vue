<script setup lang="ts">
import config from '~/config';
useHead({
  title: config.title,
});
</script>

<template>
  <Nav />
  <LinkList />
  <hr />
  <HelloWorld message="Hello Vue 3 + TypeScript + Vite" />
</template>

<route lang="yaml">
meta:
  layout: learning
</route>
