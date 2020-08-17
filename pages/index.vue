<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      // products: this.$store.state.listProduct
    }
  },

  computed: {},

  head() {
    return {
      bodyAttrs: {
        class:
          'home archive post-type-archive post-type-archive-product woocommerce woocommerce-page wpb-js-composer js-comp-ver-5.4.7 vc_responsive',
      },
    }
  },
  // apollo: {
  //   products: {
  //     prefetch: true,
  //     query: productsQuery
  //   }
  // }
  // mounted() {
  //   this.getData()
  // },
  // methods: {
  //   async getData() {
  //     const result = await this.$apollo.query({ query: productsQuery })
  //     return (this.listProducts = result.data.products.nodes)
  //     // this.$apollo
  //     //   .query({
  //     //     query: productsQuery
  //     //   })
  //     //   .then((rs) => {
  //     //     this.listProducts = rs.data.products.nodes
  //     //   })
  //   }
  // }
}
</script>

<style></style>
