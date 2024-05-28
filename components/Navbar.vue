<template>
<div class="fixed top-0 bottom-0 left-0 right-0 bg-underground/40 z-10">
  <div ref="nav" :class="{ closed: !opened }" class="nav bg-white absolute top-0 bottom-0 rounded-tr-lg rounded-br-lg">
    <div class="w-full flex justify-center p-20">
      <Logo class="w-[200px] h-[100px]" />
    </div>
    <div class="px-6 flex flex-col gap-4">
      <NuxtLink to="/home" class="flex gap-3 text-2xl font-medium text-underground truncate"
        :class="{ '!text-mechanic': path === '/home' }">
        <MajesticonsHomeSimple v-if="path === '/home'" />
        <MajesticonsHomeSimpleLine v-else />
        Home
      </NuxtLink>
      <NuxtLink to="/Sagas" class="flex gap-3 text-2xl font-medium text-underground truncate"
        :class="{ '!text-mechanic': path === '/Sagas' }">
        <MajesticonsTvOld v-if="path === '/Sagas'" />
        <MajesticonsTvOldLine v-else />
        Sagas de vovô
      </NuxtLink>
    </div>
  </div>

</div>
</template>

<script lang="ts" setup>
import MajesticonsHomeSimple from '~icons/majesticons/home-simple';
import MajesticonsHomeSimpleLine from '~icons/majesticons/home-simple-line';
import MajesticonsTvOld from '~icons/majesticons/tv-old';
import MajesticonsTvOldLine from '~icons/majesticons/tv-old-line';

const opened = ref(true)
const nav = ref()

onClickOutside(nav, () => {
  opened.value = false
})

const { path } = useRoute()
</script>

<style>
.nav {
  animation: slide 0.5s linear forwards;
}

.closed.nav {
  animation: slide-back 0.5s linear forwards;
}

@keyframes slide {

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

@keyframes slide-back {

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
</style>