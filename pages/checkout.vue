<template>
  <client-only>
    <div class="max-w-screen-xl flex-grow mx-auto">
      <div class="flex flex-col">
        <div class="woocommerce-info">
          Returning customer?
          <a href="#" class="showlogin">Click here to login</a>
        </div>
        <div class="woocommerce-info">
          Have a coupon?
          <a href="#" class="showcoupon" @click="handleCouponToggle"
            >Click here to enter your code</a
          >
        </div>
        <transition-expand>
          <div v-show="hasCouponToggle">
            <ValidationObserver
              ref="checkout_coupon"
              v-slot="{ invalid }"
              tag="form"
              class="checkout_coupon"
              @submit.prevent="submitForm"
            >
              <div class="flex items-center justify-between">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  rules="required"
                  tag="p"
                >
                  <input
                    v-model="coupon_code"
                    type="text"
                    class="input-text"
                    :class="{ invalid: classes.invalid }"
                    placeholder="Coupon code"
                  />
                  <span class="error">{{ errors[0] }}</span>
                </ValidationProvider>
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
            </ValidationObserver>
          </div>
        </transition-expand>

        <div class="md:pt-5 lg:pb-10 text-center checkout-title">
          <h1 class="mb-0 heading-title">Checkout</h1>
        </div>
        <ValidationObserver
          ref="checkoutForm"
          v-slot="{ invalid }"
          tag="form"
          class="checkout woocommerce-checkout"
          @submit.prevent="submitForm"
        >
          <div class="flex">
            <div class="lg:w-3/5">
              <div id="customer_details">
                <div class="woocommerce-billing-fields">
                  <div class="sm:pb-5">
                    <h6 class="margin-bottom_0">Billing details</h6>
                  </div>

                  <div class="flex flex-wrap">
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules="required"
                      tag="p"
                      class="form-row w-1/2"
                    >
                      <label
                        for="billing_first_name"
                        :class="{ invalid: classes.invalid }"
                        >First name
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_first_name"
                        type="text"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder=""
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules="required"
                      tag="p"
                      class="form-row w-1/2"
                    >
                      <label
                        for="billing_last_name"
                        :class="{ invalid: classes.invalid }"
                        >Last name
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_last_name"
                        type="text"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder=""
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules="required"
                      tag="p"
                      class="form-row w-full"
                    >
                      <label
                        for="billing_address_1"
                        :class="{ invalid: classes.invalid }"
                        >Street address
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_address_1"
                        type="text"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder="House number and street name"
                        autocomplete="address-line1"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules="required"
                      tag="p"
                      class="form-row w-full"
                    >
                      <label
                        for="billing_city"
                        :class="{ invalid: classes.invalid }"
                        >Town / City
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_city"
                        type="text"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder=""
                        autocomplete="address-level2"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules="required"
                      tag="p"
                      class="form-row w-full"
                    >
                      <label
                        for="billing_phone"
                        :class="{ invalid: classes.invalid }"
                        >Phone
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_phone"
                        type="tel"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder=""
                        autocomplete="tel"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules="required|email"
                      tag="p"
                      class="form-row w-full"
                    >
                      <label
                        for="billing_email"
                        :class="{ invalid: classes.invalid }"
                        >Email address
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_email"
                        type="email"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder=""
                        autocomplete="email username"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>

                <div class="woocommerce-additional-fields">
                  <div class="woocommerce-additional-fields__field-wrapper">
                    <ValidationProvider
                      v-slot="{ errors, classes }"
                      rules=""
                      tag="p"
                      class="form-row notes w-full"
                    >
                      <label
                        for="order_comments"
                        :class="{ invalid: classes.invalid }"
                        >Order notes</label
                      >
                      <textarea
                        v-model="order_comments"
                        class="input-text"
                        :class="{ invalid: classes.invalid }"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        rows="2"
                        cols="5"
                      ></textarea>
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:w-2/5">
              <div class="your-order">
                <div class="sm:pb-5">
                  <h6 id="order_review_heading">Your order</h6>
                </div>

                <div class="shadow">
                  <div class="inner-shadow">
                    <div
                      id="order_review"
                      class="woocommerce-checkout-review-order"
                    >
                      <table
                        class="shop_table woocommerce-checkout-review-order-table"
                      >
                        <thead>
                          <tr>
                            <th class="product-name">Product</th>
                            <th class="product-total">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="product in cartProducts.products"
                            :key="product.databaseId"
                            class="cart_item"
                          >
                            <th class="product-name">
                              {{ product.name }}&nbsp;
                              <span class="product-quantity"
                                >&times; {{ product.qty }}</span
                              >
                            </th>
                            <td class="product-total text-align_right">
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >&euro;</span
                                >{{ product.price }}</span
                              >
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr class="cart-subtotal">
                            <th>Subtotal</th>
                            <td>
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
                                >{{ shippingFee }}</span
                              >
                            </td>
                          </tr>

                          <tr class="order-total">
                            <th>Total</th>
                            <td>
                              <strong
                                ><span class="woocommerce-Price-amount amount"
                                  ><span
                                    class="woocommerce-Price-currencySymbol"
                                    >&euro;</span
                                  >{{ getTotal() }}</span
                                ></strong
                              >
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                      <div id="payment" class="woocommerce-checkout-payment">
                        <ul
                          class="wc_payment_methods payment_methods methods flex-col"
                        >
                          <li
                            v-for="(method, index) in payment_methods"
                            :key="method.label"
                          >
                            <input
                              :id="method.label"
                              type="radio"
                              class="input-radio"
                              :checked="current_payment_method === index"
                              @click="current_payment_method = index"
                            />
                            <label :for="method.label">{{
                              method.label
                            }}</label>
                            <div
                              v-show="current_payment_method === index"
                              class="payment_box"
                            >
                              <p>{{ method.description }}</p>
                            </div>
                          </li>
                        </ul>
                        <div class="form-row place-order">
                          <p class="form-row terms wc-terms-and-conditions">
                            <label
                              class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"
                            >
                              <input
                                id="terms"
                                type="checkbox"
                                class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                name="terms"
                              />
                              <span
                                >I&rsquo;ve read and accept the
                                <a
                                  href="#"
                                  target="_blank"
                                  class="woocommerce-terms-and-conditions-link"
                                  >terms &amp; conditions</a
                                ></span
                              >
                              <span class="required">*</span>
                            </label>
                          </p>

                          <button
                            type="submit"
                            class="button alt"
                            :disabled="invalid"
                          >
                            Place order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import addToCartMutation from '~/apollo/mutations/addCart.gql'
export default {
  data() {
    return {
      hasCouponToggle: false,
      shippingFee: 5.0,
      coupon_code: '',
      billing_first_name: '',
      billing_last_name: '',
      billing_address_1: '',
      billing_city: '',
      billing_email: '',
      billing_phone: '',
      order_comments: '',
      payment_methods: [
        {
          label: 'Direct bank transfer',
          description:
            'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'
        },
        // {
        //   label: 'Check payments',
        //   description:
        //     'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'
        // },
        {
          label: 'Cash on delivery',
          description: 'Pay with cash upon delivery.'
        }
      ],
      current_payment_method: 0
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'page woocommerce-checkout'
      }
    }
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartList'
    })
  },
  methods: {
    handleCouponToggle() {
      this.hasCouponToggle = !this.hasCouponToggle
    },
    getTotal() {
      return this.cartProducts.totalProductsPrice + this.shippingFee
    },
    submitForm() {
      this.$refs.checkoutForm.validate().then((success) => {
        if (!success) {
          return
        }
        const payload = {
          // coupon_code: this.coupon_code,
          clientMutationId: this.$uuid.v4(),

          billing: {
            firstName: this.billing_first_name,
            lastName: this.billing_last_name,
            address1: this.billing_address_1,
            address2: this.billing_address_2,
            city: this.billing_city,
            email: this.billing_email,
            phone: this.billing_phone
          },
          shipping: {
            firstName: this.billing_first_name,
            lastName: this.billing_last_name,
            address1: this.billing_address_1,
            address2: this.billing_address_2,
            city: this.billing_city,
            email: this.billing_email,
            phone: this.billing_phone
          },
          customerNote: this.order_comments,
          shipToDifferentAddress: false,
          paymentMethod: this.paymentMethod,
          isPaid: false,
          transactionId: 'hjkhjkhsdsdiui'
        }
        // Action
        this.checkout(payload)
      })
      // this.$validator.validateAll().then((result) => {
      //   if (result) {
      //     // Action
      //     this.login(result)
      //   }
      // })
    },
    async checkout(payload) {
      console.log(payload)
      const result = await this.$apollo.mutation({
        query: addToCartMutation,
        variables: {
          input: payload
        }
      })
      return result

      // const apolloClient = this.$apollo.provider.defaultClient
      // const payload = {
      //   email,
      //   password,
      //   remember_me
      // }
      // const result = await this.apiLoginAction({
      //   apolloClient,
      //   payload
      // })
      // if (result.requestResolved) {
      //   console.log(result)
      // } else {
      //   console.log('error')
      // }
    }
  }
}
</script>

<style></style>
