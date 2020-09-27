<template>
  <section>
    <h2>ステージ攻略</h2>
    <div class="contents">
      <ul class="course-list">
        <li v-for="course in $data.courses" :key="course.id">
          <nuxt-link :to="`/courses/${course.id}/`">コース{{ course.id | zeroPadding(2) }} {{ course.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
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
      courses,
    }
  },
  methods: {
    zeroPadding,
  },
})
</script>

<style lang="sass" scoped>
ul
  li
    list-style: none
    padding: 10px 0
    font-size: 120%
    &::before
      content: "-"
      margin-right: 10px
      color: #888
  a
    color: #111
</style>
