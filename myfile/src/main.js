import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BLink } from 'bootstrap-vue'
import { LinkPlugin } from 'bootstrap-vue'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
Vue.use(LinkPlugin)
Vue.component('b-link', BLink)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

let vueRoute = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
export default vueRoute

