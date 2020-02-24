<template>
  <div class="home">
    <header>
      <home-carousel />
    </header>

    <!-- Body 1 -->
    <section style="background-color:rgba(246, 246, 246, .4)">
      <div class="container py-20">
        <div class="row">
            <!-- About -->
            <div class="col-12 col-md-6 mb-7 position-relative">
                <div class="home_about_overlay"></div>
                <div class="border pt-6 pb-6 px-5 px-8-lg position-relative z-10 home_about_block">
                    <div class="">
                        <h4 class="bold mb-4 gd-sage">
                          <span v-if="french">À propos de nous</span>
                          <span v-if="english">About us</span>
                        </h4>
                        <p>
                          <span v-if="english">For more than 20 years, Emery Mukendi Wafwana & Associates (EMW&A) has maintained its position as a leading African international law firm of reference, with recognized experience in business law, litigation and arbitration. We offer our clients services that are in line with international standards. We have proven experience in the sectors of natural resources, energy and infrastructure, investments, commerce and industry, banking, finance and insurance as well as family and people.</span>
                          <!--  -->
                          <span v-if="french">Depuis plus de 20 ans, Emery Mukendi Wafwana & Associates (EMW&A) maintient sa position de cabinet international africain de premier plan avec une pratique reconnue en droit des affaires et en droit minier. Nous offrons à nos clients des services conformes aux meilleurs standards internationaux, avec une expertise solidement établi dans les secteurs ci-après : ressources naturelles ; énergie et infrastructures; investissement, commerce et industrie; banques, finances et assurances ; famille et personnes.</span>
                        </p>
                        <!-- React more -->
                        <router-link to="/about/sommaire?id=9gSnHA8d7VTbtYOg7SqL" class="my-3 _flex medium">
                          <span class="animated-underline mr-3" v-if="english">Read more</span>
                          <span class="animated-underline mr-3" v-if="french">Lire plus</span>
                          <svg aria-hidden="true"
                                focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36"
                                class="widget--hover-brand-color widget--arrow">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                                    fill="currentColor">
                                </path>
                            </svg>
                          </router-link>
                        <!-- Nos bureaux -->
                        <div class="mt-5">
                            <h5 class="bold mb-4 pb-3 _flex _between" style="border-bottom:2px solid rgba(22, 40, 74, .7)!important;">
                              <span class="gd-sage" v-if="french">Nos bureaux</span>
                              <span class="gd-sage" v-if="english">Our offices</span>
                              <div @click="showMore = !showMore" class="c-pointer"><i class="far" :class="{'fa-angle-down': !showMore, 'fa-angle-up': showMore}"></i></div>
                            </h5>

                            <div class="row" v-show="showMore">
                                <div class="col-6 mb-3">
                                    <router-link to="/presence/new-york?id=7UTyhAgMtAfJXUdpK5Jn" class="_flex _between">
                                        <div>
                                            <h6 class="mb-0">New York</h6>
                                            <div class="" style="color:rgba(22, 40, 74, .7)">USA</div>
                                        </div>
                                        <a class="c-pointer">
                                            <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                            </path>
                                          </svg>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="col-6 mb-3">
                                    <router-link to="/presence/new-york?id=7UTyhAgMtAfJXUdpK5Jn" class="_flex _between">
                                        <div>
                                            <h6 class="mb-0">Johannesburg</h6>
                                            <div class="" style="color:rgba(22, 40, 74, .7)">
                                              <span v-if="english">South Africa</span>
                                              <span v-if="french">Afrique du sud</span>
                                            </div>
                                        </div>
                                        <a class="c-pointer">
                                            <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                            </path>
                                        </svg>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="col-6 mb-3">
                                    <router-link to="/presence/kinshasa?id=Y24oM4xWUFCXkSn28bLQ" class="_flex _between">
                                        <div>
                                            <h6 class="mb-0">Kinshasa</h6>
                                            <div class="" style="color:rgba(22, 40, 74, .7)">
                                              <span v-if="english">DRC</span>
                                              <span v-if="french">RDC</span>
                                            </div>
                                        </div>
                                        <a class="c-pointer">
                                            <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                              </path>
                                          </svg>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="col-6 mb-3">
                                    <router-link to="/presence/brazzaville?id=NNu6yAps1K5VqRzNgKNO" class="_flex _between">
                                        <div>
                                            <h6 class="mb-0">Brazzaville</h6>
                                            <div class="" style="color:rgba(22, 40, 74, .7)">Congo Brazza</div>
                                        </div>
                                        <a class="c-pointer">
                                            <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                              </path>
                                          </svg>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="col-6 mb-3">
                                    <router-link to="/presence/lubumbashi?id=YOE3PwdXzHvYzeuEUaK6" class="_flex _between">
                                        <div>
                                            <h6 class="mb-0">Lubumbashi</h6>
                                            <div class="" style="color:rgba(22, 40, 74, .7)">
                                              <span v-if="english">DRC</span>
                                              <span v-if="french">RDC</span>
                                            </div>
                                        </div>
                                        <a class="c-pointer">
                                            <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                              </path>
                                          </svg>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="col-6 mb-3">
                                    <router-link to="/presence/matadi?id=sfjAAmbmNe3tXMglt0eQ" class="_flex _between">
                                        <div>
                                            <h6 class="mb-0">Matadi</h6>
                                            <div class="" style="color:rgba(22, 40, 74, .7)">
                                              <span v-if="english">DRC</span>
                                              <span v-if="french">RDC</span>
                                            </div>
                                        </div>
                                        <a class="c-pointer">
                                            <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                              </path>
                                          </svg>
                                        </a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Actualités -->
            <div class="col-12 col-md-6 pl-10-md pl-15-lg">
                <h4 class="gd-sage bold mb-4 text-md-right" v-if="french">Nos actualités</h4>
                <h4 class="gd-sage bold mb-4 text-md-right" v-if="english">Our news</h4>
                <article class="post-block" v-for="article in alaune" :key="article.id">
                  <!-- English -->
                    <div class="row" v-if="english && article.title_en">
                        <div class="col-12 col-md-8 order-2 order-md-1">
                            <h6 class="body-2">
                              <span v-if="english">{{article.title_en}}</span>
                              <span v-if="french">{{article.title_fr}}</span>
                            </h6>
                            <div class="medium"><span v-for="author in article.authors" :key="author" class="text-capitalize mr-2 widget--little-separator">{{author}}</span></div>
                            <div class="caption text-muted">{{article.publishedAt | date}}</div>
                        </div>
                        <div class="col-12 col-md-4 order-1 order-md-2 mb-3 mb-0-md">
                          <div class="widget--box-fade w3-display-container">
                            <img src="../assets/logo-white.png" alt="" class="w3-display-middle w-100 h-100">
                            <img :data-src="article.image" alt="" class="widget--box-fade-content lazyload w-100 h-100 article_img">
                          </div>
                        </div>
                    </div>
                    <!-- French -->
                    <div class="row" v-if="french && article.title_fr">
                        <div class="col-12 col-md-8 order-2 order-md-1">
                            <h6 class="medium">
                              <span v-if="english">{{article.title_en}}</span>
                              <span v-if="french">{{article.title_fr}}</span>
                            </h6>
                            <div class="medium"><span v-for="author in article.authors" :key="author" class="text-capitalize mr-2 widget--little-separator">{{author}}</span></div>
                            <div class="caption text-muted">{{article.publishedAt | date}}</div>
                        </div>
                        <div class="col-12 col-md-4 order-1 order-md-2 mb-3 mb-0-md">
                          <div class="widget--box-fade w3-display-container">
                            <img src="../assets/logo-white.png" alt="" class="w3-display-middle w-100 h-100">
                            <img :data-src="article.image" alt="" class="widget--box-fade-content lazyload w-100 h-100 article_img">
                          </div>
                        </div>
                    </div>
                </article>
                <router-link to="/news" class="mt-4 mt-8-md _flex justify-content-md-end">
                    <span class="animated-underline medium mr-3">
                      <span v-if="english">All news</span>
                      <span v-if="french">Toutes les actualités</span>                      
                    </span>
                    <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                        </path>
                    </svg>
                </router-link>
            </div>
        </div>
      </div>
    </section>



    <!-- Body 2 -->
    <div class="body2">
        <div class="container py-10">
            <div class="row">
                <!-- Merites -->
                <div class="col-12 col-md-6 mb-6 mb-0-lg">
                    <div class="_flex">
                        <div class="mr-5 mr-10-md mr-15-lg">
                            <div>
                                <h5 class="gd-sage medium">
                                  <span v-if="english">Member of the alliance</span>
                                  <span v-if="french">Membre de l'alliance</span>
                                </h5>
                                <a href="https://www.lexafrica.com" target="_blank" class="mt-3">
                                    <img data-src="http://www.cabemery.org/wp-content/uploads/LEXAFRICA-LOGO-MEMBER.png" alt="" class="img_merite lazyload">
                                </a>
                            </div>
                            <!--  -->
                            <div class="mt-3">
                                <h5 class="gd-sage medium">
                                  <span v-if="english">Ranked in band 1 by</span>
                                  <span v-if="french">Référencé Band 1 sur</span>
                                </h5>
                                <a href="https://chambers.com/profile/department/114685?publicationTypeId=2&practiceAreaId=852&locationId=63&subsectionTypeId=1" target="_blank" class="mt-3">
                                    <img data-src="https://assets.chambers.com/logo/chambers_blue.svg?ts=20180821" alt="" class="img_merite lazyload">
                                </a>
                            </div>
                        </div>
                        <!-- Sponsors -->
                        <div>
                            <h5 class="gd-sage medium">
                              <span v-if="english">Sponsor of</span>
                              <span v-if="french">Sponsor de</span>
                            </h5>
                            <div class="mt-3">
                                <a href="https://www.juridocs.org" target="_blank">
                                  <img src="../assets/juridocs.png" alt="" class="img_sponsor mb-2">
                                </a>
                                <a href="https://www.juriafrique.com" target="_blank">
                                  <img src="../assets/juriafrique.png" alt="" class="img_sponsor mb-2">
                                </a>
                                <a href="https://www.afrilex.com" target="_blank">
                                  <img src="../assets/afrilex.png" alt="" class="img_sponsor">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Experts -->
                <div class="col-12 col-md-6 mb-6 mb-0-lg">
                    <h5 class="gd-sage medium mb-5">
                      <span v-if="english">Our experts</span>
                      <span v-if="french">Nos experts</span>
                    </h5>
                    <div v-if="experts.length">
                      <slick
                        ref="slick"
                        :options="slickOptions"
                        @init="handleInit"
                      >
                        <div v-for="expert in experts" :key="expert.id">
                          <div class="card_expert">
                              <div class="d-flex flex-row">
                                  <div class="mr-3">
                                    <img :data-src="expert.avatar" alt="" class="lazyload card_expert_img pointer img_shadow" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                                    <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center pointer" v-else>
                                      <img src="../assets/logo-white.png" alt="" @click="gotoProfile(expert.id)" class="">
                                    </div>
                                  </div>
                                  <div class="">
                                      <div class="subheading medium pointer" @click="gotoProfile(expert.id)">
                                        {{expert.name}}
                                      </div>
                                      <div class="text-muted mt-1" style="font-size:13.5px">
                                          <div class="_flex">
                                            <span v-if="french">{{expert.grade_fr}}</span>
                                            <span v-if="english">{{expert.grade_en}}</span>
                                          </div>
                                          <div class="_flex">
                                            {{expert.location_1}} <span v-if="expert.location_2">• {{expert.location_2}}</span> <span v-if="expert.location_3">• {{expert.location_3}}</span>
                                          </div>
                                          <div class="_flex">
                                            {{expert.phone_1}} <span v-if="expert.phone_2"> • {{expert.phone_2}}</span> <span v-if="expert.phone_3"> • {{expert.phone_3}}</span>
                                          </div>
                                          <div class="_flex">{{expert.email}}</div>
                                      </div>
                                      <a @click="gotoProfile(expert.id)" class="mt-2 _flex" style="font-size:13.5px">
                                          <svg aria-hidden="true" focusable="false" width="12px" height="12px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                                              </path>
                                          </svg>
                                          <span class="animated-underline ml-1 medium fg-primary">
                                            <span v-if="french">Voir profil</span>
                                            <span v-if="english">See profile</span>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </slick>
                  </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import HomeCarousel from '@/components/HomeCarousel.vue'
import Alaune from '@/components/Alaune.vue'
import { languageMixin } from '../mixins/language'


export default {
  name: 'home',
  mixins: [languageMixin],
  components: {
    HomeCarousel,
    Alaune
  },
  data: () => ({
    showMore: true,
    slickOptions: {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
    },
  }),
  computed: {
    ...mapGetters(['experts']),
    alaune() {
      return this.$store.getters.alaune.slice(0,3);
    }
  },
  watch: {
    experts(value) {
      if (value.length > 0) {
        // this.handleInit()
        console.log("Experts count: ",value.length)
      }
    }
  },
  methods: {
    // startSliding() {
    //   return  $('.experts-sliding').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 400,
    //     slidesToShow: 1,
    //     variableWidth: true,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //   });
    // },
    handleReInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
  },
  // updated() {
  //     this.handleReInit()
  // }
}
</script>
