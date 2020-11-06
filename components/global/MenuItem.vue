<template>
  <li>
    <span v-if="menuItem.children && menuItem.children.length"
      ><a :href="menuItem.url | formatURL" @click.prevent="menuItemClick">{{
        menuItem.label
      }}</a></span
    >
    <span v-else
      ><a :href="menuItem.url | formatURL">{{ menuItem.label }}</a></span
    >
    <ul v-if="menuItem.children && menuItem.children.length" class="sub-menu">
      <li class="back-link">
        <span>
          <a href="#" @click.prevent="backClick">Back</a>
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
  },
  methods: {
    menuItemClick(event) {
      this.$emit('item-click', event)
    },
    backClick(event) {
      this.$emit('back-click', event)
    }
  }
}
</script>

<style></style>
