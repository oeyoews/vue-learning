<script setup lang="ts">
const links = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'blog',
		path: '/blog'
	}
]
</script>
<template>
	<div class="flex space-x-2 justify-end items-center">
		<RouterLink v-for="link in links" :to="link.path">{{ link.name }}</RouterLink>
	</div>
</template>