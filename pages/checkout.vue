<template>
  <div class="max-w-screen-xl flex-grow mx-auto">
    <div class="woocommerce">
      <div class="">
        <div class="">
          <div class="woocommerce-info">
            Returning customer?
            <a href="#" class="showlogin">Click here to login</a>
          </div>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="woocommerce-info">
            Have a coupon?
            <a href="#" class="showcoupon">Click here to enter your code</a>
          </div>
        </div>
      </div>

      <form class="checkout_coupon" method="post" style="display: none">
        <div class="flex items-center">
          <input
            id="coupon_code"
            type="text"
            name="coupon_code"
            class="input-text"
            placeholder="Coupon code"
            value=""
          />

          <div class="button light-blue shadow normal ml-auto">
            <span
              ><button
                type="submit"
                class="button d-flex"
                name="apply_coupon"
                value="Apply coupon"
              >
                Apply coupon
              </button></span
            >
          </div>
        </div>
      </form>

      <div class="md:pt-5 lg:pb-10 text-center checkout-title">
        <h1 class="margin-bottom_0 heading-title">Checkout</h1>
      </div>

      <form
        name="checkout"
        method="post"
        class="checkout woocommerce-checkout"
        action="https://neuronthemes.com/soma/checkout/"
        enctype="multipart/form-data"
      >
        <div class="flex">
          <div class="lg:w-3/5">
            <div id="customer_details">
              <div class="woocommerce-billing-fields">
                <div class="sm:pb-5">
                  <h6 class="margin-bottom_0">Billing details</h6>
                </div>

                <div class="woocommerce-billing-fields__field-wrapper">
                  <p
                    id="billing_first_name_field"
                    class="form-row form-row-first validate-required"
                  >
                    <label for="billing_first_name" class=""
                      >First name
                      <abbr class="required" title="required">*</abbr></label
                    ><input
                      id="billing_first_name"
                      type="text"
                      class="input-text"
                      name="billing_first_name"
                      placeholder=""
                      value=""
                      autocomplete="given-name"
                      autofocus="autofocus"
                    />
                  </p>
                  <p
                    id="billing_last_name_field"
                    class="form-row form-row-last validate-required"
                  >
                    <label for="billing_last_name" class=""
                      >Last name
                      <abbr class="required" title="required">*</abbr></label
                    ><input
                      id="billing_last_name"
                      type="text"
                      class="input-text"
                      name="billing_last_name"
                      placeholder=""
                      value=""
                      autocomplete="family-name"
                    />
                  </p>
                  <p id="billing_company_field" class="form-row form-row-wide">
                    <label for="billing_company" class="">Company name</label
                    ><input
                      id="billing_company"
                      type="text"
                      class="input-text"
                      name="billing_company"
                      placeholder=""
                      value=""
                      autocomplete="organization"
                    />
                  </p>
                  <p
                    id="billing_address_1_field"
                    class="form-row form-row-wide address-field validate-required"
                  >
                    <label for="billing_address_1" class=""
                      >Street address
                      <abbr class="required" title="required">*</abbr></label
                    ><input
                      id="billing_address_1"
                      type="text"
                      class="input-text"
                      name="billing_address_1"
                      placeholder="House number and street name"
                      value=""
                      autocomplete="address-line1"
                    />
                  </p>
                  <p
                    id="billing_city_field"
                    class="form-row form-row-wide address-field validate-required"
                  >
                    <label for="billing_city" class=""
                      >Town / City
                      <abbr class="required" title="required">*</abbr></label
                    ><input
                      id="billing_city"
                      type="text"
                      class="input-text"
                      name="billing_city"
                      placeholder=""
                      value=""
                      autocomplete="address-level2"
                    />
                  </p>
                  <p
                    id="billing_state_field"
                    class="form-row form-row-wide address-field validate-state"
                    style="display: none"
                  >
                    <label for="billing_state" class="">State / County</label
                    ><input
                      id="billing_state"
                      type="hidden"
                      class="hidden"
                      name="billing_state"
                      value=""
                      autocomplete="address-level1"
                      placeholder=""
                      readonly="readonly"
                    />
                  </p>
                  <p
                    id="billing_postcode_field"
                    class="form-row form-row-wide address-field validate-postcode"
                  >
                    <label for="billing_postcode" class="">Postcode / ZIP</label
                    ><input
                      id="billing_postcode"
                      type="text"
                      class="input-text"
                      name="billing_postcode"
                      placeholder=""
                      value=""
                      autocomplete="postal-code"
                    />
                  </p>
                  <p
                    id="billing_phone_field"
                    class="form-row form-row-wide validate-required validate-phone"
                  >
                    <label for="billing_phone" class=""
                      >Phone
                      <abbr class="required" title="required">*</abbr></label
                    ><input
                      id="billing_phone"
                      type="tel"
                      class="input-text"
                      name="billing_phone"
                      placeholder=""
                      value=""
                      autocomplete="tel"
                    />
                  </p>
                  <p
                    id="billing_email_field"
                    class="form-row form-row-wide validate-required validate-email"
                  >
                    <label for="billing_email" class=""
                      >Email address
                      <abbr class="required" title="required">*</abbr></label
                    ><input
                      id="billing_email"
                      type="email"
                      class="input-text"
                      name="billing_email"
                      placeholder=""
                      value=""
                      autocomplete="email username"
                    />
                  </p>
                </div>
              </div>

              <div class="woocommerce-additional-fields">
                <div class="woocommerce-additional-fields__field-wrapper">
                  <p id="order_comments_field" class="form-row notes">
                    <label for="order_comments" class="">Order notes</label
                    ><textarea
                      id="order_comments"
                      name="order_comments"
                      class="input-text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      rows="2"
                      cols="5"
                    ></textarea>
                  </p>
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
                                ><span class="woocommerce-Price-currencySymbol"
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
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
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
                              Store Town, Store State / County, Store Postcode.
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
                        <li class="wc_payment_method payment_method_paypal">
                          <input
                            id="payment_method_paypal"
                            type="radio"
                            class="input-radio"
                            name="payment_method"
                            value="paypal"
                            data-order_button_text="Proceed to PayPal"
                          />

                          <label for="payment_method_paypal">
                            PayPal
                            <img
                              src="https://neuronthemes.com/soma/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                              alt="PayPal acceptance mark"
                            /><a
                              href="https://www.paypal.com/de/webapps/mpp/paypal-popup"
                              class="about_paypal"
                              onclick="javascript:window.open('https://www.paypal.com/de/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                              >What is PayPal?</a
                            >
                          </label>
                          <div
                            class="payment_box payment_method_paypal"
                            style="display: none"
                          >
                            <p>
                              Pay via PayPal; you can pay with your credit card
                              if you don&#8217;t have a PayPal account.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div class="form-row place-order">
                        <noscript>
                          Since your browser does not support JavaScript, or it
                          is disabled, please ensure you click the
                          &lt;em&gt;Update Totals&lt;/em&gt; button before
                          placing your order. You may be charged more than the
                          amount stated above if you fail to do so.
                          <br /><button
                            type="submit"
                            class="button alt"
                            name="woocommerce_checkout_update_totals"
                            value="Update totals"
                          >
                            Update totals
                          </button>
                        </noscript>

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
                            viverra lectus eleifend. Ut in diam justo. Etiam sed
                            eros ut nisl porta aliquam. Pellentesque condimentum
                            id enim non iaculis. Aliquam congue efficitur magna,
                            sit amet ultricies nulla volutpat in. Nam suscipit
                            consequat aliquet. Curabitur sit amet sapien massa.
                            Donec rutrum velit ligula, vitae posuere ligula
                            interdum vitae. Fusce pharetra elit nibh, eget
                            congue magna commodo non. Nunc euismod nulla vel
                            metus molestie, at pulvinar turpis venenatis. Sed ac
                            consequat ligula, non posuere urna. Vestibulum
                            accumsan sapien sed eros suscipit viverra. Nullam
                            vestibulum felis eros, vitae elementum justo feugiat
                            porta. Quisque ut laoreet nisi. Sed ut odio varius,
                            tincidunt justo id, tempor sapien.
                          </p>
                          <p>
                            Pellentesque fermentum felis erat, at maximus felis
                            tempus blandit. Mauris molestie arcu sit amet lacus
                            porttitor, ac finibus quam faucibus. Sed auctor
                            pharetra turpis eu luctus. Duis molestie porttitor
                            gravida. Cras et lacus eu tellus ullamcorper
                            tincidunt fermentum et tellus. Ut in justo
                            ultricies, ultricies arcu non, imperdiet ante.
                            Praesent vel metus felis. Aliquam nec metus leo.
                            Maecenas iaculis massa eget interdum accumsan. Morbi
                            eget felis non nunc suscipit placerat. Maecenas
                            vestibulum metus turpis, ac sodales elit tristique
                            ac. Phasellus consequat, risus molestie dapibus
                            eleifend, metus libero tempor purus, sit amet congue
                            tellus nisl et purus.
                          </p>
                          <p>
                            Cras sit amet neque cursus, molestie nunc sed,
                            pulvinar felis. In eleifend bibendum arcu ac
                            faucibus. Vestibulum posuere imperdiet purus non
                            elementum. Quisque pellentesque enim viverra,
                            facilisis justo non, mattis turpis. Aliquam erat
                            volutpat. Fusce mollis lectus augue, a semper orci
                            molestie nec. Quisque nec tincidunt dolor, euismod
                            egestas ante. Sed mauris nisi, dignissim vitae augue
                            vel, viverra sodales odio.
                          </p>
                          <p>
                            Donec a posuere sapien, et laoreet nulla. Nullam ut
                            pellentesque urna. Pellentesque nec massa ut nibh
                            consequat auctor at ut lectus. Maecenas a nisl ante.
                            Curabitur ac sapien vehicula, tempor lacus sit amet,
                            posuere turpis. Vivamus ac eros vel tellus suscipit
                            lobortis nec nec urna. Pellentesque egestas mauris
                            ut ex pellentesque pharetra eget eu purus. Cras quis
                            ligula fringilla, condimentum erat at, sagittis
                            velit. Nam nec sodales massa, id faucibus leo.
                            Pellentesque sollicitudin tristique euismod. Sed vel
                            tortor ex. Proin hendrerit, mi a semper interdum,
                            leo orci sollicitudin erat, fringilla efficitur
                            neque nibh eu dui. Orci varius natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus
                            mus. Praesent condimentum, elit sit amet aliquet
                            convallis, est sapien varius felis, ut hendrerit
                            metus turpis aliquam libero.
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
                          id="place_order"
                          type="submit"
                          class="button alt"
                          name="woocommerce_checkout_place_order"
                          value="Place order"
                          data-value="Place order"
                        >
                          Place order
                        </button>

                        <input
                          id="_wpnonce"
                          type="hidden"
                          name="_wpnonce"
                          value="57e909ba6c"
                        /><input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/soma/checkout/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      shippingFee: 5.0
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
    }
  }
}
</script>

<style></style>
