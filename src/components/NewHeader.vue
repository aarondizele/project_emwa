<template>
    <div>
        <!-- Navigation 1 -->
        <nav class="border-bottom py-2 position-relative z-10">
            <div class="_container _flex _between">
                <div class="_flex">
                    <a data-toggle="tooltip" data-placement="bottom" title="Français" @click="onChangeLanguage('fr')" class="_flex change_lang medium border-right pr-3 mr-3">
                        <i class="far fa-globe mr-1"></i> FR
                    </a>
                    <a data-toggle="tooltip" data-placement="bottom" title="English" @click="onChangeLanguage('en')" class="_flex change_lang medium  border-right pr-3 mr-3">
                         EN
                    </a>
                    <router-link tag="a" to="/newsletter" class="_navigation d-flex flex-row align-items-center _center medium border-right pr-4">
                        <i class="fal fa-envelope-open mr-2"></i> 
                        <span v-if="english">Subscribe to the newsletter</span>
                        <span v-if="french">S'abonner à la newsletter</span>
                    </router-link>
                    <div class="_flex _socials border-left ml-4 pl-4">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/cabemery" target="_blank" class="fg-facebook"><i class="fab fa-facebook"></i></a>
                        <!-- Linkedin -->
                        <a href="https://www.linkedin.com/company/1585003" target="_blank" class="ml-3 ml-4-md fg-linkedin"><i class="fab fa-linkedin"></i></a>
                        <!-- Twitter -->
                        <a href="https://twitter.com/EMWAssociates" target="_blank" class="ml-3 ml-4-md fg-twitter"><i class="fab fa-twitter"></i></a>
                        <!-- Youtub -->
                        <a href="https://www.youtube.com/channel/UCKImCP7wnXvQDijIGN4VNNQ" target="_blank" class="ml-3 ml-4-md fg-youtube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="_flex mt-2 mt-0-md justify-content-center justify-content-md-end">
                    <span class="medium mr-1" v-if="french">Ouvert:</span> <span class="medium mr-1" v-if="english">Open:</span> <span v-if="french">Lundi - Vendredi</span><span v-if="english">Monday - Friday</span> <span class="mx-1 widget--title">|</span> <i class="icon-clock bold mr-1" aria-hidden="true"></i> 09H00 - 18H00 <span class="mx-1 widget--title">|</span> <i class="icon-earphones-alt bold mr-1" aria-hidden="true"></i>
                  +(1) 2129220040
                </div>
            </div>
        </nav>

        <!-- Navigation 2 -->
        <nav style="z-index:10000!important;box-shadow: 0 5px 20px 0 rgba(11,7,110,.04)!important;" id="navbar">
            <div class="_flex _between py-2 _container position-relative z-10">
                <router-link tag="a" to="/">
                    <img src="../assets/logo.png" alt="" class="_logo_main">
                </router-link>
                <div class="d-none d-lg-flex flex-row align-items-center _menu">
                    <!-- Accueil -->
                    <router-link to="/" class="animated-underline">
                        <span v-if="french">Accueil</span>
                        <span v-if="english">Home</span>
                    </router-link>
                    <!-- About -->
                    <div href="" class="dropdown-mini">
                        <a class="dropbtn-mini _flex">
                            <span v-if="english">About</span>
                            <span v-if="french">À propos</span>
                             <i class="fal fa-angle-down ml-2"></i></a>
                        <div class="dropdown-content-mini">
                            <a @click="goto({url: '/about', data: option})" v-for="option in about" :key="option.id">
                                <span v-if="english">{{option.title_en}}</span>
                                <span v-if="french">{{option.title_fr}}</span>
                            </a>
                        </div>
                    </div>
                    <div href="" class="dropdown-mini">
                        <a class="dropbtn-mini _flex">
                            <span v-if="english">Practice areas</span>
                            <span v-if="french">Secteurs</span>
                            <i class="fal fa-angle-down ml-2"></i></a>
                        <div class="dropdown-content-mini">
                            <a @click="goto({url: '/practice-areas', data: practice})" v-for="practice in practiceAreas" :key="practice.id">
                                <span v-if="english">{{practice.title_en}}</span>
                                <span v-if="french">{{practice.title_fr}}</span>
                            </a>
                        </div>
                    </div>
                    <div href="" class="dropdown-mini">
                        <a class="dropbtn-mini _flex">
                            <span v-if="english">Services</span>
                            <span v-if="french">Services</span>
                            <i class="fal fa-angle-down ml-2"></i></a>
                        <div class="dropdown-content-mini">
                            <a @click="goto({url: '/services', data: service})" v-for="service in services" :key="service.id">
                                <span v-if="english">{{service.title_en}}</span>
                                <span v-if="french">{{service.title_fr}}</span>
                            </a>
                        </div>
                    </div>
                    <div href="" class="dropdown-mini">
                        <a class="dropbtn-mini _flex">
                            <span v-if="english">Presence</span>
                            <span v-if="french">Présence</span>
                            <i class="fal fa-angle-down ml-2"></i></a>
                        <div class="dropdown-content-mini">
                            <a @click="goto({url: '/presence', data: presence})" v-for="presence in presences" :key="presence.id">
                                <span v-if="english">{{presence.title_en}}</span>
                                <span v-if="french">{{presence.title_fr}}</span>
                            </a>
                        </div>
                    </div>
                    <div href="" class="dropdown-mini">
                        <a class="dropbtn-mini _flex">
                            <span v-if="english">News & Publications</span>
                            <span v-if="french">Actualités & Publications</span>
                            <i class="fal fa-angle-down ml-2"></i>
                        </a>
                        <div class="dropdown-content-mini">
                            <router-link tag="a" to="/news">
                                <span v-if="english">News</span>
                                <span v-if="french">Actualités</span>
                            </router-link>
                            <router-link tag="a" to="/alerts">
                                <span v-if="english">Alerts</span>
                                <span v-if="french">Alertes</span>
                            </router-link>
                            <router-link tag="a" to="/publications">
                                <span v-if="english">Publications</span>
                                <span v-if="french">Publications</span>
                            </router-link>
                            <router-link tag="a" to="/events">
                                <span v-if="english">Events</span>
                                <span v-if="french">Evénements</span>
                            </router-link>
                            <router-link tag="a" to="/webinars">
                                <span v-if="english">Webinars</span>
                                <span v-if="french">Webinaires</span>
                            </router-link>
                        </div>
                    </div>
                    <router-link tag="a" to="/multimedia" class="animated-underline">
                        <span v-if="english">Multimedia</span>
                        <span v-if="french">Multimédia</span>
                    </router-link>
                </div>
                <div class="headline" @click="openNav"><i class="fal fa-bars"></i></div>
            </div>
        </nav>
        
        <!-- Sidenav -->
        <div class="sidenav" id="mySidenav">
            <a class="closebtn c-pointer text-white" @click="closeNav">
                <div class="hamburger__close"></div>
            </a>
            <router-link to="/">
                <span v-if="french">Accueil</span>
                <span v-if="english">Home</span>
            </router-link>
            <!-- About -->
            <a>
                <span v-if="english">About</span>
                <span v-if="french">À propos</span>
            </a>
            <div class="_submenu">
                <a @click="goto({url: '/about', data: option})" v-for="option in about" :key="option.id">
                    <span v-if="english">{{option.title_en}}</span>
                    <span v-if="french">{{option.title_fr}}</span>
                </a>
            </div>
            <!-- Practice areas -->
            <a>
                <span v-if="english">Practice areas</span>
                <span v-if="french">Secteurs</span>
            </a>
            <div class="_submenu">
                <a @click="goto({url: '/practice-areas', data: practice})" v-for="practice in practiceAreas" :key="practice.id">
                    <span v-if="english">{{practice.title_en}}</span>
                    <span v-if="french">{{practice.title_fr}}</span>
                </a>
            </div>
            <!-- Services -->
            <a>
                <span v-if="english">Services</span>
                <span v-if="french">Services</span>
            </a>
            <div class="_submenu">
                <a @click="goto({url: '/services', data: service})" v-for="service in services" :key="service.id">
                    <span v-if="english">{{service.title_en}}</span>
                    <span v-if="french">{{service.title_fr}}</span>
                </a>
            </div>
            <!-- Presence -->
            <a>
                <span v-if="english">Presence</span>
                <span v-if="french">Présence</span>
            </a>
            <div class="_submenu">
                <a @click="goto({url: '/presence', data: presence})" v-for="presence in presences" :key="presence.id">
                    <span v-if="english">{{presence.title_en}}</span>
                    <span v-if="french">{{presence.title_fr}}</span>
                </a>
            </div>
            <!-- Presence -->
            <a>
                <span v-if="english">News & Publications</span>
                <span v-if="french">Actualités & Publications</span>
            </a>
            <div class="_submenu">
                <router-link tag="a" to="/news">
                    <span v-if="english">News</span>
                    <span v-if="french">Actualités</span>
                </router-link>
                <router-link tag="a" to="/alerts">
                    <span v-if="english">Alerts</span>
                    <span v-if="french">Alertes</span>
                </router-link>
                <router-link tag="a" to="/publications">
                    <span v-if="english">Publications</span>
                    <span v-if="french">Publications</span>
                </router-link>
                <router-link tag="a" to="/events">
                    <span v-if="english">Events</span>
                    <span v-if="french">Evénements</span>
                </router-link>
                <router-link tag="a" to="/webinars">
                    <span v-if="english">Webinars</span>
                    <span v-if="french">Webinaires</span>
                </router-link>
            </div>
            <!--  -->
            <router-link tag="a" to="/multimedia">
                <span v-if="english">Multimedia</span>
                <span v-if="french">Multimédia</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    selectedLanguage: 'en',
    sidebar: false,
  }),
  computed: {
    ...mapGetters(['loading', 'about', 'services', 'practiceAreas', 'presences', 'newsAndPublications'])
  },
  watch: {
    language(value) {
      this.selectedLanguage = value
    }
  },
  methods: {
    openNav() {
        document.getElementById("mySidenav").style.width = "300px";
    },
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    },
    scrollNavLeft () {
      var elmnt = document.getElementById("widget--navbar");
      elmnt.scrollLeft += 240;
    },
    goto(value) {
      // console.log(value);
      this.$router.push({
        path: this.english ? value.url + value.data.url_en : value.url + value.data.url_fr,
        query: { id: value.data.id }
      })
    },
    onToggleSidebar() {
      return this.sidebar = !this.sidebar
    },
    onChangeLanguage(value) {
      this.$store.dispatch('changeLanguage', value)
    }
  },
  created() {
    this.selectedLanguage = this.language
    if (!this.about.length) this.$store.dispatch('getAbout');
    if (!this.services.length) this.$store.dispatch('getServices');
    if (!this.practiceAreas.length) this.$store.dispatch('getPracticeAreas');
    if (!this.presences.length) this.$store.dispatch('getPresences');
    if (!this.newsAndPublications.length) this.$store.dispatch('getNewsAndPublications');
  },
}
</script>
