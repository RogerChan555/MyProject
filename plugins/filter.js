import Vue from 'vue'

Vue.filter('formatURL', function (URL) {
  if (URL) {
    const baseURL = 'http://localhost/wordpress/'
    return URL.replace(baseURL, '')
  } else return ''
})
