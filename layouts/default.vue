<template lang='pug'>
  div
    .app__fonts-preload
      span.app__fonts-preload_roboto-regular
      span.app__fonts-preload_roboto-bold
    nuxt
</template>

<script>
import 'icons'

export default {}
</script>


<style lang='sass'>

@import '~styles/index'
@import '~styles/fonts/index'

*, *::after, *::before
  box-sizing: border-box

html
  font-size: $f-size

body
  @include font(default)
  line-height: 1.6
  position: relative
  background-color: #fff

  // &::-webkit-scrollbar
  //   display: none

  &.restrictScroll
    overflow: hidden

h1, h2, h3, h4, h5, h6, ul
  margin: 0
  padding: 0

textarea, input, select
  // appearance: none
  border-radius: 0

.app__fonts-preload
  opacity: 0

  .app__fonts-preload_roboto-regular
    @include font(default)

  .app__fonts-preload_roboto-bold
    @include font(bold)

</style>
