<template>
  <div class="max-w-screen-xl flex-grow mx-auto">
    <div class="text-center lg:pt-14 pt-10 lg:pb-16 pb-14">
      <h1 class="heading-title">The Shop</h1>
    </div>
    <div class="shop">
      <Products />
      <div class="ac-info-content-wrapper ac-parallax">
        <div
          class="ac-info-content ac-parallax-item"
          data-y=".05"
          data-speed="1"
          data-max="-1"
        >
          <div>
            <h3 class="ac-info-title ac-section-title">Insight + creativity</h3>
          </div>
          <div>
            <p class="ac-info-text ac-section-text">
              We’re adept at understanding what a project needs. Our designs
              capture the essence of your business, so you can make a more
              consistent and memorable impact, everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { transitionMixin } from '~/mixins/transition.js'

export default {
  name: 'Index',
  // mixins: [transitionMixin],

  data() {
    return {}
  },

  head() {
    return {
      bodyAttrs: {
        class:
          'home archive post-type-archive post-type-archive-product woocommerce woocommerce-page'
      }
    }
  }
}
</script>

<style>
.heading-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
@media (min-width: 1921px) {
  .heading-title {
    font-size: 4.5rem;
  }
}
</style>
