import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import './style.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

// 全局定义方法和变量
Vue.mixin({
  computed: {
    // 上传图片的地址
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },

  methods: {
    // 上传图片接口的 headers 需要传 Authorization
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
