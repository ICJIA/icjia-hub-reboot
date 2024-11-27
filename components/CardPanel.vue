<script setup>
const router = useRouter()

const props = defineProps({
  value: String,
  title: String,
  data: Object
})

const toEntry = (entry) => {
  console.log('entry', entry)
  router.push(`/articles/${entry.attributes.slug}`)
}
</script>

<template>
  <v-expansion-panel          
    :value=props.value
  >
    <v-expansion-panel-title>
      <h2 class="my-3">{{ props.title }}</h2>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row class="py-5">
        <v-col col="12" sm="12" md="3" v-for="data in props.data">
          <v-card variant="outlined" class="cursor-pointer" @click="toEntry(data)">     
            <div>
              Categories: {{ data.attributes.categories }}
            </div>          
            <br>
            <div>
              Title: {{ data.attributes.title }}
            </div>       
            <br>
            <div>
              Date: {{ data.attributes.date }}
            </div>
            <br>
            <div>
              Tags: {{ data.attributes.tags }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>

</style>
