<script lang="ts" setup></script>

<template>
<div class="h-screen">
  <div class="relative min-h-16">
    <Navbar class="p-4" />
  </div>
  <div class="w-full flex justify-center">

    <div class="max-w-6xl">
      <slot />
    </div>
  </div>
</div>
</template>

<style scoped></style>
