<!-- pages/articles/[slug].vue -->
<template>
  <div>
    <h1>Article Details</h1>
    <p>Slug: {{ route.params.slug }}</p>
    <vue-markdown-it :source="markdown" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/api/index.js'
import { VueMarkdownIt } from '@f3ve/vue-markdown-it'

const route = useRoute()

const markdown = ref('')

onMounted(async () => {
  const testSlug = 'evaluation-of-youth-summer-job-program-suggests-targeting-at-risk-youth'
  // const article = await api.getArticle(route.params.slug)

  // #TODO: add error handling
  const article = await api.getArticle(testSlug)
  markdown.value = article.attributes.markdown
})
</script>