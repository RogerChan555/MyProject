<template>
  <div
    id="product-84"
    class="post-84 product type-product status-publish has-post-thumbnail product_cat-fashion product_tag-jackets first instock shipping-taxable purchasable product-type-simple"
    style="transform: none;"
  >
    {{ product.image.sourceUrl }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { isEmpty } from 'lodash'

export default {
  name: 'ProductId',

  validate(data) {
    return /^\d+$/.test(data.params.id)
  },

  data() {
    return {
      // product: [],
      loading: false,
    }
  },

  computed: {
    ...mapGetters({
      product: 'product/product',
    }),
  },

  created: function () {
    this.loading = true
    Promise.all([this.fetchProduct()]).then(() => {
      this.loading = false
    })
  },
  updated: function () {
    this.$nextTick(function () {
      console.log('hau' + this.product)
    })
  },

  methods: {
    async fetchProduct() {
      console.log(this.$route.params.id)
      const apolloClient = this.$apollo.provider.defaultClient
      const result = await this.$store.dispatch('product/fetchProduct', {
        apolloClient,
        id: 'cHJvZHVjdDozNQ==',
      })
      if (result.requestResolved) {
        // console.log(this.product)
      } else {
        result.systemError
          ? console.log(result.systemError)
          : console.log(result)
      }
    },
  },

  head() {
    return {
      bodyAttrs: {
        class:
          'product-template-default single single-product postid-84 woocommerce woocommerce-page wpb-js-composer js-comp-ver-5.4.7 vc_responsive',
      },
    }
  },
}
</script>

<style></style>
