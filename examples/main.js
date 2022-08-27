import Vue from 'vue'
import App from './App.vue'
import Threeds from '../packages/index';
// import '../lib/index.css'

Vue.config.productionTip = false
Vue.use(Threeds)

new Vue({
  render: h => h(App),
}).$mount('#app')
