export const state = () => ({
  menu: {
    permanent: false,
    model: false
  }
})

export const actions = {
  switchMenu({ commit }) {
    commit('SET_MODEL', true)
  }
}

export const mutations = {
  SET_MODEL(state, model) {
    state.menu.permanent = model
  }
}
