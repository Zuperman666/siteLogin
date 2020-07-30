import Vue from 'vue'
import App from './App.vue'
import card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
import Hamburgeria from './Pages/Hamburger.vue'
import VueRouter from 'vue-router'
import VueCarousel from '@chenfengyuan/vue-carousel';
import Cocktails from './Pages/Cocktails.vue';
import Fumetteria from './Pages/Fumetteria.vue';
import SalaLan from './Pages/SalaLan.vue';
import Eventi from './Pages/Eventi.vue';
import Contattaci from './Pages/Contattaci.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuetify from '@/plugins/vuetify'
import Separator from './components/Separator.vue' 

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
  { path: '/',name:"Home",component: HelloWorld},
  {path: '/Foo',name:"Home",component: Foo},
  {path: '/Hamburgeria',name:"Hamburgeria",component: Hamburgeria},
  {path: '/Cocktails',name:"Cocktails",component: Cocktails},
  {path: '/Fumetteria',name:"Fumetteria",component: Fumetteria},
  {path: '/SalaLan',name:"SalaLan",component: SalaLan},
  {path: '/Eventi',name:"Eventi",component: Eventi},
  {path: '/Contattaci',name:"Contattaci",component: Contattaci},
]})

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
Vue.component('card', card)
Vue.component('separator', Separator)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
