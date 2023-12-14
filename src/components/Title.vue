<script setup lang="ts">
defineProps({
  title: String,
  link: String,
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
