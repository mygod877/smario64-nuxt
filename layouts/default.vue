<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  background-image: url(~assets/images/back.png)
  color: #111

video
  margin: 20px
  outline: none
  width: 960px
  height: 540px

a
  color: #ffffff
  text-decoration: none

h2
  text-shadow: 3px 2px 3px rgba(80, 80, 80, 0.8)
  padding: 5px 10px
  border-left: 8px solid #500
  letter-spacing: 0.4em
  font-size: 1.6em

h3
  padding: 5px 10px
  border-left: 3px solid #500
  letter-spacing: 0.4em
  font-size: 1.2em
  white-space: nowrap
  .icon:nth-child(2)
    transform: scale(-1, 1)

.base
  display: flex
  justify-content: center
.dummy
  border: 1px solid #111
  width: 200px
  height: 500px

.central
  width: 1280px
  margin: 30px 0
  background-color: rgba(255, 255, 255, 0.2)

.left, .right
  margin: 30px 10px
  position: sticky
  align-self: baseline

header
  text-align: center

main
  width: 1080px
  min-height: calc(100vh - 300px)
  margin: 0 auto
  padding: 20px
  section
    margin-bottom: 20px
    padding: 20px
    background-color: rgba(255, 255, 255, 0.6)
  .contents
    padding: 20px
  .text
    line-height: 2em
    padding: 10px
    font-size: 110%

.clear
  clear: both
</style>
