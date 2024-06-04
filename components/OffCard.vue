<template>
<div class="flex gap-2  bg-heaven w-fit rounded-lg">
  <img class="h-56 rounded-lg" :src="user.offline_image_url" />
  <div class="relative p-2">

    <div class="flex flex-col gap-2  h-full w-full justify-between">
      <div class="flex flex-col gap-2 h-full w-full">

        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <p class="font-medium">
            {{ user.display_name }} está comendo mole
          </p>

          <img class="h-20 w-20 mx-auto my-auto" src="https://cdn.betterttv.net/emote/5e93f023ce7cbf62fe149ebe/3x.webp"
            alt="">
        </div>

      </div>

    </div>
  </div>
</div>
</template>

<script lang="ts" setup>

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