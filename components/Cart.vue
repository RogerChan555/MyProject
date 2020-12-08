<template>
  <div>
    <client-only>
      <div class="bag-text">
        <a href="#" @click.prevent="openCart">Bag</a>
        <span class="number">{{ cartProducts.totalProductsCount || 0 }}</span>
      </div>
      <div
        id="shoppping-bag_overlay"
        class="soma-overlay"
        :class="{ 'is-open': isOpen }"
        @click.prevent="closeCart"
      ></div>
      <div
        :class="{ 'is-open': isOpen, 'item-delay_on': itemDelayOn }"
        class="shopping-bag fixed-lateral left item-delay_off"
      >
        <div class="hide-scrollbar">
          <div class="inner-hide_scrollbar">
            <a id="close-shopping_bag" href="#">Close</a>
            <div class="widget_shopping_cart_content">
              <div
                v-if="
                  typeof cartProducts.products != 'undefined' &&
                  cartProducts.products != null &&
                  cartProducts.products.length != null &&
                  cartProducts.products.length > 0
                "
                class="shopping-bag_holder flex flex-col"
              >
                <ul
                  class="woocommerce-mini-cart cart_list product_list_widget flex-col"
                >
                  <li
                    v-for="product in cartProducts.products"
                    :key="product.databaseId"
                    class="woocommerce-mini-cart-item flex items-center mini_cart_item flex-row"
                  >
                    <a class="cart-item_image" :href="product.link">
                      <img
                        width="300"
                        height="300"
                        :src="product.sourceUrl"
                        class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                        alt=""
                        :srcset="product.srcSet"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </a>
                    <div class="cart-name_quantity mr-auto">
                      <a :href="product.link">
                        <h6>{{ product.name }}</h6>
                      </a>
                      <p class="quantity">
                        {{ product.qty }} ×
                        <span class="woocommerce-Price-amount amount">
                          €{{ product.price }}
                        </span>
                      </p>
                    </div>
                    <a
                      class="remove remove_from_cart_button cursor-pointer"
                      aria-label="Remove this item"
                      @click="removeProductFromCart(product.databaseId)"
                      >×</a
                    >
                  </li>
                </ul>

                <div class="cart-total_buttons">
                  <div
                    class="woocommerce-mini-cart__total total flex align-center"
                  >
                    <h6 class="font-medium">Subtotal:</h6>
                    <span class="ml-auto price"
                      ><span class="woocommerce-Price-amount amount"
                        ><span class="woocommerce-Price-currencySymbol">€</span
                        >{{ cartProducts.totalProductsPrice }}</span
                      ></span
                    >
                  </div>

                  <div
                    class="woocommerce-mini-cart__buttons buttons flex justify-between"
                  >
                    <nuxt-link :to="{ path: 'cart' }" class="button wc-forward">
                      View cart
                    </nuxt-link>
                    <nuxt-link
                      :to="{ path: 'checkout' }"
                      class="button checkout wc-forward"
                    >
                      Checkout
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="flex items-center justify-center empty-message_holder"
              >
                <div class="empty-message-inner_holder text-center">
                  <div class="empty-message_icon text-center">
                    <CartEmpty />
                  </div>
                  <h3 class="woocommerce-mini-cart__empty-message">
                    {{ cartEmpty_message }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import CartEmpty from '~/assets/images/CartEmpty.svg'
import { mapGetters } from 'vuex'

export default {
  components: {
    CartEmpty
  },
  data() {
    return {
      isOpen: false,
      itemDelayOn: false,
      cartEmpty_message: 'No products in the bag.'
    }
  },

  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartList'
    })
  },
  watch: {
    $route() {
      this.closeCart()
    }
  },
  methods: {
    removeProductFromCart(databaseId) {
      this.$store.dispatch('cart/removeProductFromCart', databaseId)
    },
    openCart() {
      this.isOpen = true
      // Using arrow funtion because the value of 'this' in setTimeout is something differrent from Vue instance
      setTimeout(() => {
        this.itemDelayOn = true
      }, 550)
    },
    closeCart() {
      this.itemDelayOn = false
      setTimeout(() => {
        this.isOpen = false
      }, 250)
      setTimeout(() => {}, 300)
    }
  }
}
</script>

<style></style>
