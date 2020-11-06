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
              class="flex language-search item-delay_off"
              :class="{ 'item-delay_on': itemDelayOn }"
            >
              <div class="search-icon_holder ml-auto">
                <a
                  class="search-icon_text flex items-center"
                  @click.prevent="handleSearchOpen"
                >
                  <SearchIcon />
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
                  <menu-item
                    v-for="menuItem in menuList"
                    :key="menuItem.key"
                    :menu-item="menuItem"
                    class="menu-item"
                    :class="[
                      menuItem.children.length ? 'menu-item-has-children' : ''
                    ]"
                    @item-click="handleMenuItemClick"
                    @back-click="handleBackClick"
                  />
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
import SearchIcon from '~/assets/images/search.svg'
import getMenusquery from '~/apollo/queries/Menus.gql'
export default {
  components: {
    SearchIcon
  },
  async fetch() {
    const id = 'default'
    const result = await this.$apollo.query({
      query: getMenusquery,
      variables: {
        id
      }
    })
    return (this.menuList = this.flatListToHierarchical(
      result.data.menu.menuItems.nodes
    ))
  },
  data() {
    return {
      menuList: '',
      history: [],
      isOpen: false,
      isOpenSearch: false,
      itemDelayOn: false,
      checkMobile: false
    }
  },
  created() {},
  mounted() {
    this.mobileBindings()
  },
  methods: {
    flatListToHierarchical(
      data = [],
      { idKey = 'key', parentKey = 'parentId', childrenKey = 'children' } = {}
    ) {
      const tree = []
      const childrenOf = {}
      data.forEach((item) => {
        const newItem = { ...item }
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
        childrenOf[id] = childrenOf[id] || []
        newItem[childrenKey] = childrenOf[id]
        parentId
          ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
          : tree.push(newItem)
      })
      return tree
    },

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
