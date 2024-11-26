<template>
  <div class="flex gap-2  bg-heaven w-fit rounded-lg max-w-sm flex-col p-4">
    <div class="flex items-center gap-2">
      <FluentLive20Filled class="text-xl" />
      <h1 class="text-xl font-semibold">Agora</h1>
    </div>
    <img class="h-52 rounded-lg" :src="user.offline_image_url" />
    <div class="relative p-2">

      <div class="flex flex-col gap-2  h-full w-full justify-between">
        <div class="flex flex-col gap-2 h-full w-full">

          <div class="flex flex-col gap-2 items-center justify-center h-full">
            <p class="font-medium">
              {{ user.display_name }} está comendo mole
            </p>

            <img class="h-20 w-20 mx-auto my-auto"
              src="https://cdn.betterttv.net/emote/5e93f023ce7cbf62fe149ebe/3x.webp" alt="">

          </div>
          <span class="flex items-center flex-col ">

            <p class="text-xs">
              Siga o bruxo nas mídias sociais:
            </p>
            <div class="flex gap-2">
              <a href="https://instagram.com/matheusxarola" target="_blank">
                <MdiInstagram />
              </a>
              <a href="https://x.com/xarolao" target="_blank">
                <RiTwitterXFill />
              </a>
            </div>
          </span>

        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FluentLive20Filled from '~icons/fluent/live-20-filled';
import MdiInstagram from '~icons/mdi/instagram';
import RiTwitterXFill from '~icons/ri/twitter-x-fill';


interface User {
  id: number;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: string
}

interface Props {
  user: User
}

const props = defineProps<Props>();

const { user } = toRefs(props)

</script>

<style></style>