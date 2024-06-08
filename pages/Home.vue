<template>
<div class="flex flex-col mb-8 lg:h-[80vh] items-center justify-center">
  <p class="text-start w-full text-3xl text-bold py-6">Início</p>
  <div class="lg:flex lg:flex-row items-center lg:items-start justify-center lg:gap-4">
    <div class="relative flex gap-4 flex-col lg:flex-row items-center lg:items-start">
      <div>
        <NowCard v-if="streamInfo.data.length" :stream="streamInfo.data[0]" />
        <OffCard v-else :user="data.data[0]" />
        </div>
        <div>
          <PreviousStreamCard :video="videos.data[0]" />
          </div>
          <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4 w-96 lg:w-auto">
          <Stat :value="`${Math.floor(totalHorasUltimas7Streams)}+ Horas`" />
          <Cronometro :stream-start="streamInfo?.data[0]?.started_at" />
        </div>
        <Pontualidade :video="videos.data[index]" @prev="index--" @next="index++"/>
      </div>
    </div>
    <!-- <div class="p-4 lg:p-0 flex flex-col items-center justify-center">

      <div>

        <h2 class="text-2xl font-bold text-underground mb-2 lg:mt-0">Pontualidade</h2>
        <div class="max-w-sm">
          <div class="border border-ivy rounded-xl bg-heaven">
            <Atraso v-for="video in videos.data.slice(0, 7)" :key="video.id" :video="video" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
<CopyPasta v-if="show12h && !streamInfo.data.length" />
</template>
  
<script setup>
useSeoMeta({
  title: 'Xarolas HUB',
  ogTitle: 'Xarolas HUB',
  description: 'Fique por dentro da Xarolas Live. Agenda, sagas, terrorzão.',
  ogDescription: 'Fique por dentro da Xarolas Live. Agenda, sagas, terrorzão.',
  ogImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9f78656d-7853-40bf-bd96-90090252a858-profile_image-300x300.png',
  twitterCard: 'summary',
})

useHead({ title: 'Xarolas HUB | Início', link: [{ rel: 'icon', type: 'image/png', href: "https://static-cdn.jtvnw.net/jtv_user_pictures/9f78656d-7853-40bf-bd96-90090252a858-profile_image-300x300.png" }] })

const { $twitch } = useNuxtApp()

const { data: streamInfo, status: statusStream, error: errorStream } = await $twitch.streams.getStreamInfo()
const { data, status, error } = await $twitch.users.getUserInfo()
const { data: videos, status: statusVideos } = await $twitch.videos.getVideosList()

const show12h = ref(false)
const interval12h = ref()
const index = ref(0)

const totalHorasUltimas7Streams = computed(() => {
  return videos.value.data.slice(0, 7)
    .map(video => video.duration)
    .map(duration => duration.split(/[a-z]+/)
      .map(Number))
    .map(([hora, minuto, segundo]) => hora + (minuto / 60) + (segundo / 3600))
    .reduce((a, b) => a + b, 0)
})

function toggle12h() {
  const now = new Date();

  if (now.getHours() === 12 && now.getMinutes() < 30) {
    show12h.value = true
  } else {
    show12h.value = false
  }
}

const streamouHoje = computed(() => {
  const hoje = new Date().setHours(0, 0, 0, 0)
  return new Date(videos.value.data[0].created_at).setHours(0, 0, 0, 0) === hoje
})

onMounted(() => {
  interval12h.value = setInterval(toggle12h, 1000)
})

onUnmounted(() => {
  clearInterval(interval12h)
})

watch([statusStream, statusVideos, status], (value) => {
  console.log(value)
})
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

html,
body {
  font-family: "Sora", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

}
</style>
  
  