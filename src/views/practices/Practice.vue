<template lang="html">
  <div>
    <!--  -->
    <section class="container" v-if="content && content.covers && content.covers.length">
      <slick
        ref="slick"
        :options="slickCoverOptions"
      >
        <div v-for="image in content.covers" :key="image" v-if="content && content.covers">
          <div class="my-widget--slide w3-display-container">
            <img src="../../assets/logo-white.png" alt="" class="my-widget--placeholder w3-display-middle">
            <img :data-src="image" alt="" class="my-widget--slide-content lazyload">
          </div>
        </div>
      </slick>
    </section>

    <!-- <section class="container">
      <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" paginationActiveColor="#CF9405">
        <Slide v-for="image in content.covers" :key="image">
          <div class="my-widget--slide w3-display-container">
            <img src="../../assets/logo-white.png" alt="" class="my-widget--placeholder w3-display-middle">
            <img :data-src="image" alt="" class="my-widget--slide-content lazyload">
          </div>
        </Slide>
      </Carousel>
    </section> -->

    <!-- Navigation -->
    <section class="container my-3">
      <ul class="nav nav-pills widget--nav-tabs text-uppercase widget--subtitle font-medium" role="tablist">
        <li class="nav-item">
          <a href="#overview" aria-selected="true" aria-controls="overview" class="nav-link active" role="tab" data-toggle="tab">
            <span v-if="french">Sommaire</span>
            <span v-if="english">Overview</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#publications" aria-selected="false" aria-controls="publications" class="nav-link" role="tab" data-toggle="tab">Publications
          </a>
        </li>
        <li class="nav-item">
          <a href="#team" aria-selected="false" aria-controls="team" class="nav-link" role="tab" data-toggle="tab">
          <span class="text-uppercase" v-if="french">équipe</span>
          <span class="text-uppercase" v-if="english">team</span>
        </a></li>
      </ul>
    </section>

    <!--  -->
    <section class="container mt-4">
      <div class="row">
        <div class="col-12 col-md-8 pr-md-5">
          <!-- Tab panes -->
          <div class="tab-content">
            <!-- Overview - Sommaire -->
            <article role="tabpanel" class="tab-pane fade show active text-justify" id="overview" aria-labelledby="overview-tab">
              <h2 class="page-header mt-0">
                <strong v-if="english">{{content.title_en}}</strong>
                <strong v-if="french">{{content.title_fr}}</strong>
              </h2>
              <!-- Content -->
              <p class="text-justify" v-html="content.content_en" v-if="english"></p>
              <p class="text-justify" v-html="content.content_fr" v-if="french"></p>
              <!-- Sub-Content -->
              <p v-if="content.subcontents.length">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel" v-for="(subcontent, i) in content.subcontents" :key="subcontent.title_fr">
                    <div class="panel-heading px-0 my-title" role="tab" :id="`heading${i}`">
                      <h6 class="panel-title mb-2">
                        <a class="collapsed text-uppercase" role="button" data-toggle="collapse" data-parent="#accordion" :href="`#collapse${i}`" aria-expanded="false" :aria-controls="`collapse${i}`">
                          <span v-if="french">{{subcontent.title_fr}}</span>
                          <span v-if="english">{{subcontent.title_en}}</span>
                          <span class="fal fa-angle-down pull-right" aria-hidden="true"></span>
                        </a>
                      </h6>
                    </div>
                    <div :id="`collapse${i}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading${i}`">
                      <div class="panel-body px-1 pt-2">
                        <div>
                          <!-- Nav tabs -->
                          <ul class="nav nav-pills text-uppercase font-weight-medium" role="tablist">
                            <li class="nav-item">
                              <a :href="`#service${i}`" :aria-controls="`service${i}`" role="tab" data-toggle="tab" class="nav-link active" aria-selected="true">Services</a>
                            </li>
                            <li class="nav-item">
                              <a :href="`#transaction${i}`" :aria-controls="`transaction${i}`" role="tab" data-toggle="tab" class="nav-link" aria-selected="false">Transactions</a>
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content py-4">
                            <div role="tabpanel" class="tab-pane fade show active" :id="`service${i}`">
                              <div class="text-justify" v-html="subcontent.service_en" v-if="english"></div>
                              <div class="text-justify" v-html="subcontent.service_fr" v-if="french"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" :id="`transaction${i}`">
                              <div class="text-justify" v-html="subcontent.transaction_en" v-if="english"></div>
                              <div class="text-justify" v-html="subcontent.transaction_fr" v-if="french"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </article>
            <!-- Publications -->
            <article role="tabpanel" class="tab-pane fade" id="publications" aria-labelledby="publications-tab">
              <div v-if="servicePublications.length">
                <!-- French -->
                <div class="widget--card-news mb-3" v-for="publication in servicePublications" :key="publication.id" v-if="french && publication.title_fr">
                  <div class="row">
                    <div class="col-12 col-md-4 pr-md-2">
                      <div class="widget--box-fade w3-display-container">
                        <img src="../../assets/logo-white.png" alt="" class="widget--box-fade--placeholder w3-display-middle">
                        <img :data-src="publication.image" alt="" class="widget--box-fade-content lazyload">
                      </div>
                    </div>
                    <div class="col-12 col-md-8 pl-md-3">
                      <h4 class="widget--title mt-2">
                        <router-link tag="a" :to="`/publication/${publication.id}`" class="widget--hover-brand-color">{{publication.title_fr}}</router-link>
                      </h4>
                      <h5 class="widget--subtitle mt-2">
                        <i class="fa fa-archive mr-2"></i>
                        <span v-for="category in publication.categories" :key="category" class="text-capitalize mr-2 widget--little-separator">
                          <!-- <span v-if="english">{{getCategory(category.id).category_en}}</span> -->
                          <!-- <span v-if="category.id">
                          </span> -->
                          <span v-if="french">{{category}}</span>
                          <span v-if="english">{{category}}</span>
                        </span>
                        <i class="fa fa-bank ml-4 ml-3 mr-2"></i>
                        <span v-for="office in publication.offices" :key="office" class="text-capitalize mr-2 widget--little-separator">
                          {{office}}
                        </span>
                      </h5>
                      <!-- <h5 class="widget--subtitle mt-2">
                        <i class="fa fa-archive mr-2"></i> <span v-for="(categoryId, x) in publication.categories" :key="categoryId" class="text-capitalize">
                          <span v-if="english">{{getCategory(categoryId).category_en}}</span>
                          <span v-if="french">{{getCategory(categoryId).category_fr}}</span>
                          <span class="mx-1" v-if="x > 1">/</span></span>
                        <i class="fa fa-bank ml-4 ml-3 mr-2"></i> <span v-for="(office, i) in publication.offices" :key="office" class="text-capitalize">{{office}}<span class="mx-1" v-if="i > 1">/</span></span>
                      </h5> -->
                      <p class="clearfix mt-4">
                        <h5 class="widget--title pull-left">
                          <!-- <span class="mr-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 30 min</span> -->
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span v-for="author in publication.authors" :key="author" class="text-capitalize mr-2 widget--little-separator">{{author}}</span>
                            <!-- getAuthor(author) -->
                          </span>
                        </h5>
                        <router-link tag="a" :to="`/publication/${publication.id}`" type="button" class="btn btn-sm primary--background widget--radius-link pull-right">
                          <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                          <span v-if="french">Lire plus</span>
                          <span v-if="english">Read more</span>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- English -->
                <div class="widget--card-news mb-3" v-for="publication in servicePublications" :key="publication.id" v-if="english && publication.title_en">
                  <div class="row">
                    <div class="col-12 col-md-4 pr-md-2">
                      <div class="widget--box-fade w3-display-container">
                        <img src="../../assets/logo-white.png" alt="" class="widget--box-fade--placeholder w3-display-middle">
                        <img :data-src="publication.image" alt="" class="widget--box-fade-content lazyload">
                      </div>
                    </div>
                    <div class="col-12 col-md-8 pl-md-3">
                      <h4 class="widget--title mt-2">
                        <router-link tag="a" :to="`/publication/${publication.id}`" class="widget--hover-brand-color">{{publication.title_en}}</router-link>
                      </h4>
                      <h5 class="widget--subtitle mt-2">
                        <i class="fa fa-archive mr-2"></i>
                        <span v-for="category in publication.categories" :key="category" class="text-capitalize mr-2 widget--little-separator">
                          <!-- <span v-if="english">{{getCategory(category.id).category_en}}</span> -->
                          <!-- <span v-if="category.id">
                          </span> -->
                          <span v-if="french">{{category}}</span>
                          <span v-if="english">{{category}}</span>
                        </span>
                        <i class="fa fa-bank ml-4 ml-3 mr-2"></i>
                        <span v-for="office in publication.offices" :key="office" class="text-capitalize mr-2 widget--little-separator">
                          {{office}}
                        </span>
                      </h5>
                      <!-- <h5 class="widget--subtitle mt-2">
                        <i class="fa fa-archive mr-2"></i> <span v-for="(categoryId, x) in publication.categories" :key="categoryId" class="text-capitalize">
                          <span v-if="english">{{getCategory(categoryId).category_en}}</span>
                          <span v-if="french">{{getCategory(categoryId).category_fr}}</span>
                          <span class="mx-1" v-if="x > 1">/</span></span>
                        <i class="fa fa-bank ml-4 ml-3 mr-2"></i> <span v-for="(office, i) in publication.offices" :key="office" class="text-capitalize">{{office}}<span class="mx-1" v-if="i > 1">/</span></span>
                      </h5> -->
                      <p class="clearfix mt-4">
                        <h5 class="widget--title pull-left">
                          <!-- <span class="mr-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 30 min</span> -->
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span v-for="author in publication.authors" :key="author" class="text-capitalize mr-2 widget--little-separator">{{author}}</span>
                            <!-- getAuthor(author) -->
                          </span>
                        </h5>
                        <router-link tag="a" :to="`/publication/${publication.id}`" type="button" class="btn btn-sm primary--background widget--radius-link pull-right">
                          <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                          <span v-if="french">Lire plus</span>
                          <span v-if="english">Read more</span>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <!-- Team -->
            <article role="tabpanel" class="tab-pane fade" id="team" aria-labelledby="team-tab">
              <div class="row">
                  <div class="col-12 col-md-6">
                    <div v-if="serviceExperts.length">
                      <div class="panel panel-default secondary--background widget--presence-experts widget--borderless mb-5" v-for="(expert, i) in serviceExperts" :key="expert.id" @click="gotoProfile(expert.id)" v-if="(i+1) % 2">
                      <div class="panel-body p-3 row">
                      <!-- <div class="panel-body p-2 row" style="min-height: 180px!important"> -->
                        <!-- Picture -->
                        <div class="col-6 col-md-5">
                          <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                          <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center" v-else>
                            <img src="../../assets/logo-white.png" alt="">
                          </div>
                        </div>
                        <!-- Info -->
                        <div class="col-6 col-md-7 py-1 pl-1 caption main-color">
                          <!-- Name -->
                          <div class="w3-medium widget--title mb-3 widget--hover-brand-color pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
                          <div class="font-small widget--subtitle"><i class="fa fa-legal mr-2" aria-hidden="true"></i>
                            <span v-if="french">{{expert.grade_fr}}</span>
                            <span v-if="english">{{expert.grade_en}}</span>
                          </div>
                          <div class="font-small widget--subtitle text-capitalize"><span class="glyphicon glyphicon-map-marker mr-2" aria-hidden="true"></span>
                            {{expert.location_1}} <span v-if="expert.location_2">/ {{expert.location_2}}</span> <span v-if="expert.location_3">/ {{expert.location_3}}</span>
                          </div>
                          <div class="font-small widget--subtitle">
                            <span class="glyphicon glyphicon-earphone mr-2" aria-hidden="true"></span>
                            {{expert.phone_1}} <span v-if="expert.phone_2"> / {{expert.phone_2}}</span> <span v-if="expert.phone_3"> / {{expert.phone_3}}</span>
                          </div>
                          <div class="font-small widget--subtitle"><i class="fa fa-envelope-open-o mr-2" aria-hidden="true"></i> {{expert.email}}</div>
                          <button class="btn btn-sm widget--radius-link mt-4">
                            <span v-if="french">Voir profil</span>
                            <span v-if="english">See profile</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div v-if="serviceExperts.length">
                      <div class="panel panel-default secondary--background widget--presence-experts widget--borderless mb-5" v-for="(expert, i) in serviceExperts" :key="expert.id" @click="gotoProfile(expert.id)" v-if="(i+2) % 2">
                      <div class="panel-body p-3 row">
                        <!-- Picture -->
                        <div class="col-6 col-md-5">
                          <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                          <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center" v-else>
                            <img src="../../assets/logo-white.png" alt="">
                          </div>
                        </div>
                        <!-- Info -->
                        <div class="col-6 col-md-7 py-1 pl-1 caption main-color">
                          <!-- Name -->
                          <div class="w3-medium widget--title mb-3 widget--hover-brand-color pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
                          <div class="font-small widget--subtitle"><i class="fa fa-legal mr-2" aria-hidden="true"></i>
                            <span v-if="french">{{expert.grade_fr}}</span>
                            <span v-if="english">{{expert.grade_en}}</span>
                          </div>
                          <div class="font-small widget--subtitle text-capitalize"><span class="glyphicon glyphicon-map-marker mr-2" aria-hidden="true"></span>
                            {{expert.location_1}} <span v-if="expert.location_2">/ {{expert.location_2}}</span> <span v-if="expert.location_3">/ {{expert.location_3}}</span>
                          </div>
                          <div class="font-small widget--subtitle">
                            <span class="glyphicon glyphicon-earphone mr-2" aria-hidden="true"></span>
                            {{expert.phone_1}} <span v-if="expert.phone_2"> / {{expert.phone_2}}</span> <span v-if="expert.phone_3"> / {{expert.phone_3}}</span>
                          </div>
                          <div class="font-small widget--subtitle"><i class="fa fa-envelope-open-o mr-2" aria-hidden="true"></i> {{expert.email}}</div>
                          <button class="btn btn-sm widget--radius-link mt-4">
                            <span v-if="french">Voir profil</span>
                            <span v-if="english">See profile</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </article>
          </div>
          <!-- Share -->          
          <Share :link="$route.fullPath" />
        </div>
        <!-- Sidebar -->
        <div class="col-12 col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
    <!--  -->

    <!-- Learn more -->
    <section v-if="recommandations.length">
      <div class="container _flex _between mt-5 mb-3">
        <h5 class="widget--see-more">
          <span v-if="french">Voir aussi</span>
          <span v-if="english">See more</span>
        </h5>
        <div class="">
          <a @click="scrollRight" class="widget--hover-brand-color pointer"><i class="fal fa-angle-left mr-4 w3-xxlarge"></i></a>
          <a @click="scrollLeft" class="widget--hover-brand-color pointer"><i class="fal fa-angle-right w3-xxlarge"></i></a>
        </div>
      </div>
      <div class="primary--background">
        <div class="container py-4">
          <div class="d-flex flex-nowrap flex-row align-items-center widget--more" id="widget--more">
            <div class="widget--more-box" v-for="item in recommandations" :key="item.id">
              <div class="widget--more-boxing">
                <h5 class="my-0">
                  <strong v-if="french">{{item.title_fr}}</strong>
                  <strong v-if="english">{{item.title_en}}</strong>
                </h5>
                <button type="button" class="btn widget--brand widget--radius-link mr-4 widget--position" @click="goto({url: '/about', data: item})">
                  <i class="fal fa-angle-right mr-2" aria-hidden="true"></i>
                  <span v-if="french">Lire plus</span>
                  <span v-if="english">Read more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { languageMixin } from '../../mixins/language'
export default {
  mixins: [languageMixin],
  data: () => ({
    id: null,
  }),
  computed: {
    ...mapGetters(['practiceAreas', 'experts', 'newsAndPublications']),
    content() {
      return this.$store.getters.getPracticeArea(this.id)
    },
    recommandations () {
      return this.practiceAreas.filter(option => option.id != this.content.id)
    },
    serviceExperts: {
      get () {
        let category_fr = this.content.title_fr.toLowerCase()
        let category_en = this.content.title_en.toLowerCase()

        return this.serviceExperts = this.experts.filter(expert => {
            return _.find(expert.categories, (category) => category.toLowerCase() == category_fr) || _.find(expert.categories, (category) => category.toLowerCase() == category_en)
          })
      },
      set (value) {
        return value;
      }
    },
    servicePublications: {
      get () {
        let category_fr = this.content.title_fr.toLowerCase()
        let category_en = this.content.title_en.toLowerCase()

        return this.servicePublications = this.newsAndPublications.filter(news => {
          return _.find(news.categories, (category) => category.toLowerCase() == category_fr) || _.find(news.categories, (category) => category.toLowerCase() == category_en)
        })
      },
      set (value) {
        return value;
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.query.id;
      this.getContent();
    },    
  },
  methods: {
    getContent () {
      return this.$store.getters.getPracticeArea(this.id)
    },
    goto(value) {
      this.$router.push({
        path: this.english ? value.url + value.data.url_en : value.url + value.data.url_fr,
        query: { id: value.data.id }
      })
    },
  },
  created() {
    this.id = this.$route.query.id
    if (!this.experts.length) {
      this.$store.dispatch('getExperts')
    }
    if (!this.newsAndPublications.length) {
      this.$store.dispatch('getNewsAndPublications')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
