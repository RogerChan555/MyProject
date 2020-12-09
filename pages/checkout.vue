<template>
  <client-only>
    <div class="max-w-screen-xl flex-grow mx-auto">
      <div class="woocommerce">
        <div class="woocommerce-info">
          Returning customer?
          <a href="#" class="showlogin">Click here to login</a>
        </div>
        <div class="woocommerce-info">
          Have a coupon?
          <a href="#" class="showcoupon">Click here to enter your code</a>
        </div>

        <ValidationObserver
          ref="checkout_coupon"
          v-slot="{ invalid }"
          tag="form"
          class="checkout_coupon"
          @submit.prevent="submitForm"
        >
          <div class="flex items-center justify-between">
            <ValidationProvider
              v-slot="{ errors }"
              name="E-mail"
              rules="required"
              tag="p"
            >
              <input
                v-model="coupon_code"
                type="text"
                class="input-text"
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

        <div class="md:pt-5 lg:pb-10 text-center checkout-title">
          <h1 class="mb-0 heading-title">Checkout</h1>
        </div>
        <ValidationObserver
          ref="checkout"
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

                  <div class="woocommerce-billing-fields__field-wrapper">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules="required|alpha"
                      tag="p"
                      class="form-row form-row-first validate-required"
                    >
                      <label for="billing_first_name" class=""
                        >First name
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_first_name"
                        type="text"
                        class="input-text"
                        placeholder=""
                        autocomplete="given-name"
                        autofocus="autofocus"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules="required|alpha"
                      tag="p"
                      class="form-row form-row-last validate-required"
                    >
                      <label for="billing_last_name" class=""
                        >Last name
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_last_name"
                        type="text"
                        class="input-text"
                        placeholder=""
                        autocomplete="given-name"
                        autofocus="autofocus"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules="required"
                      tag="p"
                      class="form-row form-row-wide address-field validate-required"
                    >
                      <label for="billing_address_1" class=""
                        >Street address
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_address_1"
                        type="text"
                        class="input-text"
                        placeholder="House number and street name"
                        autocomplete="address-line1"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules="required"
                      tag="p"
                      class="form-row form-row-wide address-field validate-required"
                    >
                      <label for="billing_city" class=""
                        >Town / City
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_city"
                        type="text"
                        class="input-text"
                        placeholder=""
                        autocomplete="address-level2"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules="required"
                      tag="p"
                      class="form-row form-row-wide validate-required validate-phone"
                    >
                      <label for="billing_phone" class=""
                        >Phone
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_phone"
                        type="tel"
                        class="input-text"
                        placeholder=""
                        autocomplete="tel"
                      />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="E-mail"
                      rules="required|email"
                      tag="p"
                      class="form-row form-row-wide validate-required validate-email"
                    >
                      <label for="billing_email" class=""
                        >Email address
                        <abbr class="required" title="required">*</abbr></label
                      >
                      <input
                        v-model="billing_email"
                        type="email"
                        class="input-text"
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
                      v-slot="{ errors }"
                      name="E-mail"
                      rules=""
                      tag="p"
                      class="form-row notes"
                    >
                      <label for="order_comments" class="">Order notes</label>
                      <textarea
                        v-model="order_comments"
                        class="input-text"
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
                  <h6 id="order_review_heading" class="margin-bottom_0">
                    Your order
                  </h6>
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
                              <input
                                id="shipping_method_0"
                                type="hidden"
                                name="shipping_method[0]"
                                data-index="0"
                                value="flat_rate:2"
                                class="shipping_method"
                              />
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
                          <li class="wc_payment_method payment_method_bacs">
                            <input
                              id="payment_method_bacs"
                              type="radio"
                              class="input-radio"
                              name="payment_method"
                              value="bacs"
                              checked="checked"
                              data-order_button_text=""
                            />

                            <label for="payment_method_bacs">
                              Direct bank transfer
                            </label>
                            <div class="payment_box payment_method_bacs">
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                              </p>
                            </div>
                          </li>
                          <li class="wc_payment_method payment_method_cheque">
                            <input
                              id="payment_method_cheque"
                              type="radio"
                              class="input-radio"
                              name="payment_method"
                              value="cheque"
                              data-order_button_text=""
                            />

                            <label for="payment_method_cheque">
                              Check payments
                            </label>
                            <div
                              class="payment_box payment_method_cheque"
                              style="display: none"
                            >
                              <p>
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </p>
                            </div>
                          </li>
                          <li class="wc_payment_method payment_method_cod">
                            <input
                              id="payment_method_cod"
                              type="radio"
                              class="input-radio"
                              name="payment_method"
                              value="cod"
                              data-order_button_text=""
                            />

                            <label for="payment_method_cod">
                              Cash on delivery
                            </label>
                            <div
                              class="payment_box payment_method_cod"
                              style="display: none"
                            >
                              <p>Pay with cash upon delivery.</p>
                            </div>
                          </li>
                        </ul>
                        <div class="form-row place-order">
                          <div
                            class="woocommerce-terms-and-conditions"
                            style="
                              display: none;
                              max-height: 200px;
                              overflow: auto;
                            "
                          >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam placerat lectus non velit tempus
                              sollicitudin. Donec eget lectus at sem suscipit
                              egestas. Maecenas nec ligula massa. Curabitur
                              rhoncus pharetra mollis. Proin efficitur velit non
                              turpis posuere interdum. Mauris ligula ligula,
                              tempor vel porta at, consequat sed tellus. Donec
                              efficitur mi est, sit amet vehicula augue
                              pellentesque sit amet. Nam eget posuere metus, sed
                              iaculis leo.
                            </p>
                            <p>
                              Praesent vehicula arcu eget lacus blandit, id
                              viverra lectus eleifend. Ut in diam justo. Etiam
                              sed eros ut nisl porta aliquam. Pellentesque
                              condimentum id enim non iaculis. Aliquam congue
                              efficitur magna, sit amet ultricies nulla volutpat
                              in. Nam suscipit consequat aliquet. Curabitur sit
                              amet sapien massa. Donec rutrum velit ligula,
                              vitae posuere ligula interdum vitae. Fusce
                              pharetra elit nibh, eget congue magna commodo non.
                              Nunc euismod nulla vel metus molestie, at pulvinar
                              turpis venenatis. Sed ac consequat ligula, non
                              posuere urna. Vestibulum accumsan sapien sed eros
                              suscipit viverra. Nullam vestibulum felis eros,
                              vitae elementum justo feugiat porta. Quisque ut
                              laoreet nisi. Sed ut odio varius, tincidunt justo
                              id, tempor sapien.
                            </p>
                            <p>
                              Pellentesque fermentum felis erat, at maximus
                              felis tempus blandit. Mauris molestie arcu sit
                              amet lacus porttitor, ac finibus quam faucibus.
                              Sed auctor pharetra turpis eu luctus. Duis
                              molestie porttitor gravida. Cras et lacus eu
                              tellus ullamcorper tincidunt fermentum et tellus.
                              Ut in justo ultricies, ultricies arcu non,
                              imperdiet ante. Praesent vel metus felis. Aliquam
                              nec metus leo. Maecenas iaculis massa eget
                              interdum accumsan. Morbi eget felis non nunc
                              suscipit placerat. Maecenas vestibulum metus
                              turpis, ac sodales elit tristique ac. Phasellus
                              consequat, risus molestie dapibus eleifend, metus
                              libero tempor purus, sit amet congue tellus nisl
                              et purus.
                            </p>
                            <p>
                              Cras sit amet neque cursus, molestie nunc sed,
                              pulvinar felis. In eleifend bibendum arcu ac
                              faucibus. Vestibulum posuere imperdiet purus non
                              elementum. Quisque pellentesque enim viverra,
                              facilisis justo non, mattis turpis. Aliquam erat
                              volutpat. Fusce mollis lectus augue, a semper orci
                              molestie nec. Quisque nec tincidunt dolor, euismod
                              egestas ante. Sed mauris nisi, dignissim vitae
                              augue vel, viverra sodales odio.
                            </p>
                            <p>
                              Donec a posuere sapien, et laoreet nulla. Nullam
                              ut pellentesque urna. Pellentesque nec massa ut
                              nibh consequat auctor at ut lectus. Maecenas a
                              nisl ante. Curabitur ac sapien vehicula, tempor
                              lacus sit amet, posuere turpis. Vivamus ac eros
                              vel tellus suscipit lobortis nec nec urna.
                              Pellentesque egestas mauris ut ex pellentesque
                              pharetra eget eu purus. Cras quis ligula
                              fringilla, condimentum erat at, sagittis velit.
                              Nam nec sodales massa, id faucibus leo.
                              Pellentesque sollicitudin tristique euismod. Sed
                              vel tortor ex. Proin hendrerit, mi a semper
                              interdum, leo orci sollicitudin erat, fringilla
                              efficitur neque nibh eu dui. Orci varius natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Praesent condimentum, elit
                              sit amet aliquet convallis, est sapien varius
                              felis, ut hendrerit metus turpis aliquam libero.
                            </p>
                          </div>
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
                                  href="https://neuronthemes.com/soma/terms-and-conditions/"
                                  target="_blank"
                                  class="woocommerce-terms-and-conditions-link"
                                  >terms &amp; conditions</a
                                ></span
                              >
                              <span class="required">*</span>
                            </label>
                            <input type="hidden" name="terms-field" value="1" />
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
export default {
  data() {
    return {
      shippingFee: 5.0,
      coupon_code: '',
      billing_first_name: '',
      billing_last_name: '',
      billing_address_1: '',
      billing_city: '',
      billing_email: '',
      billing_phone: '',
      order_comments: ''
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
    getTotal() {
      return this.cartProducts.totalProductsPrice + this.shippingFee
    },
    submitForm() {
      console.log('submited')
    }
  }
}
</script>

<style></style>
