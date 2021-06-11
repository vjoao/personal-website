export default {
  target: 'static',
  modules: ['@nuxtjs/robots', '@nuxtjs/gtm'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/main.css'],
  router: {
    linkExactActiveClass: 'border-blue-500'
  },
  gtm: {
    id: 'G-552T1HM19S',
    pageTracking: true,
  },
  googleFonts: {
    families: {
      'Baloo+Tammudu+2': true
    },
    display: 'block'
  }
};
