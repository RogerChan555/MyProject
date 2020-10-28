<template>
  <div class="header-wrapper header-height">
    <header class="normal fixed onScroll">
      <div class="flex items-center">
        <div class="w-1/3">
          <Cart />
        </div>
        <div class="w-1/3">
          <Logo />
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
  name: 'TopHeader',

  data() {
    return {}
  }
}
</script>

<style></style>
