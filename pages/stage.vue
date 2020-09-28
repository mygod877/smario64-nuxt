<template>
  <div class="base">
    <div class="left">
      <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT2 + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
    </div>
    <div class="central">
      <header>
        <h1><img class="title" src="~/assets/images/title.png" alt="スーパーマリオ64完全攻略サイト" /></h1>
        <Menu />
      </header>
      <main>
        <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT1 + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
        <CourseList />
      </main>
    </div>
    <div class="right">
      <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT2 + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      GOOGLE_ADSENSE_SLOT1: process.env.GOOGLE_ADSENSE_SLOT1,
      GOOGLE_ADSENSE_SLOT2: process.env.GOOGLE_ADSENSE_SLOT2,
    }
  },
})
</script>

<style lang="sass" scoped></style>
