import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router/router.js"
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: function(h) {return h(App)},
  router
}).$mount('#app')
