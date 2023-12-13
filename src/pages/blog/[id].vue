<script setup>

import { getRoute } from '~/lib/getRoute'
const { id } = getRoute()

</script>

<template>
	{{ id }}
</template>