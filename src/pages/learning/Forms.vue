<script setup lang="ts">
const message = ref('');
const age = ref(18);
</script>

<template>
  <h2>表单输入绑定</h2>
  <!-- v-model.lazy is focus changed -->
  <input type="text" v-model.trim="message" />
  <input type="text" v-model.lazy="message" />
  <input type="text" v-model.number="age" />
</template>

<route lang="yaml">
meta:
  title: '表单输入绑定'
  link: 'https://cn.vuejs.org/guide/essentials/forms.html'
</route>
