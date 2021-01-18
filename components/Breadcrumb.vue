<template>
  <nav class="woocommerce-breadcrumb">
    <!-- <NuxtLink to="/">Home</NuxtLink><span>/</span
    ><a :href="product.productCategories.nodes[0].link | formatURL">{{
      product.productCategories.nodes[0].name
    }}</a
    ><span>/</span>{{ product.name }} -->
    {{ crumbs }}
  </nav>
</template>

<script>
export default {
  // props:{

  // }
  data() {
    return {}
  },

  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      const crumbs = []
      let path = ''

      params.forEach((param) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push(match)
        }
      })
      return crumbs
    }
  }
}
</script>

<style></style>
