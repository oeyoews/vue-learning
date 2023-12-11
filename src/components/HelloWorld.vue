<script setup lang="ts">

import { reactive, computed, withDefaults, ref, onMounted } from 'vue'

const env = import.meta.env

const name = reactive({
  first: 'wxy',
  last: 'wxy'
})

const test = {
  id: ref(1)
}

const author = reactive({
  name: 'wxy',
  age: 18,
  books: [
    {
      name: 'book1',
      price: 100
    },
    {
      name: 'book2',
      price: 200
    }
  ]
})

const publisher = computed(() => {
  return author.books.length > 0 ? author.name : 'none'
})

const age = ref(18)
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

const seel = true
const message = ref('hhh')

const increment = () => {
  count.value++
}

const count = ref<number>(0)
const url = 'https://github.com'

onMounted(() => {
  console.log(count.value)
})


</script>

<template>
  <h2>样式绑定</h2>
  <p class="font-bold underline">{{ props.msg }} </p>

  <h2>响应式</h2>
  {{ name.first + 1 }}
  {{ name.last }}
  {{ test.id }}
  <!-- if use ts, also tip your error -->
  <!-- {{ test.id + 1 }} -->

  <h2>属性计算</h2>
  <p>publisher {{ publisher }}</p>

  <h2>环境变量</h2>
  <p>VITE_API is {{ env.VITE_API }}</p>

  <h2>条件渲染</h2>

  <p v-if="seel">seen</p>

  <div :id="props.foo"></div>

  <h2>数据绑定</h2>
  <button @click="increment">inc</button>
  <!-- v-model.lazy is focus changed -->
  <input type="text" v-model.trim="message">

  <input type="text" v-model.number="age">
  <p>
    {{ age }}
    {{ typeof age }}
  </p>

  <a :href="url" target="_blank">url v-bind</a>
</template>