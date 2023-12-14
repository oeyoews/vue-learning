<script setup lang="ts">
const router = useRouter();
const { title, link } = router.currentRoute.value.meta;
</script>

<template>
  <article
    class="container max-w-4xl mx-auto my-4 prose prose-gray dark:prose-invert antialiased">
    <Title :title="title as string" :link="link as string" />
    <RouterView />
    <button>
      <RouterLink to="/" class="no-underline hover:underline">Home</RouterLink>
    </button>
  </article>
</template>
