<script setup lang="ts">

import {withDefaults, ref, onMounted } from 'vue'

// NOTE: lint 不会报错,但是会在控制台warn 如果丢失必选参数
interface Props {
  msg: string
  foo?: string
  message: string // TODO: if this type not defined, it will missing
}

// component props
const props = withDefaults(defineProps<Props>(), {
  msg: 'Vue Learning',
  message: 'Hello',
  foo: 'bar'
})

const increment = () => {
  count.value++
}

const count = ref<number>(0)

onMounted(() => {
  console.log(count.value)
})


</script>

<template>
  <h1>{{ props.msg }} </h1>

  <div :id="props.foo"></div>
  <button @click="increment">inc</button>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
