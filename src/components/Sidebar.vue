<template lang="html">
  <div class="mt-4 mt-md-0">
    <div class="row overflow-x-hidden">
      <!--  -->
      <div class="col-12 col-md-6 col-lg-12 pr-md-3 p-0 pr-lg-0 mb-4">
        <div class="secondary--background widget--home-experts-two p-3 pl-4">
          <h5 class="mt-2 mb-4 text-uppercase gd-sage">
            <strong v-if="french">NOS EXPERTS</strong>
            <strong v-if="english">OUR EXPERTS</strong>
          </h5>
          <div class="widget--card" v-if="experts.length">
            <slick
              ref="slick"
              :options="slickExpertOptions"
            >
              <div v-for="expert in experts" :key="expert.id">
                <div class="row no-gutters w-100">
                  <div class="col-5 pr-2">
                    <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img pointer" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                    <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center pointer" v-else @click="gotoProfile(expert.id)">
                      <img src="../assets/logo-white.png" alt="">
                    </div>
                  </div>
                  <div class="col-7 pl-2">
                    <div class="w3-medium widget--title mb-3 widget--hover-brand-color pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
                    <div class="font-small widget--subtitle"><i class="fa fa-legal mr-2" aria-hidden="true"></i>
                      <span v-if="french">{{expert.grade_fr}}</span>
                      <span v-if="english">{{expert.grade_en}}</span>
                    </div>
                    <div class="font-small widget--subtitle text-capitalize"><span class="glyphicon glyphicon-map-marker mr-2" aria-hidden="true"></span>
                      {{expert.location_1}} <span v-if="expert.location_2">• {{expert.location_2}}</span> <span v-if="expert.location_3">• {{expert.location_3}}</span>
                    </div>
                    <div class="font-small widget--subtitle">
                      <span class="glyphicon glyphicon-earphone mr-2" aria-hidden="true"></span>
                      {{expert.phone_1}} <span v-if="expert.phone_2"> • {{expert.phone_2}}</span> <span v-if="expert.phone_3"> • {{expert.phone_3}}</span>
                    </div>
                    <div class="font-small widget--subtitle"><i class="fal fa-envelope-open mr-2" aria-hidden="true"></i> {{expert.email}}</div>
                    <div class="mt-2">
                      <a class="widget--brand-color pointer medium font-small" @click="gotoProfile(expert.id)">
                        <i class="far fa-angle-right mr-2"></i>
                        <span v-if="french">Voir profil</span>
                        <span v-if="english">See profile</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </slick>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-12 col-md-6 col-lg-12 pl-md-3 pl-lg-0">
        <div class="secondary--background widget--home-experts-three p-3 pl-4">
          <h5 class="mt-2 mb-4 text-uppercase gd-sage">
            <strong v-if="french">NOS BROCHURES</strong>
            <strong v-if="english">OUR BROCHURES</strong>
          </h5>
          <div class="widget--news" v-if="brochures.length">
            <slick
              ref="slick"
              :options="slickBrochureOptions"
            >
              <div v-for="brochure in brochures" :key="brochure.id" v-if="french && brochure.language == 'french'">
                <div class="row">
                  <div class="col-5">
                    <img :data-src="brochure.cover" alt="" class="lazyload widget--brochure-img" v-if="brochure.cover">
                    <div class="widget--box-fade d-flex flex-row align-items-center justify-content-center" v-if="!brochure.cover">
                      <img src="../assets/logo-white.png" alt="">
                    </div>
                  </div>
                  <div class="col-7 pl-0">
                    <h6 class="widget--title mt-0">
                      <span>{{brochure.title}}</span>
                    </h6>
                    <div class="widget--subtitle" style="font-size:13px;">
                      <span v-html="formatText(brochure.description)"></span>
                    </div>
                    <div class="my-3">
                      <a :href="brochure.download_link" class="widget--brand-color pointer font-small">
                        <i class="far fa-arrow-to-bottom mr-2"></i>
                        <strong v-if="french">Télécharger</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-for="brochure in brochures" :key="brochure.id" v-if="english && brochure.language == 'english'">
                <div class="row">
                  <div class="col-5">
                    <img :data-src="brochure.cover" alt="" class="lazyload widget--brochure-img" v-if="brochure.cover">
                    <div class="widget--box-fade d-flex flex-row align-items-center justify-content-center" v-if="!brochure.cover">
                      <img src="../assets/logo-white.png" alt="">
                    </div>
                  </div>
                  <div class="col-7 pl-0">
                    <h6 class="widget--title mt-0">
                      <span>{{brochure.title}}</span>
                    </h6>
                    <div class="widget--subtitle" style="font-size:13px;">
                      <span v-html="formatText(brochure.description)"></span>
                    </div>
                    <div class="my-3">
                      <a :href="brochure.download_link" class="widget--brand-color pointer font-smal">
                        <i class="far fa-arrow-to-bottom mr-2"></i>
                        <strong v-if="english">Download</strong>
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
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    slickExpertOptions: {
      arrows: false,
      dots:false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true
    },
    slickBrochureOptions: {
      arrows: false,
      dots:false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      fade:true,
      adaptiveHeight: true
    },
  }),
  computed: {
    ...mapGetters(['experts', 'brochures'])
  },
  methods: {
    formatText(text) {
      const length = 200;
      return text.substring(0, length) + " ...";
    }
  },
  created() {
    if (!this.experts.length) {
      this.$store.dispatch('getExperts')
    }
    if (!this.brochures.length) {
      this.$store.dispatch('getBrochures')
    }
  }
}
</script>

<style lang="scss" scoped>
.agile {
  &__dots {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &__dot {
    button {
      background-color: transparent;
      border: 1px solid #fff;

      &:hover {
        background-color: #fff;
      }
    }

    &--current {
      button {
        background-color: #fff;
      }
    }
  }

  &__arrow {
    height: 100%;
    top: 0;
    width: 80px;

    &:hover {
      background-color: rgba(#000, .5);

      #arrow-svg {
        fill: #fff;
      }
    }

    &[disabled] {
      display: none;
    }

    #arrow-svg {
      fill: rgba(#fff, .4);
      height: 25px;
    }
  }
}

</style>
