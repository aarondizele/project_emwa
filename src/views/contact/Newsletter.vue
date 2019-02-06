<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="french">S'abonner à la newsletter</strong>
          <strong v-if="english">Subscribe to the newsletter</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-9 pr-md-5">
          <form @submit.prevent="onSubscribe" class="panel secondary--background widget--presence-experts widget--borderless">
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
      email: ''
    }
  }),
  methods: {
    onSubscribe() {

    }
  }
}
</script>

<style lang="css">
</style>
