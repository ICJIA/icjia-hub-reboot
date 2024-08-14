<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from '#vue-router'

const router = useRouter()

const { smAndDown } = useDisplay()

onMounted(() => {

})
</script>

<template>
  <v-container fluid class="header pa-15">
    <div>
      <h1>ICJIA Research Hub</h1>
      <p class="mt-4">The Research & Analysis Unit serves as Illinois’ Statistical Analysis Center (SAC). State SACs provide objective analysis of criminal justice data for informing statewide policy and practice. The Illinois SAC is affiliated with and supported by the Justice Information Resource Network (JIRN), a national nonprofit organization that promotes collaboration and exchange of information among state SACs, and acts as a liaison between state agencies and the U.S. Department of Justice.

R&A has taken a leadership role in convening policymakers and practitioners to coordinate and improve system response to crime and to promote the use of evidence-based and promising practices at the state and local level. The unit staffs statutorily created criminal justice initiatives. It also develops statistical methodologies and provides statistical advice and interpretation to support criminal justice decision-making and information needs.</p>
    </div>
  </v-container>
  <v-container fluid class="latest-articles pa-15">
    <h1>Latest Articles</h1>
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
        View All Articles
      </v-btn>
    </div>
  </v-container>
  <v-container fluid class="data-browser px-15 pt-15 pb-0 d-flex ga-4 align-center">
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
  </v-container>
  <v-container fluid class="research-analysis pa-15">Research & Analysis</v-container>
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
</style>

