<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useDatasetStore } from '@/stores/dataset'

import CardPanel from '~/components/CardPanel.vue';

const datasetStore = useDatasetStore()

const keyword = ref('')

const groupBy = ref('sector')

const searchInputRef = ref(null)

function scrollTo(view) { 
  view.scrollIntoView({ behavior: 'smooth' }) 
  view.focus()
}

const currentSectorTag = ref('')
const sectorTags = ref(['Law enforcement', 'Courts', 'Community corrections', 'Prisons'])

const currentKeywordTag = ref('')
const keywordTags = ref(['Crime rate', 'Juvenile', 'Chicago', 'Cook County', 'Adams County', 'Race', 'Ethnicity'])

const searchHint = ref('Data includes 409,420 participants as of 2/15/2023.')

const panels = ref([])

const lawEnforcementDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []

  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('law enforcement') && (keyword.value === '' || keyword.value === null)) {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('law enforcement') && keyword.value !== '' && keyword.value !== null) {
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
      // notes can be null
      if (dataset.attributes.notes) {
        for (const note of dataset.attributes.notes) {
          if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
          continue
        }
      }
    }
  }
  return data
})

const correctionsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []

  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('corrections') && (keyword.value === '' || keyword.value === null)) {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('corrections') && keyword.value !== '' && keyword.value !== null) {
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
      // notes can be null
      if (dataset.attributes.notes) {
        for (const note of dataset.attributes.notes) {
          if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
          continue
        }
      }
    }
  }
  return data
})

const courtsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('courts') && (keyword.value === '' || keyword.value === null)) {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('courts') && keyword.value !== '' && keyword.value !== null) {
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
      // notes can be null
      if (dataset.attributes.notes) {
        for (const note of dataset.attributes.notes) {
          if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
          continue
        }
      }
    }
  }
  return data
})

const crimesDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('crimes') && (keyword.value === '' || keyword.value === null)) {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('crimes') && keyword.value !== '' && keyword.value !== null) {
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
      // notes can be null
      if (dataset.attributes.notes) {
        for (const note of dataset.attributes.notes) {
          if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
          continue
        }
      }
    }
  }
  return data

})

const victimsDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('victims') && (keyword.value === '' || keyword.value === null)) {
      data.push(dataset)
    } else if (dataset.attributes.categories.includes('victims') && keyword.value !== '' && keyword.value !== null) {
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
      // notes can be null
      if (dataset.attributes.notes) {
        for (const note of dataset.attributes.notes) {
          if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
          continue
        }
      }
    }
  }
  return data
})

const otherDataComputed = computed(() => {
  if (!datasetStore.datasets.length) return []  

  const data = []
  for (const dataset of datasetStore.datasets) {
    if (dataset.attributes.categories.includes('other') && (keyword.value === '' || keyword.value === null)) {
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
      // notes can be null
      if (dataset.attributes.notes) {
        for (const note of dataset.attributes.notes) {
          if (note.toLowerCase().includes(keyword.value)) data.push(dataset)
          continue
        }
      }
    }
  }
  return data
})

const searchResultsDataTable = computed(() => {
  const combinedSearchResults = [
      lawEnforcementDataComputed.value, 
      correctionsDataComputed.value, 
      courtsDataComputed.value,
      crimesDataComputed.value,
      victimsDataComputed.value,
      otherDataComputed.value
    ].flat()

  let dataTableItems = []

  dataTableItems = combinedSearchResults.map(result => {
    return {
      categories: result.attributes.categories,
      date: result.attributes.date,
      title: result.attributes.title,
      description: result.attributes.description
    }
  })

  return dataTableItems
})


const panelItems = computed(() => {
  return [
    { 
      category: 'law enforcement',
      title: 'Law Enforcement',
      data: lawEnforcementDataComputed.value
    },
    { 
      category: 'corrections',
      title: 'Corrections',
      data: correctionsDataComputed.value
    },
    { 
      category: 'courts',
      title: 'Courts',
      data: courtsDataComputed.value
    },
    { 
      category: 'crimes',
      title: 'Crimes',
      data: crimesDataComputed.value
    },
    { 
      category: 'victims',
      title: 'Victims',
      data: victimsDataComputed.value
    },
    { 
      category: 'other',
      title: 'Other',
      data: otherDataComputed.value
    }    
  ]
})

watchEffect(async () => {
  if (groupBy.value === 'sector') {
    if (keyword.value !== '' && keyword.value !== null) {
      const expandedPanels = []
      for (const item of panelItems.value) {
        if (item.data.length) expandedPanels.push(item.category)
      }
      panels.value = expandedPanels
    } else if (keyword.value === '' || keyword.value === null) {
      panels.value = []
    }
  }
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
      <h1>R&A Data Browser and Publication Browser</h1>
      <p class="mt-4">Welcome to the R&A Data and Publication Browser. Use the browser to search for R&A publications, dashboards, and datasets from {{ '2/15/1990' }} to present. We offer the following search options.</p>
    </div>
  </v-container>
  <v-container fluid class="search-info pa-15 d-flex">
    <v-card
      variant="outlined"
      class="mx-auto pa-5 text-center"
      max-width="344"
    >
      <div>
        <v-chip>
          1
        </v-chip>
        <h6 class="text-h6 my-2">
          Search by justice system sector.
        </h6>
        <span class="text-subtitle-2">
          Click below to learn about R&A's participation in the national Justice Counts initiative and data currently available by sector
        </span>
        <v-img
          height="100%"
          src="../../assets/imgs/Justice-Counts.png"
          cover
          width="100%"
          class="mt-4 cursor-pointer"
          @click=""
        ></v-img>
      </div>
    </v-card>
    <v-card
      elevation="10"
      class="mx-auto pa-5 text-center"
      max-width="344"
    >
    <div>
      <v-chip>
        2
      </v-chip>
      <h6 class="text-h6 my-2">
        Search by keyword.
      </h6>
      <span class="text-subtitle-2">
        Use our keyword options or enter custom keywords.
      </span>
      <v-img
        height="80"
        src="../../assets/imgs/Search.png" 
        class="mt-4 cursor-pointer"
        @click="scrollTo(searchInputRef)"
      ></v-img>      
    </div>
    </v-card>
  </v-container>

  <v-container fluid class="px-15 pt-15">
    <v-card
      max-width="100%"
      variant="flat"
    >
      <v-card-text class="px-0">
        <h2 class="text-h6 mb-2">Use our keyword search tags or enter a search term.</h2>

        <v-chip-group
          v-model="currentSectorTag"
          column
        > 
          <v-chip
            v-for="sector in sectorTags"
            :key="sector"
            :text="sector"
            variant="outlined"
            filter
            label
          ></v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-text class="px-0">
        <h2 class="text-h6 mb-2">View publications, dashboards and datasets by justice system sector.</h2>

        <v-chip-group
          v-model="currentKeywordTag"
          column          
        >
          <v-chip
            v-for="tag in keywordTags"
            :key="tag"
            :text="tag"
            variant="outlined"
            filter
          ></v-chip>      
        </v-chip-group>
      </v-card-text>
    </v-card>
  </v-container>
  <v-container fluid class="d-flex px-15 pb-15 justify-space-between">
    <v-text-field 
      v-model=keyword 
      variant="outlined" 
      clearable 
      class="search-input" 
      :hint="searchHint"
      persistent-hint
      ref="searchInputRef"
    >
      <template v-slot:label>
        <span>
          Keyword Search <v-icon icon="mdi-magnify"></v-icon>
        </span>
      </template>
    </v-text-field>
    <!-- <div class="wrap-faq">
      <v-btn size="x-large" variant="outlined" >
        FAQ
      </v-btn>   
    </div> -->
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
        <v-btn value="list">
          <v-icon icon="mdi-format-list-checkbox" size="large"></v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="mt-5">
      <v-expansion-panels 
        v-show="groupBy === 'sector'"
        multiple 
        v-model="panels" 
        elevation="0" 
        variant="accordion">
        <template v-for="panelItem in panelItems" :key="panelItem.category">
          <CardPanel
            :value="panelItem.category"
            :title="panelItem.title"
            :data="panelItem.data"
          />
        </template>     
      </v-expansion-panels>
       
      <v-data-table v-show="groupBy === 'list'" :items="searchResultsDataTable"></v-data-table>
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

.search-info-card {
  text-align: center;
}
</style>
