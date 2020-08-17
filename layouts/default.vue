<template>
  <main id="main" role="main">
    <SmoothScrollbar>
      <nuxt />
      <BottomFooter />
    </SmoothScrollbar>
    <TopHeader />
  </main>
</template>

<script></script>
<script>
import Vue from 'vue'

// Import mixins file
import utils from '~/mixins/utils.js'

Vue.mixin(utils)
export default {}
</script>

<style></style>
