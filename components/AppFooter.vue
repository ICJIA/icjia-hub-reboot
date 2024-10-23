<template>
  <v-footer
    class="bg-color-primary text-white text-center d-flex flex-column pa-8"
  >
    <div>
      <v-tooltip text="Illinois Criminal Justice Information Authority">
        <template v-slot:activator="{ props }">
          <img
            v-bind="props"
            src="../assets/imgs/icjia-logo.ee010aa8.png"
            alt="Footer logo"
            width="100"
            style="border: 0px solid #ddd; display: inline"
            class="hover"
            @click="toICJIA"
          />
        </template>
      </v-tooltip>
    </div>

    <div class="mb-4">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <!-- <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci.
    </div> -->

    <div style="font-size: 12px; font-weight: 550">
      <router-link class="active-link" to="/about/" style="color: #fff; background: none"
        >About</router-link
      >

      |
      <router-link
        class="active-link"
        to="/about/contact/"
        style="color: #fff; background: none"
        >Contact</router-link
      >
      <!-- |
      <router-link to="/sitemap" style="color: #fff; background: none"
        >Sitemap</router-link
      > -->

      |
      <!-- <router-link
        to="/about/covid-19/"
        style="color: #fff; background: none"
      >
        Covid-19 Response</router-link
      >
      | -->
      <a
        class="active-link"
        href="https://archive.icjia.cloud"
        style="color: #fff; background: none"
        target="_blank"
        >Document Archive</a
      >

      |
      <router-link class="active-link" to="/foia/" style="color: #fff; background: none">
        FOIA</router-link
      >

      |
      <router-link
        class="active-link"
        to="/forms/lap-request/"
        style="color: #fff; background: none"
      >
        Language Access Request</router-link
      >
      |

      <router-link
        class="active-link"
        to="/about/privacy/"
        style="color: #fff; background: none"
        >Privacy</router-link
      >
      |
      <router-link
        class="active-link"
        to="/forms/grant-status/"
        style="color: #fff; background: none"
        >Grant Status Request</router-link
      >
      |
      <a
        href="https://visitor.r20.constantcontact.com/manage/optin?v=001MqUcqqvjwLCJXlLMSWbTe3zHHmEQgFeBuHvBcJWTbwgrxFbDSGx4HSUPpI6DJWMUPgbljtLxffqIcGFTgCnr-auak88ybvRxpoJlTMGPtZs%3D"
        style="color: #fff; background: none"
        class="active-link"
        target="_blank"
        >Subscribe to CJ Dispatch</a
      >
      <!-- |
      <a
        href="javascript:void(0);"
        style="color: #fff; background: none"
        @click="openTranslationModal"
        >Translate Site</a
      > -->
    </div>


    <div
      class="mt-3"
      style="font-size: 12px; font-weight: 300; color: #ccc"
    >
      <strong>
        &#169; {{ new Date().getFullYear() }} Illinois Criminal Justice
        Information Authority
      </strong
      >
    </div>
  </v-footer>
</template>

<script setup>
const toICJIA = () => {
  window.location.href = 'https://icjia.illinois.gov/'
}

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>

<style>
.active-link {
  text-decoration: none;
}

.active-link:hover {
  color: #777 !important;
  text-decoration: underline;
}

.hover {
  cursor: pointer;
}
</style>