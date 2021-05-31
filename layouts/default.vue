<template>
  <div class="min-h-screen overflow-hidden flex flex-col bg-gray-900">
    <div class="p-6 bg-gray-200 h-100 sticky">
      <div class="flex items-center justify-center mt-6 text-2xl text-gray-600 capitalize dark:text-gray-300">
        <n-link
          to="/"
          class="text-gray-800 dark:text-gray-200 border-b-2 mx-6">
            About
        </n-link>
        <n-link
          to="contact"
          class="text-gray-800 dark:text-gray-200 border-b-2 mx-6">
            Contact
        </n-link>
      </div>
    </div>

    <Nuxt class="flex-grow" />
    <footer class="p-4 bg-gray-800 text-gray-500">
      Made with <svg class="text-red-700 inline"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg> using <a class="text-gray-300 hover:text-gray-400" href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> and
      <a class="text-gray-300 hover:text-gray-400" href="https://tailwindcss.com/" target="_blank">Tailwind.css.</a>

      Find the code to this website on <a class="text-gray-300 hover:text-gray-400" href="https://github.com/vjoao/personal-website" target="_blank">Github</a>.
      </footer>
  </div>
</template>
<style>
.push-right {
  right: -40px;
}
</style>
