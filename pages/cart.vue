<template>
  <div class="max-w-screen-xl flex-grow mx-auto">
    <div class="woocommerce">
      <div class="md:pt-5 lg:pb-10 text-center">
        <h1 class="mb-0 heading-title">Shopping Cart</h1>
      </div>

      <div class="flex">
        <div class="lg:w-3/5 wow fadeInUpNeuron">
          <ValidationObserver
            ref="woocommerce-cart-form"
            v-slot="{ invalid }"
            tag="form"
            class="woocommerce-cart-form"
            @submit.prevent="submitForm"
          >
            <div class="sm:pb-5">
              <h6 class="mb-0">Your Cart</h6>
            </div>

            <table
              class="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th class="product-remove">&nbsp;</th>
                  <th class="product-thumbnail">&nbsp;</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in cartProducts.products"
                  :key="product.databaseId"
                  class="woocommerce-cart-form__cart-item cart_item"
                >
                  <td class="product-thumbnail">
                    <a :href="product.link"
                      ><img
                        width="300"
                        height="300"
                        :src="product.sourceUrl"
                        class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                        alt=""
                        :srcset="product.srcSet"
                        sizes="(max-width: 300px) 100vw, 300px"
                    /></a>
                  </td>

                  <td class="product-name" data-title="Product">
                    <h6>
                      <a :href="product.link">{{ product.name }}</a>
                    </h6>
                  </td>

                  <td class="product-price text-align_right" data-title="Price">
                    <span class="woocommerce-Price-amount amount"
                      ><span class="woocommerce-Price-currencySymbol"
                        >&euro;</span
                      >{{ product.price }}</span
                    >
                  </td>

                  <td
                    class="product-quantity text-align_center"
                    data-title="Quantity"
                  >
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules=""
                      tag="div"
                      class="quantity"
                    >
                      <label
                        class="screen-reader-text"
                        for="quantity_5fc9011e68a38"
                        >Quantity</label
                      >
                      <input
                        type="number"
                        step="1"
                        min="0"
                        :value="product.qty"
                        class="input-text qty text"
                        size="4"
                        pattern="[0-9]*"
                        inputmode="numeric"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </td>

                  <td class="product-subtotal" data-title="Total">
                    <span class="woocommerce-Price-amount amount"
                      ><span class="woocommerce-Price-currencySymbol"
                        >&euro;</span
                      >{{ getItemTotal(product.qty, product.price) }}</span
                    >
                  </td>

                  <td class="product-remove">
                    <a
                      class="remove"
                      aria-label="Remove this item"
                      @click="removeProductFromCart(product.databaseId)"
                      >&times;</a
                    >
                  </td>
                </tr>
                <tr>
                  <td colspan="6" class="actions">
                    <div class="flex items-center">
                      <div class="coupon flex items-center mr-auto">
                        <label for="coupon_code">Coupon:</label>
                        <input
                          type="text"
                          name="coupon_code"
                          class="input-text"
                          value=""
                          placeholder="Coupon code"
                        />
                        <div class="button light-blue shadow normal">
                          <button
                            type="submit"
                            class="button flex"
                            name="apply_coupon"
                            value="Apply coupon"
                            :disabled="invalid"
                          >
                            Apply coupon
                          </button>
                        </div>
                      </div>

                      <div class="button light-blue shadow normal">
                        <button
                          type="submit"
                          class="button flex"
                          name="update_cart"
                        >
                          Update cart
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </ValidationObserver>
        </div>

        <div class="lg:w-2/5 wow fadeInUpNeuron">
          <div class="cart-collaterals">
            <div class="sm:pb-5">
              <h6 class="mb-0">Cart totals</h6>
            </div>

            <div class="cart_totals shadow">
              <div class="inner-shadow">
                <table cellspacing="0" class="shop_table shop_table_responsive">
                  <tbody>
                    <tr class="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >&euro;</span
                          >{{ cartProducts.totalProductsPrice }}</span
                        >
                      </td>
                    </tr>

                    <tr class="shipping">
                      <th>Shipping</th>
                      <td data-title="Shipping">
                        Flat rate:
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >&euro;</span
                          >5,00</span
                        >
                      </td>
                    </tr>

                    <tr class="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong
                          ><span class="woocommerce-Price-amount amount"
                            ><span class="woocommerce-Price-currencySymbol"
                              >&euro;</span
                            >{{ getTotal() }}</span
                          ></strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="wc-proceed-to-checkout">
                  <nuxt-link
                    :to="{ path: 'checkout' }"
                    class="checkout-button button"
                  >
                    Proceed to checkout
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      shippingFee: 5.0,
      coupon_code: ''
    }
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartList'
    })
  },
  methods: {
    getTotal() {
      return this.cartProducts.totalProductsPrice + this.shippingFee
    },
    getItemTotal(qty, price) {
      return qty * price
    },
    removeProductFromCart(databaseId) {
      this.$store.dispatch('cart/removeProductFromCart', databaseId)
    },
    submitForm() {
      console.log('submited')
    }
  }
}
</script>

<style></style>
