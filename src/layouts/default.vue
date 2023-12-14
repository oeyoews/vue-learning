<template>
  <div class="container max-w-4xl mx-auto my-4 prose antialiased">
    <RouterView />
    <button>
      <RouterLink to="/" class="no-underline hover:underline">Home</RouterLink>
    </button>
  </div>
</template>
