<script setup lang="ts">
const author = reactive({
  name: 'wxy',
  age: 18,
});

const info = computed(() => {
  if (author.age > 12) {
    return author.name + ' ' + author.age;
  }
});
</script>

<template>
  <p>类似于react 的usestate 涉及到的变量都会自动重新计算</p>

  <p>
    若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要
    author.books 不改变，无论多少次访问 publishedBooksMessage
    都会立即返回先前的计算结果，而不用重复执行 getter 函数。
  </p>

  <p>{{ info }}</p>
</template>

<route lang="yaml">
meta:
  title: '计算属性'
  link: 'https://cn.vuejs.org/guide/essentials/computed.html'
</route>
