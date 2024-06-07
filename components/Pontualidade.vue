<template>
<div class="flex items-center bg-heaven justify-between p-4 rounded-md ">
  <EvaArrowLeftFill @click="$emit('prev')" />
  <div class="px-4 flex flex-col gap-2 w-full">
    <CarbonTime class="text-2xl" />
    <div>
      <h1 class="text-xl font-semibold">Pontualidade</h1>
      <p class="text-sm">{{ timeAgo }}</p>
    </div>
    <div class="flex items-center justify-center gap-3 p-2">
      <p class="text-bold text-xl">{{ hora }}</p>
      <CarbonArrowRight />
      <p class="text-bold text-xl">{{ atrasoFormatado }}</p>
    </div>
    <span v-if="diff > 0" class="font-semibold text-xs text-center">atrasadinha, guys ✌️😁✌️</span>
    <span v-else class="font-semibold text-xs text-center">adiantado 👏</span>

  </div>
  <EvaArrowRightFill @click="$emit('next')" />
</div>
</template>

<script lang="ts" setup>
import CarbonArrowRight from '~icons/carbon/arrow-right';
import CarbonTime from '~icons/carbon/time';
import EvaArrowLeftFill from '~icons/eva/arrow-left-fill';
import EvaArrowRightFill from '~icons/eva/arrow-right-fill';

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


const hora = computed(() => {
  return `${new Date(props.video.created_at).getHours()}:${new Date(props.video.created_at).getMinutes().toString().padStart(2, '0')}`
})

const diff = computed(() => {
  return (new Date(props.video.created_at).getTime() - new Date(props.video.created_at).setHours(12, 0)) / 60000
})

const atrasoFormatado = computed(() => {
  const horas = Math.floor(diff.value / 60);
  const minutosRestantes = diff.value % 60;
  return `${Math.abs(horas)}h${Math.abs(minutosRestantes.toString().padStart(2, '0'))}m`;
})

const timeAgo = computed(() => {
  return useTimeAgo(new Date(props.video.created_at)).value
    .replace('yesterday', 'ontem')
    .replace('second', 'segundos')
    .replace('minute', 'minutos')
    .replace('hour', 'hora')
    .replace('day', 'dia')
    .replace('week', 'semana')
    .replace('month', 'mês')
    .replace('year', 'ano')
    .replace('ago', 'atrás')
    .replace('last', 'última')
})

</script>

<style></style>