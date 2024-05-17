<script lang="ts" setup>
import MdiCalendar from '~icons/mdi/calendar';

type IVideo = {
  "id": string,
  "stream_id": string,
  "user_id": string,
  "user_login": string,
  "user_name": string,
  "title": string,
  "description": string,
  "created_at": string,
  "published_at": string,
  "url": string,
  "thumbnail_url": string,
  "viewable": string,
  "view_count": number,
  "language": string,
  "type": string,
  "duration": string,
  "muted_segments"?: string[]
}

interface Props {
  video: IVideo
}

const props = defineProps<Props>()

const foramtedDate = computed(() => {
  return new Date(props.video.created_at).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
})

const hora = computed(() => {
  return `${new Date(props.video.created_at).getHours()}:${new Date(props.video.created_at).getMinutes().toString().padStart(2, '0')}`
})

const diff = computed(() => {
  return (new Date(props.video.created_at).getTime() - new Date(props.video.created_at).setHours(12, 0)) / 60000
})

const atrasoFormatado = computed(() => {
  const horas = Math.floor(diff.value / 60);
  const minutosRestantes = diff.value % 60;
  return `+${horas}:${minutosRestantes.toString().padStart(2, '0')}`;
})

</script>

<template>
<div class="p-3">
  <div class="flex items-center gap-1 text-underground mb-3">
    <MdiCalendar />
    <span class="text-xs">
      {{ foramtedDate }}
    </span>
  </div>
  <div class="grid-cols-2 grid">
    <p class="font-bold text-xl text-underground">O
      <span class="text-ivy"> pagão </span>
      abriu às <span class="text-mechanic">{{ hora }}</span>
    </p>
    <div class="flex justify-center flex-col items-center">
      <p class="font-extrabold text-3xl">{{ atrasoFormatado }}</p>
      <span class="font-semibold text-xs">de atraso</span>
    </div>
  </div>
</div>
</template>

<style scoped></style>
