import Vue from 'vue'
// 屏蔽原始界面
//import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 原始入口
  //render: h => h(App),
  router
}).$mount('#app')
