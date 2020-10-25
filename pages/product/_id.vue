<template>
  <div id="product-84" class="product">
    <client-only>
      <div class="non-container">
        <div class="product-holder padding-bottom_md row flex-row-reverse">
          <div class="col-md-6 col-xxl-7">
            <div
              class="woocommerce-product-gallery woocommerce-product-gallery--with-images"
            >
              <div
                class="woocommerce-product-gallery__wrapper row masonry gallery-type_grid masonry-gallery"
              >
                <div
                  v-for="galleryImage in product.galleryImages.nodes"
                  :key="galleryImage.uri"
                  :data-thumb="product.image.sourceUrl"
                  class="woocommerce-product-gallery__image woocommerce-product-gallery__image gallery-thumbnail selector col-12"
                >
                  <div class="lightbox">
                    <a :href="galleryImage.link">
                      <div class="calculated-image">
                        <img
                          :src="galleryImage.sourceUrl"
                          :alt="galleryImage.altText"
                          :title="galleryImage.altText"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xxl-5 sticky-description">
            <div class="theiaStickySidebar">
              <div class="single-product_info">
                <div class="d-flex align-items-center breadcrumb-rating">
                  <nav class="woocommerce-breadcrumb">
                    <a href="https://neuronthemes.com/soma">Home</a
                    ><span>/</span
                    ><a :href="product.productCategories.nodes[0].link">{{
                      product.productCategories.nodes[0].name
                    }}</a
                    ><span>/</span>{{ product.name }}
                  </nav>
                  <div class="woocommerce-product-rating ml-auto">
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
                  </div>
                </div>
                <h2 class="product_title entry-title">
                  {{ product.name }}
                </h2>
                <h4 class="price d-flex align-items-center">
                  <span class="woocommerce-Price-amount amount">
                    <i class="woocommerce-Price-currencySymbol">€</i
                    >{{ product.price }}</span
                  >
                </h4>

                <form
                  class="cart d-flex align-items-center"
                  action="https://neuronthemes.com/soma/product/wheeler/"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <div class="quantity">
                    <label
                      class="screen-reader-text"
                      for="quantity_5ee4a11c8ce64"
                      >Quantity</label
                    >
                    <input
                      id="quantity_5ee4a11c8ce64"
                      type="number"
                      class="input-text qty text"
                      step="1"
                      min="1"
                      max=""
                      name="quantity"
                      value="1"
                      title="Qty"
                      size="4"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      aria-labelledby=""
                    />
                  </div>

                  <button
                    type="submit"
                    name="add-to-cart"
                    value="84"
                    class="single_add_to_cart_button button light-blue shadow large alt"
                  >
                    <span>Add to cart</span>
                  </button>
                </form>

                <!-- <div class="product_meta">
                <span class="posted_in"
                  >Category:
                  <a :href="productCategory.link" rel="tag">{{
                    productCategory.name
                  }}</a></span
                >
                <span class="tagged_as"
                  >Tag:
                  <a :href="productTag.link" rel="tag">{{
                    productTag.name
                  }}</a></span
                >
              </div> -->

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
                    v-html="product.description"
                  />
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
      <div class="container">
        <div class="navigation">
          <div class="row">
            <div class="col-6 prev">
              <a
                class="soma-link"
                href="https://neuronthemes.com/soma/product/grimstone-17/"
                rel="prev"
                ><h1>Prev</h1>
                <h6>Grimstone 17</h6></a
              >
            </div>
            <div class="col-6 next text-align_right">
              <a
                class="soma-link"
                href="https://neuronthemes.com/soma/product/oxenhope/"
                rel="next"
                ><h1>Next</h1>
                <h6>Oxenhope</h6></a
              >
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
// import { gsap } from 'gsap'
// import { mapGetters } from 'vuex'
import { transitionMixin } from '~/mixins/transition.js'
import PRODUCT_DETAIL from '~/apollo/queries/product/product_detail.gql'
// import { isEmpty } from 'lodash'

export default {
  name: 'ProductId',

  // validate(data) {
  //   return /^\d+$/.test(data.params.id)
  // },

  mixins: [transitionMixin],

  async asyncData({ app, route }) {
    const id = route.params.id
    console.log(app.apolloProvider.defaultClient)

    const { data } = await app.apolloProvider.defaultClient.query({
      query: PRODUCT_DETAIL,
      variables: {
        id
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
        class:
          'product-template-default single single-product woocommerce woocommerce-page'
      }
    }
  }
}
</script>

<style>
.woocommerce-product-gallery__wrapper.masonry.masonry-gallery {
  margin-left: 0;
  margin-right: 0;
}
.woocommerce-product-gallery__wrapper.masonry.masonry-gallery .selector {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
