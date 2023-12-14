<script setup lang="ts">
const rawHTML = '<span style="color: red;">This should be red {{ var }}</span>';
</script>

<template>
  <div v-html="rawHTML"></div>
</template>

<route lang="yaml">
meta:
  title: '模板语法'
  link: 'https://cn.vuejs.org/guide/essentials/template-syntax.html'
</route>
