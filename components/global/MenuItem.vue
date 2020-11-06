<template>
  <li>
    <span
      ><a
        :href="menuItem.url | formatURL"
        @click.prevent="handleMenuItemClick"
        >{{ menuItem.label }}</a
      ></span
    >
    <ul v-if="menuItem.children && menuItem.children.length" class="sub-menu">
      <li class="back-link">
        <span>
          <a href="#" @click.prevent="handleBackClick">Back</a>
        </span>
      </li>
      <menu-item
        v-for="menuSubItem in menuItem.children"
        :key="menuSubItem.key"
        :menu-item="menuSubItem"
        class="menu-item"
        :class="[menuSubItem.children.length ? 'menu-item-has-children' : '']"
      >
      </menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menuItem: Object
  },
  data() {
    return {}
  }
}
</script>

<style></style>
