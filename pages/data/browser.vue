<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useDatasetStore } from '@/stores/dataset'

const datasetStore = useDatasetStore()

const keyword = ref()

const groupBy = ref('sector')

const searchHint = ref('Data includes 409,420 participants as of 2/15/2023.')

const lawEnforcementDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('law enforcement')) data.push(dataset)
  }
  return data
})

const correctionsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('corrections')) data.push(dataset)
  }
  return data
})

const courtsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('courts')) data.push(dataset)
  }
  return data
})

const crimesDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('crimes')) data.push(dataset)
  }
  return data

})

const victimsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('victims')) data.push(dataset)
  }
  return data

})

const otherDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []  

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('other')) data.push(dataset)
  }
  return data
})

onMounted(async () => {
  await datasetStore.loadDatasets()
})
</script>

<template>
  <v-container fluid class="header pa-15">
    <div>
      <h1>Data Browser</h1>
      <p class="mt-4">Browse aggregate-level data contributed by ICJIA research participants. Data are derived from multiple data sources. To protect participant privacy, we have removed personal identifiers, and only included summary demographic information. Individual-level data are available for analysis upon further request</p>
    </div>    
  </v-container>
  <v-container fluid class="d-flex pa-15 justify-space-between">
    <v-text-field 
      v-model=keyword 
      variant="outlined" 
      clearable 
      class="search-input" 
      :hint="searchHint"
      persistent-hint
    >
      <template v-slot:label>
        <span>
          Keyword Search <v-icon icon="mdi-magnify"></v-icon>
        </span>
      </template>
    </v-text-field>
    <div class="wrap-faq">
      <v-btn size="x-large" variant="outlined" >
        FAQ
      </v-btn>   
    </div>
  </v-container>
  <v-container fluid class="pa-15">
    <div class="d-flex justify-end">
      <v-btn-toggle
        v-model="groupBy"
        color="blue-grey-darken-4"
        variant="outlined"
      >
        <v-btn value="sector">
          Sector
        </v-btn>

        <v-btn value="year">
          Year
        </v-btn>
      </v-btn-toggle>
    </div>

    <div>
      <h2>Law Enforcement</h2>
      <v-row>
        <v-col col="12" md="3" v-for="dataset in lawEnforcementDataComputed">
          <v-card variant="outlined">    
            <div>
              Categories: {{ dataset.attributes.categories }}
            </div>  
            <br>
            <div>
              Title: {{ dataset.attributes.title }}
            </div>       
            <br>
            <!-- <div>
              Description: {{ dataset.attributes.description.substring(0, 50) }}
            </div>  
            <br> -->
            <div>
              Date: {{ dataset.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ dataset.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>  

    <div>
      <h2>Corrections</h2>
      <v-row>
        <v-col col="12" sm="12" md="3" v-for="dataset in correctionsDataComputed">
          <v-card variant="outlined">     
            <div>
              Categories: {{ dataset.attributes.categories }}
            </div>  
            <br>
            <div>
              Title: {{ dataset.attributes.title }}
            </div>       
            <br>
            <!-- <div>
              Description: {{ dataset.attributes.description.substring(0, 50) }}
            </div>  
            <br> -->
            <div>
              Date: {{ dataset.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ dataset.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>    

    <div>
      <h2>Courts</h2>
      <v-row>
        <v-col col="12" sm="12" md="3" v-for="dataset in courtsDataComputed">
          <v-card variant="outlined">     
            <div>
              Categories: {{ dataset.attributes.categories }}
            </div>  
            <br>
            <div>
              Title: {{ dataset.attributes.title }}
            </div>       
            <br>
            <!-- <div>
              Description: {{ dataset.attributes.description }}
            </div>  
            <br> -->
            <div>
              Date: {{ dataset.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ dataset.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>    

    <div>
      <h2>Crimes</h2>
      <v-row>
        <v-col col="12" sm="12" md="3" v-for="dataset in crimesDataComputed">
          <v-card variant="outlined">     
            <div>
              Categories: {{ dataset.attributes.categories }}
            </div>  
            <br>
            <div>
              Title: {{ dataset.attributes.title }}
            </div>       
            <br>
            <!-- <div>
              Description: {{ dataset.attributes.description }}
            </div>  
            <br> -->
            <div>
              Date: {{ dataset.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ dataset.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>  
    
    <div>
      <h2>Victims</h2>
      <v-row>
        <v-col col="12" sm="12" md="3" v-for="dataset in victimsDataComputed">
          <v-card variant="outlined">     
            <div>
              Categories: {{ dataset.attributes.categories }}
            </div>  
            <br>
            <div>
              Title: {{ dataset.attributes.title }}
            </div>       
            <br>
            <!-- <div>
              Description: {{ dataset.attributes.description }}
            </div>  
            <br> -->
            <div>
              Date: {{ dataset.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ dataset.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>  

    <div>
      <h2>Other</h2>
      <v-row>
        <v-col col="12" sm="12" md="3" v-for="dataset in otherDataComputed">
          <v-card variant="outlined">     
            <div>
              Categories: {{ dataset.attributes.categories }}
            </div>  
            <br>
            <div>
              Title: {{ dataset.attributes.title }}
            </div>       
            <br>
            <!-- <div>
              Description: {{ dataset.attributes.description }}
            </div> 
            <br> -->
            <div>
              Date: {{ dataset.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ dataset.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>    
  </v-container>
</template>

<style scoped>
.search-input {
  max-width: 50%;
}

.wrap-faq {
  margin: 2px auto 0;  
}
</style>
