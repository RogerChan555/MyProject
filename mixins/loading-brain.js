import Vue from 'vue'
const disabledPages = [
  // '/trips',
  // '^/$', // exact match for homepage
  // '/profile/.*'
].map((r) => new RegExp(r))
Vue.mixin({
  beforeRouteLeave(to, from, next) {
    if (disabledPages.find((p) => p.test(to.path))) {
      this.$store.commit('setRouterLoadingEnable', false)
    }
    next()
  }
})
