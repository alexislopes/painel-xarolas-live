<template>
<div class="flex gap-2 bg-heaven w-fit rounded-lg">
  <div>
    <div class="m-2 w-fit uppercase absolute text-white bg-[#e91916] text-sm px-2 rounded font-medium">
      ao vivo
    </div>
    <img class="h-56 rounded-lg" :src="thumb" />
  </div>
  <div class="relative p-2">

    <div class="flex flex-col gap-2 max-w-80 h-full justify-between">
      <div class="flex flex-col gap-2">

        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium">
            {{ stream.user_name }} está streamando {{ stream.game_name }}
          </p>
          <p class="text-sm font-semibold">{{ stream.title }}</p>
        </div>
        <span class="flex gap-2 font-semibold text-[#ff4f4d] text-sm">
          <MajesticonsUserLine />
          {{ stream.viewer_count }}
        </span>
      </div>
      <a href="https://twitch.tv/xarola_" target="_blank"
        class="flex items-center justify-between cursor-pointer gap-1 bg-ivy text-white p-1 px-2 rounded-lg font-medium">
        Assistir
        à
        stream
        <MajesticonsArrowRight />
      </a>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import MajesticonsArrowRight from '~icons/majesticons/arrow-right';
import MajesticonsUserLine from '~icons/majesticons/user-line';

interface Stream {
  id: string
  user_id: string
  user_login: string
  user_name: string
  game_id: number
  game_name: string
  type: string
  title: string
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: string[]
  tags: string
  is_mature: boolean
}

interface Props {
  stream: Stream
}

const props = defineProps<Props>();

const { stream } = toRefs(props)

const thumb = computed(() => {
  return stream.value.thumbnail_url.replace('{width}', 1920).replace('{height}', 1080)
})

</script>

<style></style>