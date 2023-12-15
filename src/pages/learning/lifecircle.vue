<script setup lang="ts">
import lifecircle from '~/assets/learning/lifecircle.png';
</script>

<template>
  <h3>onMounted</h3>
  <p>
    在实例生命周期的不同阶段被调用，最常用的是 onMounted、onUpdated 和
    onUnmounted。 当调用 onMounted 时，Vue
    会自动将回调函数注册到当前正被初始化的组件实例上。这意味着这些钩子应当在组件初始化时被同步注册。例如，请不要这样做：

    <Image :src="lifecircle" />
  </p>
</template>

<route lang="yaml">
meta:
  title: 生命周期
  link: https://cn.vuejs.org/guide/essentials/lifecycle.html
</route>
