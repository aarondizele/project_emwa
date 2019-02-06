<template>
  <div class="about">
    <div class="container widget--gradient widget--profile-header">
        <!-- Avatar -->
        <div class="col-xs-12 col-md-4 text-center d-flex flex-row align-items-center justify-content-center">
          <img :src="expert.avatar" alt="" style="width:200px!important;height:200px!important" class="w3-circle widget--image-profile" v-if="expert.avatar">
          <div class="widget--box-profile d-flex flex-row align-items-center justify-content-center w3-circle" v-else>
            <img src="../../assets/logo-white.png" alt="">
          </div>
        </div>
        <!-- Info -->
        <div class="col-xs-12 col-md-8 subheading my-title" v-if="expert">
          <h2 class="widget--brand-color"><strong>{{expert.name}}</strong></h2>
          <!-- Grade -->
          <p class="mb-2">
            <i class="fa fa-legal mr-3"></i>
            <span v-if="english">{{expert.grade_en}}</span>
            <span v-if="french">{{expert.grade_fr}}</span>
          </p>
          <p class="text-capitalize mb-2">
            <i class="glyphicon glyphicon-map-marker mr-3"></i>
            {{expert.location_1}} <span v-if="expert.location_2"> / {{expert.location_2}}</span> <span v-if="expert.location_3"> / {{expert.location_3}}</span>
          </p>
          <p class="mb-2">
            <i class="glyphicon glyphicon-earphone mr-3"></i>
            {{expert.phone_1}} <span v-if="expert.phone_2"> / {{expert.phone_2}}</span> <span v-if="expert.phone_3"> / {{expert.phone_3}}</span>
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope-open-o mr-3" aria-hidden="true"></i> {{expert.email}}
          </p>
        </div>
      </div>
      <!--  -->
    <div>
      <!-- Nav tabs -->
      <div class="container my-3">
        <ul class="nav nav-tabs widget--nav-tabs text-uppercase widget--subtitle font-medium" role="tablist">
          <li role="presentation" class="active">
            <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
              <span v-if="french">Biographie</span>
              <span v-if="english">Biography</span>
            </a>
          </li>
          <li role="presentation">
            <a href="#expertise" aria-controls="expertise" role="tab" data-toggle="tab">
              Expertise
            </a>
          </li>
          <li role="presentation">
            <a href="#publications" aria-controls="publications" role="tab" data-toggle="tab">Publications
            </a>
          </li>
          <li role="presentation">
            <a href="#multimedia" aria-controls="multimedia" role="tab" data-toggle="tab">
              <span v-if="french">Multimédia</span>
              <span v-if="english">Multimedia</span>
            </a>
          </li>
          <li role="presentation">
            <a class="w3-hover-white border-0 hover-brand-color pointer">
              <strong><i class="icon-printer mr-2" style="font-weight:700" aria-hidden="true"></i>PDF</strong>
            </a>
          </li>
        </ul>
      </div>
      <!--  Main Content -->
      <div class="container mt-4">
        <div class="row">
          <!--Main Content  -->
          <div class="col-xs-12 col-md-9 pr-md-5">
            <!-- Tab panes -->
            <div class="tab-content mt-4">
              <!-- Overview - Sommaire -->
              <div role="tabpanel" class="tab-pane fade in active text-justify" id="overview">
                <div
                  v-html="expert.biography_fr"
                  v-if="french && expert">
                </div>
                <div
                  v-html="expert.biography_en"
                  v-if="english && expert">
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
              <!-- Expertise -->
              <div role="tabpanel" class="tab-pane fade" id="expertise">

              </div>
              <!-- Publications -->
              <div role="tabpanel" class="tab-pane fade" id="publications">
                <div v-if="userPublications.length">
                  <div class="widget--card-news my-3" v-for="publication in userPublications" :key="publication.id">
                    <div class="row">
                      <div class="col-xs-12 col-md-4 pr-md-2">
                        <div class="widget--box-fade d-flex flex-row align-items-center justify-content-center">
                          <img src="../../assets/logo-white.png" alt="">
                        </div>
                      </div>
                      <div class="col-xs-12 col-md-8 pl-md-3">
                        <h4 class="widget--title mt-2">
                          <a :href="publication.link" class="widget--hover-brand-color" target="_blank">{{publication.title_fr}}</a>
                          <!-- <a :href="publication.link_en" class="widget--hover-brand-color" target="_blank" v-if="english">{{publication.title_en}}</a> -->
                        </h4>
                        <h5 class="widget--subtitle mt-2">
                          <i class="fa fa-archive mr-2"></i> <span v-for="(category, x) in publication.categories" :key="category" class="text-capitalize">{{category}}<span class="mx-1" v-if="x > 1">/</span></span>
                          <i class="fa fa-bank ml-4 ml-3 mr-2"></i> <span v-for="(office, i) in publication.offices" :key="office" class="text-capitalize">{{office}}<span class="mx-1" v-if="i > 1">/</span></span>
                        </h5>
                        <p class="clearfix mt-4">
                          <h5 class="widget--title pull-left">
                            <!-- <span class="mr-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 30 min</span> -->
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span v-for="(author, n) in publication.authors" :key="author" class="text-capitalize">{{getAuthor(author.id).name}}<span class="mx-1" v-if="n > 1">/</span></span>
                              <!-- getAuthor(author) -->
                            </span>
                          </h5>
                          <a :href="publication.link" target="_blank" type="button" class="btn btn-sm primary--background widget--radius-link pull-right">
                            <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                            <span v-if="french">Lire plus</span>
                            <span v-if="english">Read more</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Multimedia -->
              <div role="tabpanel" class="tab-pane fade" id="multimedia">
                <div class="row">
                  <div class="col-xs-12" v-for="video in userMultimedia" :key="video.id">
                    <div class="panel panel-default w-100 secondary--background widget--presence-experts widget--borderless">
                      <div class="panel-body row">
                        <div class="col-xs-12 col-md-6">
                          <youtube :video-id="getVideoId(video.url)" class="youtube-player" v-if="video.url"></youtube>
                        </div>
                        <div class="col-xs-12 col-md-6">
                          <h3 v-if="english && video.title_en" class="mt-1">{{video.title_en}}</h3>
                          <h3 v-if="french && video.title_fr || !video.title_en" class="mt-1">{{video.title_fr}}</h3>
                          <h4 class="widget--title mt-2" v-if="video.authors">
                            <strong v-for="(author, n) in video.authors" :key="author">
                              {{getAuthor(author.id).name}} <span v-if="n > 1" class="mx-1">/</span>
                            </strong>
                          </h4>
                          <p v-if="video.description_en && english">{{video.description_en}}</p>
                          <p v-if="video.description_fr && french">{{video.description_fr}}</p>
                          <h5 class="mt-4" v-if="video.createdAt"><i class="fa fa-clock-o mr-1" aria-hidden="true"></i> {{video.createdAt | date}}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Sidebar -->
          <div class="col-xs-12 col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../../mixins/language'
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
  mixins: [languageMixin],
  // props: ['id'],
  data: () => ({
    id: null,
    userPublications: [],
    userMultimedia: []
  }),
  computed: {
    ...mapGetters(['newsAndPublications', 'experts', 'multimedia']),
    expert () {
      return this.$store.getters.expert(this.id)
    },
  },
  watch: {
    '$route' (to, from) {
      return this.id = to.query.id
    },
  },
  methods: {
    getVideoId(url) {
      return getIdFromURL(url)
    },
    getUserPublications () {
      /* --------------------------------- */
      return this.userPublications = this.newsAndPublications.filter(publication => publication.authors.find(author => author.toLowerCase() == this.expert.name.toLowerCase()))
      // return this.userPublications = this.newsAndPublications.filter(publication => publication.authors.find(author => author == this.id))
    },
    getUserMultimedia() {
      return this.userMultimedia = this.multimedia.filter(media => media.authors.find(author => author.toLowerCase() == this.expert.name.toLowerCase()))
      // return this.userMultimedia = this.multimedia.filter(media => media.authors.find(author => author == this.id))
    },
  },
  created() {
    this.id = this.$route.query.id
    this.getUserPublications()
    this.getUserMultimedia()
    // this.userPublications = this.newsAndPublications.filter((publication) => {
    //   return publication.authors.filter(author => author == this.id)
    // })

    if (!this.experts.length) {
      this.$store.dispatch('getExperts')
    }
    if (!this.newsAndPublications.length) {
      this.$store.dispatch('getNewsAndPublications')
    }
    if (!this.multimedia.length) {
      this.$store.dispatch('getMultimedia')
    }
    // console.log(this.expert);
    // console.log(this.userPublications);
    console.log(this.id);
  }
}
</script>

<style lang="scss" scoped>
.widget--image-profile {
  -webkit-object-fit: cover;
  object-fit: cover;
  -webkit-object-position: top;
  object-position: top;
}
.widget--profile-header {
  padding: 40px 0;
  border-radius: 6px;
  border-top-right-radius: 80px;
  // border-top-left-radius: 80px;
}
</style>
