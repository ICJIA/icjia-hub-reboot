import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/index.js'

export const useDatasetStore = defineStore('datasetStore', () => {
  const datasets = ref([])
  const loadDatasets = async () => {         
    const res = await api.listDataset()
    console.log(res)
    if (res.data && res.data.length) {
      datasets.value = res.data
    }
  }

  return { 
    datasets,
    loadDatasets    
  }
})
