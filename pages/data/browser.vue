<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useDatasetStore } from '@/stores/dataset'


const datasetStore = useDatasetStore()

const keyword = ref('')

const groupBy = ref('sector')

const searchHint = ref('Data includes 409,420 participants as of 2/15/2023.')

const panels = ref([])

const lawEnforcementDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []

  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('law enforcement') && keyword.value === '') {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('law enforcement') && keyword.value !== '') {
      if (dataset.attributes.description.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.date.includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      for (const category of dataset.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const tag of dataset.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const note of dataset.attributes.notes) {
        if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
    }
  }
  return data
})

const correctionsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('corrections') && keyword.value === '') {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('corrections') && keyword.value !== '') {
      if (dataset.attributes.description.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.date.includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      for (const category of dataset.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const tag of dataset.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const note of dataset.attributes.notes) {
        if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
    }
  }
  return data
})

const courtsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('courts') && keyword.value === '') {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('courts') && keyword.value !== '') {
      if (dataset.attributes.description.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.date.includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      for (const category of dataset.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const tag of dataset.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const note of dataset.attributes.notes) {
        if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
    }
  }
  return data
})

const crimesDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('crimes') && keyword.value === '') {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('crimes') && keyword.value !== '') {
      if (dataset.attributes.description.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.date.includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      for (const category of dataset.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const tag of dataset.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const note of dataset.attributes.notes) {
        if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
    }
  }
  return data

})

const victimsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('victims') && keyword.value === '') {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('victims') && keyword.value !== '') {
      if (dataset.attributes.description.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.date.includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      for (const category of dataset.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const tag of dataset.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const note of dataset.attributes.notes) {
        if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
    }
  }
  return data

})

const otherDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []  

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('other') && keyword.value === '') {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('other') && keyword.value !== '') {
      if (dataset.attributes.description.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.date.includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      if (dataset.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(dataset)
        continue
      }
      for (const category of dataset.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const tag of dataset.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
      for (const note of dataset.attributes.notes) {
        if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
        continue
      }
    }
  }
  return data
})

onMounted(async () => {
  await datasetStore.loadDatasets()
  // opens all panels on mount
  // panels.value = ['lawEnforcement', 'corrections', 'courts', 'crimes', 'victims', 'other']
  // opens law enforcement panel on mount
  // panels.value = ['lawEnforcement']
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

    <div class="mt-5">
      <v-expansion-panels multiple v-model="panels" elevation="0" variant="accordion">
        <v-expansion-panel          
          value="lawEnforcement"
        >
          <v-expansion-panel-title>
            <h2 class="my-3">Law Enforcement</h2>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="py-5">
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
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel          
          value="corrections"
        >
          <v-expansion-panel-title>
            <h2 class="my-3">Corrections</h2>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="py-5">
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
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
          value="courts"
        >
          <v-expansion-panel-title>
            <h2 class="my-3">Courts</h2>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="py-5">
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
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
          value="crimes"
        >
          <v-expansion-panel-title>
            <h2 class="my-3">Crimes</h2>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="py-5">
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
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
          value="victims"
        >
          <v-expansion-panel-title>
            <h2 class="my-3">Victims</h2>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="py-5">
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
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
          value="other"
        >
          <v-expansion-panel-title>
            <h2 class="my-3">Other</h2>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="py-5">
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
          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>
    </div>

    <!-- <div>
      <h2 class="my-3">Law Enforcement</h2>
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
      <h2 class="my-3">Corrections</h2>
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
      <h2 class="my-3">Courts</h2>
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
      <h2 class="my-3">Crimes</h2>
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
      <h2 class="my-3">Victims</h2>
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
      <h2 class="my-3">Other</h2>
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
    </div>     -->
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
