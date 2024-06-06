<template>
<div class="min-w-sm bg-heaven h-fit py-4 px-6  rounded-lg flex flex-col gap-1">
  <span class="font-bold text-2xl">{{ value }}</span>
  <p class="text-xs">Streamadas nas últimas 7 streams</p>
</div>
</template>

<script lang="ts" setup>
interface Props {
  value: string
}
defineProps<Props>()
</script>

<style></style>