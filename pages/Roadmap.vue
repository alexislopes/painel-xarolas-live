<template>
<div class="h-[90vh] w-full flex items-center justify-center flex-col px-6 py-20">
  <div class="flex flex-col gap-6">
    <div>
      <CarbonRoadmap class="py-1 text-5xl" />
      <h1 class="font-extrabold text-3xl">Roadmap Xarola HUB</h1>
      <p>Funcionalidades que estão por vir</p>
    </div>
    <div class="flex items-center gap-4 bg-heaven p-3 rounded-lg">
      <div class="flex flex-col items-center gap-1 min-w-max">
        <MdiCalendar class="text-4xl" />
        <p class="text-sm">Amanhã às 12h</p>
      </div>
      <div>
        <h1 class="font-bold text-2xl">Login</h1>
        <p>Faça login com a conta da Twitch</p>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-heaven p-3 rounded-lg">
      <div class="flex flex-col items-center gap-1 min-w-max">
        <MdiCalendar class="text-4xl" />
        <p class="text-sm">Amanhã às 12h</p>
      </div>
      <div>
        <h1 class="font-bold text-2xl">Sagas de vovô</h1>
        <p>Navegue pelas sagas finalizadas, avalie-as, sugira novas sagas, dê upvote nas sugeridas pela comunidade.</p>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-heaven p-3 rounded-lg">
      <div class="flex flex-col items-center gap-1 min-w-max">
        <MdiCalendar class="text-4xl" />
        <p class="text-sm">Amanhã às 12h</p>
      </div>
      <div>
        <h1 class="font-bold text-2xl">Terrorzão</h1>
        <p>Navegue pelos terrorzões finalizados, avalie-os, sugira novos, dê upvote nos sugeridos pela comunidade.</p>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-heaven p-3 rounded-lg">
      <div class="flex flex-col items-center gap-1 min-w-max">
        <MdiCalendar class="text-4xl" />
        <p class="text-sm">Amanhã às 12h</p>
      </div>
      <div>
        <h1 class="font-bold text-2xl">Agenda</h1>
        <p>Veja como será a semana na Xarola's Live</p>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import CarbonRoadmap from '~icons/carbon/roadmap';
import MdiCalendar from '~icons/mdi/calendar';
</script>

<style scoped></style>