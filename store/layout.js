export const state = () => ({
  isLargeScreen: false,
  nav: false
})

export const actions = {
  switchNav({ commit, state }) {
    commit('SET_NAV', !state.nav)
  }
}

export const mutations = {
  SET_NAV(state, nav) {
    state.nav = nav
  },
  SET_LARGE_SCREEN(state, isLargeScreen) {
    state.isLargeScreen = isLargeScreen
  }
}
