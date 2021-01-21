import Vue from 'vue'
import App from './App.vue'
import card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import vuetify from '@/plugins/vuetify'
import HeaderContainer from './components/Header.vue'
import VueInstagram from 'vue-instagram'
import landingPagesNotFounf from "./Pages/404";
import VueMeta from 'vue-meta';
import 'vue-datetime/dist/vue-datetime.css'
import VueAnalytics from 'vue-analytics';

import * as VueGoogleMaps from "vue2-google-maps";

const Hamburgeria = () => import(/* webpackChunkName: "group-foo" */'./Pages/Hamburger.vue')
const Cocktails = () => import(/* webpackChunkName: "group-foo" */'./Pages/Cocktails.vue')
const Fumetteria = () => import(/* webpackChunkName: "group-foo" */'./Pages/Fumetteria.vue')
const SalaLan = () => import(/* webpackChunkName: "group-foo" */'./Pages/SalaLan.vue')
const Eventi = () => import(/* webpackChunkName: "group-foo" */'./Pages/Eventi.vue')
const Contattaci = () => import(/* webpackChunkName: "group-foo" */'./Pages/Contattaci.vue')
const AssettoCorsa = () => import(/* webpackChunkName: "group-team" */'./Pages/Team/AssettoCorsa')
const Digimon = () => import(/* webpackChunkName: "group-team" */'./Pages/Team/Digimon')
const Fifa = () => import(/* webpackChunkName: "group-team" */'./Pages/Team/Fifa')
const DragonBall = () => import(/* webpackChunkName: "group-team" */'./Pages/Team/DragonBall')
const ChiSiamo = () => import(/* webpackChunkName: "group-foo" */'./Pages/ChiSiamo')
const PrenotaPc = () => import(/* webpackChunkName: "group-foo" */'./Pages/PrenotaPc')


Vue.use(VueInstagram)
Vue.use(VueMeta);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBr0l8iENRFpNlItoiPKiW--J3H-6OnSAQ",
    language:" it"
  }
});


Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: "Home", component: HelloWorld},
        {path: '/Hamburgeria', name: "Hamburgeria", component: Hamburgeria},
        {path: '/Cocktails', name: "Cocktails", component: Cocktails},
        {path: '/Fumetteria', name: "Fumetteria", component: Fumetteria},
        {path: '/SalaLan', name: "SalaLan", component: SalaLan},
        {path: '/Eventi', name: "Eventi", component: Eventi},
        {path: '/Contattaci', name: "Contattaci", component: Contattaci},
        {path: '/Team/AssettoCorsa', name: "AssettoCorsa", component: AssettoCorsa},
        {path: '/Team/Fifa', name: "Fifa", component: Fifa},
        {path: '/Team/Digimon', name: "Digimon", component: Digimon},
        {path: '/PrenotaPc', name: "PrenotaPc", component: PrenotaPc},
        {path: '/Team/DragonBall', name: "DragonBall", component: DragonBall},
        {path: '/ChiSiamo',name:"ChiSiamo",component: ChiSiamo},
        { path: '*', name: 'notFound', component: landingPagesNotFounf},

        /* {path: '/Privacy',name:"Privacy",component: Privacy},
         {path: '/Imprint',name:"Imprint",component: Imprint},
         {path: '/Terms',name:"Terms",component: Terms},
         {path: '/Cookies',name:"Cookies",component: Cookies},*/
    ]
})

Vue.use(VueAnalytics, {
    id: '187769244',
    router
})
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
Vue.component('card', card)
Vue.component('HeaderContainer', HeaderContainer)

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')
