<template>
  <menu>
    <div class="tile green"><nuxt-link to="/intro">はじめに</nuxt-link></div>
    <div class="tile blue"><nuxt-link to="/control">操作方法</nuxt-link></div>
    <div class="tile red"><nuxt-link to="/stage">ステージ攻略</nuxt-link></div>
    <div class="tile pink"><nuxt-link to="/error">データベース</nuxt-link></div>
  </menu>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Menu",
})
</script>

<style lang="sass">
menu
  display: flex
  justify-content: space-around
.tile
  width: 300px
  height: 200px
  position: relative
  display: flex
  justify-content: center
  align-items: center
  font-size: 2.5em
  transition: all 0.2s
  &.red
    background-color: #8C332F
    border: outset 20px #AB3845
    &:hover
      background-color: darken(#8C332F, 8%)
      border-color: darken(#AB3845, 8%)
    &:active
      background-color: darken(#8C332F, 15%)
      border-color: darken(#AB3845, 15%)
  &.green
    background-color: #0D8102
    border: outset 20px #0E9E00
    &:hover
      background-color: darken(#0D8102, 8%)
      border-color: darken(#0E9E00, 8%)
    &:active
      background-color: darken(#0D8102, 15%)
      border-color: darken(#0E9E00, 15%)
  &.blue
    background-color: #306DC6
    border: outset 20px #4393F6
    &:hover
      background-color: darken(#306DC6, 8%)
      border-color: darken(#4393F6, 8%)
    &:active
      background-color: darken(#306DC6, 15%)
      border-color: darken(#4393F6, 15%)
  &.pink
    background-color: #A448AD
    border: outset 20px #C566CE
    &:hover
      background-color: darken(#A448AD, 8%)
      border-color: darken(#C566CE, 8%)
    &:active
      background-color: darken(#A448AD, 15%)
      border-color: darken(#C566CE, 15%)
  &::before
    content: ""
    display: block
    width: 300px
    height: 200px
    margin: -20px
    background-image: url(~assets/images/silhouette.png)
    background-repeat: no-repeat
    background-position: center center
    background-size: 230px auto
    position: absolute
    top: 0
    left: 0
    opacity: 0.2
  & a
    display: inline-flex
    margin: -20px
    width: 300px
    height: 200px
    justify-content: center
    align-items: center
    z-index: 10
</style>
