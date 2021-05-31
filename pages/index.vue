<template>
  <div class="container center p-24">
    <span class="text-5xl text-white">
      Hi, I'm Victor Nascimento
    </span>
    <div>
      <p class="text-xl text-gray-500 container lg:w-4/5 sm:w-screen mb-8">
        A generalist software engineer with focus on web technologies.
        I currently work as a Lead Front-end Engineer at <a href="https://www.warnermedia.com" target="_blank" class="text-gray-300">WarnerMedia</a>,
        building software used by millions in their living room.
      </p>
      <p class="text-xl text-gray-500 container lg:w-4/5 sm:w-screen">
        My skillset includes <span class="text-gray-300">{{ skillList }}</span> but I had contact with {{ extraSkillList }}. I'm also interested in <span class="text-gray-300">{{ hobbyList }}</span>.
      </p>
    </div>
  </div>
</template>
<script>
export default {
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
        'PHP / Laravel'
      ],
      hobbies: [
        'Playing guitar',
        'Video games',
        'Competitive programming'
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
  }
}
</script>