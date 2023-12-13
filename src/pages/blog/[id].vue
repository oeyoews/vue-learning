<script setup>
const route = useRoute('/blog/[id]')

</script>

<template>
	{{ route.params.id }}
	{{ route.query.id }}
	{{ route.name }}
	{{ JSON.stringify(route, null, 2) }}
	{{ route.fullPath }}
</template>