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
                        src="//neuronthemes.com/soma/wp-content/uploads/2018/04/socks-300x300.jpg"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="799"
                      height="800"
                      viewBox="0 0 799 800"
                      class="inline-block"
                    >
                      <metadata />
                      <path
                        class="cls-1"
                        d="M401,0C180.44,0,1,179.44,1,400S180.44,800,401,800,801,620.56,801,400,621.56,0,401,0Zm0,756.756A356.952,356.952,0,0,1,44.244,400C44.244,203.284,204.284,43.244,401,43.244A356.858,356.858,0,0,1,757.756,400C757.756,596.716,597.716,756.756,401,756.756Zm76.355-264.882a148.986,148.986,0,0,1,100.228,21.9l23.185-36.5a192.3,192.3,0,0,0-129.359-28.23c-72.25,10.038-133.612,61.308-156.326,130.621l41.095,13.465A150.034,150.034,0,0,1,477.355,491.874Zm-209.689-221.6a43.244,43.244,0,1,1-43.244,43.243A43.242,43.242,0,0,1,267.666,270.269Zm267.571,0a43.244,43.244,0,1,1-43.244,43.243A43.242,43.242,0,0,1,535.237,270.269Z"
                        transform="translate(-1)"
                      />
                    </svg>
                  </div>
                  <h3 class="woocommerce-mini-cart__empty-message">
                    No products in the bag.
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
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',

  data() {
    return {
      isOpen: false,
      itemDelayOn: false
    }
  },

  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartList'
    })
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
