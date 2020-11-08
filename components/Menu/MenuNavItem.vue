<template>
  <li>
    <span v-if="menuItem.children && menuItem.children.length"
      ><a :href="menuItem.url | formatURL" @click.prevent="handleItemClick">{{
        menuItem.label
      }}</a></span
    >
    <span v-else
      ><a :href="menuItem.url | formatURL">{{ menuItem.label }}</a></span
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
        :handle-back-click="handleBackClick"
        :handle-item-click="handleItemClick"
      >
      </menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menuItem: {
      type: Object,
      default: () => {}
    },
    handleItemClick: {
      type: Function,
      default: () => 1
    },
    handleBackClick: {
      type: Function,
      default: () => 1
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
