<template lang="html">
  <span
    id="appLoading"
    class="o-loader js-loader"
    :class="{ 'is-loading': loading }"
  >
    <span class="o-loader__bg js-loader-bg"></span>
    <span class="o-loader__anim">
      <span class="o-loader__gradients"></span>
    </span>
  </span>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => (this.loading = false), 500)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/loading.scss';
</style>
