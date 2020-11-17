import SmoothScrollbar from 'smooth-scrollbar'

const scrollbar = {
  options: {
    damping: 0.055,
    renderByPixels: true,
    thumbMinSize: 20,
    alwaysShowTracks: false,
    continuousScrolling: true,
    delegateTo: null,
    plugins: {}
  },
  init(scrollArea) {
    return SmoothScrollbar.init(scrollArea, this.options)
  }
}
// eslint-disable-next-line no-unused-vars
export default ({ app }, inject) => {
  console.log(app)
  //  Inject $scrollbar() in Vue, context and store.
  inject('scrollbar', scrollbar)
}

// export class ScrollContainer {
//   constructor(containerSelector) {
//     const scrollbar = SmoothScrollbar.init(containerSelector, options)

//     this.scrollbar = scrollbar
//   }

//   scrollIntoView(elem) {
//     return this.scrollbar.scrollIntoView(elem)
//   }

//   scrollTo(x, y, duration, options) {
//     return this.scrollbar.scrollTo(x, y, duration, options)
//   }

//   setPosition(x, y) {
//     return this.scrollbar.setPosition(x, y)
//   }

//   update() {
//     return this.scrollbar.update()
//   }

//   getOffsetTop() {
//     return this.scrollbar.scrollTop
//   }

//   getDocHeight() {
//     return this.scrollbar.size.content.height
//   }

//   destroy() {
//     return this.scrollbar.destroy()
//   }
// }
