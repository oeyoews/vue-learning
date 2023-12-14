<script setup lang="ts">
import config from '~/config';

const { title, link } = defineProps({
  title: String,
  link: String,
});

useHead({
  title,
  titleTemplate: `%s - ${config.title}`,
});
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <h2 class="text-center">
      {{ title }}
      <slot />
    </h2>
  </a>
</template>
