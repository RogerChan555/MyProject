<template>
  <main id="main" role="main">
    <span class="o-loader || js-loader">
      <span class="o-loader__bg || js-loader-bg"></span>
      <span class="o-loader__anim">
        <span class="o-loader__gradients"></span>
      </span>
    </span>
    <SmoothScrollbar>
      <nuxt />
      <BottomFooter />
    </SmoothScrollbar>
    <TopHeader />
  </main>
</template>

<script></script>
<script>
import Vue from 'vue'

// Import mixins file
import utils from '~/mixins/utils.js'
// import { createTransitionMixin } from '~/mixins/transition.js'

Vue.mixin(utils)
export default {
  name: 'defaultLayout'
  // mixins: [createTransitionMixin]
}
</script>

<style>
.o-loader {
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  will-change: transform;
  -webkit-transition: all 0s 1s;
  -o-transition: all 0s 1s;
  transition: all 0s 1s;
}
.o-loader.is-loading {
  z-index: 2000;
  opacity: 1;
  -webkit-transition: all 0s 0s;
  -o-transition: all 0s 0s;
  transition: all 0s 0s;
}
.o-loader.is-loading .o-loader__anim {
  opacity: 1;
  -webkit-transition: opacity 0.4s ease-out 0.4s;
  -o-transition: opacity 0.4s ease-out 0.4s;
  transition: opacity 0.4s ease-out 0.4s;
}
.o-loader.is-loading .o-loader__gradients {
  --animation-state: running;
}

.o-loader__bg {
  position: fixed;
  top: -50vmax;
  left: -50vmax;
  display: block;
  width: 100vmax;
  height: 100vmax;
  border-radius: 50%;
  background-color: #fff;
  -webkit-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  will-change: transform;
}

.o-loader__anim,
.o-loader__gradients {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.o-loader__anim {
  background-color: #fff;
  opacity: 0;
  -webkit-transition: opacity 0.6s ease-in 0s;
  -o-transition: opacity 0.6s ease-in 0s;
  transition: opacity 0.6s ease-in 0s;
}
.o-loader__anim::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fff),
    to(rgba(255, 255, 255, 0))
  );
  background: -webkit-linear-gradient(top, #fff, rgba(255, 255, 255, 0));
  background: -o-linear-gradient(top, #fff, rgba(255, 255, 255, 0));
  background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
}

.o-loader__gradients {
  --animation-state: paused;
}
.o-loader__gradients::after,
.o-loader__gradients::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  background-size: auto 100%;
  background-repeat: repeat-x;
  opacity: 0;
}
.o-loader__gradients::before {
  background: rgba(224, 25, 25, 0.5);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(224, 25, 25, 0.5)),
    to(#274ee5)
  );
  background: -webkit-linear-gradient(top, rgba(224, 25, 25, 0.5), #274ee5);
  background: -o-linear-gradient(top, rgba(224, 25, 25, 0.5), #274ee5);
  background: linear-gradient(to bottom, rgba(224, 25, 25, 0.5), #274ee5);
  -webkit-animation: loadergradient 4s infinite var(--animation-state);
  -o-animation: loadergradient 4s infinite var(--animation-state);
  animation: loadergradient 4s infinite var(--animation-state);
}
.o-loader__gradients::after {
  background: #ffe603;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffe603),
    to(#8ce894)
  );
  background: -webkit-linear-gradient(top, #ffe603, #8ce894);
  background: -o-linear-gradient(top, #ffe603, #8ce894);
  background: linear-gradient(to bottom, #ffe603, #8ce894);
  -webkit-animation: loadergradient 4s infinite var(--animation-state)
    calc(4s / 2);
  -o-animation: loadergradient 4s infinite var(--animation-state) calc(4s / 2);
  animation: loadergradient 4s infinite var(--animation-state) calc(4s / 2);
}

@-webkit-keyframes loadergradient {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  60% {
    opacity: 0.5;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes loadergradient {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  60% {
    opacity: 0.5;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes loadergradient {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  60% {
    opacity: 0.5;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
