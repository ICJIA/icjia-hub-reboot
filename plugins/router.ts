import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router;

  // Override the scrollBehavior
  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const headerHeight = 72; // Height of the header in pixels
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const scrollToPosition = elementPosition - headerHeight;

        return window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth',
        });
      }
      return false;
    }
    return { left: 0, top: 0 };
  };

  // Intercept anchor clicks for #hash links
  nuxtApp.vueApp.directive('prevent-reload', {
    mounted(el) {
      el.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
          event.preventDefault();
          const hash = target.getAttribute('href');
          if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              const headerHeight = 72; // Height of the header in pixels
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              const scrollToPosition = elementPosition - headerHeight;

              window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth',
              });
            }
          }
        }
      });
    },
  });
});
