<template>
<div class="">
  <Navbar />
  <h1 class="text-3xl font-bold px-5 my-5 text-underground lg:px-28">Home</h1>
  <div class="flex justify-center py-3 lg:absolute relative lg:top-4 lg:right-4">
    <Cronometro v-if="!streamInfo.data.length && new Date().getHours() >= 12 && !streamouHoje"  />
  </div>
  <div class="lg:flex lg:flex-row lg:justify-center lg:gap-10">
    <div class="relative">
      <img :src="thumb" class="lg:w-[60vw] lg:rounded-2xl" alt="">
      <div class="flex justify-center lg:justify-start lg:p-5">
        <img class="rounded-full w-48 h-48 absolute lg:relative -translate-y-1/2 lg:translate-y-0 lg:w-16 lg:h-16"
          :src="data.data[0].profile_image_url" alt="">
        <div class="bg-cloudy lg:bg-transparent rounded-xl mt-28 lg:mt-0 m-5 lg:m-0">
          <p v-if="!streamInfo.data.length" class="font-bold text-2xl lg:text-base p-5 text-underground">O <span
              class="text-mechanic">filisteu</span> está <span class="text-ivy">comendo
              mole</span></p>
          <div v-else class="text-2xl lg:text-base text-underground px-5">

            <p class="font-bold ">
              {{ streamInfo.data[0].title }}
            </p>
            <p>{{ streamInfo.data[0].game_name }}</p>
          </div>
        </div>
      </div>

    </div>
    <div class="p-5 lg:p-0">

      <h2 class="text-2xl font-bold text-underground mb-5 mt-10 lg:mt-0">Histórico de atrasos</h2>
      <div class="">
        <div class="border border-ivy rounded-xl bg-heaven">
          <Atraso v-for="video in videos.data.slice(0, 7)" :key="video.id" :video="video" />
        </div>
      </div>
    </div>
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

const thumb = computed(() => {
  return streamInfo.value.data.length ? streamInfo.value.data[0].thumbnail_url.replace('{width}', 1920).replace('{height}', 1080) : data.value.data[0].offline_image_url
})

const show12h = ref(false)
const interval12h = ref()

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

