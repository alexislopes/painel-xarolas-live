<template>
<div class="flex gap-2 bg-heaven w-fit rounded-lg">
  <div>
    <!-- <div class="m-2 w-fit uppercase absolute text-white bg-[#e91916] text-sm px-2 rounded font-medium">
      ao vivo
    </div> -->
    <img class="h-56 rounded-lg" :src="thumb" />
  </div>
  <div class="relative p-2">

    <div class="flex flex-col gap-2 max-w-80 h-full justify-between">
      <div class="flex flex-col gap-2">

        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium">
            {{ video.user_name }} esteve online há {{ useTimeAgo(new Date(video.created_at)).value.replace('hour',
              'hora').replace('ago', '') }}
          </p>
          <p class="text-sm font-semibold">{{ video.title }}</p>
        </div>
        <!-- <span class="flex gap-2 font-semibold text-[#ff4f4d] text-sm">
          <MajesticonsUserLine />
          {{ stream.viewer_count }}
        </span> -->
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

</script>

<style></style>