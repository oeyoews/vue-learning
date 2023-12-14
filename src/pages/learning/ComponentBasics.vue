<script setup lang="ts">
const header: LearningHeader = {
  title: '组件基础',
  link: 'https://cn.vuejs.org/guide/essentials/component-basics.html',
};
const isToggle = ref(true);
const toggleComponent = () => {
  isToggle.value = !isToggle.value;
  console.log(isToggle.value);
};
import Lorem from '~/components/Lorem.vue';
import Lorem2 from '~/components/Lorem2.vue';
const fontSize = ref(1);

const changeFontSize = () => {
  if (fontSize.value > 2) {
    fontSize.value = 1;
  }
  fontSize.value = fontSize.value + 0.1;
};
</script>

<template>
  <Title :link="header.link" :title="header.title" />

  <h3>监听事件</h3>
  <button @click="changeFontSize">enlarge text</button>
  <button v-if="fontSize !== 1" @click="fontSize = 1">reset fontsize</button>
  <hr />
  <p :style="{ fontSize: fontSize + 'em' }">
    <Lorem />
  </p>

  <h3>slot(插槽)</h3>
  <p>写法和react的children一样</p>

  <h3>dynamic component(动态组件)</h3>
  <button @click="toggleComponent">toggle component</button>
  <component :is="isToggle ? Lorem : Lorem2" />
</template>
