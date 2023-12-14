<script setup lang="ts">
const header: LearningHeader = {
  title: 'Vue Router Component(路由组件)',
  link: 'https://router.vuejs.org/zh/guide',
};
const route = useRoute('/learning/');

const routerInfo = {
  name: route.name,
  fullPath: route.fullPath,
  params: route.params,
  query: route.query,
};
</script>

<template>
  <Title :title="header.title" :link="header.link" />

  <b>NOTE: vue-router 自动忽略大小写</b>
  <ol>
    <li v-for="(value, key) in routerInfo">{{ key }}: {{ value }}</li>
  </ol>
</template>
