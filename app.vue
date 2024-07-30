<script setup>
const route = useRoute()
</script>

<template>
  <v-app>
    <NuxtLayout :key="route.fullPath">
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>