<template>
  <div class="product-holder">
    <div class="product-inner_holder">
      <div v-if="product.onSale" class="badge shadow on-sale">
        <div class="badge-inner">On Sale!</div>
      </div>
      <div
        v-if="product.stockStatus === 'OUT_OF_STOCK'"
        class="badge shadow out-of-stock"
      >
        <div class="badge-inner">Out of Stock!</div>
      </div>
      <div class="product-entry_overlay">
        <div class="calculated-image">
          <img
            v-lazy="product.image.sourceUrl"
            :alt="product.image.altText"
            :title="product.image.title"
            :srcset="product.image.srcSet"
            :sizes="product.image.sizes"
          />
        </div>
        <div class="product-overlay"></div>
      </div>
      <div
        class="product-overlay_wrap flex flex-col xxl:inset-8 xl:inset-6 inset-5"
      >
        <h3 class="product-title">
          <a class="soma-link" :href="product.link">{{ product.name }}</a>
        </h3>
        <div class="flex items-center mt-auto">
          <button class="add_to_cart_button" @click="addProductToCart(product)">
            <span class="bag-icon">
              <BagIcon />
            </span>
            <span class="checkbox-icon">
              <CheckIcon />
            </span>
            <span class="loader-icon rotating">
              <LoaderIcon />
            </span>
          </button>
          <div class="ml-auto">
            <h4 class="price flex items-center">
              <del v-if="product.regularPrice && product.onSale"
                ><span class="woocommerce-Price-amount amount">{{
                  product.regularPrice
                }}</span></del
              >
              {{ product.price }}
            </h4>
          </div>
        </div>
      </div>
      <nuxt-link
        :to="{
          path: 'product/' + product.slug
        }"
        class="soma-link"
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import BagIcon from '@/assets/images/BagIcon.svg?inline'
import CheckIcon from '@/assets/images/CheckIcon.svg?inline'
import LoaderIcon from '@/assets/images/LoaderIcon.svg?inline'

export default {
  components: {
    BagIcon,
    CheckIcon,
    LoaderIcon
  },

  props: {
    product: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      // listProduct: '',
      isLoading: false
    }
  },

  // async fetch() {
  //   const result = await this.$apollo.query({ query: productsQuery })
  //   return (this.listProduct = result.data.products.nodes)
  // },

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
