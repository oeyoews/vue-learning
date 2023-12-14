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

onMounted(() => {
  console.log('vue 启动');
});
</script>

<template>
  <h2>组件传参</h2>
  <p class="font-bold capitalize">{{ props.messages }}</p>

  <h2>计算属性</h2>
  <p>{{ publisher }}</p>
</template>
