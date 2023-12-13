<script setup>
const route = useRoute('/blog/[id]')

</script>

<template>
	{{ route.params.id }}
</template>