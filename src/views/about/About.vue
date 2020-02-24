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

    <!--  -->
    <section class="container mt-5" v-if="content">
      <div class="row">
        <div class="col-12 col-md-8 pr-md-5">
          <h2 class="page-header mt-0">
            <strong v-if="english && content.title_en">{{content.title_en}}</strong>
            <strong v-if="french && content.title_fr">{{content.title_fr}}</strong>
          </h2>
          <!-- Content -->
          <p class="text-justify" v-html="content.content_en" v-if="english && content.content_en"></p>
          <p class="text-justify" v-html="content.content_fr" v-if="french && content.content_fr"></p>
          <!-- Share -->
          <Share :link="link" />
        </div>
        <!-- Sidebar -->
        <div class="col-12 col-md-4 overflow-x-hidden">
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

export default {
  mixins: [languageMixin],
  data: () => ({
    id: null,
    currentId: null
  }),
  computed: {
    ...mapGetters(['about']),
    content() {
      return this.$store.getters.getAbout(this.id)
    },
    recommandations () {
      return this.about.filter(option => option.id != this.content.id)
    },
    link() {
      return this.$route.fullPath;
      // return this.english ? value.url + value.data.url_en : value.url + value.data.url_fr;
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      return this.id = to.query.id
    }
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
    this.id = this.$route.query.id;
  }
}
</script>

<style lang="css">
</style>
