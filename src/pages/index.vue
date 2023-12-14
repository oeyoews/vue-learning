<script setup lang="ts">
import config from '~/config';
useHead({
  title: config.title,
});
</script>

<template>
  <Nav />
  <h1 class="text-center">{{ config.title }}</h1>
  <LinkList />
</template>

<route lang="yaml">
meta:
  layout: learning
</route>
