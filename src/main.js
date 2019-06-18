import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import iview from 'iview'

import 'normalize.css'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(router)
Vue.use(iview)

new Vue({
    render: h => h(App),
    data:{
        eventHub:new Vue()
    }
}).$mount('#app')
