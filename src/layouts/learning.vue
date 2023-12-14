<script setup lang="ts">
const router = useRouter();
const pathname = router.currentRoute.value.path;
const { title, link } = router.currentRoute.value.meta;
const hasMeta = !!title && !!link;
if (!hasMeta) {
  console.warn(pathname, 'not found');
}
</script>

<template>
  <article
    class="container max-w-4xl mx-auto my-4 prose prose-gray dark:prose-invert antialiased">
    <Title v-if="hasMeta" :title="title as string" :link="link as string" />
    <Title class="bg-red-400" v-else>{{ pathname }}</Title>
    <RouterView />
    <button>
      <RouterLink to="/" class="no-underline hover:underline">Home</RouterLink>
    </button>
  </article>
</template>
