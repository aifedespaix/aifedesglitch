import Vue from 'vue'

Vue.filter(
  'fdgApiUrl',
  (path) => `https://aifedesglitch.aifedespaix.com${path}`
)

Vue.filter('formatDate', function(value) {
  if (value) {
    // return String(value).format('MM/DD/YYYY hh:mm')
    return new Date(value).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
})
