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
}

// component props
const props = withDefaults(defineProps<Props>(), {
  msg: 'Vue Learning',
})

const seel = true
const message = ref('hhh')

const increment = () => {
  count.value++
}

const count = ref<number>(0)

const url = 'https://cn.vuejs.org'

onMounted(() => {
  console.log(count.value)
})


</script>

<template>
  <h2>组件传参</h2>
  <p class="font-bold capitalize">{{ props.msg }} </p>

  <h2>响应式</h2>
  {{ name.first + 1 }}
  {{ test.id }}
  <!-- error usage -->
  <!-- if use ts, also tip your error -->
  <!-- {{ test.id + 1 }} -->

  <h2>属性计算</h2>
  <p>{{ publisher }}</p>

  <h2>环境变量</h2>
  <p>VITE_API is {{ env.VITE_API }}</p>

  <h2>条件渲染</h2>
  <p v-if="seel">seen</p>

  <h2>数据绑定</h2>
  <button @click="increment">inc</button>
  <!-- v-model.lazy is focus changed -->
  <input type="text" v-model.trim="message">
  <input type="text" v-model.lazy="message">
  <input type="text" v-model.number="age">

  <a :href="url" target="_blank">https://cn.vuejs.org/</a>
</template>