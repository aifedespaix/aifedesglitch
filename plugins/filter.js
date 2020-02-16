import Vue from 'vue'

Vue.filter(
  'fdgApiUrl',
  (path) => `https://aifedesglitch.aifedespaix.com${path}`
)
