const api = 'https://aifedesglitch.aifedespaix.com'
const app = 'https://aifedesglitch.com'

export default {
  api(path) {
    return `${api}${path}`
  },
  canonic(path) {
    return `${app}${path}`
  },
  routing: {
    glitch(glitch) {
      return `/${glitch.category.page.slug}/${glitch.page.slug}/${glitch.id}`
    },
    category() {}
  }
}
