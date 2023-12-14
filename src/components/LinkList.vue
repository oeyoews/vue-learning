<script setup lang="ts">
// <!-- NOTE: - [ ] vue-router 实时生成的 route 和 layout 导致页面加载错误, 需要client -->
const { routes } = await import('vue-router/auto/routes');
const learningroutes = await routes.filter((route) =>
  route.path.startsWith('/learning')
);

const { paths } = reactive({
  paths: learningroutes[0].children,
});

paths?.forEach((path) => {
  console.log(path);
});

// import config from '~/config';
// const paths = config.learningRoutes
</script>

<template>
  <h2>Learning</h2>
  {{ JSON.stringify(paths) }}
  <ol>
    <li v-for="path in paths">
      <RouterLink
        class="no-underline hover:underline capitalize"
        :to="path.name as string"
        :key="path.path"
        >{{ path.path || path.name }}
      </RouterLink>
    </li>
  </ol>
</template>
