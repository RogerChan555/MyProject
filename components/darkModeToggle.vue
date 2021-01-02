<template>
  <div
    class="dayNight"
    :class="{ switched: $colorMode.preference === 'dark' }"
    @click="changeMode"
  >
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switched: false
    }
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style></style>
