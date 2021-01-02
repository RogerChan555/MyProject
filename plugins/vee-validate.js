import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  alpha,
  numeric,
  confirmed
} from 'vee-validate/dist/rules'
import { MobileValidate } from './external/mobileValidates'

extend('required', {
  ...required,
  message: 'This field is required'
})
extend('email', email)
extend('min', min)
extend('max', max)
extend('alpha', alpha)
extend('phone', MobileValidate)
extend('numeric', numeric)
extend('confirmed', confirmed)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
