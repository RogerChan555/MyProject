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

      <div
        class="padding-top_md padding-bottom_lg text-align_center checkout-title"
      >
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
                <div class="padding-bottom_sm">
                  <h6 class="margin-bottom_0">Billing details</h6>
                </div>

                <div class="woocommerce-billing-fields__field-wrapper">
                  <p
                    id="billing_first_name_field"
                    class="form-row form-row-first validate-required"
                    data-priority="10"
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
                    data-priority="20"
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
                  <p
                    id="billing_company_field"
                    class="form-row form-row-wide"
                    data-priority="30"
                  >
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
                    id="billing_country_field"
                    class="form-row form-row-wide address-field update_totals_on_change validate-required"
                    data-priority="40"
                  >
                    <label for="billing_country" class=""
                      >Country
                      <abbr class="required" title="required">*</abbr></label
                    ><select
                      id="billing_country"
                      name="billing_country"
                      class="country_to_state country_select"
                      autocomplete="country"
                    >
                      <option value="">Select a country&hellip;</option>
                      <option value="AX">&#197;land Islands</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="PW">Belau</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BQ">
                        Bonaire, Saint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="BN">Brunei</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo (Brazzaville)</option>
                      <option value="CD">Congo (Kinshasa)</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Cura&ccedil;ao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="CI">Ivory Coast</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao S.A.R., China</option>
                      <option value="MK">Macedonia</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="KP">North Korea</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PS">Palestinian Territory</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="ST">
                        S&atilde;o Tom&eacute; and Pr&iacute;ncipe
                      </option>
                      <option value="BL">Saint Barth&eacute;lemy</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="SX">Saint Martin (Dutch part)</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">South Georgia/Sandwich Islands</option>
                      <option value="KR">South Korea</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom (UK)</option>
                      <option value="US">United States (US)</option>
                      <option value="UM">
                        United States (US) Minor Outlying Islands
                      </option>
                      <option value="VI">
                        United States (US) Virgin Islands
                      </option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN" selected="selected">Vietnam</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option></select
                    ><noscript
                      ><button
                        type="submit"
                        name="woocommerce_checkout_update_totals"
                        value="Update country"
                      >
                        Update country
                      </button></noscript
                    >
                  </p>
                  <p
                    id="billing_address_1_field"
                    class="form-row form-row-wide address-field validate-required"
                    data-priority="50"
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
                    id="billing_address_2_field"
                    class="form-row form-row-wide address-field"
                    data-priority="60"
                  >
                    <input
                      id="billing_address_2"
                      type="text"
                      class="input-text"
                      name="billing_address_2"
                      placeholder="Apartment, suite, unit etc. (optional)"
                      value=""
                      autocomplete="address-line2"
                    />
                  </p>
                  <p
                    id="billing_city_field"
                    class="form-row form-row-wide address-field validate-required"
                    data-priority="70"
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
                    data-priority="65"
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
                    data-priority="100"
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
                    data-priority="110"
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
                  <p
                    id="order_comments_field"
                    class="form-row notes"
                    data-priority=""
                  >
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
              <div class="padding-bottom_sm">
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
                        <tr class="cart_item">
                          <td class="product-name">
                            Travist&nbsp;
                            <span class="product-quantity">&times; 1</span>
                          </td>
                          <td class="product-total text-align_right">
                            <span class="woocommerce-Price-amount amount"
                              ><span class="woocommerce-Price-currencySymbol"
                                >&euro;</span
                              >4,99</span
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
                              >4,99</span
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
                                >9,99</span
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
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'page woocommerce-checkout'
      }
    }
  }
}
</script>

<style></style>
