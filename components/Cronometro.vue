<template>
<div :class="{ '!bg-[#f2e1e6] !text-carmine !animate-pulse': delayed, '!bg-[#b0c1ff] !text-ivy !animate-none': streamStart }" class="bg-heaven p-4 rounded-md items-center flex flex-col w-full">
  <p>{{ title }}</p>
  <span class="font-bold text-2xl">
    {{ useDateFormat(new Date(timeToShow), 'HH:mm:ss').value }}
  </span>
  <span class="text-sm font-medium">Horas</span>
</div>
</template>

<script lang="ts" setup>
interface Props {
  streamStart?: string
  streamou: boolean
}

const props = defineProps<Props>()

const { timeToShow, title, delayed, now } = useStreamPonctuality()


function useStreamPonctuality() {

  const { now } = useNow({ controls: true })

  const delayed = computed(() => {
    return (!props.streamou && !props.streamStart) && new Date().getHours() > 12
  })

  const timeElapsed = computed(() => {
    return (now.value.getTime() - new Date().setHours(12, 0, 0, 0)) + (3600000 * 3)
  })

  const uptime = computed(() => {
    return (now.value.getTime() - new Date(props.streamStart || 0).getTime()) + (3600000 * 3)
  })

  const next = computed(() => {
    return (new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12, 0, 0, 0) - now.value.getTime()) + (3600000 * 3)
  })

  const timeToShow = computed(() => {
    return delayed.value ? timeElapsed.value : props.streamou ? next.value : uptime.value
  })


  const title = computed(() => {
    return delayed.value ? "Comendo mole há" : props.streamou ? "Próxima stream em" : "Ao vivo há"
  })

  return { timeToShow, title, delayed, now }
}

</script>

<style></style>