<script setup lang="ts">
const items = [
  {
    id: 1,
    name: 'wxy',
  },
  {
    id: 2,
    name: 'wxy',
  },
];
</script>

<template>
  <ul>
    <li>支持嵌套v-for</li>
    <li>支持组件</li>
  </ul>

  <ol>
    <li v-for="item in items" :key="item.id">{{ item.id }} {{ item.name }}</li>
  </ol>
  <hr />
  <ul>
    <li v-for="({ id, name }, index) in items">
      index is {{ index }} {{ id }} {{ name }}
    </li>
    (对象解构)
  </ul>
</template>

<route lang="yaml">
meta:
  title: '列表渲染'
  link: 'https://cn.vuejs.org/guide/essentials/list.html'
</route>
