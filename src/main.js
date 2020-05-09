import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 创建vue实例 将router，store配值到根实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
