export default () => {
  window.onNuxtReady(() => {
    // headerHeight
    function getHeaderHeight() {
      return document.querySelector('.header-wrapper header .inner')
        .clientHeight
    }
    function calculateHeaderHeight() {
      document.getElementsByClassName('header-height')[0].style.height =
        getHeaderHeight()
      // console.log(document.getElementsByClassName('header-height')[0])
    }
    calculateHeaderHeight()
  })
}
