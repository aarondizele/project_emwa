<template lang="html">
  <div>
    <!--  -->
    <section class="container">
      <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" paginationActiveColor="#CF9405">
        <Slide v-for="image in content.covers" :key="image">
          <img :data-src="image" alt="" class="lazyload widget--image-background" v-if="image">
          <div class="widget--image-background-fade d-flex flex-row align-items-center justify-content-center" v-else>
            <img src="../../assets/logo-white.png" alt="">
          </div>
        </Slide>
      </Carousel>
    </section>

    <!-- Navigation -->
    <section class="container my-3">
      <ul class="nav nav-tabs widget--nav-tabs text-uppercase widget--subtitle font-medium" role="tablist">
        <li role="presentation" class="active">
          <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
            <span v-if="french">Sommaire</span>
            <span v-if="english">Overview</span>
          </a>
        </li>
        <li role="presentation">
          <a href="#publications" aria-controls="publications" role="tab" data-toggle="tab">Publications
          </a>
        </li>
        <li role="presentation"><a href="#team" aria-controls="team" role="tab" data-toggle="tab">
          <span class="text-uppercase" v-if="french">équipe</span>
          <span class="text-uppercase" v-if="english">team</span>
        </a></li>
      </ul>
    </section>

    <!--  -->
    <section class="container mt-4">
      <div class="row">
        <div class="col-xs-12 col-md-9 pr-md-5">
          <!-- Tab panes -->
          <div class="tab-content">
            <!-- Overview - Sommaire -->
            <article role="tabpanel" class="tab-pane fade in active" id="overview">
              <h2 class="page-header mt-0">
                <strong v-if="english">{{content.title_en}}</strong>
                <strong v-if="french">{{content.title_fr}}</strong>
              </h2>
              <!-- Content -->
              <p class="text-justify" v-html="content.content_en" v-if="english"></p>
              <p class="text-justify" v-html="content.content_fr" v-if="french"></p>
              <!-- Address -->
                <div class="p-4 mt-5 widget--gradient widget--border-right-bottom" style="border-left:8px solid #CF9405!important;">
                  <!-- English -->
                  <div v-if="english" v-html="content.address_en"></div>
                  <div v-if="french" v-html="content.address_fr"></div>
                </div>
            </article>
            <!-- Publications -->
            <article role="tabpanel" class="tab-pane fade" id="publications">

            </article>
            <!-- Team -->
            <article role="tabpanel" class="tab-pane fade" id="team">
              <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <div class="panel panel-default secondary--background widget--presence-experts widget--borderless mb-5" v-for="(expert, i) in experts" :key="expert.id" @click="gotoProfile(expert.id)" v-if="(i+1) % 2">
                      <div class="panel-body p-3 row">
                      <!-- <div class="panel-body p-2 row" style="min-height: 180px!important"> -->
                        <!-- Picture -->
                        <div class="col-xs-6 col-md-5">
                          <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                          <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center" v-else>
                            <img src="../../assets/logo-white.png" alt="">
                          </div>
                        </div>
                        <!-- Info -->
                        <div class="col-xs-6 col-md-7 py-1 pl-1 caption main-color">
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
                  <div class="col-xs-12 col-md-6">
                    <div class="panel panel-default secondary--background widget--presence-experts widget--borderless mb-5" v-for="(expert, i) in experts" :key="expert.id" @click="gotoProfile(expert.id)" v-if="(i+2) % 2">
                      <div class="panel-body p-3 row">
                        <!-- Picture -->
                        <div class="col-xs-6 col-md-5">
                          <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                          <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center" v-else>
                            <img src="../../assets/logo-white.png" alt="">
                          </div>
                        </div>
                        <!-- Info -->
                        <div class="col-xs-6 col-md-7 py-1 pl-1 caption main-color">
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
            </article>
          </div>
          <!-- Share -->
          <div class="widget--navigation widget--subtitle-nav w3-xlarge text-center my-5">
            <span class="widget--hover-color mx-3" data-toggle="tooltip" data-placement="top" :title="shareOnTwitterMessage">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </span>
            <span class="widget--hover-color mx-3" data-toggle="tooltip" data-placement="top" :title="shareOnFacebookMessage">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </span>
            <span class="widget--hover-color mx-3" data-toggle="tooltip" data-placement="top" :title="directMessage">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 44" fill="currentColor" focusable="false" class="widget--hover-color">
                <path d="M53,11v33H0V11c4.3,10.3,14.6,17.6,26.5,17.6C38.4,28.6,48.7,21.3,53,11z M2.2,0c0,13.4,10.9,24.2,24.3,24.2
                c13.4,0,24.3-10.8,24.3-24.2"></path>
              </svg>
            </span>
            <span class="widget--hover-color mx-3" data-toggle="tooltip" data-placement="top" :title="shareLinkMessage">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1067.02 1067" fill="currentColor" focusable="false" class="widget--hover-color">
                <path d="M738,409,631.31,515.72h0l-80.11-80L658,329,329,0,0,329,329,658,435.71,551.28l80.07,80.1L409,738l329,329,329-329Zm-409,8.94-88.91-89L329,240.06,417.91,329Zm329,329L746.91,658l88.92,88.89-88.92,88.91Z"></path>
              </svg>
            </span>
            <span class="mx-3" data-toggle="tooltip" data-placement="top" :title="printMessage">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="currentColor" focusable="false" class="widget--hover-color">
                <path d="M24,0V24H96V0ZM96,30H24A24.08,24.08,0,0,0,0,54V90H24v30H96V90h24V54A24.08,24.08,0,0,0,96,30ZM84,108H36V78H84Zm18-54a5.66,5.66,0,0,1-6-6,6,6,0,0,1,12,0A5.66,5.66,0,0,1,102,54Z"></path>
              </svg>
            </span>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-xs-12 col-md-3">
          <Sidebar />
        </div>
      </div>
    </section>
    <!--  -->

    <!-- Learn more -->
    <section v-if="recommandations.length">
      <div class="container mt-5 mb-3">
        <h4 class="pull-left widget--see-more">
          <span v-if="french">Voir aussi</span>
          <span v-if="english">See more</span>
        </h4>
        <div class="pull-right">
          <a @click="scrollRight" class="widget--hover-brand-color pointer"><i class="fa fa-angle-left mr-4 w3-xxlarge"></i></a>
          <a @click="scrollLeft" class="widget--hover-brand-color pointer"><i class="fa fa-angle-right w3-xxlarge"></i></a>
        </div>
      </div>
      <div class="primary--background">
        <div class="container py-4">
          <div class="d-flex flex-nowrap flex-row align-items-center widget--more" id="widget--more">
            <div class="widget--more-box" v-for="item in recommandations" :key="item.id">
              <div class="widget--more-boxing">
                <h2 class="my-0">
                  <strong v-if="french">{{item.title_fr}}</strong>
                  <strong v-if="english">{{item.title_en}}</strong>
                </h2>
                <button type="button" class="btn widget--brand widget--radius-link mr-4 widget--position" @click="goto({url: '/about', data: item})">
                  <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
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
    lawyers: []
  }),
  computed: {
    ...mapGetters(['presences']),
    experts () {
      const location = this.content.location.toLowerCase()

      return this.$store.getters.experts.filter((expert) => {
        return `${expert.location_1}`.toLowerCase() == location || `${expert.location_2}`.toLowerCase() == location || `${expert.location_3}`.toLowerCase() == location
      })
    },
    content() {
      return this.$store.getters.getPresence(this.id)
    },
    recommandations () {
      return this.presences.filter(option => option.id != this.content.id)
    },
  },
  watch: {
    '$route' (to, from) {
      return this.id = to.query.id
    },
  },
  methods: {
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
  }
}
</script>

<style lang="css">
</style>
