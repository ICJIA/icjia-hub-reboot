<script setup lang="ts">
import { onMounted } from 'vue';
import { ref, computed } from 'vue'
import { useDisplay, useGoTo } from 'vuetify'

import AppFooter from '~/components/AppFooter.vue';

const route = useRoute()
const router = useRouter()

const { smAndDown } = useDisplay()

const showNavDrawer = ref(false)

const goTo = useGoTo()
const showToTop = ref(false)

const onScroll = (e) => {
  if (typeof window === 'undefined') return

  const top = window.scrollY || e.target.scrollTop || 0
  showToTop.value = top > 20
}

const toTop = () => {
  goTo(0)
}

const navItems = {
  overview: {
    path: '/overview',
    title: 'R&A Overview'
    // items: [
    //   { path: '/about', title: 'About Research Hub' },
    //   { path: '/staff', title: 'Research Hub Staff' }
    // ]
  },
  data: {
    path: '/data',
    title: 'Data Browser'    
    // title: 'Data & Tools',
    // items: [
    //   {
    //     path: '/browser',
    //     title: 'Data Browser'
    //   },
    //   {
    //     path: '/snapshots',
    //     title: 'Data Snapshots'
    //   },
    //   {
    //     path: '/sources',
    //     title: 'Data Sources'
    //   },
    //   {
    //     path: '/roadmap',
    //     title: 'Data Roadmap'
    //   }
    // ]
  },
  publications: {
    path: '/publications',
    title: 'Publications Browser',
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
        path: '/apps',
        title: 'Web Applications'
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
        path: '/meetings',
        title: 'Meetings'
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

// const breadcrumbItems = [
//   {
//     title: 'Research Hub',
//     disabled: false,
//     href: '/',
//   },
//   {
//     title: 'Data & Tools',
//     disabled: false,
//     href: 'breadcrumbs_data',
//   },
//   {
//     title: 'Data Browser',
//     disabled: false,
//     href: 'breadcrumbs_link_1',
//   }
// ]

const toICJIA = () => {
  window.location.href = 'https://icjia.illinois.gov/'
}

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
    
    <v-img
      height="100%"
      src="../assets/imgs/icjia-logo.ee010aa8.png"
      cover
      max-width="80"
      class="ml-1 icjia-logo"
      @click="toICJIA"
    ></v-img>
    <!-- <span class="divider"></span> -->
    <!-- <v-list-item @click="router.push('/')" class="pa-1">
      <h4 class="uppercase hub-text">Research Hub</h4>
    </v-list-item> -->
    <h4 @click="router.push('/')" class="uppercase hub-text">Research Hub</h4>
    <v-spacer></v-spacer>

    <v-menu
      v-for="item in navItems"
      :key="item.path"
      open-on-hover
    >
      <template v-slot:activator="{ props, isActive }">        
        <v-list-item :to="item.path" v-bind="props">
          <v-list-item-title class="font-weight-bold uppercase">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </template>

      <v-list v-if="item.items">
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

  <AppFooter />

  <v-btn
    v-scroll="onScroll"
    v-show="showToTop"  
    position="fixed"
    color="primary"
    @click="toTop"
    class="to-top-btn"
    icon="mdi-chevron-up"
    size="large"
  />
</template>

<style scoped>
.icjia-logo {
  cursor: pointer;
}

.breadcrumbs-container {
  margin-top: 74px;
}

.hub-text {
  margin-left: 1rem;
  padding: .5rem .75rem;
  /* box-shadow: 0 0 5px rgb(29 26 26 / 65%); */
  box-shadow: -5px 0 2px -3px rgb(29 26 26 / 65%);
  cursor: pointer;
}

.divider {
  width: 2.5px;
  height: 66px;
  background-color: var(--clr-dark-500);
  margin: 0 1.3rem 0 2rem;
}

.to-top-btn {
  bottom: 2rem;
  right: 2rem;
  background-color: var(--clr-primary-400) !important;
  z-index: 9999;
}
</style>

