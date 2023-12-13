<script setup lang="ts">
import config from '~/config'

interface Props {
	links?: Link[]
}

const props = withDefaults(defineProps<Props>(), {
	links: () => config.learningRoutes
})

</script>
<template>
	<h2>Learning</h2>
	<ol>
		<li v-for="link in props.links">
			<RouterLink class="no-underline hover:underline capitalize" :to="`${config.learningRoutesPrefix}/${link.path}`"
				:key="link.path">{{
					link.name ||
					link.path }}
			</RouterLink>
		</li>
	</ol>
</template>