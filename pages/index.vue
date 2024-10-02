<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from '#vue-router'

import { useArticleStore } from '@/stores/article'

const articleStore = useArticleStore()

const router = useRouter()

const { smAndDown } = useDisplay()

const colors = [
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
]

const whatWeDoItems = [
  {
    title: 'Evaluation',
    text: 'Evaluate government and community programs, providing support and advisement to program staff',
    icon: 'grid-icon.png'
  },
  {
    title: 'Data',
    text: 'Make datasets from multiple justice system sectors available in a single location.',
    icon: 'grid-icon.png'
  },
  {
    title: 'Engagement',
    text: 'Disseminate reports and dashboards that provide relevant justice system metrics',
    icon: 'grid-icon.png'
  },
  {
    title: 'Analytics',
    text: 'Host events that engage experts on important justice system topics',
    icon: 'grid-icon.png'
  },
  {
    title: 'Evidence',
    text: 'Summarize research on justiced system topics, highlighting results with the strongest evidence',
    icon: 'grid-icon.png'
  }
]

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

const latestArticles = computed(() => {
  if (!articleStore.articles.length) return []

  return articleStore.articles.slice(0, 5)
})

onMounted(async () => {
  await articleStore.loadArticles()
})
</script>

<template>
  <!-- <v-container fluid class="header pa-15">
    <div>
      <p class="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </v-container> -->
  <v-container fluid class="header h-100 d-flex align-center justify-center">
    <div class="text-center">
      <!-- <v-chip border="thin opacity-25" color="surface" variant="flat">
        <span class="hidden-sm-and-down">Announcing our</span> <span class="hidden-md-and-up">Our&nbsp;</span> next round of funding. Click <a class="d-inline-block mx-1 text-decoration-none text-primary" href="#">here</a> to learn more.
      </v-chip> -->
      <span class="text-body-1 text-white mb-10 text-uppercase">Research & Analysis Unit</span>
      <h1 class="text-h1 text-bold my-5 text-white text-uppercase">
        Research Hub
      </h1>

      <div class="text-h6 mb-10 text-white">
        Data. Research. Knowledge.
      </div>    
      <p class="text-start text-white px-10">
        We are the Illinois Criminal Justice Information Authority's Research & Analysis Unit. We support persons interested in the Illinois justice system by making data and research publications publicly available. Our work supports multiple audiences, including policymakers, community agencies, researchers, and the general public. We invite you to explore Research Hub, our platform for making data and research publicly available, and learn how we can help.
      </p>   
    </div>   
    <!-- <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
      <div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" />
    </div> -->
  </v-container>
  <v-container fluid class="about pa-15">
    <h1 class="uppercase">What We Do</h1>
    <v-divider class="mt-2 mb-8"></v-divider>
    <div>
      <p class="mt-4">The Research & Analysis Unit is composed of <router-link to="overview">six research centers</router-link>. Our work engages audiences through five intersecting approaches.</p>
    </div>
    <div class="whatwedo-card-container d-flex flex-wrap mt-10 ga-6 mx-auto">    
      <v-card          
        v-for="item in whatWeDoItems"
        :key="item.title"
        variant="outlined"
        elevation="2"
        class="whatwedo-card"
      >
        <v-card-item>
          <div class="text-uppercase text-h6 mb-1 text-center">
            {{ item.title }}
          </div>
          <div class="d-flex">
            <v-img :src="item.icon" class="whatwedo-icon"></v-img>
            <div class="ml-2 text-body-2 mt-3">
              {{ item.text }}
            </div>
          </div>
        </v-card-item>
        <!-- <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
          :max-width="750"
        ></v-img> -->
      </v-card>        
    </div>

    <!-- <v-card flat class="mt-10 d-flex justify-center">
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
        :max-width="750"
      ></v-img>
    </v-card> -->
  </v-container>
  <v-container fluid class="support-you pa-15">
    <h1 class="uppercase">See How We Can Support You</h1>
    <v-divider class="mt-2 mb-8"></v-divider>
    <div class="d-flex flex-wrap mt-10">      
      <v-btn 
        v-for="item in supportYouItems"
        :key="item.title"
        variant="outlined"
        elevation="2"
        hover
        size="x-large"
        class="support-item"
      >
        {{ item.title }}      
      </v-btn>
    </div>
  </v-container>
  <!-- <v-container fluid class="covering pa-15">
    <h1 class="uppercase">Covering the Criminal Justice System Spectrum</h1>
    <v-divider class="mt-2 mb-8"></v-divider>
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
  </v-container> -->
  <v-container fluid class="latest-articles pa-0">
    <h1 class="uppercase mx-15 mt-15">Latest Research and Data</h1>
    <v-divider class="mt-2 mb-8 mx-15"></v-divider>
    <!-- <v-row class="mt-4">
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
    </v-row> -->
    <v-carousel v-if="latestArticles.length" class="mt-4" cycle>
      <v-carousel-item
        v-for="item in latestArticles"
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        :key="item.attributes.id"
        cover        
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h3 text-white pa-15 mx-10 font-weight-bold">
            {{ item.attributes.title }}
          </div>
        </div>
      </v-carousel-item>
      <!-- <v-carousel-item
        v-for="(item, i) in latestArticles"
        :key="item.attributes.id"               
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <div class="d-flex fill-height justify-center align-center pa-15 mx-10 font-weight-bold">
            <div class="text-h3">
              {{ item.attributes.title }} 
            </div>
          </div>
        </v-sheet>
      </v-carousel-item> -->
      <!-- <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2 text-white">
            Text
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2 text-white">
            Text
          </div>
        </div>  
      </v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2 text-white">
            Text
          </div>
        </div>  
      </v-carousel-item> -->
    </v-carousel>

    <div class="my-8 d-flex justify-center">
      <v-btn size="x-large" elevation="2" class="button" color="amber-accent-4">
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
    <h1 class="uppercase">Let's Stay in Touch</h1>
    <v-divider class="mt-2 mb-8"></v-divider>
    <div>
      <p class="mt-4">For inquiries, contact the Research & Analysis Unit at 
        <a href="mailto:placeholder@illinois.gov?subject=stay%in%touch" class="ext-link">placeholder@illinois.gov</a>
      </p>
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
  background: url('../assets/imgs/scott-graham-5fNmWej4tAA-unsplash.jpg');
  background-size: cover;
  margin-top: 72px;
  min-height: 600px;
  border-top: 12px solid var(--clr-primary);
  border-bottom: 12px solid var(--clr-primary);
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

.whatwedo-card-container {
  max-width: 600px; 
}

.whatwedo-card {
  max-width: 48%;
}

.whatwedo-icon {
  width: 33%;
}

@media (max-width: 760px) {
  .support-item {
    flex: 1 0 100%;
  }
}
</style>

