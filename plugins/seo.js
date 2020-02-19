import Vue from 'vue'

Vue.prototype.$seo = (page, titleComplement = '') => {
  return {
    title: getTitle(page.title, titleComplement),
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: page.description
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: page.description
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: getTitle(page, titleComplement)
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: page.description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: page.thumbnail.url
      }
    ]
  }
}

function getTitle(title, complement = '') {
  if (complement !== '') {
    complement = `(${complement})`
  }
  return `${title} ${complement} - aifedesglitch`
}
