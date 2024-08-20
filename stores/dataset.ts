import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/index.js'

export const useDatasetStore = defineStore('datasetStore', () => {
  const questionnaireResponses = ref([])
  const listDataset = async () => {         
    const res = await api.listDataset()
    console.log(res)
    // if (res.entry && res.entry.length) {
    //   // questionnaireResponses.value = res.entry.map(item => item.resource)
 
    // }
  }

  return { 
    listDataset
  }
})
