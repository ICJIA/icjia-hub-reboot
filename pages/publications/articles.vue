<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useArticleStore } from '@/stores/article'

import CardPanel from '~/components/CardPanel.vue';


const articleStore = useArticleStore()

const keyword = ref('')

const groupBy = ref('grid')

const searchHint = ref('Quisque mollis massa vel neque lacinia, sed eleifend leo scelerisque.')

const panels = ref([])

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
  if (!articleStore.articles.length) return []

  const data = []

  for (const article of articleStore.articles) {
    if (article.attributes.categories.includes('law enforcement') && keyword.value === '') {
      data.push(article)
    } else if (article.attributes.categories.includes('law enforcement') && keyword.value !== '') {
      if (article.attributes.abstract.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.date.includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      for (const category of article.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
      for (const tag of article.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
    }
  }
  return data
})

const correctionsDataComputed = computed(() => {
  if (!articleStore.articles.length) return []

  const data = []
  for (const article of articleStore.articles) {
    if (article.attributes.categories.includes('corrections') && keyword.value === '') {
      data.push(article)
    } else if (article.attributes.categories.includes('corrections') && keyword.value !== '') {
      if (article.attributes.abstract.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.date.includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      for (const category of article.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
      for (const tag of article.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
    }
  }
  return data
})

const courtsDataComputed = computed(() => {
  if (!articleStore.articles.length) return []

  const data = []
  for (const article of articleStore.articles) {
    if (article.attributes.categories.includes('courts') && keyword.value === '') {
      data.push(article)
    } else if (article.attributes.categories.includes('courts') && keyword.value !== '') {
      if (article.attributes.abstract.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.date.includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      for (const category of article.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
      for (const tag of article.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
    }
  }
  return data
})

const crimesDataComputed = computed(() => {
  if (!articleStore.articles.length) return []

  const data = []
  for (const article of articleStore.articles) {
    if (article.attributes.categories.includes('crimes') && keyword.value === '') {
      data.push(article)
    } else if (article.attributes.categories.includes('crimes') && keyword.value !== '') {
      if (article.attributes.abstract.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.date.includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      for (const category of article.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
      for (const tag of article.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
    }
  }
  return data

})

const victimsDataComputed = computed(() => {
  if (!articleStore.articles.length) return []

  const data = []
  for (const article of articleStore.articles) {
    if (article.attributes.categories.includes('victims') && keyword.value === '') {
      data.push(article)
    } else if (article.attributes.categories.includes('victims') && keyword.value !== '') {
      if (article.attributes.abstract.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.date.includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      for (const category of article.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
      for (const tag of article.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
    }
  }
  return data

})

const otherDataComputed = computed(() => {
  if (!articleStore.articles.length) return []  

  const data = []
  for (const article of articleStore.articles) {
    if (article.attributes.categories.includes('other') && keyword.value === '') {
      data.push(article)
    } else if (article.attributes.categories.includes('other') && keyword.value !== '') {
      if (article.attributes.abstract.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.date.includes(keyword.value)) {
        data.push(article)
        continue
      }
      if (article.attributes.title.toLowerCase().includes(keyword.value)) {
        data.push(article)
        continue
      }
      for (const category of article.attributes.categories) {
        if (category.toLowerCase().includes(keyword.value)) data.push(article)
        continue
      }
      for (const tag of article.attributes.tags) {
        if (tag.toLowerCase().includes(keyword.value)) data.push(article)
        continue
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

  if (combinedSearchResults.length) {
    dataTableItems = combinedSearchResults.map(result => {
      return {
        categories: result.attributes.categories,
        date: result.attributes.date,
        title: result.attributes.title,
        abstract: result.attributes.abstract
      }
    })
  }

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


// watchEffect(async () => {
//   if (groupBy.value === 'grid') {
//     const expandedPanels = []
//     for (const item of panelItems) {

//     }
//   }
// })

onMounted(async () => {
  await articleStore.loadArticles()
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
  <v-container fluid class="pa-15">
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
      <v-expansion-panels 
        v-show="groupBy === 'grid'"
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
</style>
