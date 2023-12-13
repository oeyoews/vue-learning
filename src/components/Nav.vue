<script setup lang="ts">

interface Props {
	links?: Link[]
}

const links = ([
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'blog',
		path: '/blog'
	}
])

const props = withDefaults(defineProps<Props>(), {
	links() {
		return links
	}
})

</script>
<template>
	<div class="flex space-x-2 justify-end items-center">
		<RouterLink class="no-underline hover:underline" v-for="link in props.links" :to="link.path" :key="link.path">{{
			link.name ||
			link.path }}
		</RouterLink>
	</div>
</template>