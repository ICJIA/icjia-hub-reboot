<script setup>
import { toRef } from 'vue';

const props = defineProps({
  value: String,
  title: String,
  data: Object
})

const dataRef = toRef(props.data)
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
        <v-col col="12" sm="12" md="3" v-for="data in dataRef">
          <v-card variant="outlined">     
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
