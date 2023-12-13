<script setup lang="ts">
const route = useRoute('/blog/[id]')

const title = 'vue router with autonaming(filebase route)'
const routerInfo = {
	name: route.name,
	fullPath: route.fullPath,
	params: route.params,
	query: route.query,
	id: route.params.id
}

</script>

<template>
	<h2>{{ title }}</h2>
	<ul>
		<li v-for="(value, key) in routerInfo">
			{{ key }}: {{ value }}
		</li>
	</ul>
</template>