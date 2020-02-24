export default {
  api(path) {
    return `${process.env.API_URL}${path}`
  },
  canonic(path) {
    return `${process.env.BASE_URL}${path}`
  },
  routing: {
    glitch(glitch) {
      return `/${glitch.category.page.slug}/${glitch.page.slug}/${glitch.id}`
    },
    category() {}
  }
}
