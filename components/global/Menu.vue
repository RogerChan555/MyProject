<template>
  <div>
    <div class="menu-text_holder text-right">
      <a href="#" class="menu-text" @click.prevent="handleMenuOpen">Menu</a>
    </div>
    <div
      id="header-overlay"
      class="soma-overlay"
      :class="{ 'is-open': isOpen }"
      @click.prevent="handleMenuClose"
    ></div>
    <div
      class="lateral fixed-lateral right"
      :class="{ 'is-open': isOpen, 'is-mobile': isMobile }"
    >
      <div
        class="search flex justify-center"
        :class="{ 'is-open': isOpenSearch }"
      >
        <div class="self-center">
          <a id="close-search" href="#" :class="{ 'is-active': checkMobile }"
            >Close</a
          >
          <form action="https://neuronthemes.com/soma/" method="get">
            <input
              id="search-input"
              ref="searchInput"
              name="s"
              type="search"
              placeholder="Search..."
              class="mb0 text-center p-0"
            />
          </form>
        </div>
      </div>
      <div class="hide-scrollbar">
        <div class="inner-hide_scrollbar">
          <div class="lateral-wrapper">
            <div
              class="flex language-search line item-delay_off"
              :class="{ 'item-delay_on': itemDelayOn }"
            >
              <ul id="menu-top-menu" class="language">
                <li
                  id="menu-item-15"
                  class="active menu-item menu-item-type-custom menu-item-object-custom menu-item-15"
                >
                  <a href="#">En</a>
                </li>
                <li
                  id="menu-item-16"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"
                >
                  <a href="#">Fr</a>
                </li>
                <li
                  id="menu-item-17"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"
                >
                  <a href="#">De</a>
                </li>
              </ul>
              <div class="search-icon_holder ml-auto">
                <a
                  class="search-icon_text flex items-center"
                  @click.prevent="handleSearchOpen"
                >
                  <svg
                    id="Capa_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style="enable-background: new 0 0 56.966 56.966"
                    xml:space="preserve"
                  >
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </svg>
                  <span>Search</span>
                </a>
              </div>
              <div class="close-menu_holder ml-auto">
                <a id="close-menu" href="#" @click.prevent="handleMenuClose"
                  >Close</a
                >
              </div>
            </div>
            <div
              class="menu-holder item-delay_off"
              :class="{ 'item-delay_on': itemDelayOn }"
            >
              <nav class="menu-main-menu-container">
                <ul id="menu-main-menu" class="menu">
                  <li
                    id="menu-item-124"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item current_page_item menu-item-124 active"
                  >
                    <span>
                      <a href="https://neuronthemes.com/soma/">Home</a>
                    </span>
                  </li>
                  <li
                    id="menu-item-9"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9"
                  >
                    <span>
                      <a href="#" @click.prevent="handleMenuItemClick">Shop</a>
                    </span>
                    <ul class="sub-menu">
                      <li class="back-link">
                        <span>
                          <a href="#" @click.prevent="handleBackClick">Back</a>
                        </span>
                      </li>
                      <li
                        id="menu-item-21"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21"
                      >
                        <span>
                          <a href="#">Shop Type</a>
                        </span>
                        <ul class="sub-menu">
                          <li class="back-link">
                            <span>
                              <a href="#">Back</a>
                            </span>
                          </li>
                          <li
                            id="menu-item-123"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item current_page_item menu-item-123 active"
                          >
                            <span>
                              <a href="https://neuronthemes.com/soma/"
                                >Archive</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-130"
                            class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-130"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product-category/fashion/"
                                >Product Category</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-132"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-132"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_sidebar=on"
                                >Sidebar</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-133"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-133"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_columns=two&amp;shop_offset=off"
                                >Two Columns</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-134"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-134"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_columns=three&amp;shop_offset=off"
                                >Three Columns</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-135"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-135"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_columns=four&amp;shop_offset=off"
                                >Four Columns</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-158"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-158"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_metro=on&amp;shop_offset=off"
                                >Metro</a
                              >
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-22"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-22"
                      >
                        <span>
                          <a href="#">Shop Style</a>
                        </span>
                        <ul class="sub-menu">
                          <li class="back-link">
                            <span>
                              <a href="#">Back</a>
                            </span>
                          </li>
                          <li
                            id="menu-item-138"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_type=basic&amp;shop_offset=off"
                                >Basic</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-152"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-152"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_type=basic&amp;shop_shadow=on&amp;shop_offset=off"
                                >Basic w/ Shadow</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-139"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item current_page_item menu-item-139 active"
                          >
                            <span>
                              <a href="https://neuronthemes.com/soma/"
                                >Creative</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-153"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-153"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_shadow=on&amp;shop_offset=off"
                                >Creative w/ Shadow</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-155"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-155"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_metro=on&amp;shop_offset=off"
                                >Metro</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-156"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-156"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_metro=on&amp;shop_offset=off&amp;shop_shadow=on"
                                >Metro w/ Shadow</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-140"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item current_page_item menu-item-140 active"
                          >
                            <span>
                              <a href="https://neuronthemes.com/soma/"
                                >Offset Grid</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-154"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-154"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_offset=off"
                                >Normal Grid</a
                              >
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-159"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-159"
                      >
                        <span>
                          <a href="#">Shop Pagination</a>
                        </span>
                        <ul class="sub-menu">
                          <li class="back-link">
                            <span>
                              <a href="#">Back</a>
                            </span>
                          </li>
                          <li
                            id="menu-item-160"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-160"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_columns=three&amp;shop_offset=off&amp;shop_ppp=9&amp;shop_pagination=default"
                                >Default Pagination</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-161"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-161"
                          >
                            <span>
                              <a
                                href="http://neuronthemes.com/soma/?shop_columns=three&amp;shop_offset=off&amp;shop_ppp=9&amp;shop_pagination=show-more"
                                >Show More</a
                              >
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-23"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-23"
                      >
                        <span>
                          <a href="#">Product Type</a>
                        </span>
                        <ul class="sub-menu">
                          <li class="back-link">
                            <span>
                              <a href="#">Back</a>
                            </span>
                          </li>
                          <li
                            id="menu-item-102"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-102"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/bronco/"
                                >Simple</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-103"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-103"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/wyatt/"
                                >Grouped</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-104"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-104"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/double/"
                                >External / Affiliate</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-105"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-105"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/bombay/"
                                >Variable</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-106"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-106"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/travist/"
                                >On Sale</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-107"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-107"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/willowy/"
                                >Out of Stock</a
                              >
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-24"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24"
                      >
                        <span>
                          <a href="#">Product Style</a>
                        </span>
                        <ul class="sub-menu">
                          <li class="back-link">
                            <span>
                              <a href="#">Back</a>
                            </span>
                          </li>
                          <li
                            id="menu-item-108"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-108"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/travist/"
                                >Layout v1</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-110"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-110"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/wyatt/"
                                >Layout v2</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-111"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-111"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/amazon/"
                                >Layout v3</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-112"
                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-112"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/product/wheeler/"
                                >Layout v4</a
                              >
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-25"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-25"
                      >
                        <span>
                          <a href="#">Shop Pages</a>
                        </span>
                        <ul class="sub-menu">
                          <li class="back-link">
                            <span>
                              <a href="#">Back</a>
                            </span>
                          </li>
                          <li
                            id="menu-item-115"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"
                          >
                            <span>
                              <a href="https://neuronthemes.com/soma/cart/"
                                >Shopping Cart</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-114"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"
                          >
                            <span>
                              <a href="https://neuronthemes.com/soma/checkout/"
                                >Checkout</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-113"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/my-account/"
                                >My Account</a
                              >
                            </span>
                          </li>
                          <li
                            id="menu-item-398"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398"
                          >
                            <span>
                              <a
                                href="https://neuronthemes.com/soma/order-tracking/"
                                >Order Tracking</a
                              >
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-10"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10"
                  >
                    <span>
                      <a href="#">Pages</a>
                    </span>
                    <ul class="sub-menu">
                      <li class="back-link">
                        <span>
                          <a href="#">Back</a>
                        </span>
                      </li>
                      <li
                        id="menu-item-151"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-151"
                      >
                        <span>
                          <a href="https://neuronthemes.com/soma/about-us/"
                            >About Us</a
                          >
                        </span>
                      </li>
                      <li
                        id="menu-item-150"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150"
                      >
                        <span>
                          <a href="https://neuronthemes.com/soma/services/"
                            >Services</a
                          >
                        </span>
                      </li>
                      <li
                        id="menu-item-149"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149"
                      >
                        <span>
                          <a href="https://neuronthemes.com/soma/contact/"
                            >Contact</a
                          >
                        </span>
                      </li>
                      <li
                        id="menu-item-142"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-142"
                      >
                        <span>
                          <a href="http://neuronthemes.com/soma/?s=Amazon"
                            >Search Page</a
                          >
                        </span>
                      </li>
                      <li
                        id="menu-item-143"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-143"
                      >
                        <span>
                          <a href="http://neuronthemes.com/soma/error404"
                            >404 Page</a
                          >
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-11"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11"
                  >
                    <span>
                      <a href="#">Journal</a>
                    </span>
                    <ul class="sub-menu">
                      <li class="back-link">
                        <span>
                          <a href="#">Back</a>
                        </span>
                      </li>
                      <li
                        id="menu-item-277"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-277"
                      >
                        <span>
                          <a
                            href="https://neuronthemes.com/soma/blog-2-columns-w-shadow/"
                            >Layout v1</a
                          >
                        </span>
                      </li>
                      <li
                        id="menu-item-271"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-271"
                      >
                        <span>
                          <a
                            href="https://neuronthemes.com/soma/blog-3-columns/"
                            >Layout v2</a
                          >
                        </span>
                      </li>
                      <li
                        id="menu-item-272"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-272"
                      >
                        <span>
                          <a
                            href="https://neuronthemes.com/soma/blog-2-columns/"
                            >Layout v3</a
                          >
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-306"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-306"
                  >
                    <span>
                      <a href="https://neuronthemes.com/soma/elements/"
                        >Elements</a
                      >
                    </span>
                  </li>
                  <li
                    id="menu-item-13"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"
                  >
                    <span>
                      <a
                        href="https://themeforest.net/item/soma-creative-woocommerce-theme/21643339?ref=neuronthemes"
                        >Buy Now</a
                      >
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [],
      isOpen: false,
      isOpenSearch: false,
      itemDelayOn: false,
      checkMobile: false
    }
  },
  created() {},
  mounted() {
    this.initBackButtaddEventListener()
    this.mobileBindings()
  },
  methods: {
    handleMenuItemClick(event) {
      const submenu = event.target.closest('.menu-item-has-children')
      const parentItem = submenu.closest('ul')

      const menuItem = {
        submenu,
        parentItem
      }

      this.history.push(menuItem)

      this.openMenuItem(menuItem)
    },

    handleBackClick() {
      const menuItem = this.history.pop()

      if (menuItem) {
        this.closeMenuItem(menuItem)
      }
    },

    handleMenuClose() {
      if (this.history.length > 0) {
        const animationInterval = this.history.length * 200

        this.history.reverse().forEach(
          function (menuItem, key) {
            const interval = (key + 1) * 200

            setTimeout(
              function () {
                this.closeMenuItem(menuItem)

                this.history.pop() // just remove the items
              }.bind(this),
              interval
            )
          }.bind(this)
        )

        setTimeout(
          function () {
            this.animateMenuHide()
          }.bind(this),
          animationInterval
        )
      } else {
        this.animateMenuHide()
      }
    },

    animateMenuHide() {
      setTimeout(() => {
        this.isOpen = false
      }, 500)
      setTimeout(() => {
        this.itemDelayOn = false
      }, 200)
      this.isOpenSearch = false
    },

    handleMenuOpen() {
      this.isOpen = true
      setTimeout(() => {
        this.itemDelayOn = true
      }, 400)
    },

    handleSearchOpen() {
      this.isOpenSearch = true

      setTimeout(() => {
        this.$refs.searchInput.focus()
        if (this.isMobile) {
          this.checkMobile = true
        }
      }, 400)

      document.addEventListener('keydown', (e) => {
        if (e.which == 27) {
          this.isOpenSearch = false
          if (this.isMobile) {
            this.checkMobile = false
          }
        }
      })
    },

    openMenuItem(menuItem) {
      menuItem.parentItem.classList.add('menu-hidden_left')
      menuItem.submenu.classList.add('menu-active')
    },

    closeMenuItem(menuItem) {
      menuItem.parentItem.classList.remove('menu-hidden_left')
      menuItem.submenu.classList.remove('menu-active')
    },

    initBackButtaddEventListener() {
      document
        .querySelector('.menu-holder .menu-item-has-children .sub-menu')
        .prepend('<li class="back-link"><span><a href="#">Back</a></span></li>')
    },

    mobileBindings() {
      if (this.isMobile) {
        document.querySelector('.lateral').classList.add('is-mobile')
        document.querySelector('#close-menu').classList.add('is-active')
        document
          .querySelector('#close-search')
          .addEventListener('click', function () {
            document.querySelector(this).classList.remove('is-active')
            document.querySelector('.search').classList.remove('is-open')
            document.querySelector('#search-input').focusout()
          })
      }
    }
  }
}
</script>

<style></style>
