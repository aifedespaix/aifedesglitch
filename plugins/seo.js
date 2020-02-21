import Vue from 'vue'

Vue.prototype.$seo = (page, titleComplement = '') => {
  return {
    title: getTitle(page.title, titleComplement),
    meta: [
      { property: 'fb:app_id', content: '182305972365278' },
      {
        hid: 'description',
        name: 'description',
        content: page.description
      },
      // {
      //   hid: 'og:url',
      //   name: 'og:url',
      //   content: page.description
      // },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'Rl35VY5Fy6h9F7bgKWv2u81nK3gyI4s41ZbgsO1scs8'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: getTitle(page.title, titleComplement)
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: page.description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: aifedesglitchApiUrl(page.thumbnail.url)
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: getTitle(page.title, titleComplement)
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: page.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: aifedesglitchApiUrl(page.thumbnail.url)
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@aifedesglitch'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'aifedesglitch.com'
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

function aifedesglitchApiUrl(path) {
  return `https://aifedesglitch.aifedespaix.com${path}`
}
