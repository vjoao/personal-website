<template>
  <div class="container p-8 sm:p-8 lg:p-24">
    <span class="text-5xl text-white">
      Wanna reach out?

      <p class="text-xl text-gray-500 container lg:w-3/5 sm:w-screen mb-8">
        You can find me in the following links:
      </p>
    </span>
    <div class="flex flex-row justify-between lg:w-1/3 sm:w-2/3">
      <a @click="onContactClick('linkedin')" href="https://www.linkedin.com/in/vjoao/" target="_blank">
        <svg class="h-8 w-8 text-gray-500 hover:text-blue-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
      </a>
      <a @click="onContactClick('github')" href="https://github.com/vjoao" target="_blank">
        <svg class="h-8 w-8 text-gray-500 hover:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      </a>
      <a @click="onContactClick('instagram')" href="https://www.instagram.com/viicmota/" target="_blank">
        <svg class="h-8 w-8 text-gray-500 hover:text-purple-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
      </a>
      <a @click="onContactClick('twitter')" href="https://twitter.com/vmjoa0" target="_blank">
        <svg class="h-8 w-8 text-gray-500 hover:text-blue-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$fire.analytics.setCurrentScreen('contact');
    this.$fire.analytics.logEvent('screen_view');
  },
  methods: {
    onContactClick(contact) {
      this.$fire.analytics.logEvent('contact_click', {
        contact
      });
    }
  }
}
</script>
