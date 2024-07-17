<script setup lang="ts">
import { onMounted } from 'vue';
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const route = useRoute()

const { smAndDown } = useDisplay()

const showNavDrawer = ref(false)

const navItems = {
  overview: {
    path: 'overview',
    title: 'Overview',
    items: [
      'Research Hub Overview',
      'Research Hub Staff'
    ]
  },
  data: {
    path: 'data',
    title: 'Data & Tools',
    items: [
      'Data Browser',
      'Data Snapshots',
      'Data Sources',
      'Data Roadmap'
    ]
  },
  publications: {
    path: 'publications',
    title: 'Publications',
    items: [
      'Articles',
      'Reports',
      'Interactive Charts'
    ]
  },
  irb: {
    path: 'irb',
    title: 'Institutional Review Board',
    items: [
      'Members & Staff',
      'Policies',
      'Resources'
    ]
  }
}

const breadcrumbItems = [
  {
    title: 'Research Hub',
    disabled: false,
    href: '/',
  },
  {
    title: 'Data & Tools',
    disabled: false,
    href: 'breadcrumbs_data',
  },
  {
    title: 'Data Browser',
    disabled: false,
    href: 'breadcrumbs_link_1',
  }
]

const pathItems = computed(() => {
  const items = route.fullPath.split('/').slice(1)
  console.log(items)
  return items
})

const breadcrumbsComputed = computed(() => {
  const breadcrumbs = []
  for (const pathItem of pathItems.value) {
    const crumb = {
      title: navItems[pathItem]?.title ? navItems[pathItem].title : 'Research Hub',
      disabled: false,
      href: navItems[pathItem]?.path ? navItems[pathItem].path : '/'
    }
    breadcrumbs.push(crumb)
  }
  return breadcrumbs
})
</script>

<template>
  <v-navigation-drawer v-model="showNavDrawer">
    Mobile Nav
  </v-navigation-drawer>

  <v-app-bar class="pa-3" :elevation="2" density="compact">
    <template v-if="smAndDown" v-slot:prepend>
      <v-app-bar-nav-icon @click="showNavDrawer = !showNavDrawer"></v-app-bar-nav-icon>
    </template>    
    
    <v-app-bar-title link>Research Hub</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu
      v-for="item in navItems"
      :key="item.path"
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-list-item :to="item.path" :title=item.title v-bind="props"></v-list-item>
      </template>

      <v-list>
        <v-list-item
          v-for="(subitem, index) in item.items"
          :key="index"
          link
        >
          <v-list-item-title>{{ subitem }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-container class="breadcrumbs-container mx-1">
    <v-breadcrumbs :items="breadcrumbItems">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </v-container>
  <slot></slot>
</template>

<style scoped>
.breadcrumbs-container {
  margin-top: 74px;
}
</style>

