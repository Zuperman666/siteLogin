import Vue from 'vue'
import App from './App.vue'
import card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
import Hamburgeria from './Pages/Hamburger.vue'
import VueRouter from 'vue-router'
import VueCarousel from '@chenfengyuan/vue-carousel';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuetify from '@/plugins/vuetify' 

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueCarousel);

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
export const router = new VueRouter({
  mode: 'history',
  routes:[
  { path: '/Home',name:"Home",component: HelloWorld},
  {path: '/Foo',name:"Home",component: Foo},
  {path: '/Hamburgeria',name:"Hamburgeria",component: Hamburgeria},
]})

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
Vue.component('card', card)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
