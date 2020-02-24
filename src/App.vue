<template>
  <div id="app">
    <div class="mb-4">
      <NewHeader />
    </div>
    <transition name="slide" appear mode="out-in">
      <router-view />
    </transition>
    <section class="widget--footer-main">
      <Footer />
    </section>
    <!-- Scroll Button -->
    <button @click="topFunction" id="myBtn" title="Go to top">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change:transform"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"
            fill="currentColor">
            <path d="M16 13L6 23l1.41 1.41L16 15.83l8.59 8.58L26 23 16 13zM4 7h24v2H4z" />
        </svg>
    </button>
  </div>
</template>

<script>
import Header from '@/components/Header'
import NewHeader from '@/components/NewHeader'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    NewHeader,
    Footer
  },
  methods: {
    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  mounted() {
    console.log("Mounted App")
    $(function () {
      var nua = navigator.userAgent
      var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
      if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
      }
    })

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    window.onscroll = function() {
      scrollFunction()
    };

    //Get the button:
    var mybutton = document.getElementById("myBtn");

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    this.$store.dispatch('getHomePage')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getBrochures')
    this.$store.dispatch('getAbout')
    this.$store.dispatch('getServices')
    this.$store.dispatch('getPracticeAreas')
    this.$store.dispatch('getPresences')
    this.$store.dispatch('getNewsAndPublications')
    this.$store.dispatch('getMultimedia')
  },
}
</script>

<style lang="scss">
// <!-- @Import Styles -->
// @import './styles/w3.css';
@import './styles/fonts.css';
@import './styles/style.css';
@import './styles/pace.css';
@import './styles/w3.css';
@import '../static/icons/css/simple-line-icons.css';
@import './css/style.css';

iframe[id^="youtube-player"] {
  width: 100%!important;
  height: 200px!important;
  border-radius: 4px!important;
}

.slide-enter-active {
  animation: slide-in .1s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out .1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.VueCarousel-pagination {
  position: absolute!important;
  bottom: 20px !important;
}
.home-carousel {
  .VueCarousel {
    position: relative!important;
  }
  .VueCarousel-pagination {
    position: absolute!important;
    left: 300px !important;
    bottom: 10px !important;
  }
}
@media only screen and (max-width: 767px) {
  .home-carousel {
    .VueCarousel-pagination {
      position: absolute!important;
      left: 0 !important;
      bottom: 10px !important;
    }
  }
}
@media screen and (min-width:768px) and (max-width:991px) {
  .home-carousel {
    .VueCarousel-pagination {
      left: 130px !important;
      bottom: 10px !important;
    }
  }
}
</style>
