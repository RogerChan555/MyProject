<template>
  <div class="header-wrapper header-height">
    <header class="normal fixed onScroll">
      <div class="row align-items-center line">
        <div class="col-4">
          <Cart />
        </div>
        <div class="col-4">
          <div class="logo justify-content-center d-flex">
            <nuxt-link to="/" class="soma-link">
              <!-- <img src="~/assets/images/nuxt.svg" /> -->
            </nuxt-link>
          </div>
        </div>
        <div class="col-4">
          <div class="menu-text_holder text-align_right">
            <a href="#" class="menu-text" @click.prevent="handleMenuOpen"
              >Menu</a
            >
          </div>
        </div>
      </div>
      <Menu ref="Menu" />
    </header>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',

  data() {
    return {}
  },
  methods: {
    handleMenuOpen() {
      this.$refs.Menu.handleMenuOpen()
    },
  },
}
</script>

<style></style>
