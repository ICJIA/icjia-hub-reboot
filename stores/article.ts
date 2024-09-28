import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/index.js'


export const useArticleStore = defineStore('articleStore', () => {
  const articles = ref([])
  const loadArticles = async () => {         
    const res = await api.listArticles()
    console.log(res)
    if (res.data && res.data.length) {
      articles.value = res.data
    }
  }

  return { 
    articles,
    loadArticles    
  }
})
