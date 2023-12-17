<script setup lang="ts">
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
const filteredUsers = computed(() => {
  return randomUsers.filter((user) =>
    user.username.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<template>
  <input type="text" v-model="keyword" placeholder="Search" />
  <ul>
    <li v-for="user in filteredUsers" :key="user.id">
      {{ user.username }}
      {{ user.age }}
    </li>
  </ul>
</template>
