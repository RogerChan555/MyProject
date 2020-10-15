// import { gsap } from 'gsap'
// var e = Math.sqrt(Math.pow(APP.W.w, 2) + Math.pow(APP.W.h, 2))
// this.scale = APP.W.w > APP.W.h ? e / APP.W.w : e / APP.W.h
export let createTransitionMixin = () => {
  return {
    data: function () {
      return {
        message: 'chào anh',
        foo: 'abc'
      }
    }
    // transition: {
    //   css: false,
    //   mode: 'out-in',
    //   leave(el, done) {
    //     console.log(el + done)
    //     // gsap
    //     //   .timeline({
    //     //     onComplete: done,
    //     //     defaults: { ease: 'expo.in', duration: 1 }
    //     //   })
    //     //   .to('.js-loader-bg', {
    //     //     scale: 0,
    //     //     onStart: function () {
    //     //       console.log(el)
    //     //     },
    //     //     onComplete: function () {
    //     //       gsap.set('.js-loader-bg', {})
    //     //     }
    //     //   })
    //   },
    //   enter(el, done) {
    //     console.log(el + done)
    //     // gsap
    //     //   .timeline({
    //     //     onStart: function () {
    //     //       console.log(el)
    //     //     },
    //     //     onComplete: done,
    //     //     defaults: { ease: 'expo.inOut', duration: 0.8 }
    //     //   })
    //     //   .to('.js-loader-bg', {
    //     //     // x: APP.W.w / 2,
    //     //     // y: APP.W.h / 2,
    //     //     transformOrigin: '50% 50%'
    //     //     // scale: this.scale
    //     //   })
    //   }
    // }
  }
}

// export let CurtainTransitionBasic = createTransitionMixin(
//   [curtainsOpenTimeline],
//   [curtainsCloseTimeline]
// )
