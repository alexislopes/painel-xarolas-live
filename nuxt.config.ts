// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/x-hub/"
  },
  ssr: false,
  pages: true,

  runtimeConfig: {
    public: {
      twitch_base_url: process.env.TWITCH_BASE_URL,
      authorization: process.env.AUTHORIZATION,
      client_id: process.env.CLIENT_ID,
      user_id: process.env.USER_ID
    }
  },

  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt", '@vueuse/nuxt']
})