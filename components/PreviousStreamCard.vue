<template>
<div class="flex gap-2 bg-heaven w-fit rounded-lg flex-col max-w-sm p-4">
  <div>
    <!-- <div class="m-2 w-fit uppercase absolute text-white bg-[#e91916] text-sm px-2 rounded font-medium">
      ao vivo
    </div> -->
    <img class="h-56 rounded-lg" :src="thumb" />
  </div>
  <div class="relative p-2">

    <div class="flex flex-col gap-2 h-full justify-between">
      <div class="flex flex-col gap-2">

        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium">
            {{ video.user_name }} esteve online {{ timeAgo }}
          </p>
          <p class="text-sm font-semibold">{{ video.title }}</p>
        </div>
        <span class="flex gap-2 font-semibold text-sm">
          <MajesticonsEye />
          {{ video.view_count }}
        </span>
      </div>
      <a :href="video.url" target="_blank"
        class="flex items-center justify-between cursor-pointer gap-1 bg-ivy text-white p-1 px-2 rounded-lg font-medium">
        Assistir
        à
        VOD
        <MajesticonsArrowRight />
      </a>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import MajesticonsArrowRight from '~icons/majesticons/arrow-right';
import MajesticonsEye from '~icons/majesticons/eye';


interface Video {
  id: string,
  stream_id: string,
  user_id: string,
  user_login: string,
  user_name: string,
  title: string,
  description: string,
  created_at: string,
  published_at: string,
  url: string,
  thumbnail_url: string,
  viewable: string,
  view_count: number,
  language: string,
  type: string,
  duration: string,
  muted_segments?: string[]
}

interface Props {
  video: Video
}

const props = defineProps<Props>();

const { video } = toRefs(props)

const thumb = computed(() => {
  return video.value.thumbnail_url.replace('%{width}', 1920).replace('%{height}', 1080)
})

const timeAgo = computed(() => {
  return useTimeAgo(new Date(video.value.created_at)).value
    .replace('yesterday', 'ontem')
    .replace('second', 'segundos')
    .replace('minute', 'minutos')
    .replace('hour', 'hora')
    .replace('day', 'dia')
    .replace('week', 'semana')
    .replace('month', 'mês')
    .replace('year', 'ano')
    .replace('ago', '')
})

</script>

<style></style>