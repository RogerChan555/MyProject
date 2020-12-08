<template>
  <div></div>
</template>

<script>
// import { mapGetters } from 'vuex'
import productsQuery from '~/apollo/queries/product/products.gql'

export default {
  data() {
    return {
      listProduct: '',
      isLoading: false
    }
  },

  async fetch() {
    const result = await this.$apollo.query({ query: productsQuery })
    return (this.listProduct = result.data.products.nodes)
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product)
    }
  }
}
</script>

<style lang="scss" scoped>
img[lazy='loading'] {
  filter: blur(15px);
}
</style>
