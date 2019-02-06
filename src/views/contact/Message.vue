<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="french">Nous contacter</strong>
          <strong v-if="english">Contact us</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-9 pr-md-5">
          <form @submit.prevent="onSubmit" class="panel secondary--background widget--presence-experts widget--borderless">
            <div class="panel-body p-5">
              <div class="form-group">
                <label for="name">
                  <span v-if="english">Your name</span>
                  <span v-if="french">Votre nom</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="name" placeholder="" v-model.trim="form.name" required>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <span v-if="english">Email address</span>
                  <span v-if="french">Adresse email</span>
                </label>
                <input type="email" class="w3-input widget--round-0" id="exampleInputEmail1" placeholder="" v-model.trim="form.email">
              </div>
              <div class="form-group">
                <label for="phone">
                  <span v-if="english">Phone number</span>
                  <span v-if="french">Téléphone</span>
                </label>
                <div class="input-group">
                  <div class="input-group-addon widget--round-0 w3-white w3-border-0 w3-border-bottom w3-xlarge widget--color">+</div>
                  <input type="text" class="w3-input widget--round-0" id="phone" placeholder="" v-model.trim="form.phone">
                </div>
              </div>
              <div class="form-group">
                <label for="company">
                  <span v-if="english">Country</span>
                  <span v-if="french">Pays</span>
                </label>
                <select class="w3-select w3-white" v-model.trim="form.country">
                  <option v-for="country in countryList" :value="country.name" :key="country.code">{{country.name}}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="company">
                  <span v-if="english">Company</span>
                  <span v-if="french">Société</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="company" placeholder="" v-model.trim="form.company">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea name="name" rows="5" cols="8" class="w3-input" id="message" v-model.trim="form.message"></textarea>
              </div>
              <button type="submit" class="btn widget--brand widget--radius-link">
                <span v-if="english">Subscribe</span>
                <span v-if="french">S'abonner</span>
              </button>
            </div>
          </form>
        </div>
        <!-- Sidebar -->
        <div class="col-xs-12 col-md-3">
          <Sidebar />
        </div>
      </div>
    </section>
    <!--  -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { languageMixin } from '../../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    form: {
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      message: ''
    }
  }),
  computed: {
    ...mapGetters(['countryList'])
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style lang="css">
</style>
