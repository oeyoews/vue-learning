<script setup lang="ts">

interface Props {
  message: string
  foo?: string
}

// component props, default vaulue
const props = withDefaults(defineProps<Props>(), {
  messages: 'Vue Learning',
  foo: 'hi'
})

const env = import.meta.env
const counter = useCounterStore()

const items = [
  {
    id: 1,
    name: 'wxy'
  },
  {
    id: 2,
    name: 'wxy'
  }
]

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
  message: string
}

const seel = true
const message = ref('hhh')

const increment = () => {
  count.value++
}

const count = ref<number>(0)

const url = 'https://cn.vuejs.org'
const rawHTML = '<span style="color:red">this should be red</span>'

onMounted(() => {
  console.log('vue 启动')
})

const active = ref(true)

const classObject = reactive({
  'font-bold': active,
  'text-red-500': active
})

const currentTime = ref(new Date())

const toggleActive = () => {
  active.value = !active.value
}

const dynamicId = ref('wxy')

const changeId = () => {
  dynamicId.value = Math.random().toString().split('.')[1].slice(0, 2)
}

</script>

<template>
  <h2>模板语法</h2>
  {{ url }}
  <div v-html="rawHTML"></div>
  <div :id="dynamicId">{{ dynamicId }}</div>
  <button @click="changeId">change id</button>

  <h2>组件传参</h2>
  <p class="font-bold capitalize">{{ props.messages }} </p>


  <h2>响应式基础</h2>
  {{ name.first + 1 }}
  {{ test.id }}
  {{ currentTime }}
  {{ new Date() }}
  <!-- error usage -->
  <!-- if use ts, also tip your error -->
  <!-- {{ test.id + 1 }} -->

  <h2>计算属性</h2>
  <p>{{ publisher }}</p>

  <h2>类与样式绑定</h2>
  <div class="bg-red-500" :class="{ 'font-bold': active }">css</div>
  <div :class="classObject">object class</div>
  <button @click="toggleActive">toggle active</button>

  <h2>条件渲染</h2>
  <p v-if="seel">seen</p>

  <h2>列表渲染​</h2>
  <li>支持嵌套v-for</li>
  <li>支持组件</li>
  <ol>
    <li v-for="item in items" :key="item.id">{{ item.id }} {{ item.name }}</li>
  </ol>
  <hr>
  <ul>
    <li v-for="({ id, name }, index) in items">index is {{ index }} {{ id }} {{ name }}</li>(对象解构)
  </ul>

  <h2>事件处理</h2>
  <span>{{ count }}</span>
  <button @click="count++">count inc</button>
  <button @click="increment">inc</button>

  <h2>表单输入绑定</h2>
  <!-- v-model.lazy is focus changed -->
  <input type="text" v-model.trim="message">
  <input type="text" v-model.lazy="message">
  <input type="text" v-model.number="age">
  <a :href="url" target="_blank">https://cn.vuejs.org/</a>

  <hr>
  <h2>环境变量(vite)</h2>
  <p>VITE_API is {{ env.VITE_API }}</p>

  <hr>
  <h2>Pinia state manager</h2>
  counter: {{ counter.count }}
</template>