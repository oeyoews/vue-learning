<script setup lang="ts">
import img from '~/assets/learning/conditional.png';

const seel = ref(true);

const toggleSeel = () => {
  seel.value = !seel.value;
};
</script>

<template>
  <p v-if="seel" class="font-bold">可见</p>
  <del v-else>可见</del>

  <Image :src="img" class="w-96" alt="conditional image" />
  <button @click="toggleSeel">toggle</button>

  <h3>v-show/v-if</h3>
  <p>
    v-if
    是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
    v-if 也是惰性的：如果在初次渲染时条件值为
    false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。
    相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS
    display 属性会被切换。 总的来说，v-if 有更高的切换开销，而 v-show
    有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show
    较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。
  </p>
</template>

<route lang="yaml">
meta:
  title: '条件渲染'
  link: 'https://cn.vuejs.org/guide/essentials/conditional.html'
</route>
