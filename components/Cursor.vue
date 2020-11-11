<template>
  <span ref="cursor" class="o-cursor js-cursor">
    <span ref="cursorInner" class="o-cursor__inner js-cursor-inner">
      <span ref="cursorContent" class="o-cursor__content js-cursor-content">
        <span
          ref="cursorLabel"
          class="o-cursor__label js-cursor-label t-sub"
        ></span>
      </span>
    </span>
  </span>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data() {
    return {}
  },
  computed: {
    hoverable() {
      return document.querySelectorAll('a')
    }
  },
  methods: {
    rotationTween() {
      return gsap.to(this.$ref.cursorContent, {
        rotation: 360,
        duration: 4,
        ease: 'Linear.easeNone',
        paused: true,
        repeat: -1
      })
    },
    show() {
      gsap.to(this.$ref.cursor, {
        duration: 0.2,
        scale: 1,
        opacity: 1,
        onComplete: () => {
          gsap.set(this.$ref.cursor, { clearProps: 'all' })
        }
      })
    },
    hide() {
      gsap.to(this.$ref.cursor, {
        duration: 0.2,
        scale: 0,
        opacity: 0
      })
    },
    move(e) {
      gsap.set(this.$ref.cursor, {
        x: e.clientX,
        y: e.clientY
      })
    },
    hoverIn(e) {
      let hidden = e.target.getAttribute('data-cursor-hidden')
      // let color = e.target.getAttribute('data-cursor-color')
      let content = e.target.getAttribute('data-cursor-hover')
      let rotate = e.target.getAttribute('data-cursor-rotate')
      if (content) {
        this.$ref.cursorLabel.innerText = content
        if (rotate) {
          this.rotationTween.play()
        } else {
          this.rotationTween.progress(0)
        }
      }
      if (hidden) {
        this.$ref.cursor.classList.value = 'is-hidden'
      } else {
        this.$ref.cursor.classList.value = 'is-hovering'
      }
    },
    hoverOut() {},
    bindHoverable() {},
    unbindHoverable() {},
    refresh() {}
  }
}
</script>

<style></style>
