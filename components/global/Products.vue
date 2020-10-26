<template>
  <div class="container flex-grow mx-auto">
    <div class="flex flex-wrap relative overflow-hidden xxl:-mx-16 -mx-8">
      <div
        v-for="product in listProduct"
        :key="product.id"
        class="w-full sm:w-1/2 xl:w-1/3 product xxl:px-16 xxl:pb-32 px-8 pb-16"
      >
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
              class="product-overlay_wrap flex flex-col xxl:inset-16 xl:inset-12 inset-10"
            >
              <h3 class="product-title">
                <a class="soma-link" :href="product.link">{{ product.name }}</a>
              </h3>
              <div class="flex items-center mt-auto">
                <button
                  class="add_to_cart_button"
                  @click="addProductToCart(product)"
                >
                  <span class="bag-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                    >
                      <path
                        id="bag"
                        class="cls-1"
                        d="M14,6V5A5,5,0,1,0,4,5V6H0V21a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V6H14ZM6,5a3,3,0,0,1,6,0V6H6V5ZM16,21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V8H16V21Z"
                      />
                      <rect x="4" y="14" width="10" height="2" />
                      <rect x="8" y="10" width="2" height="10" />
                    </svg>
                  </span>
                  <span class="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                    >
                      <path
                        id="check"
                        class="cls-1"
                        d="M6.992,13.992A1,1,0,0,1,6.285,13.7l-6-6A1,1,0,0,1,1.7,6.285l5.293,5.293L18.285,0.285A1,1,0,0,1,19.7,1.7l-12,12A1,1,0,0,1,6.992,13.992Z"
                      />
                    </svg>
                  </span>
                  <span class="loader-icon rotating">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                    >
                      <path
                        id="repeat"
                        class="cls-1"
                        d="M24,2V8a1,1,0,0,1-1,1H17a1,1,0,0,1,0-2h3.372c-1.346-1.312-2.408-2.35-2.709-2.65l-0.007-.007a7.993,7.993,0,0,0-11.314,0c-0.067.067-.133,0.135-0.2,0.2A7.932,7.932,0,0,0,4.635,6.872c-0.056.157-.125,0.309-0.181,0.466a1,1,0,0,1-1.887-.661c0.076-.219.161-0.435,0.253-0.647A9.959,9.959,0,0,1,4.683,3.184q0.121-.13.246-0.255A9.959,9.959,0,0,1,10.091.183a10.025,10.025,0,0,1,5.672.549,9.935,9.935,0,0,1,3.309,2.2l0.015,0.015c0.321,0.32,1.476,1.449,2.914,2.85V2A1,1,0,0,1,24,2ZM1,19a1,1,0,0,0,1-1V14.206c1.438,1.4,2.594,2.53,2.914,2.85l0.015,0.015a9.959,9.959,0,0,0,5.162,2.746,10.035,10.035,0,0,0,5.672-.549,9.935,9.935,0,0,0,3.309-2.2q0.126-.125.246-0.255a9.959,9.959,0,0,0,1.863-2.845c0.092-.212.178-0.428,0.253-0.647a1,1,0,0,0-1.887-.661c-0.055.157-.125,0.309-0.181,0.466a8.057,8.057,0,0,1-4.355,4.286,7.993,7.993,0,0,1-8.668-1.758L6.336,15.65c-0.3-.3-1.363-1.338-2.708-2.65H7a1,1,0,0,0,0-2H1a1,1,0,0,0-1,1v6A1,1,0,0,0,1,19Z"
                      />
                    </svg>
                  </span>
                </button>
                <div class="ml-auto">
                  <h4 class="price d-flex align-items-center">
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
                path: 'product/' + product.id,
                params: { id: product.productId },
                props: { newsletterPopup: false }
              }"
              class="soma-link"
            ></nuxt-link>
            <!-- <nuxt-link
              :to="{
                name: 'product',
                params: { id: product.id, productId: product.productId },
              }"
              class="soma-link"
            ></nuxt-link> -->
            <!-- <a
              class="soma-link"
              @click="
                $router.push({
                  path: 'product/' + product.productId,
                  params: { id: product.id, productId: product.productId },
                })
              "
            ></a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import productsQuery from '~/apollo/queries/product/products.gql'

export default {
  name: 'Products',

  async fetch() {
    const result = await this.$apollo.query({ query: productsQuery })
    return (this.listProduct = result.data.products.nodes)
  },

  data() {
    return {
      listProduct: '',
      isLoading: false
    }
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
.product-holder {
  position: relative;
  .product-inner_holder {
    .product-entry_overlay {
      .calculated-image {
        overflow: hidden;
      }
      img {
        width: 100%;
        display: block;
      }
    }
    .product-overlay_wrap {
      .product-title {
        a {
          color: #222326;
        }
      }
      .added_to_cart {
        display: none;
      }
      .add_to_cart_button {
        display: inline-block;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 60px;
        overflow: hidden;
        -webkit-transition: background-color cubic-bezier(0.215, 0.61, 0.355, 1)
          0.2s;
        -o-transition: background-color cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
        transition: background-color cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
        span {
          display: inline-block;
        }
        svg {
          fill: #222326;
          -webkit-transition: fill cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
          -o-transition: fill cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
          transition: fill cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
        }
        .checkbox-icon {
          display: none;
        }
        .loader-icon {
          display: none;
        }
      }
      .add_to_cart_button.added {
        line-height: 54px;
        .bag-icon {
          display: none;
        }
        .loader-icon {
          display: none;
        }
        .checkbox-icon {
          display: block;
        }
      }
      .add_to_cart_button.loading {
        .bag-icon {
          display: none;
        }
        .loader-icon {
          display: block;
          svg {
            -webkit-animation: rotating 1s linear infinite;
            animation: rotating 1s linear infinite;
          }
        }
      }
    }
  }
}
.product-holder.shadow {
  .product-inner_holder {
    border-color: #cfe5fc;
    border-width: 3px;
  }
  &:before {
    background-color: #cfe5fc;
    border-color: #cfe5fc;
    border-width: 3px;
    top: 8px;
    left: 8px;
  }
  &:hover {
    &:before {
      background-color: #cfe5fc;
    }
  }
}
.product-holder.product-image_hover {
  .product-inner_holder {
    .product-entry_overlay {
      .calculated-image {
        .second-image {
          -webkit-transition: opacity cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
          -o-transition: opacity cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
          transition: opacity cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
          opacity: 0;
        }
      }
    }
  }
  &:hover {
    .product-inner_holder {
      .product-entry_overlay {
        .calculated-image {
          .second-image {
            opacity: 1;
          }
        }
      }
    }
  }
}
.woocommerce {
  .basic {
    .product {
      .product-holder.shadow {
        .product-inner_holder {
          .product-entry_overlay {
            border-bottom-width: 3px;
            border-bottom-style: solid;
            border-bottom-color: #cfe5fc;
          }
          .product-overlay_wrap {
            padding: 3.5rem;
          }
        }
      }
      .product-holder {
        .product-inner_holder {
          .product-overlay_wrap {
            padding-top: 3.5rem;
            .product-title_cart {
              margin-bottom: 2rem;
              .product-title {
                position: relative;
                margin-bottom: 0;
                padding-bottom: 1.5rem;
                &:after {
                  content: '';
                  display: block;
                  width: 8rem;
                  height: 0.4rem;
                  background-color: #e43a19;
                  position: absolute;
                  bottom: 0;
                }
              }
              .add_to_cart_button {
                background-color: #cfe5fc;
                svg {
                  fill: #222326;
                }
                &:hover {
                  background-color: #6ca5d0;
                  svg {
                    fill: #fff;
                  }
                }
              }
            }
            .price {
              color: #444548;
              del {
                background-color: #cfe5fc;
              }
            }
          }
        }
      }
    }
  }
}
.product {
  .product-holder {
    .product-inner_holder {
      position: relative;
      .product-entry_overlay {
        position: relative;
        .product-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: transparent;
          opacity: 0;
          -webkit-transition: opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          -o-transition: opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          transition: opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }
      }
      .product-overlay_wrap {
        position: absolute;
        .product-title {
          margin-bottom: 0;
          transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s,
            opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          opacity: 0;
          -webkit-transform: translateY(1rem);
          -ms-transform: translateY(1rem);
          transform: translateY(1rem);
        }
        .add_to_cart_button {
          position: relative;
          z-index: 2;
          background-color: #fff;
          transition: background-color cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s,
            transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s,
            opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          opacity: 0;
          -webkit-transform: translateY(1rem);
          -ms-transform: translateY(1rem);
          transform: translateY(1rem);
          -webkit-transition-delay: 0.06s;
          -o-transition-delay: 0.06s;
          transition-delay: 0.06s;
          outline: none;
          border: none;
          cursor: pointer;
          &:hover {
            background-color: #6ca5d0;
            svg {
              fill: #fff;
            }
          }
        }
        .price {
          transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s,
            opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          opacity: 0;
          -webkit-transform: translateY(1rem);
          -ms-transform: translateY(1rem);
          transform: translateY(1rem);
          -webkit-transition-delay: 0.18s;
          -o-transition-delay: 0.18s;
          transition-delay: 0.18s;
          del {
            background-color: #fff;
          }
        }
      }
      > a {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        outline: 0;
        z-index: 1;
      }
    }
    &:hover {
      .product-inner_holder {
        .product-entry_overlay {
          .product-overlay {
            opacity: 1;
          }
        }
        .product-overlay_wrap {
          .product-title {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
          }
          .add_to_cart_button {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
          }
          .price {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>
