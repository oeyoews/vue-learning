<script setup lang="ts">
interface Props {
  message: string;
  foo?: string;
}

// component props, default vaulue
const props = withDefaults(defineProps<Props>(), {
  messages: 'Vue Learning',
  foo: 'hi',
});

const author = reactive({
  name: 'wxy',
  age: 18,
  books: [
    {
      name: 'book1',
      price: 100,
    },
    {
      name: 'book2',
      price: 200,
    },
  ],
});

const publisher = computed(() => {
  return author.books.length > 0 ? author.name : 'none';
});

const count = ref<number>(0);

onMounted(() => {
  console.log('vue 启动');
});

const active = ref(true);

const classObject = reactive({
  'font-bold': active,
  'text-red-500': active,
});

const toggleActive = () => {
  active.value = !active.value;
};
</script>

<template>
  <h2>组件传参</h2>
  <p class="font-bold capitalize">{{ props.messages }}</p>

  <h2>计算属性</h2>
  <p>{{ publisher }}</p>

  <h2>类与样式绑定</h2>
  <div class="bg-red-500" :class="{ 'font-bold': active }">css</div>
  <div :class="classObject">object class</div>
  <button @click="toggleActive">toggle active</button>
</template>
