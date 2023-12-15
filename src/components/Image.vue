<script setup lang="ts">
import { type ImgHTMLAttributes, type ComponentPublicInstance } from 'vue';
import mediumZoom, { type Zoom, type ZoomOptions } from 'medium-zoom';
import { isDarkMode } from '~/composables/getSystemMode';

// https://github.com/vuejs/core/issues/8286
interface Props extends /* @vue-ignore */ ImgHTMLAttributes {
  options?: ZoomOptions;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    margin: 24,
    scrollOffset: 0,
    background: isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
  }),
});

let zoom: Zoom | null = null;

function getZoom() {
  if (zoom === null) {
    zoom = mediumZoom(props.options);
  }

  return zoom;
}

function attachZoom(ref: Element | ComponentPublicInstance | null) {
  const image = ref as HTMLImageElement | null;
  const zoom = getZoom();

  if (image) {
    zoom.attach(image);
  } else {
    zoom.detach();
  }
}

watch(
  () => props.options,
  (options) => {
    const zoom = getZoom();
    zoom.update(options || {});
  }
);
</script>

<template>
  <img :ref="attachZoom" class="rounded w-96" />
</template>
