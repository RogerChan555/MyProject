<template lang="html">
  <div
    id="appLoading"
    class="o-loader js-loader"
    :class="{ 'is-loading': loading }"
  >
    <div ref="loaderBG" class="o-loader__bg js-loader-bg"></div>
    <div class="o-loader__anim">
      <div class="o-loader__gradients"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    scale() {
      if (process.client) {
        let setSizes = Math.sqrt(
          Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
        )
        return window.innerWidth > window.innerHeight
          ? setSizes / window.innerWidth
          : setSizes / window.innerHeight
      }
    },
    start() {
      this.loading = true
      if (process.client) {
        gsap.to(this.$refs.loaderBG, {
          duration: 0.8,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          transformOrigin: '50% 50%',
          scale: this.scale,
          ease: 'Expo.easeInOut'
        })
      }
    },
    finish() {
      if (process.client) {
        setTimeout(() => {
          this.loading = false
          gsap.fromTo(
            this.$refs.loaderBG,
            {
              scale: this.scale
            },
            {
              duration: 0.8,
              scale: 0,
              ease: 'Expo.easeIn'
            }
          )
        }, 1200)
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/loading.scss';
</style>
