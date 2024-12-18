<!-- pages/articles/[slug].vue -->
<template>
  <div id="article-view" v-if="article">
    <v-container fluid class="splash-container pa-0">   
      <v-img
        max-height="500"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
        width="100%"
      ></v-img>
    </v-container>
    <v-container fluid class="article-container pa-15 d-flex">        
      <div class="content">
        <div class="article-title">
          {{ articleAttributes.title }}
        </div>
        <div class="article-abstract">
          {{ articleAttributes.abstract }}
        </div>

        <vue-markdown-it :source="markdown" class="article-body" />
      </div>
      <div class="meta">
        <div class="toc pa-5">Table of Contents</div>
        <div class="attachments pa-5">Attachments</div>
        <div class="related pa-5">Related</div>
        <div class="tags pa-5">Tags</div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import api from '@/api/index.js'
import { VueMarkdownIt } from '@f3ve/vue-markdown-it'

const route = useRoute()

const markdown = ref('')
const article = ref()
const articleAttributes = computed(() => {
  if (!article.value) return
  
  return article.value.attributes
})

onMounted(async () => {
  // const testSlug = 'evaluation-of-youth-summer-job-program-suggests-targeting-at-risk-youth'
  article.value = await api.getArticle(route.params.slug)
  console.log(article.value)

  // #TODO: add error handling
  // const article = await api.getArticle(testSlug)
  markdown.value = article.value.attributes.markdown
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital@0;1&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Oswald:wght@400;500;600;700&display=swap");

.article-container {

}

.split-article {
  display: flex;
}

.related-section {

}
</style>
