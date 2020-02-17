import Vue from 'vue'

Vue.directive('banner', {
  bind(el) {
    el.classList.add('display-3')
    el.classList.add('my-4')
    el.classList.add('text-shadow')
  },
  unbind(el) {
    el.classList.remove('display-3')
    el.classList.remove('my-4')
    el.classList.remove('text-shadow')
  }
})

Vue.directive('h1', {
  bind(el) {
    el.classList.add('display-3')
    el.classList.add('my-4')
  },
  unbind(el) {
    el.classList.remove('display-3')
    el.classList.remove('my-4')
  }
})

Vue.directive('h2', {
  bind(el) {
    el.classList.add('display-2')
    el.classList.add('my-3')
  },
  unbind(el) {
    el.classList.remove('display-2')
    el.classList.remove('my-3')
  }
})

Vue.directive('h3', {
  bind(el) {
    el.classList.add('headline')
    el.classList.add('my-2')
  },
  unbind(el) {
    el.classList.remove('headline')
    el.classList.remove('my-2')
  }
})
