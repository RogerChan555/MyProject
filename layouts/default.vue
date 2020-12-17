<template>
  <main id="main" role="main">
    <!-- <loader /> -->
    <div v-if="$nuxt.isOffline">You are offline</div>
    <top-header />
    <SmoothScrollbar>
      <nuxt />
      <bottom-footer />
    </SmoothScrollbar>
  </main>
</template>

<script></script>
<script>
import Vue from 'vue'
import { gsap } from 'gsap'

export default {
  data() {
    return {
      cursorTl: new gsap.timeline({
        paused: true
      })
    }
  },
  mounted: function () {
    // this.cursorTl
    //   .to(this.$refs.cursor, 0.1, {
    //     scale: 0
    //   })
    //   .to(this.$refs.cursorFollow, 0.1, {
    //     scale: 3
    //   })
  },
  created: function () {
    if (process.client) {
      window.addEventListener('mousemove', this.cursorAttach)
    }
  },
  destroyed: function () {
    if (process.client) {
      window.removeEventListener('mousemove', this.cursorAttach)
    }
  },
  methods: {
    cursorAttach(e) {
      gsap.set('.js-loader-bg', {
        x: e.clientX,
        y: e.clientY
        // scale: 0.5
      })
      // gsap.to('.cursor-follow', 0.9, {
      //   x: e.clientX,
      //   y: e.clientY
      // })
    },
    cursorEnter() {
      this.cursorTl.play()
    },
    cursorLeave() {
      this.cursorTl.reverse()
    }
  }
}
</script>
