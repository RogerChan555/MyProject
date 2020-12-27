<template>
  <div class="max-w-screen-xl flex-grow mx-auto">
    <div class="md:pt-5 lg:pb-10 text-center checkout-title">
      <h1 class="mb-0 heading-title">Coming Soon</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  head() {
    return {
      bodyAttrs: {
        class: 'home archive woocommerce'
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
