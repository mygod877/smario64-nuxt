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
        <section>
          <h2>コース{{ $route.params.id | zeroPadding(2) }} {{ $data.course.title }}</h2>
          <div class="contents">
            <div v-for="star in $data.course.stars" :key="star.id" class="subsection">
              <h3>☆{{ star.id }} {{ star.title }}</h3>
              <video :src="`/captures/${zeroPadding($data.course.id, 2)}_${star.id}.mp4`" controls></video>
            </div>
          </div>
        </section>
        <section>
          <div class="contents">
            <div class="pagenation">
              <nuxt-link v-if="coursePrev" :to="`/courses/${coursePrev.id}/`">
                <div class="prev">
                  <p class="course-id">コース{{ coursePrev.id | zeroPadding(2) }}</p>
                  <p class="course-title">{{ coursePrev.title }}</p>
                </div>
              </nuxt-link>
              <div class="vertical-line" />
              <nuxt-link v-if="courseNext" :to="`/courses/${courseNext.id}/`">
                <div class="next">
                  <p class="course-id">コース{{ courseNext.id | zeroPadding(2) }}</p>
                  <p class="course-title">{{ courseNext.title }}</p>
                </div>
              </nuxt-link>
              <br class="clear" />
            </div>
          </div>
        </section>
      </main>
    </div>
    <div class="right">
      <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT2 + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { zeroPadding } from "@/utils"
import courses from "@/assets/data/courses.json"

export default Vue.extend({
  filters: {
    zeroPadding,
  },
  data() {
    return {
      GOOGLE_ADSENSE_SLOT1: process.env.GOOGLE_ADSENSE_SLOT1,
      GOOGLE_ADSENSE_SLOT2: process.env.GOOGLE_ADSENSE_SLOT2,
      course: courses[+this.$route.params.id - 1],
      coursePrev: courses[+this.$route.params.id - 2] || false,
      courseNext: courses[+this.$route.params.id] || false,
    }
  },
  methods: {
    zeroPadding,
  },
  validate({ params }) {
    return /^\d+$/.test(params.id) && +params.id >= 1 && +params.id <= 15
  },
})
</script>

<style lang="sass" scoped>
.pagenation
  position: relative
  .prev, .next
    width: 50%
    height: 120px
    background-repeat: no-repeat
    background-size: 100px 100px
    background-position-y: center
    padding: 20px 80px
    transition: all 0.2s
    &:hover
      background-color: rgba(255, 255, 255, 0.8)
    +mq(sm)
      width: 100%
      height: 50px
      margin: 5px
      background-size: 40px 40px
      padding: 0
  .prev
    float: left
    text-align: right
    background-image: url(~assets/images/icon_left.png)
    +mq(sm)
      margin-bottom: 10px
      text-align: left
      padding-left: 50px
  .next
    float: right
    text-align: left
    background-image: url(~assets/images/icon_right.png)
    background-position-x: right
    +mq(sm)
      margin-top: 10px
      text-align: right
      padding-right: 50px
  .vertical-line
    width: 5px
    height: 120px
    background-color: #4b4b4b
    position: absolute
    left: calc(50% - 2.5px)
    +mq(sm)
      width: 100%
      height: 2px
      left: auto
      top: calc(50% - 1px)
  .course-id
    font-size: 120%
  .course-title
    font-size: 150%
    font-weight: bold
  a
    color: #111
</style>
