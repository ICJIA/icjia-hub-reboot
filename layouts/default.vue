<script setup lang="ts">
import { onMounted } from 'vue';
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const route = useRoute()
const router = useRouter()

const { smAndDown } = useDisplay()

const showNavDrawer = ref(false)

const navItems = {
  overview: {
    path: '/overview',
    title: 'Overview',
    items: [
      { path: '/about', title: 'About Research Hub' },
      { path: '/staff', title: 'Research Hub Staff' }
    ]
  },
  data: {
    path: '/data',
    title: 'Data & Tools',
    items: [
      {
        path: '/browser',
        title: 'Data Browser'
      },
      {
        path: '/snapshots',
        title: 'Data Snapshots'
      },
      {
        path: '/sources',
        title: 'Data Sources'
      },
      {
        path: '/roadmap',
        title: 'Data Roadmap'
      }
    ]
  },
  publications: {
    path: '/publications',
    title: 'Publications',
    items: [
      {
        path: '/articles',
        title: 'Articles'
      },
      {
        path: '/reports',
        title: 'Reports'
      },
      {
        path: '/charts',
        title: 'Interactive Charts'
      }
    ]
  },
  irb: {
    path: '/irb',
    title: 'Institutional Review Board',
    items: [
    {
        path: '/members',
        title: 'Members & Staff'
      },
      {
        path: '/policies',
        title: 'Policies'
      },
      {
        path: '/resources',
        title: 'Resources'
      }
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

const showBreadcrumbs = computed(() => {
  if (route.fullPath === '/') {
    return false
  }
  return true
})

const breadcrumbsComputed = computed(() => {
  const breadcrumbs = [{ title: 'Research Hub', disabled: false, href: '/' }]

  const rootItem = pathItems.value[0]
  const rootCrumb = {
    title: navItems[rootItem].title,
    disabled: false,
    href: navItems[rootItem].path
  }
  breadcrumbs.push(rootCrumb)

  if (pathItems.value[1]) {
    const nestedItem =  navItems[rootItem].items.find(subItem => {
      if (subItem.path.includes(pathItems.value[1])) {
        return true
      }
      return false
    })
    const nestedCrumb = {
      title: nestedItem.title,
      disabled: false,
      href: rootCrumb.href + nestedItem.path
    }
    breadcrumbs.push(nestedCrumb)
  }
  
  return breadcrumbs
})
</script>

<template> 
  <v-navigation-drawer v-model="showNavDrawer" disable-resize-watcher>
    Mobile Nav
  </v-navigation-drawer>

  <v-app-bar class="pa-3" :elevation="2" density="compact">
    <template v-if="smAndDown" v-slot:prepend>
      <v-app-bar-nav-icon @click="showNavDrawer = !showNavDrawer"></v-app-bar-nav-icon>
    </template>    
    
    <v-list-item @click="router.push('/')" title="Research Hub"></v-list-item>
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
          v-for="(subitem) in item.items"
          :key="`${item.path}${subitem.path}`"
          :to="`${item.path}${subitem.path}`"
        >
          <v-list-item-title>{{ subitem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-container v-if="showBreadcrumbs" class="breadcrumbs-container mx-1">
    <v-breadcrumbs :items="breadcrumbsComputed">
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

