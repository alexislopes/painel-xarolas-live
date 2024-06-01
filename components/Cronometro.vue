<script lang="ts" setup>
const hoje12h = computed(() => {
  const hoje = new Date()
  return new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 12, 0)
})

const atraso = computed(() => {
  return useNow().value.getTime() - hoje12h.value.getTime()
})

const cronometro = ref()

const { width: screen_h } = useWindowSize()
const { width: element_h } = useElementSize(cronometro)



</script>

<template>
<div ref="cronometro"
:style="{ top: '8px', right: `${(screen_h - element_h) / 2}px` }"
  class="fixed z-10 bg-heaven flex items-center gap-2 px-3 py-1 border border-underground rounded-full flex-col w-fit select-none">

  <span class="font-black text-carmine text-xs">
    +{{ useDateFormat(new Date(atraso + (3600000 * 3)), 'HH:mm:ss').value }}
  </span>
</div>
</template>

<style scoped></style>
