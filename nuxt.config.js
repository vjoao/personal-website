export default {
  target: 'static',
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  router: {
    linkExactActiveClass: 'border-blue-500'
  }
};
