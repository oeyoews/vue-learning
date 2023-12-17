<script setup lang="ts">
const { isFullscreen, enter, exit, toggle } = useFullscreen();
const isDark = useDark();
const el = ref<HTMLElement | null>(null);
const randomUsers = [
  {
    id: 1,
    username: 'John Doe',
    age: 30,
  },
  {
    id: 2,
    username: 'Jane Doe',
    age: 25,
  },
  {
    id: 3,
    username: 'Bob Smith',
    age: 40,
  },
  {
    id: 4,
    username: 'Alice Smith',
    age: 35,
  },
  {
    id: 5,
    username: 'Charlie Brown',
    age: 28,
  },
];

const keyword = ref('');
let test = reactive({
  name: 'wxy',
});
const updateTest = () => {
  test = { name: 'wxy222' };
};
const sortType = ref(0);
const filteredUsers = computed(() => {
  return randomUsers
    .filter((user) =>
      user.username.toLowerCase().includes(keyword.value.toLowerCase())
    )
    .sort((a, b): any => {
      if (sortType.value === 1) {
        // up a.age - b.age
        return a.age > b.age ? 1 : -1;
      } else if (sortType.value === -1) {
        // down
        return a.age > b.age ? -1 : 1;
      }
    });
});
</script>

<template>
  <!-- https://www.bilibili.com/video/BV1Zy4y1K7SH?p=34&spm_id_from=pageDriver&vd_source=d6afd7eedd9f9c940321c63f0a1539e3 -->
  <button @click="updateTest">{{ JSON.stringify(test) }}</button>
  <input type="text" v-model="keyword" placeholder="Search" />

  <button @click="sortType = 0">vanilla</button>
  <button @click="sortType = 1">up</button>
  <button @click="sortType = -1">down</button>
  <button @click="toggle">Go Fullscreen</button>
  <ul ref="el">
    <li v-for="user in filteredUsers" :key="user.id">
      {{ user.username }}
      {{ user.age }}
    </li>
  </ul>
</template>
