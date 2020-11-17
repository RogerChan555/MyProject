<template>
  <main id="main" role="main">
    <!-- <loader /> -->
    <div v-if="$nuxt.isOffline">You are offline</div>
    <SmoothScrollbar>
      <nuxt />
      <bottom-footer />
    </SmoothScrollbar>
    <top-header />
  </main>
</template>

<script></script>
<script>
import Vue from 'vue'

export default {}
</script>
