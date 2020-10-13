import _ from 'lodash'
import * as types from './mutation-types.js'

const getFloatVal = (string) => {
  const floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0]
  return floatValue !== null
    ? parseFloat(parseFloat(floatValue).toFixed(2))
    : ''
}
const updateProductLocalStore = (state, currentProducts) => {
  const total = currentProducts.reduce(
    (accumulator, currentValue) => {
      accumulator.totalPrice += currentValue.totalPrice
      accumulator.qty += currentValue.qty
      return accumulator
    },
    { totalPrice: 0, qty: 0 }
  ) // total return an Object
  const updatedProduct = {
    products: currentProducts,
    totalProductsCount: total.qty,
    totalProductsPrice: total.totalPrice
  }
  state.cartList = updatedProduct
  return updatedProduct
}

/**
 * Create new product object
 * @param {*} product
 * @param {*} qty
 */
const createNewProduct = (product, qty) => {
  return {
    productId: product.productId,
    name: product.name,
    link: product.link,
    srcSet: product.image.srcSet,
    qty,
    price: getFloatVal(product.price),
    totalPrice: parseFloat((getFloatVal(product.price) * qty).toFixed(2))
  }
}

// const cartProducts = () => {
//   localStorage.getItem('woo-nuxt-cart')
// }

export const state = () => ({
  cartList: {}
})

export const getters = {
  cartList: (state) => state.cartList
}

export const mutations = {
  [types.CART_PUSH_FIRST_PRODUCT](state, product, qty = 1) {
    const newProduct = createNewProduct(product, qty)
    const newCart = {
      products: [],
      totalProductsCount: qty,
      totalProductsPrice: getFloatVal(product.price)
    }
    newCart.products.push(newProduct)

    state.cartList = newCart

    return newCart
  },

  /**
   * Push new product if product doesn't exist
   * @param {*} state
   * @param {*} product is new product
   * @param {*} currentProducts is old product
   */
  [types.CART_PUSH_NEW_PRODUCT](state, { product, currentProducts }) {
    const newProduct = createNewProduct(product, 1)
    currentProducts.push(newProduct)

    updateProductLocalStore(state, currentProducts)
  },
  /**
   * Incre product quantity if product exist
   * @param {*} state
   * @param {*} currentProducts currentProducts in localStore
   * @param {*} existingProductIndex [Index] of existing product in currentProducts
   * @param {*} newQty default value = false
   */
  [types.CART_INCREMENT_PRODUCT_QTY](
    state,
    { existingProductIndex, currentProducts, newQty = false }
  ) {
    currentProducts[existingProductIndex].qty = newQty
      ? parseInt(newQty)
      : ++currentProducts[existingProductIndex].qty
    currentProducts[existingProductIndex].totalPrice = parseFloat(
      (
        currentProducts[existingProductIndex].price *
        currentProducts[existingProductIndex].qty
      ).toFixed(2)
    )

    updateProductLocalStore(state, currentProducts)
  },

  [types.CART_REMOVE_PRODUCT](state, updatedProducts) {
    updateProductLocalStore(state, updatedProducts)
  }
  // decrementProductQuantity(state, product) {}
}

export const actions = {
  addProductToCart({ commit, state }, product) {
    if (product.stockStatus !== 'OUT_OF_STOCK') {
      try {
        // const cartProducts = JSON.parse(localStorage.getItem('vuex'))
        if (_.isEmpty(state.cartList)) {
          // push first product if does not exist
          commit(types.CART_PUSH_FIRST_PRODUCT, product)
        } else {
          const currentProducts = state.cartList.products
          const existingProductIndex = state.cartList.products.findIndex(
            (item) => item.productId === product.productId
          )

          if (existingProductIndex === -1) {
            // push new product if does not exist
            commit(types.CART_PUSH_NEW_PRODUCT, {
              product,
              currentProducts
            })
          } else {
            // increment exist product
            commit(types.CART_INCREMENT_PRODUCT_QTY, {
              existingProductIndex,
              currentProducts
            })
          }
        }
      } catch (err) {
        return err
      }

      // context.commit('decrementProductQuantity', product)
    }
  },
  removeProductFromCart({ commit, state }, productId) {
    const currentProducts = state.cartList.products
    const updatedProducts = _.filter(
      currentProducts,
      (item) => item.productId !== productId
    )

    commit(types.CART_REMOVE_PRODUCT, updatedProducts)
  }
}
