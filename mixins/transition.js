// import { gsap } from 'gsap'
// var e = Math.sqrt(Math.pow(APP.W.w, 2) + Math.pow(APP.W.h, 2))
// this.scale = APP.W.w > APP.W.h ? e / APP.W.w : e / APP.W.h
// const main = document.getElementById('main')
export const transitionMixin = {
  transition: {
    css: false,
    mode: 'out-in',
    enter(el) {
      console.log('enter' + el)
      // gsap
      //   .timeline({
      //     onComplete: done,
      //     defaults: { ease: 'expo.in', duration: 1 }
      //   })
      //   .to('.js-loader-bg', {
      //     scale: 0,
      //     onStart: function () {
      //       main.classList.remove('no-scroll')
      //     },
      //     onComplete: function () {
      //       gsap.set('.js-loader-bg', {})
      //     }
      //   })
      //   .set(el, { clearProps: true })
    },
    leave(el) {
      console.log('leave' + el)

      // gsap
      //   .timeline({
      //     onComplete: done,
      //     defaults: { ease: 'expo.inOut', duration: 0.8 }
      //   })
      //   .to('.js-loader-bg', {
      //     // x: APP.W.w / 2,
      //     // y: APP.W.h / 2,
      //     transformOrigin: '50% 50%',
      //     // scale: this.scale
      //     onStart: function () {
      //       // document.classList.add('no-scroll')
      //       main.classList.add('no-scroll')
      //     }
      //   })
      //   .set(el, { clearProps: true })
    }
  }
}

// transition: {
//   enter(el, done) {
//     gsap
//       .timeline({
//         onComplete: done,
//         defaults: { ease: 'back.inOut(3)', duration: 0.5 }
//       })
//       .from(el, {
//         position: 'absolute',
//         y: 20,
//         autoAlpha: 0,
//         scale: 1.03,
//         transformOrigin: 'top center'
//       })
//       .set(el, { clearProps: true })
//   },
//   leave(el, done) {
//     gsap
//       .timeline({
//         onComplete: done,
//         defaults: { ease: 'back.inOut(3)', duration: 0.5 }
//       })
//       .to(el, {
//         position: 'absolute',
//         y: -20,
//         autoAlpha: 0,
//         scale: 0.97,
//         transformOrigin: 'top center'
//       })
//       .set(el, { clearProps: true })
//   },
//   css: false,
//   mode: 'out-in'
// },
