<template>
<button class="p-4" @click="status = ''">
  <MajesticonsMenu class="text-3xl" />
</button>
<div v-if="status === ''" class="fixed top-0 bottom-0 left-0 right-0 bg-underground/40 z-[1]"></div>
<div ref="nav" :class="status"
  class="nav z-10 bg-white fixed top-0 bottom-0 rounded-tr-lg rounded-br-lg lg:animate-[slide-lg_0.5s_linear_forwards] md:animate-[slide-md_0.5s_linear_forwards] animate-[slide-sm_0.5s_linear_forwards]">
  <div class="relative h-full">

  <div class="w-full flex justify-center p-20">
    <Logo class="w-[200px] h-[100px]" />
  </div>
  <div class="px-6 flex flex-col gap-5">
    <NuxtLink to="/home" class="flex gap-3 text-2xl font-medium text-underground truncate"
      :class="{ '!text-mechanic': path === '/home' }">
      <MajesticonsHomeSimple v-if="path === '/home'" />
      <MajesticonsHomeSimpleLine v-else />
      Home
    </NuxtLink>
    <div class="flex gap-2">
      <NuxtLink class="flex gap-3 text-2xl font-medium text-underground truncate opacity-40"
        :class="{ '!text-mechanic': path === '/Sagas' }">
        <MajesticonsTvOld v-if="path === '/Sagas'" />
        <MajesticonsTvOldLine v-else />
        Sagas de vovô
      </NuxtLink>
      <div class="flex items-center gap-2">

        <img class="rounded-full" src="https://cdn.betterttv.net/emote/5f957f5e6f583802e389aee7/1x.webp" alt="">
      </div>
    </div>
    <div class="flex gap-2">
      <NuxtLink class="flex gap-3 text-2xl font-medium text-underground truncate opacity-40">
        <MajesticonsSkullLine />
        Terrorzão
      </NuxtLink>
      <div class="flex items-center gap-2">

        <img class="rounded-full" src="https://cdn.betterttv.net/emote/5f957f5e6f583802e389aee7/1x.webp" alt="">
      </div>
    </div>
    <div class="flex gap-2">
      <NuxtLink class="flex gap-3 text-2xl font-medium text-underground truncate opacity-40">
        <MajesticonsCalendar />
        Agenda
      </NuxtLink>
      <div class="flex items-center gap-2">

        <img class="rounded-full" src="https://cdn.betterttv.net/emote/5f957f5e6f583802e389aee7/1x.webp" alt="">
      </div>
    </div>
  </div>
  <p class="absolute text-center bottom-0 text-xs truncate w-full p-4 opacity-70">Designed & Developed with 💖 by <a class="underline" href="https://alexislopes.github.io/alexisme/" target="_blank">Alexis Lopes</a> | {{ pkg.version }}</p>
</div>

</div>
</template>

<script lang="ts" setup>
import MajesticonsCalendar from '~icons/majesticons/calendar';
import MajesticonsHomeSimple from '~icons/majesticons/home-simple';
import MajesticonsHomeSimpleLine from '~icons/majesticons/home-simple-line';
import MajesticonsMenu from '~icons/majesticons/menu';
import MajesticonsSkullLine from '~icons/majesticons/skull-line';
import MajesticonsTvOld from '~icons/majesticons/tv-old';
import MajesticonsTvOldLine from '~icons/majesticons/tv-old-line';
import * as pkg from '../package.json';

const status = ref('idle')
const nav = ref()

onClickOutside(nav, () => {
  status.value = 'closed'
})

const { path } = useRoute()


</script>

<style>
@keyframes hide-backdrop {
  100% {
    @apply hidden
  }
}

.closed.nav {
  @apply animate-[slide-back-sm_0.5s_linear_forwards] md:animate-[slide-back-md_0.5s_linear_forwards] lg:animate-[slide-back-lg_0.5s_linear_forwards];
}

.idle.nav {
  @apply hidden
}

@keyframes slide-sm {

  0% {
    width: 0%;
  }

  50% {
    width: 50%;
  }

  100% {
    width: 80%;
  }

}

@keyframes slide-md {

  0% {
    display: block;
    width: 0%;
  }

  50% {
    width: 25%;
  }

  100% {
    width: 40%;
  }

}

@keyframes slide-lg {

  0% {
    display: block !important;
    width: 0%;
  }

  50% {
    width: 10%;
  }

  100% {
    display: block !important;
    width: 20%;
  }

}

@keyframes slide-back-sm {

  0% {
    width: 80%;
  }

  50% {
    width: 50%;
  }

  100% {
    width: 0%;
    display: none;
  }

}

@keyframes slide-back-md {

  0% {
    width: 40%;
  }

  50% {
    width: 25%;
  }

  100% {
    width: 0%;
    display: none;
  }

}

@keyframes slide-back-lg {

  0% {
    width: 20%;
  }

  50% {
    width: 10%;
  }

  100% {
    width: 0%;
    display: none;
  }

}
</style>