export default {
  target: 'static',
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/main.css'],
  router: {
    linkExactActiveClass: 'border-blue-500'
  },
  googleFonts: {
    families: {
      'Baloo+Tammudu+2': true
    },
    display: 'block'
  }
};
