import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from "lodash"
import iView from 'iview'
import 'iview/dist/styles/iview.css'



Vue.config.productionTip = false
Vue.prototype._=_
Vue.use(iView)

new Vue({
  router,
  render: h => h(App),
    data:{
        eventHub:new Vue()
    }
}).$mount('#app')
