<script setup lang="ts">
import config from '~/config';

interface Props {
  title: string;
  link: string;
  class?: string;
}

const { title, link } = withDefaults(defineProps<Props>(), {
  title: '',
  link: config.defaultLink,
});

useHead({
  title,
  titleTemplate: (title) => {
    return title ? `${title} - ${config.title}` : config.title;
  },
});
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    title="跳转到相关文档">
    <h2 class="text-center" :class="class">
      {{ title }}
      <slot />
    </h2>
  </a>
</template>
