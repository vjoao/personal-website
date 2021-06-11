<template>
  <div class="container center p-8 sm:p-8 lg:p-24">
    <span class="text-5xl text-white">
      Hi, I'm Victor Nascimento
    </span>
    <div>
      <p class="text-xl text-gray-500 container lg:w-4/5 sm:w-screen mb-8">
        A generalist software engineer with focus on web technologies.
        I currently work as a Lead Front-end Engineer at <a href="https://www.warnermedia.com" target="_blank" class="text-gray-300">WarnerMedia</a>,
        building software used by millions in their living rooms.
      </p>
      <p class="text-xl text-gray-500 container lg:w-4/5 sm:w-screen">
        My non-exhaustive list of skills includes <span class="text-gray-300">{{ skillList }}</span> and I had contact with {{ extraSkillList }}. I'm also interested in <span class="text-gray-300">{{ hobbyList }}</span> in my free time.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Victor Nascimento - Personal Website',
      meta: [
        {
          name: 'Victor Nascimento',
          content: 'Personal website of Victor Nascimento.'
        },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    }
  },
  mounted() {
    this.$fire.analytics.setCurrentScreen('home');
    this.$fire.analytics.logEvent('screen_view');
  },
  data() {
    return {
      skills: [
        'Javascript',
        'Typescript',
        'Vue.js',
        'React',
        'WebGL',
        'node.js',
        'OTT / Streaming'
      ],
      extraSkills: [
        'IoT',
        'Cybersecurity',
        'Electronics',
        'Embedded systems',
        'PHP / Laravel',
        'Angular',
        'Java',
        'C++ / C#'
      ],
      hobbies: [
        'Playing guitar',
        'Video games',
        'Competitive programming',
        'Rubiks Cube'
      ]
    }
  },
  computed: {
    skillList() {
      return this.skills.join(', ');
    },
    extraSkillList() {
      return this.extraSkills.join(', ');
    },
    hobbyList() {
      return this.hobbies.join(', ');
    }
  },
}
</script>