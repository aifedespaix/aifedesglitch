import axios from 'axios'

export const state = () => ({
  categories: []
})

export const actions = {
  async load({ commit }) {
    const { data } = await axios.get(
      'https://aifedesglitch.aifedespaix.com/categories'
    )
    commit('SET_CATEGORIES', data)
  }
}

export const mutations = {
  SET_CATEGORIES(state, data) {
    state.categories = data
  }
}
