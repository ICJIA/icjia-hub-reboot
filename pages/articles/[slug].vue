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
    <!-- <v-container fluid class="article-container d-flex pa-15" :class="{ 'pa-0': smAndDown, 'pa-15': !smAndDown }">     -->
    <v-container fluid class="article-container d-flex pa-15">       
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
      <!-- <div class="meta article-toc text-center" :class="{ 'article-toc-sticky': isTOCSticky }"> -->
      <div v-if="mdAndUp" class="meta article-toc text-center ml-10">   
        <div class="sticky">
          <ArticleToc
            v-if="headings && headings.length"
            v-scroll="onScrollTOC"
            class="mb-12 text-left sticky"
            :headings="headings"
            :active-heading="activeHeading"
          />

          <v-btn v-if="article.mainFile" variant="outlined">
            {{ article.mainFile.type }}
            <v-icon icon="mdi-download" />
          </v-btn>

          <!-- <v-btn
            v-if="article.extrafile"
            variant="outlined"            
          >
            <template>{{ "appendix" }}</template>
            <v-icon>download</v-icon>
          </v-btn> -->
        </div>     
        <!-- <div class="toc my-5 ml-5 pa-5 d-flex justify-center">Table of Contents</div> -->


        <!-- <v-btn
          v-if="article.mainfile"
          class="article-download"
          @click="downloadHelper('main')"
        >
          <template>{{ article.mainfiletype }}</template>
          <v-icon>download</v-icon>
        </v-btn> -->
        <!-- <div class="attachments my-5 ml-5 pa-5 d-flex justify-center">Attachments</div>
        <div class="related my-5 ml-5 pa-5 d-flex justify-center">Related</div>
        <div class="tags my-5 ml-5 pa-5 d-flex justify-center">Tags</div> -->
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useDisplay } from "vuetify";
import api from '@/api/index.js'
import ArticleToc from '@/components/ArticleToc.vue'
// import { VueMarkdownIt } from '@f3ve/vue-markdown-it'
// import MarkdownIt from 'markdown-it'
// import MarkdownItFootnote from 'markdown-it-footnote'
import { format } from '@/utils/itemFormatter';
import { createMarkdownUtils, initMarkdownIt } from '@/utils/markdownIt'

// const options = {
//   html: true,
//   linkify: true,
//   footnote: true
// }

// initialize markdownit
const md = initMarkdownIt();
const markdownUtils = createMarkdownUtils(md);

const route = useRoute()
const { name, mdAndUp, smAndDown } = useDisplay();

const markdown = ref('')
const article = ref()

const activeHeading = ref('introduction')

const headings = computed(() => {
  if (!markdown.value) return null
  
  const { parseHeadings } = markdownUtils
  const headings = markdown.value && parseHeadings ? parseHeadings(markdown.value) : null;
  return headings;
})

const splashHeight = computed(() => {
  if (name.value === 'xs') {
    return 240
  } else if (name.value === 'sm') {
    return 360
  } else {
    return 650
  }
});

const viewTitleHeight = ref(60 + 80)

const isTOCSticky = ref(false)

const onScrollTOC = (e) => {
  if (typeof window === "undefined") return;
  const top = window.scrollY || e.target.scrollTop || 0;
  const threshold = splashHeight.value + viewTitleHeight.value + 20;

  isTOCSticky.value = top > threshold;
}

onMounted(async () => {
  // const testSlug = 'evaluation-of-youth-summer-job-program-suggests-targeting-at-risk-youth'
  article.value = await api.getArticle(route.params.slug)
  console.log(article.value)
  article.value = format(article.value)

  // #TODO: add error handling
  // const article = await api.getArticle(testSlug)
  // if (this.article.images) {
  //         this.article.md = this.addImages(
  //           this.article.images,
  //           this.article.markdown
  //         );
  //       } else {
  //         this.article.md = this.article.markdown;
  //       }

  markdown.value = markdownUtils.renderMarkdown(article.value.markdown)

  // gets rid of attributes layer and formats date and categories to make them more readable
  console.log(article.value, 'formatted article')
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital@0;1&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Oswald:wght@400;500;600;700&display=swap");

.article-container {
  max-width: 75%;
}

.article-body :deep(p) {
  margin-bottom: 16px;
}

.meta {
  
}

.sticky {
  position: sticky;
  top: 200px;
}

@media screen and (max-width: 600px) {
  .article-container {
    max-width: 95%;
  }
}
</style>
