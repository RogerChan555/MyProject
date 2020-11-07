<template>
  <nav class="menu-main-menu-container">
    <ul id="menu-main-menu" class="menu">
      <menu-nav-item
        v-for="menuItem in menuList"
        :key="menuItem.key"
        :menu-item="menuItem"
        class="menu-item"
        :class="[menuItem.children.length ? 'menu-item-has-children' : '']"
        :handle-back-click="handleBackClick"
        :handle-item-click="handleItemClick"
      />
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuList: Array
  },
  methods: {
    handleItemClick(event) {
      this.$emit('item-click', event)
    },
    handleBackClick(event) {
      this.$emit('back-click', event)
    }
  }
}
</script>

<style></style>
