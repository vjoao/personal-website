export default {
  target: 'static',
  modules: ['@nuxtjs/robots', '@nuxtjs/firebase'],
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
  },
  firebase: {
    config: {
      apiKey: "AIzaSyCc_ZxiCvdgoz7SEjynBUgGLBE8I8Y0wCY",
      authDomain: "vnasc-dev.firebaseapp.com",
      databaseURL: "https://vnasc-dev.firebaseio.com",
      projectId: "vnasc-dev",
      storageBucket: "vnasc-dev.appspot.com",
      messagingSenderId: "276859770397",
      appId: "1:276859770397:web:aba3dc775341119232d8f4",
      measurementId: "G-552T1HM19S"
    },
    services: {
      analytics: true
    }
  }
};
