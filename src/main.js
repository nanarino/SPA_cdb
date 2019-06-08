
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import focusbox from './components/public/focusbox'
import myFooter from './components/public/footer'
import myHeader from './components/public/header'
import headerIndex from './components/public/header-index'
import rewardsPopoverMask from './components/public/rewards-popover-mask'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios=axios

Vue.component('focusbox' , focusbox)
Vue.component('myFooter' , myFooter)
Vue.component('myHeader' , myHeader)
Vue.component('headerIndex' , headerIndex)
Vue.component('rewardsPopoverMask' , rewardsPopoverMask)

new Vue({
  el: '#app',
  router,
  template: '<app/>',
    components: {
      'app' : App,
  },
})


