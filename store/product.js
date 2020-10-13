import * as types from './mutation-types.js'
import productsQuery from '~/apollo/queries/product/products.gql'
import productDetailQuery from '~/apollo/queries/product/product_detail.gql'

export const state = () => ({
  listProduct: [],
  product: []
})

export const getters = {
  product: (state) => state.product,
  listProduct: (state) => state.listProduct
}

export const mutations = {
  [types.SAVE_PRODUCT](state, product) {
    state.product = product
  },
  [types.SAVE_PRODUCTS](state, listProduct) {
    state.listProduct = listProduct
  }
}

export const actions = {
  async fetchProduct({ commit }, { apolloClient, id }) {
    try {
      const response = await apolloClient.query({
        query: productDetailQuery,
        variables: {
          id
        }
      })

      // Fetch Information Success
      if (response.data.product) {
        commit(types.SAVE_PRODUCT, response.data.product)
        return { requestResolved: true }
      }
      // Fetch Information Failed
      else {
        return { requestResolved: false, systemError: null }
      }
    } catch (systemError) {
      return { requestResolved: false, systemError }
    }
  },
  async fetchProducts({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: productsQuery
    })
    commit(types.SAVE_PRODUCTS, response.data.products.nodes)
  }
}
