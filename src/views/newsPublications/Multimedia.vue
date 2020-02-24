<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="english">Multimedia</strong>
          <strong v-if="french">Multimédia</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-12 col-lg-8 pr-md-5">
          <div class="row">
            <div class="col-12 col-lg-6 mb-6" v-for="video in multimedia" :key="video.id">
              <div class="panel panel-default w-100 secondary--background widget--multimedia widget--borderless">
                <div class="panel-body row">
                  <div class="col-12 col-md-6 col-lg-12">
                    <youtube :video-id="getVideoId(video.url)" class="youtube-player" v-if="video.url"></youtube>
                  </div>
                  <div class="col-12 col-md-6 col-lg-12 mt-4">
                    <h6 v-if="english && video.title_en" class="mt-1">{{video.title_en}}</h6>
                    <h6 v-if="french && video.title_fr || !video.title_en" class="mt-1">{{video.title_fr}}</h6>
                    <div class="widget--title my-2" v-if="video.authors">
                      <strong v-for="(author, n) in video.authors" :key="author">
                        {{author}} <span v-if="n > 1" class="mx-1">/</span>
                      </strong>
                    </div>
                    <p v-if="video.description_en && english" v-html="video.description_en"></p>
                    <p v-if="video.description_fr && french" v-html="video.description_fr"></p>
                    <div class="mt-3 caption" v-if="video.createdAt"><i class="fa fa-clock-o mr-1" aria-hidden="true"></i> {{video.createdAt | date}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-12 col-lg-4">
          <Sidebar />
        </div>
      </div>
    </section>


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
                  <strong v-if="french && item.title_fr">{{item.title_fr}}</strong>
                  <strong v-if="english && item.title_en">{{item.title_en}}</strong>
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
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
  mixins: [languageMixin],
  data: () => ({
    videos: [
      {url: 'https://www.youtube.com/watch?v=HWiwQdVYwNI', author: 'Déborah Mpombolo', createdAt: '31-01-2019', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      {url: 'https://www.youtube.com/watch?v=RwYThDRd4Qc&t=50s', author: 'Déborah Mpombolo', createdAt: '31-01-2019'},
      {url: 'https://www.youtube.com/watch?v=x-F7IO7pcWs', author: 'Déborah Mpombolo', createdAt: '31-01-2019'},
      {url: 'https://www.youtube.com/watch?v=qnIUuP2G2xw', author: 'Déborah Mpombolo', createdAt: '31-01-2019'},
      {url: 'https://www.youtube.com/watch?v=cu_uwC_8xFI&t=107s', author: 'Déborah Mpombolo', createdAt: '31-01-2019'},
    ],
    recommandations: [
      {title_en: 'News', title_fr: 'Actualités', link: '/news'},
      {title_en: 'Alerts', title_fr: 'Alertes', link: '/alerts'},
      {title_en: 'Publications', title_fr: 'Publications', link: '/publications'},
      {title_en: 'Events', title_fr: 'Evénements', link: '/events'},
      // {title_en: 'Multimedia', title_fr: 'Multimédia', link: '/multimedia'},
      {title_en: 'Webinars', title_fr: 'Webinaires', link: '/webinars'},
    ]
  }),
  computed: {
    ...mapGetters(['multimedia']),
  },
  methods: {
    getVideoId(url) {
      return getIdFromURL(url)
    }
  },
  created() {
    if (!this.multimedia.length) {
      this.$store.dispatch('getMultimedia')
    }
  }
}
</script>

<style lang="css">
</style>
