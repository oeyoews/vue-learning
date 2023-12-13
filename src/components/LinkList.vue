<script setup lang="ts">

// <!-- NOTE: - [ ] vue-router 实时生成的 route 和 layout 导致页面加载错误 -->
// import { routes } from 'vue-router/auto/routes'
// const learningroutes = routes.filter(route => route.path.startsWith('/learning'))
// const paths = learningroutes[0].children
import config from '~/config';
const paths = config.learningRoutes


</script>
<template>
	<h2>Learning</h2>
	<ol>
		<li v-for="path in paths">
			<RouterLink class="no-underline hover:underline capitalize" :to="`${config.learningRoutesPrefix}/${path.path}`"
				:key="path.path">{{
					path.path || path.name }}
			</RouterLink>
		</li>
	</ol>
</template>