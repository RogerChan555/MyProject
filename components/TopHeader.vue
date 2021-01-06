<template>
  <div ref="headerWrapper" class="header-wrapper header-height">
    <header class="normal fixed onScroll">
      <div ref="headerHeight" class="flex items-center inner">
        <div class="w-1/3">
          <Cart />
        </div>
        <div class="w-1/3">
          <!-- <Logo /> -->
        </div>
        <div class="w-1/3">
          <Menu />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style></style>
