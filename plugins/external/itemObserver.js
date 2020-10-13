import { gsap } from 'gsap'
/**
 * @class itemParallax
 */
export class itemObserver {
  constructor(el) {
    this.DOM = { el }
    this.DOM.images_mask = this.DOM.el.querySelector('.ac-mask')
    this.DOM.images_masked = this.DOM.el.querySelector('.ac-masked')
    this.DOM.reverse = this.DOM.images_masked.classList.contains('.ac-reverse')
      ? -1
      : 1

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              this.DOM.images_mask,
              0.85,
              {
                scaleX: 1
              },
              {
                scaleX: 0
                // ease: Power2.easeOut,
              }
            ),
              gsap.fromTo(
                this.DOM.images_masked,
                0.85,
                {
                  x: 50 * this.DOM.reverse,
                  scaleX: 1.15,
                  transformOrigin: '0 0'
                },
                {
                  x: 0,
                  scaleX: 1
                  // ease: Power2.easeOut,
                }
              )
            observer.unobserve(entry.target)
          }
        })
      },
      {
        // threshold: 0.25,
        rootMargin: '0px 0px -200px 0px'
      }
    )
    this.observer.observe(this.DOM.el)
  }
}
