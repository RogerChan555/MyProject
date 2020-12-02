import Vue from 'vue'
import clientConfig from '../client-config'

Vue.filter('formatURL', function (URL) {
  if (URL) {
    return URL.replace(clientConfig.siteUrl, '')
  } else return ''
})
