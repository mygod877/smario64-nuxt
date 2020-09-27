<template>
  <div>
    <header>
      <h1><img class="title" src="~/assets/images/title.png" alt="スーパーマリオ64完全攻略サイト" /></h1>
      <Menu />
    </header>
    <main>
      <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
      <CourseList />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      GOOGLE_ADSENSE_SLOT: process.env.GOOGLE_ADSENSE_SLOT,
    }
  },
})
</script>

<style lang="sass" scoped></style>
