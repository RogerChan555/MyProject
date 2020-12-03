<template>
  <div class="container">
    <div class="woocommerce">
      <div class="row padding-top_md padding-bottom_xl">
        <div class="padding-bottom_md col-12">
          <h1 class="margin-bottom_0 d-flex justify-content-center">
            <a id="login" href="#" class="active">Login</a><span>or</span
            ><a id="register" href="#">Register</a>
          </h1>
        </div>

        <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div class="forms-holder">
            <form
              class="woocommerce-form woocommerce-form-login login"
              method="post"
            >
              <p
                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
              >
                <label for="username"
                  >Username or email address
                  <span class="required">*</span></label
                >
                <input
                  id="username"
                  type="text"
                  class="woocommerce-Input woocommerce-Input--text input-text"
                  name="username"
                  value=""
                />
              </p>
              <p
                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
              >
                <label for="password"
                  >Password <span class="required">*</span></label
                >
                <input
                  id="password"
                  class="woocommerce-Input woocommerce-Input--text input-text"
                  type="password"
                  name="password"
                />
              </p>

              <p class="form-row">
                <input
                  id="woocommerce-login-nonce"
                  type="hidden"
                  name="woocommerce-login-nonce"
                  value="51bb2a0b64"
                /><input
                  type="hidden"
                  name="_wp_http_referer"
                  value="/soma/my-account/"
                />
                <button
                  type="submit"
                  class="woocommerce-Button shadow normal light-blue button"
                  name="login"
                  value="Login"
                >
                  <span>Login</span>
                </button>
              </p>
              <div class="d-flex align-items-center">
                <label
                  class="woocommerce-form__label woocommerce-form__label-for-checkbox d-flex align-items-center"
                >
                  <input
                    id="rememberme"
                    class="woocommerce-form__input woocommerce-form__input-checkbox"
                    name="rememberme"
                    type="checkbox"
                    value="forever"
                  />
                  <span>Remember me</span>
                </label>
                <p class="woocommerce-LostPassword lost_password">
                  <a
                    href="https://neuronthemes.com/soma/my-account/lost-password/"
                    >Lost your password?</a
                  >
                </p>
              </div>
            </form>

            <form method="post" class="register hide">
              <p
                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
              >
                <label for="reg_email"
                  >Email address <span class="required">*</span></label
                >
                <input
                  id="reg_email"
                  type="email"
                  class="woocommerce-Input woocommerce-Input--text input-text"
                  name="email"
                  value=""
                />
              </p>

              <p
                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
              >
                <label for="reg_password"
                  >Password <span class="required">*</span></label
                >
                <input
                  id="reg_password"
                  type="password"
                  class="woocommerce-Input woocommerce-Input--text input-text"
                  name="password"
                />
              </p>

              <p class="woocommerce-FormRow form-row">
                <input
                  id="woocommerce-register-nonce"
                  type="hidden"
                  name="woocommerce-register-nonce"
                  value="7237236605"
                /><input
                  type="hidden"
                  name="_wp_http_referer"
                  value="/soma/my-account/"
                />
                <button
                  type="submit"
                  class="woocommerce-Button button shadow normal light-blue"
                  name="register"
                  value="Register"
                >
                  <span>Register</span>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
