const api = process.env.API_URL

export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`${api}${resource}`)
  },

  show(id) {
    return $axios.$get(`${api}${resource}/${id}`)
  },

  create(payload) {
    return $axios.$post(`${api}${resource}`, payload)
  },

  update(id, payload) {
    return $axios.$post(`${api}${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${api}${resource}/${id}`)
  },

  filter(params) {
    let path = ''
    let i = 0

    params.forEach((param) => {
      const prefix = i++ === 0 ? '/?' : '&'
      path += `${prefix}${param.arg}=${param.value}`
    })

    return $axios.$get(`${api}${resource}${path}`)
  }
})
