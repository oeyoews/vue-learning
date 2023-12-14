<script setup lang="ts">
const header: LearningHeader = {
  title: "模板语法",
  link: "https://cn.vuejs.org/guide/essentials/template-syntax.html",
};

const rawHTML = '<span style="color: red;">This should be red {{ var }}</span>';
</script>

<template>
  <Title :title="header.title" :link="header.link" />

  <div v-html="rawHTML"></div>
</template>
