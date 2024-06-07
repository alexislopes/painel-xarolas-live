<template>
<div class="bg-heaven p-4 rounded-md items-center flex flex-col w-full">
  <p>{{ title }}</p>
  <span class="font-bold text-2xl">
    {{ useDateFormat(new Date((uptime || next) + (3600000 * 3)), 'HH:mm:ss').value }}
  </span>
  <span class="text-sm font-medium">Horas</span>
</div>
</template>

<script lang="ts" setup>
interface Props {
  streamStart: string
}

const props = defineProps<Props>()

const doze = computed(() => {
  const hoje = new Date()
  const passou = hoje.getHours() > 12

  if (passou) return new Date(new Date().setDate(hoje.getDate() + 1)).setHours(12, 0, 0, 0)
  else return hoje.setHours(12, 0, 0, 0)
})

const uptime = computed(() => {
  return useNow().value.getTime() - new Date(props.streamStart).getTime()
})

const next = computed(() => {
  return new Date(doze.value).getTime() - useNow().value.getTime()
})

const title = computed(() => {
  return props.streamStart ? "Ao vivo há" : "Próxima stream em"
})

</script>

<style>

</style>