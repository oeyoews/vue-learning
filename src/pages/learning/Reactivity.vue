<script setup lang="ts">
const links: LearningHeader = {
  title: 'Reactivity(响应式)',
  link: 'https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html',
};

const name = reactive({
  first: 'wxy',
  last: 'wxy',
});

const test = {
  id: ref(1),
};
</script>

<template>
  <Title :title="links.title" :link="links.link" />

  {{ name.first + 1 }}
  {{ test.id }}
  {{ new Date() }}
  <!-- error usage -->
  <!-- if use ts, also tip your error -->
  <!-- {{ test.id + 1 }} -->
</template>
