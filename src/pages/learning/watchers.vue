<script setup lang="ts">
const count = ref(0);

watch(count, (count, onlCount) => {
  console.log(onlCount, '->', count);
});
</script>

<template>
  <p>
    计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改
    DOM，或是根据异步操作的结果去修改另一处的状态。
  </p>
  <p>侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。</p>
  <p>
    第一个参数是侦听器的源。这个来源可以是以下几种： 一个函数，返回一个值 一个
    ref 一个响应式对象 ...或是由以上类型的值组成的数组
    第二个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求。
    当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值。
  </p>

  <button @click="count++">count {{ count }}</button>
</template>

<route lang="yaml">
meta:
  title: '侦听器(watchers)'
  link: 'https://cn.vuejs.org/guide/essentials/watchers.html'
</route>
