<script setup lang="ts">
import config from '~/config'

interface Props {
	links?: Link[]
}

const props = withDefaults(defineProps<Props>(), {
	// NOTE: https://stackoverflow.com/questions/73517763/unable-to-use-defineprops-with-typescript
	// NOTE: https://stackoverflow.com/questions/69951687/vue-3-defineprops-are-referencing-locally-declared-variables
	/** @see-also: https://cn.vuejs.org/guide/typescript/composition-api.html#props-default-values */
	links: () => config.links
})

</script>
<template>
	<div class="flex space-x-2 justify-end items-center">
		<RouterLink class="no-underline hover:underline capitalize" v-for="link in props.links" :to="link.path"
			:key="link.path">{{
				link.name ||
				link.path }}
		</RouterLink>
	</div>
</template>