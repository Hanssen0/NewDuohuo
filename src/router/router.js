import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "./index"
import Introduction from "./introduction"
import History from "./history"
Vue.use(VueRouter);
export default new VueRouter({
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/introduction',
    component: Introduction
  }, {
    path: '/history',
    component: History
  }]
})
