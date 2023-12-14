<script setup lang="ts">
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
  <div class="bg-red-500" :class="{ 'font-bold': active }">css</div>
  <div :class="classObject">object class</div>
  <button @click="toggleActive">toggle active</button>
</template>

<route lang="yaml">
meta:
  title: 'Class and Style'
  link: 'https://cn.vuejs.org/guide/essentials/class-and-style.html'
</route>
