<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useDatasetStore } from '@/stores/dataset'
import { useArticleStore } from '@/stores/article'

import CardPanel from '~/components/CardPanel.vue';


const datasetStore = useDatasetStore()

const articleStore = useArticleStore()

const keyword = ref('')

const groupBy = ref('grid')

const searchHint = ref('Quisque mollis massa vel neque lacinia, sed eleifend leo scelerisque.')

const panels = ref([])

const categories = ["law enforcement", "corrections", "courts", "crimes", "victims", "other"]

// const categories = computed(() => {
//   if (!articleStore.articles.length) return []

//   const categories : Array<string> = []
//   for (const article of articleStore.articles) {
//     for (const category of article.attributes.categories) {
//       if (!categories.includes(category)) {
//         categories.push(category)
//       }
//     }
//   }
//   return categories
// })

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

const searchResultsDataTable = computed(() => {
  const combinedSearchResults = [
      lawEnforcementDataComputed, 
      correctionsDataComputed, 
      courtsDataComputed,
      crimesDataComputed,
      victimsDataComputed,
      otherDataComputed
    ].flat()

  const dataTableItems = combinedSearchResults.map(result => {
    return {
      categories: result.attributes.categories,
      date: result.attributes.date,
      title: result.attributes.title,
      description: result.attributes.description
    }
  })

  return dataTableItems
})

const panelItems = [
  { 
    category: 'law enforcement',
    title: 'Law Enforcement',
    data: lawEnforcementDataComputed
  },
  { 
    category: 'corrections',
    title: 'Corrections',
    data: correctionsDataComputed
  },
  { 
    category: 'courts',
    title: 'Courts',
    data: courtsDataComputed
  },
  { 
    category: 'crimes',
    title: 'Crimes',
    data: crimesDataComputed
  },
  { 
    category: 'victims',
    title: 'Victims',
    data: victimsDataComputed
  },
  { 
    category: 'other',
    title: 'Other',
    data: otherDataComputed
  },
  
]

onMounted(async () => {
  await articleStore.loadArticles()
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
      <h1>Articles</h1>
      <p class="mt-4">Explore a comprehensive collection of research articles published by the Illinois Criminal Justice Information Authority (ICJIA). These articles cover a wide range of criminal justice topics, offering in-depth analysis, empirical findings, and evidence-based insights. From policy evaluations to trend analyses, our publications aim to inform practitioners, policymakers, and the public about critical issues in Illinois' criminal justice system. Browse our archive to access the latest research, historical studies, and ongoing investigations that contribute to the development of effective criminal justice policies and practices in our state.</p>
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
  <v-container v-if="keyword == ''" fluid class="pa-15">
    <div class="d-flex justify-end">
      <v-btn-toggle
        v-model="groupBy"
        color="blue-grey-darken-4"
        variant="outlined"
      >
        <v-btn value="grid">
          <v-icon icon="mdi-dots-grid" size="large"></v-icon>
        </v-btn>
        <v-btn value="list">
          <v-icon icon="mdi-format-list-checkbox" size="large"></v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="mt-5">
      <v-expansion-panels multiple v-model="panels" elevation="0" variant="accordion">
        <template v-for="panelItem in panelItems" :key="panelItem.category">
          <CardPanel
            :value="panelItem.category"
            :title="panelItem.title"
            :data="panelItem.data"
          />
        </template>     
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
  <v-container v-else fluid class="pa-15">
    <v-data-table :items="searchResultsDataTable"></v-data-table>
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
