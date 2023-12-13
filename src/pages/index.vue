<script setup>
const links = [
	{ path: '/' }
]
</script>
<template>
	<div class="container max-w-4xl mx-auto my-4 prose prose-indigo antialiased">
		<Nav :links="links" />
		<HelloWorld message="Hello Vue 3 + TypeScript + Vite" />
		<VueRouterComponent />
	</div>
</template>