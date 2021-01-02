<template>
  <div class="max-w-screen-xl flex-grow mx-auto">
    <div class="text-center lg:pt-14 pt-10 lg:pb-16 pb-14">
      <h1 class="heading-title">The Shop</h1>
    </div>
    <div class="w-full">
      <SortToggle @sortEvent="onSort" />
    </div>
    <div class="shop">
      <div class="flex flex-wrap relative overflow-hidden xxl:-mx-8 -mx-4">
        <div
          v-for="product in listProduct"
          :key="product.id"
          class="w-full sm:w-1/2 xl:w-1/3 product xxl:px-8 xxl:pb-16 px-4 pb-8"
        >
          <ProductLayout :product="product" />
        </div>
      </div>
      <!-- <div class="ac-info-content-wrapper ac-parallax">
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
      </div> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unreachable */
import productsQuery from '~/apollo/queries/product/products.gql'

export default {
  // async fetch() {
  //   const result = await this.$apollo.query({ query: productsQuery })
  //   return (this.listProduct = result.data.products.nodes)
  // },
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: productsQuery,
      fetchPolicy: 'no-cache'
    })
    return {
      listProduct: data.products.nodes
    }
  },

  data() {
    return {
      sort: 'All'
    }
  },

  head() {
    return {
      bodyAttrs: {
        class: 'home archive woocommerce'
      }
    }
  },

  computed: {
    listProductComputed() {
      if (this.sort !== 'All') {
        switch (this.sort) {
          case 'Popularity':
            return this.resultsSort()
            break
          case 'Newness':
            return this.resultsSort()
            break
          case 'Low to high':
            return this.resultsSort()
            break
          case 'Hight to low':
            return this.resultsSort()
            break
          default:
            return this.listProduct
        }
      } else {
        return this.listProduct
      }
    }
  },

  methods: {
    onSort(sort) {
      this.sort = sort
    },
    resultsSort() {
      return this.listProduct
    }
  }
}
</script>

<style>
.heading-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: currentColor;
}
@media (min-width: 1921px) {
  .heading-title {
    font-size: 4.5rem;
  }
}
</style>
