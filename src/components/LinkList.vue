<script setup lang="ts">
// <!-- NOTE: - [ ] vue-router 实时生成的 route 和 layout 导致页面加载错误, 需要client -->
const router = useRouter();

const routes = router.options.routes;

// NOTE: 不要加 route layout on page
const paths = routes.filter((route) => route.path.startsWith('/learning'));

const childrenPaths = paths[0].children?.[0].children?.filter(
  (item) => item.path
);

// import config from '~/config';
// const paths = config.learningRoutes;
</script>

<template>
  <h2>Learning</h2>
  <ol>
    <li v-for="path in childrenPaths">
      <RouterLink
        class="no-underline hover:underline capitalize"
        :to="path.name as string"
        :key="path.path"
        >{{ path.path || path.name }}
      </RouterLink>
    </li>
  </ol>
</template>
