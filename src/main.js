import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store' // if the file is index.js actually we do not need to write it! --> this is the same as ./store/index.js
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
