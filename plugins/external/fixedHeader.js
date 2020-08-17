// Calculate header height
function calculateHeaderHeight() {
  document.querySelector('.header-height').style.height = getHeaderHeight()
}
// Calculate product single height
function calculateProductSingleHeight() {
  if (
    !document
      .querySelector('.header-wrapper')
      .classList.contains('header-height') &&
    (document.querySelector('header').classList.contains('absolute') ||
      document.querySelector('header').classList.contains('fixed'))
  ) {
    document
      .querySelector('.single-product_info')
      .css('margin-top', getHeaderHeight())
    document.querySelector('.single-product_info').css('padding-top', '10rem')

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1920) {
        document.querySelector('.single-product_info').style.paddingTop =
          '12rem'
      }
    })
    window.dispatchEvent(new Event('resize'))
  }
}

// headerHeight
function getHeaderHeight() {
  return document.querySelector('.header-wrapper header .row').innerHeight
}
// Resize
calculateHeaderHeight()
calculateProductSingleHeight()

window.addEventListener('resize', () => {
  calculateHeaderHeight()
  calculateProductSingleHeight()
})

// Header fixed
var onScroll = document.querySelector('header.fixed')
document.addEventListener('scroll', function () {
  if (document.scrollTop() >= 30) {
    onScroll.classList.add('onScroll')
  } else {
    onScroll.classList.remove('onScroll')
  }
})
