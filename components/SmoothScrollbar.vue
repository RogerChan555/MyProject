<template>
  <div id="scroll-area" ref="scrollArea">
    <div class="smooth-scrollbar">
      <div class="scroll-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// import { ScrollContainer } from '~/static/js/main.js'
// import { ScrollContainer } from '~/plugins/external/main.js'
import SmoothScrollbar from 'smooth-scrollbar'

const options = {
  damping: 0.055,
  renderByPixels: true,
  thumbMinSize: 20,
  alwaysShowTracks: false,
  continuousScrolling: true,
  delegateTo: null,
  plugins: {}
}

export default {
  name: 'SmoothScrollbar',
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      // let scrollbar = new ScrollContainer(this.$refs.scrollArea)
      const scrollbar = SmoothScrollbar.init(this.$refs.scrollArea, options)
      window.addEventListener('resize', scrollbar.update())
      scrollbar.addListener((s) => {
        if (s.offset.y >= 30) {
          document.querySelector('header').classList.add('onScroll')
        } else {
          document.querySelector('header').classList.remove('onScroll')
        }
      })
    })
  },
  // updated() {
  //   this.scrollContainer.scrollbar.update()
  // },

  // beforeDestroy() {
  //   window.removeEventListener(
  //     'resize',
  //     this.scrollContainer.scrollbar.update()
  //   )
  // },

  // destroyed() {
  //   this.scrollContainer.scrollbar.destroy()
  // },
  methods: {
    MathUtils(max, time, speed) {
      return (1 - speed) * max + speed * time
    },

    itemParallax(element) {
      const parallaxItem = element.querySelector('.ac-parallax-item')
      const dataY = parallaxItem.dataset.y
      const dataMax = parallaxItem.dataset.max > 0 ? -1 : 1
      const dataSpeed = parallaxItem.dataset.speed
      const rect = parallaxItem.getBoundingClientRect()
      const c = (this.dataMax * rect.top) / window.innerHeight
      const val = this.MathUtils(dataMax, c, dataSpeed)
      const position = parallaxItem.classList.contains('ac-px')
        ? Math.round((dataY * val * parallaxItem.clientHeight) / 100) + 'px'
        : dataY * val + '%'

      // parallaxItem.style.transform = 'translate3d(0, '.concat(
      //   this.dataY * this.dataMax,
      //   '%, 0)'
      // )
      this.scrollContainer.scrollbar.addListener(() => {
        parallaxItem.style.transform = 'translate3d(0, '.concat(
          position,
          ', 0)'
        )
      })
    }
  }
}
</script>

<style scoped>
.smooth-scrollbar {
  width: 100%;
  height: 100%;
}
#scroll-area {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9;
  display: block;
  outline: none;
}
</style>
