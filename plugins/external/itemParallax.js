import { MathUtils } from './utils'

/**
 * @class itemParallax
 */
export class itemParallax {
  constructor(el) {
    this.DOM = { el: el }
    this.DOM.parallaxItem = this.DOM.el.querySelector('.ac-parallax-item')
    this.dataY = this.DOM.parallaxItem.dataset.y
    this.dataMax = this.DOM.parallaxItem.dataset.max > 0 ? -1 : 1
    this.dataSpeed = this.DOM.parallaxItem.dataset.speed
    this.rect = this.DOM.parallaxItem.getBoundingClientRect()
    this.renderedStyles = {
      setvalue: () => {
        const c = (this.dataMax * this.rect.top) / window.innerHeight,
          val = MathUtils(this.dataMax, c, this.dataSpeed)
        return this.DOM.parallaxItem.classList.contains('ac-px')
          ? Math.round(
              (this.dataY * val * this.DOM.parallaxItem.clientHeight) / 100
            ) + 'px'
          : this.dataY * val + '%'
      },
    }

    this.DOM.parallaxItem.style.transform = 'translate3d(0, '.concat(
      this.dataY * this.dataMax,
      '%, 0)'
    )
  }
  // init() {
  //   // Scroll.addListener(() => {

  //   // })
  //   let rect = this.DOM.parallaxItem.getBoundingClientRect(),
  //     c = (this.dataMax * rect.top) / window.innerHeight

  //   let val = MathUtils(this.dataMax, c, this.dataSpeed)
  //   let position = this.DOM.parallaxItem.classList.contains('ac-px')
  //     ? Math.round(
  //         (this.dataY * val * this.DOM.parallaxItem.clientHeight) / 100
  //       ) + 'px'
  //     : this.dataY * val + '%'
  //   this.DOM.parallaxItem.style.transform = 'translate3d(0, '.concat(
  //     position,
  //     ', 0)'
  //   )
  // }
}
