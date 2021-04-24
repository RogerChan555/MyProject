export const state = () => ({
  wooSession: null
})

export const getters = {
  wooSession: (state) => state.wooSession
}

export const mutations = {
  setSession(state, session) {
    state.wooSession = session
  }
}
