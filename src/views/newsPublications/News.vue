<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="english">News</strong>
          <strong v-if="french">Actualités</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-9 pr-md-5">
          <div class="widget--card-news mb-3" v-for="publication in posts" :key="publication.id">
            <div class="row">
              <div class="col-xs-12 col-md-4 pr-md-2">
                <div class="widget--box-fade d-flex flex-row align-items-center justify-content-center">
                  <img src="../../assets/logo-white.png" alt="">
                </div>
              </div>
              <div class="col-xs-12 col-md-8 pl-md-3">
                <h4 class="widget--title mt-2">
                  <a :href="publication.link" class="widget--hover-brand-color" target="_blank" v-if="french">{{publication.title_fr}}</a>
                  <a :href="publication.link_en" class="widget--hover-brand-color" target="_blank" v-if="english">{{publication.title_en}}</a>
                </h4>
                <h5 class="widget--subtitle mt-2">
                  <i class="fa fa-archive mr-2"></i> <span v-for="(category, x) in publication.categories" :key="category" class="text-capitalize">
                    <span v-if="english">{{getCategory(categoryId).category_en}}</span>
                    <span v-if="french">{{getCategory(categoryId).category_fr}}</span>
                    <span class="mx-1" v-if="x > 1">/</span></span>
                  <i class="fa fa-bank ml-4 ml-3 mr-2"></i> <span v-for="(office, i) in publication.offices" :key="office" class="text-capitalize">{{office}}<span class="mx-1" v-if="i > 1">/</span></span>
                </h5>
                <p class="clearfix mt-4">
                  <h5 class="widget--title pull-left">
                    <!-- <span class="mr-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 30 min</span> -->
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span v-for="(author, n) in publication.authors" :key="author" class="text-capitalize">{{author}}<span class="mx-1" v-if="n > 1">/</span></span>
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
        <!-- Sidebar -->
        <div class="col-xs-12 col-md-3">
          <Sidebar />
        </div>
      </div>
    </section>
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
            <!--  -->
            <div class="widget--more-box" v-for="item in recommandations" :key="item.id">
              <div class="widget--more-boxing">
                <h2 class="my-0">
                  <strong v-if="french">{{item.title_fr}}</strong>
                  <strong v-if="english">{{item.title_en}}</strong>
                </h2>
                <router-link tag="button" type="button" class="btn widget--brand widget--radius-link mr-4 widget--position" :to="item.link">
                  <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                  <span v-if="french">Lire plus</span>
                  <span v-if="english">Read more</span>
                </router-link>
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
    recommandations: [
      // {title_en: 'News', title_fr: 'Actualités', link: '/news'},
      {title_en: 'Alerts', title_fr: 'Alertes', link: '/alerts'},
      {title_en: 'Publications', title_fr: 'Publications', link: '/publications'},
      {title_en: 'Events', title_fr: 'Evénements', link: '/events'},
      {title_en: 'Multimedia', title_fr: 'Multimédia', link: '/multimedia'},
      {title_en: 'Webinars', title_fr: 'Webinaires', link: '/webinars'},
    ]
  }),
  computed: {
    ...mapGetters(['newsAndPublications']),
    posts () {
      return this.newsAndPublications.filter((news) => news.types.find(type => type.toLowerCase().includes('actualité') || type.toLowerCase().includes('news')))
    }
  },
  created() {
    if (!this.newsAndPublications.length) {
      this.$store.dispatch('getNewsAndPublications')
    }
    console.log(this.posts);
  }
}
</script>

<style lang="css">
</style>
