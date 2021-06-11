export default {
  target: 'static',
  modules: ['@nuxtjs/robots'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/google-analytics'],
  css: ['~/assets/main.css'],
  router: {
    linkExactActiveClass: 'border-blue-500'
  },
  googleAnalytics: {
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
