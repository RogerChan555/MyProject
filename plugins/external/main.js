import SmoothScrollbar from 'smooth-scrollbar'

// eslint-disable-next-line no-unused-vars
export default ({ app }, inject) => {
  const options = {
    damping: 0.055,
    renderByPixels: true,
    thumbMinSize: 20,
    alwaysShowTracks: false,
    continuousScrolling: true,
    delegateTo: null,
    plugins: {}
  }
  const scrollbar = {
    init(scrollArea) {
      return SmoothScrollbar.init(scrollArea, options)
    }
  }
  // const scrollbar = SmoothScrollbar.init(scrollArea, options)
  //  Inject $scrollbar() in Vue, context and store.
  inject('scrollbar', scrollbar)
}
