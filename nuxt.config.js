export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "スーパーマリオ64 完全攻略サイト",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "スーパーマリオ64 完全攻略サイト",
      },
      { hid: "og:site_name", property: "og:site_name", content: "スーパーマリオ64 完全攻略サイト" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "http://smario64.dslab.work" },
      { hid: "og:title", property: "og:title", content: "スーパーマリオ64 完全攻略サイト" },
      { hid: "og:description", property: "og:description", content: "スーパーマリオ64 完全攻略サイト" },
      { hid: "og:image", property: "og:image", content: "/title.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-adsense",
      {
        id: process.env.NUXT_ENV_GOOGLE_ADSENSE_ID,
        pageLevelAds: true,
      },
    ],
    "@nuxtjs/style-resources",
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "error",
        path: "*",
        component: resolve("~/pages/error.vue"),
      })
    },
  },
  env: {
    GOOGLE_ADSENSE_ID: process.env.NUXT_ENV_GOOGLE_ADSENSE_ID || "ca-pub-0000000000000000",
    GOOGLE_ADSENSE_SLOT1: process.env.NUXT_ENV_GOOGLE_ADSENSE_SLOT1 || "0000000000",
    GOOGLE_ADSENSE_SLOT2: process.env.NUXT_ENV_GOOGLE_ADSENSE_SLOT2 || "0000000000",
  },
  styleResources: {
    sass: ["@/assets/sass/_mediaquery.sass"],
  },
}
