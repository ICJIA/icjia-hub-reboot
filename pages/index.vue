<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from '#vue-router'

const router = useRouter()

const { smAndDown } = useDisplay()

const supportYouItems = [
  {
    title: 'For Researchers',
    path: '/',
  },
  {
    title: 'For Community Agencies',
    path: '/',
  },
  {
    title: 'For Policymakers',
    path: '/',
  },
  {
    title: 'For the Public',
    path: '/',
  },
]

const initialState = {
  name: '',
  email: '',
  select: null,
  checkbox: null,
}

const state = reactive({
  ...initialState,
})

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

onMounted(() => {

})
</script>

<template>
  <v-container fluid class="header pa-15">
    <div>
      <p class="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </v-container>
  <v-container fluid class="about pa-15">
    <h1>What We Do</h1>
    <div>
      <p class="mt-4">Proin dictum purus in lacinia mollis. Cras vitae ultrices ligula. Nulla feugiat ipsum sed tellus vehicula, ac imperdiet tellus bibendum. Vivamus eget vestibulum mauris. Vivamus arcu odio, eleifend eget odio a, lacinia sollicitudin neque. Mauris nisi lorem, aliquet vitae velit id, faucibus tempus orci. Maecenas a urna lorem. Aenean maximus sem a massa feugiat tempor. Proin tortor dolor, feugiat eu felis in, consequat efficitur nisi.</p>
    </div>
    <v-card flat class="mt-10 d-flex justify-center">
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
        :max-width="750"
      ></v-img>
    </v-card>
  </v-container>
  <v-container fluid class="support-you pa-15">
    <h1>See How We Can Support You</h1>
    <div class="d-flex flex-wrap mt-10">      
      <v-btn 
        v-for="item in supportYouItems"
        :key="item.title"variant="tonal"
        size="x-large"
        class="support-item"
      >
        {{ item.title }}      
      </v-btn>
    </div>
  </v-container>
  <v-container fluid class="covering pa-15">
    <h1>Covering the Criminal Justice System Spectrum</h1>
    <div>
      <p class="mt-4">Proin dictum purus in lacinia mollis. Cras vitae ultrices ligula. Nulla feugiat ipsum sed tellus vehicula, ac imperdiet tellus bibendum. Vivamus eget vestibulum mauris. Vivamus arcu odio, eleifend eget odio a, lacinia sollicitudin neque. Mauris nisi lorem, aliquet vitae velit id, faucibus tempus orci. Maecenas a urna lorem. Aenean maximus sem a massa feugiat tempor. Proin tortor dolor, feugiat eu felis in, consequat efficitur nisi.</p>
    </div>
    <v-card flat class="mt-10 d-flex justify-center">
      <v-img
        height="100%"
        src="../assets/imgs/pexels-tima-miroshnichenko-6615239.jpg"
        cover
        :max-width="750"
      ></v-img>
    </v-card>
  </v-container>
  <v-container fluid class="latest-articles pa-15">
    <h1>Latest Research and Data</h1>
    <v-row class="mt-4">
      <v-col v-for="n in 2" cols="12" md="6">
        <v-card flat class="pb-3">
          <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>
          <v-card-title class="text-wrap">Illinois Crime Reduction Task Force Report: A Report to the Illiois Governor and General Assembly</v-card-title>

          <v-card-subtitle>Illinois Crime Reduction Task Force</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <div class="mt-8 d-flex justify-center">
      <v-btn size="x-large" flat class="button" color="amber-accent-4">
        View All
      </v-btn>
    </div>
  </v-container>
  <!-- <v-container fluid class="data-browser px-15 pt-15 pb-0 d-flex ga-4 align-center">
    <div>
      <h1>Data Browser</h1>
      <p class="mt-4">The Data Browser provides interactive views of the criminal justice data available in the ICJIA dataset. Plan a project by exploring the types and quantities of data available.</p>
      <v-btn size="x-large" flat class="mt-6" color="amber-accent-4" @click="router.push('/data/browser')">
        Browse Data
      </v-btn>
    </div>
    <v-img
      width="50%"
      height="100%"
      src="https://www.researchallofus.org/wp-content/themes/research-hub-wordpress-theme/media/homepage/data-browser@2x.png"
      cover
    ></v-img>
  </v-container> -->
  <v-container fluid class="contact-us pa-15">
    <h1>Let's Stay in Touch</h1>
    <div>
      <p class="mt-4">Proin dictum purus in lacinia mollis. Cras vitae ultrices ligula. Nulla feugiat ipsum sed tellus vehicula, ac imperdiet tellus bibendum. Vivamus eget vestibulum mauris. Vivamus arcu odio, eleifend eget odio a, lacinia sollicitudin neque. Mauris nisi lorem, aliquet vitae velit id, faucibus tempus orci. Maecenas a urna lorem. Aenean maximus sem a massa feugiat tempor. Proin tortor dolor, feugiat eu felis in, consequat efficitur nisi.</p>
    </div>
    <form class="contact-form">
      <v-text-field
        v-model="state.name"
        :counter="10"
        label="Name"
        required
        variant="outlined" 
      ></v-text-field>

      <v-text-field
        v-model="state.email"
        label="E-mail"
        required
        variant="outlined" 
      ></v-text-field>

      <v-textarea
        v-model="state.select"
        :items="items"
        label="Item"
        required
        variant="outlined" 
      ></v-textarea>

      <v-checkbox
        v-model="state.checkbox"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        class="me-4"
      >
        Submit
      </v-btn>
    </form>
  </v-container>
</template>

<style scoped>
.header {
  margin-top: 72px;
  border-bottom: 10px solid var(--clr-primary);
}

.data-browser {
  background-image: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
  /* background-image: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%); */
}

.contact-form {
  margin: 48px auto;
  max-width: 50%;
}

.support-item {
  flex: 1 0 40%;
  margin: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  align-content: center;
}

@media (max-width: 760px) {
  .support-item {
    flex: 1 0 100%;
  }
}
</style>

