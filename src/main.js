import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
require('firebase/firestore')
require('lazysizes')
import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from 'vue-carousel';
import Expert from '@/components/Expert'
import Office from '@/components/Office'
import Profile from '@/components/Profile'
import Sidebar from '@/components/Sidebar'
import VueYouTubeEmbed from 'vue-youtube-embed'
import _ from 'lodash'
import DateFilter from './filters/date'
//
firebase.initializeApp({
  apiKey: "AIzaSyBBI3rcXvI8OKPqfoF3LaFcs0CjwG8aIbE",
  authDomain: "cabemery-3474d.firebaseapp.com",
  databaseURL: "https://cabemery-3474d.firebaseio.com",
  projectId: "cabemery-3474d",
  storageBucket: "cabemery-3474d.appspot.com",
  messagingSenderId: "9525576413"
});

export const db = firebase.firestore();
db.enablePersistence();

Vue.component('Carousel', Carousel)
Vue.component('Slide', Slide)
Vue.component('Expert', Expert)
Vue.component('Office', Office)
Vue.component('Profile', Profile)
Vue.component('Sidebar', Sidebar)
Vue.use(VueCarousel);
Vue.use(VueYouTubeEmbed)
Vue.filter('date', DateFilter)
Vue.config.productionTip = false

window._ = _

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('getLanguage')

    if (this.$store.getters.language == null || this.$store.getters.language == undefined) {
      this.$store.dispatch('changeLanguage', 'en')
    } else {
      this.$store.dispatch('changeLanguage', this.$store.getters.language)
    }

    this.$store.dispatch('getHomePage')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getBrochures')
    this.$store.dispatch('getExperts')
    this.$store.dispatch('getAbout')
    this.$store.dispatch('getServices')
    this.$store.dispatch('getPracticeAreas')
    this.$store.dispatch('getPresences')
    this.$store.dispatch('getNewsAndPublications')
    this.$store.dispatch('getMultimedia')
  }
}).$mount('#app')
