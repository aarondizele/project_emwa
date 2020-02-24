<template lang="html">
  <div>
    <!-- Header -->
    <section class="container py-10 position-relative preheader">
      <div class="mofit1"></div>
      <div class="motif2"></div>
      <div class="motif3"></div>
      <div class="motif4"></div>
      <div class="motif5"></div>
      <slick
        ref="slick"
        :options="slickOptions"
        >
        <!-- Slide 1 -->
        <div>
            <div class="row no-gutters">
                <!-- Left -->
                <div class="col-12 col-md-6 order-2 order-md-1 mt-10-md">
                    <h1 class="bold display-4 gd-sage" style="line-height:1;">Emery Mukendi <br>Wafwana & Associates</h1>
                    <p class="my-10 subheading mr-15-lg mr-20-xl">
                      <span v-if="english">The African International law firm that safely takes you into Africa.</span>
                      <span v-if="french">Le cabinet d'avocats international qui vous accompagne en Afrique en toute sécurité.</span>
                    </p>
                    <div class="_flex my-1 gd-sherpa">
                        <div class="mr-4 mr-8-md mr-12-lg">
                            <h3 class="display-4 bold mb-0 fg-primary">25+</h3>
                            <div>
                              <span v-if="english">Years of experience</span>
                              <span v-if="french">Années d'expérience</span>
                            </div>
                        </div>
                        <div class="mr-4 mr-8-md mr-12-lg">
                            <h3 class="display-4 bold mb-0 fg-primary">06</h3>
                            <div>
                              <span v-if="english">Offices</span>
                              <span v-if="french">Bureaux</span>
                            </div>
                        </div>
                        <div class="">
                            <h3 class="display-4 bold mb-0 fg-primary">26</h3>
                            <div>
                              <span v-if="english">Practice Jurisdictions</span>
                              <span v-if="french">Juridictions de pratique</span>
                            </div>
                        </div>
                    </div>
                    <div class="_flex _wrap pt-5">
                        <a href="/about/sommaire?id=9gSnHA8d7VTbtYOg7SqL" class="fg-primary no-hover body-2 _flex mr-5 mr-10-md mb-5"><i class="fal fa-angle-right subheading mr-2"></i>
                          <span class="animated-underline" v-if="english">Read more</span>
                          <span class="animated-underline" v-if="french">En savoir plus</span>
                          </a>
                        <a href="http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf" download class="fg-primary no-hover body-2 _flex mb-5" v-if="english">
                          <i class="fal fa-arrow-to-bottom subheading mr-2"></i>
                          <span class="animated-underline" v-if="english">Download brochure</span>
                        </a>
                        <a href="http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf" download class="fg-primary no-hover body-2 _flex mb-5" v-if="french">
                          <i class="fal fa-arrow-to-bottom subheading mr-2"></i>
                          <span class="animated-underline" v-if="french">Télécharger la brochure</span>
                        </a>
                    </div>
                </div>
                <!--Right -->
                <div class="col-12 col-md-6 order-1 order-md-2 position-relative mb-5 mb-0-md">
                    <div @click="goNext" class="next_homepage c-pointer no-hover _flex">
                        <span class="next_homepage_text" v-if="french">Suivant</span>
                        <span class="next_homepage_text" v-if="english">Next</span>
                        <span class="next_homepage_separator">|</span>
                        <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                        </path>
                    </svg></div>
                    <img src="../assets/_homepage.jpg" alt="" class="img_homepage shadow-sm">
                </div>
            </div>
        </div>

        <!-- -->
        <div v-for="carousel in carousels" :key="carousel.title_en">
          <div class="row no-gutters">
              <!-- Left -->
              <div class="col-12 col-md-6 order-2 order-md-1 mt-10-md">
                  <h1 class="bold display-4 gd-sage" style="line-height:1;">
                    <span v-if="english">{{carousel.title_en}}</span>
                    <span v-if="french">{{carousel.title_fr}}</span>
                  </h1>
                  <p class="my-10 subheading mr-15-lg mr-20-xl">
                    <span v-if="english">{{carousel.body_en}}</span>
                    <span v-if="french">{{carousel.body_fr}}</span>
                  </p>
                  <div class="_flex _wrap pt-5">
                      <router-link :to="carousel.url" class="fg-primary no-hover body-2 _flex mr-5 mr-10-md mb-5"><i class="fal fa-angle-right subheading mr-2"></i>
                        <span class="animated-underline" v-if="english">Read more</span>
                        <span class="animated-underline" v-if="french">En savoir plus</span>
                        </router-link>
                      <a :href="carousel.download_en" download class="fg-primary no-hover body-2 _flex mb-5" v-if="english">
                        <i class="fal fa-arrow-to-bottom subheading mr-2"></i>
                        <span class="animated-underline" v-if="english">Download brochure</span>
                      </a>
                      <a :href="carousel.download_fr" download class="fg-primary no-hover body-2 _flex mb-5" v-if="french">
                        <i class="fal fa-arrow-to-bottom subheading mr-2"></i>
                        <span class="animated-underline" v-if="french">Télécharger la brochure</span>
                      </a>
                  </div>
              </div>
              <!--Right -->
              <div class="col-12 col-md-6 order-1 order-md-2 position-relative widget--carousel-image mb-5 mb-0-md">
                  <div @click="goNext" class="next_homepage c-pointer no-hover _flex">
                      <span class="next_homepage_text" v-if="french">Suivant</span>
                      <span class="next_homepage_text" v-if="english">Next</span>
                      <span class="next_homepage_separator">|</span>
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor">
                      </path>
                  </svg></div>
                  <img :src="carousel.image" v-if="carousel.image" alt="" class="img_homepage shadow-sm">
                  <div class="widget--header-img-placeholder d-flex flex-row align-items-center justify-content-center" v-if="!carousel.image">
                    <img src="../assets/logo-white.png" alt="">
                  </div>
              </div>
          </div>
        </div>
      </slick>
      <!-- <div class="carousel-sliding">
      </div> -->
      <!-- Fixed selector -->
      <ul class="list-unstyled gd-sherpa" id="fixedSelector">
          <li @click="goTo(0)" class="">01</li>
          <li @click="goTo(1)" class="active">02</li>
          <li @click="goTo(2)" class="">03</li>
          <li @click="goTo(3)" class="">04</li>
          <li @click="goTo(4)" class="">05</li>
          <li @click="goTo(5)" class="">06</li>
          <li @click="goTo(6)" class="">07</li>
      </ul>
      <!--  -->
      <div class="right_box"></div>
    </section>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    currentIndex: 0,
    slickOptions: {
      arrows: false,
      dots:true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      fade: true,
      adaptiveHeight: true
    },
    carousels: [
      // Natural ressources
      {
        main: false,
        title_en: 'Natural resources',
        title_fr: 'Ressources naturelles',
        body_en: 'Our Lawyers and consultants possess valuable experience and have a perfect knowledge of the legal regimes and systems operational in the jurisdictions wherein they are authorized to practice. They handle questions and offer creative solutions to legal challenges relating to mining law, hydrocarbon law, forestry law, agriculture law, environmental law and hydraulic resources law.',
        body_fr: 'Les avocats et consultants de notre firme possèdent une parfaite connaissance et font preuve d’une bonne maitrise, dans leurs juridictions de pratique, des questions et défis juridiques se rapportant aux droit minier, droit des hydrocarbures, droit forestier, droit agricole, droit de l’environnement et droit des ressources hydrauliques.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/La-pratique-du-droit-minier-en-Afrique.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/Ressources_Naturelles_5-e1541779144174.jpeg",
        url: '/practice-areas/ressources-naturelles?id=4TA3jNnrCb3cTY52dfAV'
      },
      // Energy & Infrastructure
      {
        main: false,
        title_en: 'Energy & Infrastructure',
        title_fr: 'Energie & Infrastructure',
        body_en: 'In their jurisdictions of practice, our lawyers and consultants actively advice and assist clients in matters concerning land and real estate law, telecommunications and IT law, energy law and transportation law.',
        body_fr: 'Dans leurs juridictions de pratique, nos avocats et consultants interviennent activement dans les matières se rapportant au droit foncier et immobilier, droit des télécommunications et TIC, droit de l’énergie et droit de transport.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A_-Oil-Gas-Energy-and-Infrastructure-Practice.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_570200689-min-e1543517907391.jpg",
        url: '/practice-areas/energie-et-infrastructures?id=Ps0fhObsSVwp73d1DxgA'
      },
      // Bank, Insurance & Investments
      {
        main: false,
        title_en: 'Bank, Insurance & Investments',
        title_fr: 'Banque, Assurance & Investissements',
        body_en: 'As a team, we remain up to date and are highly watchful as to the constant changes in the legal and regulatory frameworks in these sectors to effectively and efficiently provide best suited legal advice to Investors, Financial Institutions and Insurance Companies. We also monitor   regulatory currency exchange.',
        body_fr: 'Notre équipe Banque, assurance et investissements suit avec diligence les changements constants des cadres légaux et règlementaires de ces secteurs. Elle fournit des services adaptés et répondant aux besoins de nos clients relativement au droit bancaire, au droit des assurances et à la réglementation de change.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-_Banking-Investment-Insurance_mail_Nov-18.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/Banque-Investissement-Assurance_Print.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_574713295-min-e1543517950962.jpg",
        url: '/practice-areas/banque-assurance-et-investissements?id=lRuC4DWWpVfNSl3XMjPu'
      },
      // Commerce & Indrustry
      {
        main: false,
        title_en: 'Commerce & Indrustry',
        title_fr: 'Commerce & Indrustrie',
        body_en: 'The primary focus and permanent goal of our lawyers, jurists and consultants is to have an updated insight of the constant evolution of the legislations, regulations and jurisprudence operational under business law notably general commercial law, company law, intellectual property law, community law, surety law, tax law, commercial contracts, procurement law, etc.',
        body_fr: 'Le souci permanent de nos avocats, jurisconsultes et consultants est d’être à jour avec l’évolution de la législation, la règlementation et la jurisprudence touchant au droit des affaires, incluant notamment le droit commercial général, le droit des sociétés, le droit de la propriété intellectuelle, le droit social, le droit des sûretés, le droit fiscal, les contrats commerciaux, le droit des marchés publics.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_526625740-min.jpg",
        url: '/practice-areas/commerce-et-industrie?id=Bx2k9BvibnJx8AuUG8i7'
      },
      // Family & Persons
      {
        main: false,
        title_en: 'Family & Persons',
        title_fr: 'Famille & Personnes',
        body_en: 'Our lawyers specialize in family law assist and advise our clients in the procedure concerning the acquisition or loss of nationality, name change or modification, cancellation of name, obtaining of civil status deeds or supplemental judgment in the event of delayed declaration of acts related to civil status, guardianship of minors, delegation of parental authority, divorce, filiation, adoption and succession as well as estate duties.',
        body_fr: "Nos avocats spécialistes en droit de la famille assistent et conseillent nos clients dans les procédures d'acquisition ou des pertes de nationalité, de changement, de modification ou de radiation de nom, d'obtention d'actes d'état civil ou de jugements supplétifs en cas de déclaration tardive des actes d'état civil, de tutelle des mineures, de délégation de l'autorité parentale, de divorce, de filiation, d'adoption et de succession et de libéralités.",
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: "https://www.cabemery.org/fr/wp-content/uploads/family2-e1480031411152.jpg",
        url: '/practice-areas/famille-et-personnes?id=PQN7nLmVfThteKg7QjbT'
      },
      // Litigation, Mediation & Arbitration
      {
        main: false,
        title_en: 'Litigation, Mediation & Arbitration',
        title_fr: 'Contentieux, Médiation & Arbitrage',
        body_en: 'Our team of lawyers are highly experienced, diligent, creative and proactive in dealing with national and international disputes resolution as well as matters concerning complex commercial contractual arbitration and mediation. We are highly skilled in delivering creative solutions in handling such matters presented by our clients.',
        body_fr: 'Nos avocats sont expérimentés, diligents et proactifs dans la gestion des contentieux nationaux et internationaux, ainsi que dans l’arbitrage commercial et d’investissements. Ils ont la capacité d’adaptation aux attentes des clients suivant l’évolution des contentieux en cause.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-_Litigation-Brochure-_Mail.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMW-A-_-La-pratique-du-contentieux.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_135048374-e1545052044304.jpg",
        url: '/services/contentieux-mediation-et-arbitrage?id=78JXJ1f4O2gzXP5UPNdL'
        // image: "http://www.cabemery.org/wp-content/uploads/shutterstock_1107036797-e1543517880360.jpg"
      },
    ]
  }),
  methods: {
    goTo(n) {
      this.$refs.slick.slickGoTo(n)
      // return $('.carousel-sliding').slick('slickGoTo', n);
    },
    goNext() {
      this.$refs.slick.next();
      // return $('.carousel-sliding').slick('slickNext');
    }
  },
  mounted() {    
    // Slick functions
    // $('.carousel-sliding').slick({
    //   arrows: false,
    //   dots:true,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 6000,
    //   fade: true,
    //   adaptiveHeight: true
    // });
    // this.currentIndex = $('.carousel-sliding').slick('slickCurrentSlide');
  },
}
</script>

<style lang="scss" scoped>
.separator {
  height: 5px;
  width: 70px;
  background: #CF9405!important;
  border-radius: 25px;
  margin: 8px 0;
}
.my-carousel {
  height: 400px;
}
@media only screen and (max-width: 768px) {
  .my-carousel {
    height: 100%;
  }
}
</style>
