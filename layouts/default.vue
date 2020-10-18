<template>
  <main id="main" role="main">
    <!-- <loader /> -->
    <SmoothScrollbar>
      <nuxt />
      <bottom-footer />
    </SmoothScrollbar>
    <top-header />
  </main>
</template>

<script></script>
<script>
import Vue from 'vue'
// import transitionMixin from '~/mixins/transition.js'

// Import mixins file
import utils from '~/mixins/utils.js'

Vue.mixin(utils)
export default {
  name: 'defaultLayout'
  // mixins: [transitionMixin]
}
</script>
