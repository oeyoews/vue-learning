<script setup lang="ts">
const text = 'default text';
</script>

<template>
  <div>
    <slot :text="text" />
  </div>
</template>
