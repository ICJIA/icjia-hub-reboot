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
      <div class="article-content">
        <div class="article-title">
          {{ article.title }}
        </div>
        <div class="article-abstract">
          {{ article.abstract }}
        </div>

        <!-- <vue-markdown-it 
          :source="markdown" 
          class="article-body" 
          :options="options" 
          :plugins="[MarkdownItFootnote]" /> -->  
        <div
          class="article-body"
          v-html="markdown"
          v-prevent-reload
          ref="main"
        ></div>
      </div>
      <div class="meta">
        <div class="toc my-5 ml-5 pa-5 d-flex justify-center">Table of Contents</div>
        <div class="attachments my-5 ml-5 pa-5 d-flex justify-center">Attachments</div>
        <div class="related my-5 ml-5 pa-5 d-flex justify-center">Related</div>
        <div class="tags my-5 ml-5 pa-5 d-flex justify-center">Tags</div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import api from '@/api/index.js'
// import { VueMarkdownIt } from '@f3ve/vue-markdown-it'
// import MarkdownIt from 'markdown-it'
// import MarkdownItFootnote from 'markdown-it-footnote'
import { format } from "@/utils/itemFormatter";
import { createMarkdownUtils, initMarkdownIt } from "../../utils/markdownIt"

// const options = {
//   html: true,
//   linkify: true,
//   footnote: true
// }

// initialize markdownit
const md = initMarkdownIt();
const markdownUtils = createMarkdownUtils(md);

const route = useRoute()

const markdown = ref('')
const article = ref()
const articleFormatted = ref()
// const articleAttributes = computed(() => {
//   if (!article.value) return
  
//   return article.value.attributes
// })

const headings = computed(() => {
  if (!markdown.value) return null
  
  const { parseHeadings } = markdownUtils
  const headings = markdown.value && parseHeadings ? parseHeadings(markdown.value) : null;
  return headings;
})

onMounted(async () => {
  // const testSlug = 'evaluation-of-youth-summer-job-program-suggests-targeting-at-risk-youth'
  article.value = await api.getArticle(route.params.slug)
  console.log(article.value)

  // #TODO: add error handling
  // const article = await api.getArticle(testSlug)
  markdown.value = markdownUtils.renderMarkdown(article.value.attributes.markdown)

  // gets rid of attributes layer and formats date and categories to make them more readable
  article.value = format(article.value)
  console.log(article.value, 'formatted article')
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital@0;1&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Oswald:wght@400;500;600;700&display=swap");

.article-body :deep(p) {
  margin-bottom: 16px;
}
</style>
