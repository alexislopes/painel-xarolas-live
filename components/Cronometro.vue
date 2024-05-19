<script lang="ts" setup>


const hoje12h = computed(() => {
  const hoje = new Date()
  return new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 12, 0)
})

const atraso = computed(() => {
  return useNow().value.getTime() - hoje12h.value.getTime()
})

</script>

<template>
<div
  class="z-10 bg-heaven flex items-center gap-2 p-4 border border-underground rounded-md flex-col w-fit">
  <p>O baiano ainda nao bateu ponto</p>
  <span class="font-black text-carmine text-3xl">
    +{{ useDateFormat(new Date(atraso + (3600000 * 3)), 'HH:mm:ss').value }}
  </span>
  <div class="flex items-center gap-1">
    <img src="https://pbs.twimg.com/media/F72UqqOXEAAf6xK?format=jpg&name=240x240" class="h-7 rounded-full" alt="">
    <p class="text-xs px-2 py-1 rounded-full shadow-md">

      Vou dar uma atrasadinha, guys ✌️😁✌️
    </p>
  </div>
</div>
</template>

<style scoped></style>
