<template>
  <div id="article-toc">
    <h3 class="text-uppercase font-oswald mb-2" style="font-weight: 700">
      Table of contents
    </h3>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="heading in headings"
        :key="heading.id"
        class="pa-0"
        dense
      >
        <div
          class="font-lato toc-item pl-6 hover"
          :class="{ 'toc-item-active': heading.id === activeHeading }"
          @click="scrollTo(heading.id)"
          style="font-size: 14px"
        >
          {{ heading.innerText }}
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useGoTo } from "vuetify";

export default {
  props: {
    headings: {
      type: NodeList,
      required: true,
    },
    activeHeading: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { goTo } = useGoTo(); // Vuetify scroll helper
    const toc = ref(null);

    // const scrollTo = (id) => {
    //   goTo(`#${id}`, { offset: 80 });
    // };
    const scrollTo = (id) => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        const headerOffset = 80; // Offset for sticky header height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    onMounted(() => {
      const disclaimer = document.querySelector("#disclaimer");
      const tocElement = toc.value;

      if (disclaimer && tocElement) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              tocElement.classList.remove("article-toc-sticky");
              return;
            }
            tocElement.classList.add("article-toc-sticky");
          },
          {
            root: null,
            threshold: 0,
          }
        );
        observer.observe(disclaimer);
      }
    });

    return {
      toc,
      scrollTo,
    };
  },
};
</script>

<style scoped>
.article-toc-sticky {
  position: fixed;
}
</style>