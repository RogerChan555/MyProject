export const state = () => ({
  loading: false,
})

export const getters = {
  loading: (state) => state.loading,
}

export const mutations = {
  show(state) {
    state.loading = true
  },
  hide(state) {
    state.loading = false
  },
}

export const actions = {
  show({ commit }) {
    commit('show')
  },
  hide({ commit }) {
    commit('hide')
  },
}
