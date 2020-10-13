import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

import error from 'assets/images/error.svg'

Vue.use(VueLazyLoad, {
  preLoad: 1, // makes the pre-loading height the same as the actual image.
  error,
  attempt: 1
})
