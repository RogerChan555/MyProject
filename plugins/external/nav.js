const history = []
// const $ = 'jQuery'
/* eslint-disable */
import { isMobile } from './utils.js'

export class Nav {
  constructor() {
    this.init()
  }
  _bindings() {
    const _this = this

    document
      .querySelector('.menu-holder .menu-item-has-children > span > a')
      .addEventListener('click', function (e) {
        e.preventDefault()

        _this._handleMenuItemClick(this)
      })

    document
      .querySelector('.back-link > span > a')
      .addEventListener('click', function (e) {
        e.preventDefault()

        _this._handleBackClick(this)
      })

    document
      .querySelector('#header-overlay')
      .addEventListener('click', function (e) {
        _this._handleMenuClose()
      })
    document
      .querySelector('#close-menu')
      .addEventListener('click', function (e) {
        _this._handleMenuClose()
      })

    document
      .querySelector('.menu-text')
      .addEventListener('click', function (e) {
        e.preventDefault()

        _this._handleMenuOpen()
      })

    document
      .querySelector('.language li a')
      .addEventListener('click', function (e) {
        e.preventDefault()
      })

    document
      .querySelector('.search-icon_text')
      .addEventListener('click', function (e) {
        e.preventDefault()

        _this._handleSearchOpen()
      })

    document
      .querySelector('#close-menu')
      .addEventListener('click', function (e) {
        e.preventDefault()
      })

    // document.querySelector(window).addEventListener('resize', function () {
    //   _this._calculateSocialMediaHeight()
    // })
    window.addEventListener('resize', () => _this._calculateSocialMediaHeight())
  }

  _handleMenuItemClick(element) {
    const submenu = document
      .querySelector(element)
      .closest('.menu-item-has-children')
    const parentItem = submenu.closest('ul')

    const menuItem = {
      submenu: submenu,
      parentItem: parentItem,
    }

    history.push(menuItem)

    this._openMenuItem(menuItem)
  }

  _handleBackClick(element) {
    const menuItem = history.pop()

    if (menuItem) {
      this._closeMenuItem(menuItem)
    }
  }

  _handleMenuClose() {
    if (history.length > 0) {
      const animationInterval = history.length * 200

      history.reverse().forEach(
        function (menuItem, key) {
          const interval = (key + 1) * 200

          setTimeout(
            function () {
              this._closeMenuItem(menuItem)

              history.pop() // just remove the items
            }.bind(this),
            interval
          )
        }.bind(this)
      )

      setTimeout(
        function () {
          this._animateMenuHide()
        }.bind(this),
        animationInterval
      )
    } else {
      this._animateMenuHide()
    }
  }

  _animateMenuHide() {
    setTimeout(function () {
      document.querySelector('#header-overlay').classList.remove('is-open')
    }, 500)
    setTimeout(function () {
      document.querySelector('.lateral').classList.remove('is-open')
    }, 450)
    setTimeout(function () {
      document
        .querySelector('.language-search')
        .classList.remove('item-delay_on')
    }, 350)
    setTimeout(function () {
      document.querySelector('.menu-holder').classList.remove('item-delay_on')
    }, 200)
    if (document.querySelector('.lateral').classList.contains('has-socials')) {
      document
        .querySelector('.lateral .social-media')
        .classList.remove('is-open')
      document
        .querySelector('.lateral .social-media')
        .classList.remove('item-delay_on')
    }
    document.querySelector('.search').classList.remove('is-open')
    document.querySelector('#close-search').classList.remove('is-active')
  }

  _handleMenuOpen() {
    document.querySelector('#header-overlay').classList.add('is-open')
    setTimeout(function () {
      document.querySelector('.lateral').classList.add('is-open')
    }, 100)
    setTimeout(function () {
      document.querySelector('.language-search').classList.add('item-delay_on')
    }, 400)
    setTimeout(function () {
      document.querySelector('.menu-holder').classList.add('item-delay_on')
    }, 500)
    if (document.querySelector('.lateral').classList.contains('has-socials')) {
      setTimeout(function () {
        document
          .querySelector('.lateral .social-media')
          .classList.add('is-open')
      }, 600)
      setTimeout(function () {
        document
          .querySelector('.lateral .social-media')
          .classList.add('item-delay_on')
      }, 700)
    }
  }

  _handleSearchOpen() {
    document.querySelector('.search').classList.add('is-open')

    setTimeout(function () {
      document.querySelector('#search-input').focus()
      if (isMobile) {
        document.querySelector('#close-search').classList.add('is-active')
      }
    }, 400)

    document.querySelector(document).bind('keydown', function (e) {
      if (e.which == 27) {
        document.querySelector('.search').classList.remove('is-open')
        if (isMobile) {
          document.querySelector('#close-search').classList.remove('is-active')
        }
      }
    })
  }

  _openMenuItem(menuItem) {
    menuItem.parentItem.classList.add('menu-hidden_left')
    menuItem.submenu.classList.add('menu-active')
  }

  _closeMenuItem(menuItem) {
    menuItem.parentItem.classList.remove('menu-hidden_left')
    menuItem.submenu.classList.remove('menu-active')
  }

  _calculateSocialMediaHeight() {
    if (document.querySelector('.lateral').classList.contains('has-socials')) {
      const socialMediaHeight = document.querySelector('.lateral .social-media')
        .offsetHeight
      document.querySelector(
        '.menu-holder'
      ).style.paddingBottom = socialMediaHeight
    }
  }

  _initBackButtaddEventListener() {
    document
      .querySelector('.menu-holder .menu-item-has-children .sub-menu')
      .prepend('<li class="back-link"><span><a href="#">Back</a></span></li>')
  }

  _mobileBindings() {
    if (isMobile) {
      document.querySelector('.lateral').classList.add('is-mobile')
      document.querySelector('#close-menu').classList.add('is-active')
      document
        .querySelector('#close-search')
        .addEventListener('click', function () {
          document.querySelector(this).classList.remove('is-active')
          document.querySelector('.search').classList.remove('is-open')
          document.querySelector('#search-input').focusout()
        })
    }
  }

  init() {
    this._initBackButtaddEventListener()
    this._calculateSocialMediaHeight()
    this._mobileBindings()
    this._bindings()
  }
}
