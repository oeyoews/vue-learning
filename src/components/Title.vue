<script setup lang="ts">
const { title, link } = defineProps({
  title: String,
  link: String,
});

useHead({
  title,
});
</script>

<template>
  <h2>
    <a :href="link" target="_blank" rel="noopener noreferrer">
      {{ title }}
      <slot />
    </a>
  </h2>
</template>
