<template>
  <div>
    <header>
      <h1><img class="title" src="~/assets/images/title.png" alt="スーパーマリオ64完全攻略サイト" /></h1>
      <Menu />
    </header>
    <main>
      <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
      <section>
        <h2>はじめに</h2>
        <div class="contents">
          <div class="text">
            <p>
              ストーリーの重大なネタバレを多く含みます。まだプレイを1度もしていない方、自分の力でクリアをしたい方は<br />
              ブラウザバックを強く推奨します。また、古いゲームであるため有名なバグなどもありますが<br />
              当サイトではこのゲームを最大限尊重するためバグ等を利用した攻略法は 取り扱いません。
            </p>
          </div>
        </div>
      </section>
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

<style lang="sass">
.center
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
img.title
  width: 1280px
</style>
