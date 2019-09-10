import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入iview和iView的css
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
//全局使用Iview所有组件
Vue.use(iView)
new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
