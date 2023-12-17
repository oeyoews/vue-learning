<script setup lang="ts">
import config from '~/config';
useHead({
  title: config.title,
});
</script>

<template>
  <h1 class="text-center">
    {{ config.title }}
    <i-skill-icons-vuejs-light class="inline" />
  </h1>

  <blockquote>基础</blockquote>
  <LinkList />

  <blockquote>深入组件</blockquote>

  <h2>组件 Props</h2>
  <Title />

  <p>用法和react 的props 一致, 支持 v-bind 动态props, 支持绑定多个props</p>
  <li>单项数据流</li>
  <p>
    defineProps() 宏中的参数不可以访问
    定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中。
    所有的参数默认都是可选的,当 prop 的校验失败后，Vue 会抛出一个控制台警告
    (在开发模式下)。 如果使用了基于类型的 prop 声明 ，Vue
    会尽最大努力在运行时按照 prop 的类型标注进行编译
  </p>

  <h2>事件</h2>

  <hr />
  <Filter />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
