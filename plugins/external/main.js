import SmoothScrollbar from 'smooth-scrollbar'

const options = {
  damping: 0.055,
  renderByPixels: true,
  thumbMinSize: 20,
  alwaysShowTracks: false,
  continuousScrolling: true,
  delegateTo: null,
  plugins: {}
}
export class ScrollContainer {
  constructor(containerSelector) {
    const scrollbar = SmoothScrollbar.init(containerSelector, options)

    this.scrollbar = scrollbar
  }

  scrollIntoView(elem) {
    return this.scrollbar.scrollIntoView(elem)
  }

  scrollTo(x, y, duration, options) {
    return this.scrollbar.scrollTo(x, y, duration, options)
  }

  setPosition(x, y) {
    return this.scrollbar.setPosition(x, y)
  }

  update() {
    return this.scrollbar.update()
  }

  getOffsetTop() {
    return this.scrollbar.scrollTop
  }

  getDocHeight() {
    return this.scrollbar.size.content.height
  }

  destroy() {
    return this.scrollbar.destroy()
  }
}
