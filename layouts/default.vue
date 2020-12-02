<template>
  <main id="main" role="main">
    <!-- <loader /> -->
    <div v-if="$nuxt.isOffline">You are offline</div>
    <top-header />
    <SmoothScrollbar>
      <nuxt />
      <bottom-footer />
    </SmoothScrollbar>
  </main>
</template>

<script></script>
<script>
import Vue from 'vue'

export default {}
</script>
