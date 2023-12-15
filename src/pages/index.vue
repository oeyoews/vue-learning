<script setup lang="ts">
import config from '~/config';
useHead({
  title: config.title,
});
</script>

<template>
  <h1 class="text-center">
    {{ config.title }}
    <i-skill-icons-vuejs-light class="inline" />
  </h1>
  <LinkList />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
