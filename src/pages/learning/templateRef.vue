<script setup lang="ts"></script>

<template>
  <p>类似于react 的 `useRef` 绑定元素</p>
  <h3>深度监听</h3>
  <p>
    直接给 watch()
    传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发：
    深度侦听需要遍历被侦听对象中的所有嵌套的属性，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能。
  </p>
</template>

<route lang="yaml">
meta:
  title: '模板引用(template ref)'
  link: 'https://cn.vuejs.org/guide/essentials/template-refs.html'
</route>
