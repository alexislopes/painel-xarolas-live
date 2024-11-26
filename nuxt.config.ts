// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/painel-xarolas-live/"
  },
  ssr: false,
  pages: true,

  runtimeConfig: {
    public: {
      twitch_base_url: process.env.TWITCH_BASE_URL,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      user_id: process.env.USER_ID,
      grant_type: process.env.GRANT_TYPE,
      auth_twitch_base_url: process.env.TWITCH_AUTH_BASE_URL
    }
  },

  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt", '@vueuse/nuxt']
})