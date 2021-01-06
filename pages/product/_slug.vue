<template>
  <div :id="product.databaseId" class="product">
    <client-only>
      <div class="w-full non-container">
        <div class="product-holder padding-bottom_md flex flex-row-reverse">
          <div class="md:w-1/2">
            <div class="woocommerce-product-gallery">
              <div class="gallery-type_grid">
                <!-- <div
                  v-for="galleryImage in product.galleryImages.nodes"
                  :key="galleryImage.uri"
                  :data-thumb="product.image.sourceUrl"
                  class="woocommerce-product-gallery__image woocommerce-product-gallery__image gallery-thumbnail selector col-12"
                >
                  <div class="lightbox">
                    <a :href="galleryImage.link | formatURL">
                      <div class="calculated-image">
                        <img
                          :src="galleryImage.sourceUrl"
                          :alt="galleryImage.altText"
                          :title="galleryImage.altText"
                        />
                      </div>
                    </a>
                  </div>
                </div> -->
                <div class="gallery-thumbnail selector col-12">
                  <a :href="product.image.link">
                    <div class="calculated-image">
                      <img
                        :src="product.image.sourceUrl"
                        :alt="product.image.altText"
                        :title="product.image.title"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 sticky-description">
            <div class="theiaStickySidebar">
              <div class="single-product_info">
                <div class="flex align-items-center breadcrumb-rating">
                  <nav class="woocommerce-breadcrumb">
                    <NuxtLink to="/">Home</NuxtLink><span>/</span
                    ><a
                      :href="
                        product.productCategories.nodes[0].link | formatURL
                      "
                      >{{ product.productCategories.nodes[0].name }}</a
                    ><span>/</span>{{ product.name }}
                  </nav>
                  <!-- <div class="woocommerce-product-rating ml-auto">
                    <a
                      href="#reviews"
                      class="woocommerce-review-link"
                      rel="nofollow"
                      ><div class="star-rating">
                        <span style="width: 93.4%"
                          >Rated <strong class="rating">4.67</strong> out of 5
                          based on <span class="rating">3</span> customer
                          ratings</span
                        >
                      </div></a
                    >
                  </div> -->
                </div>
                <h2 class="product_title entry-title">
                  {{ product.name }}
                </h2>
                <h4 class="price flex align-center">
                  <span class="woocommerce-Price-amount amount">
                    <i class="woocommerce-Price-currencySymbol"></i
                    >{{ product.price }}</span
                  >
                </h4>

                <a
                  class="button shadow small light-blue mb-5 cursor-pointer"
                  @click="addProductToCart(product)"
                >
                  <span>Add to cart</span>
                </a>

                <div class="product_meta">
                  <span v-if="product.productCategories" class="posted_in"
                    >Category:
                    <a
                      :href="product.productCategories.nodes[0].link"
                      rel="tag"
                      >{{ product.productCategories.nodes[0].name }}</a
                    ></span
                  >
                  <span v-if="product.productTag" class="tagged_as"
                    >Tag:
                    <a :href="product.productTag.link" rel="tag">{{
                      product.productTag.name
                    }}</a></span
                  >
                </div>

                <div class="woocommerce-tabs wc-tabs-wrapper">
                  <ul class="tabs wc-tabs" role="tablist">
                    <li
                      id="tab-title-description"
                      class="description_tab active"
                      role="tab"
                      aria-controls="tab-description"
                    >
                      <a href="#tab-description">Description</a>
                    </li>
                    <li
                      id="tab-title-additional_information"
                      class="additional_information_tab"
                      role="tab"
                      aria-controls="tab-additional_information"
                    >
                      <a href="#tab-additional_information"
                        >Additional information</a
                      >
                    </li>
                  </ul>
                  <div
                    id="tab-description"
                    class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                    role="tabpanel"
                    aria-labelledby="tab-title-description"
                    style="display: block"
                  >
                    <p>{{ product.description }}</p>
                  </div>
                  <div
                    id="tab-additional_information"
                    class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
                    role="tabpanel"
                    aria-labelledby="tab-title-additional_information"
                    style="display: none"
                  >
                    <table class="shop_attributes">
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <td><p>Small, Medium, Large</p></td>
                        </tr>
                        <tr>
                          <th>Color</th>
                          <td><p>Black, Blue, Grey</p></td>
                        </tr>
                        <tr>
                          <th>Weight</th>
                          <td><p>0.8kg</p></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="max-w-screen-xl mx-auto">
        <div class="navigation">
          <div class="flex">
            <div class="w-1/2 prev">
              <a class="soma-link" href="#" rel="prev"
                ><h1>Prev</h1>
                <h6>Grimstone 17</h6></a
              >
            </div>
            <div class="w-1/2 next text-right">
              <a class="soma-link" href="#" rel="next"
                ><h1>Next</h1>
                <h6>Oxenhope</h6></a
              >
            </div>
          </div>
        </div>
      </div> -->
      <RelatedProduct :related-products="product.related.nodes" class="mt-20" />
    </client-only>
  </div>
</template>

<script>
import PRODUCT_DETAIL from '~/apollo/queries/product/product_detail.gql'
import RelatedProduct from '../../components/RelatedProduct.vue'

export default {
  components: { RelatedProduct },
  async asyncData({ app, route }) {
    const SLUG = route.params.slug
    const { data } = await app.apolloProvider.defaultClient.query({
      query: PRODUCT_DETAIL,
      variables: {
        id: SLUG
      },
      fetchPolicy: 'no-cache'
    })
    return {
      product: data.product
    }
  },

  data() {
    return {}
  },

  head() {
    return {
      bodyAttrs: {
        class: 'single single-product woocommerce'
      }
    }
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product)
    }
  }
}
</script>
