<template>
  <!-- <label class="dayNight">
    <input
      type="checkbox"
      :checked="$colorMode.preference === 'dark'"
      @click="changeMode"
    />
    <div></div>
  </label> -->

  <div
    class="dayNight"
    :class="{ switched: $colorMode.preference === 'dark' }"
    @click="changeMode"
  >
    <div></div>
  </div>
  <!-- <select v-model="$colorMode.preference">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select> -->
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
