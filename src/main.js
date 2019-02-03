// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'



router.beforeEach((to, from, next) => {

  if(to.meta.auth && !router.app.authenticated) return next('/account')

  return next()
})

router.afterEach((to, from) => {
  setTimeout(() => router.app.loading = false, 500)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: () => {
    return {
      authenticated: false,
      loading: true
    }
  },
  router,
  components: { App },
  template: '<App/>'
})
