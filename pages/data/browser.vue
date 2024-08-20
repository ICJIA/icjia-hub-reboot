<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDatasetStore } from '@/stores/dataset'

const datasetStore = useDatasetStore()

const keyword = ref()

const searchHint = ref('Data includes 409,420 participants as of 2/15/2023.')

onMounted(async () => {
  console.log(await datasetStore.listDataset())
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
  <v-container>

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
