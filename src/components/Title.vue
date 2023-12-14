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
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    title="跳转到相关文档">
    <h2 class="text-center">
      {{ title }}
    </h2>
  </a>
</template>
