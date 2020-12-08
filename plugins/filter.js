import Vue from 'vue'
import clientConfig from '../client-config'

Vue.filter('formatURL', function (URL) {
  if (URL.includes(clientConfig.siteUrl)) {
    return URL.replace(clientConfig.siteUrl, '')
  } else return URL
})
