import axios from 'axios'

export const state = () => ({
  articles: []
})

export const actions = {
  async load({ commit }) {
    const { data } = await axios.get(
      'https://aifedesglitch.aifedespaix.com/articles'
    )
    commit('SET_ARTICLES', data)
  }
}

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  }
}
