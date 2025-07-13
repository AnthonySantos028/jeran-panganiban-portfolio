<template>
    <div class="min-h-screen bg-[#222222] dark:bg-[#E9F1FA] ">
      <div class="container mx-auto px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-between ">
      <!-- <div class="container mx-auto px-4 md:px-8 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen"> -->

        <!-- Left side content -->
        <div class="flex flex-col md:pt-[5rem] space-y-4 text-center md:text-left mb-8 md:mb-0">
          <img 
            src="/public/images/homepageLogo.png" 
            alt="Profile Logo" 
            class=" w-64 md:w-80 lg:w-96 md:hidden mx-auto "
          />
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-white dark:text-[#222222]">
            Hi, I'm Jeran
          </h1>
          <h2 class="text-3xl lg:text-5xl font-bold text-[#1DCD9F] h-20 " ref="typewriterElement"></h2>

          <p class="text-gray-300 max-w-md dark:text-[#222222]">
            Passionate about creating elegant solutions to complex problems
          </p>
          <div class="flex gap-4 justify-center md:justify-start">
            <a href="documents/cv.pdf"  target="_blank" class="bg-[#169976] hover:bg-white hover:text-[#222222] transition-colors text-white px-6 py-2 rounded-lg ">
              View CV
            </a>
            <router-link to="/about" class="border border-white text-white dark:text-black dark:border-black px-6 py-2 rounded-lg hover:bg-white hover:text-[#222222] transition-colors">
              Know More
            </router-link>
          </div>
        </div>

        <!-- Right side content -->
        <div class="flex items-center justify-center w-full md:w-1/2 relative ">
          <img 
            src="/public/images/homepageLogo.png" 
            alt="Profile Logo" 
            class=" w-64 md:w-80 lg:w-96 hidden md:block"
          />
          <!-- Tech Icons -->
          <div
            v-for="(icon, index) in techIcons"
            :key="index"
            class="absolute hidden lg:block"
            :style="getIconStyle(index)"
          >
            <img
              :src="icon.src"
              :alt="icon.name"
              class="w-14 h-14 animate-float"
            />
          </div>
        </div>

      </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Typewriter from 'typewriter-effect/dist/core'

const typewriterElement = ref(null)

onMounted(() => {
  const typewriter = new Typewriter(typewriterElement.value, {
    loop: true,
    delay: 35,
  })

  typewriter
    .typeString('Full Stack Web Developer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Backend Developer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('IT Graduate.')
    .pauseFor(1500)
    .start()
})

const techIcons = [
  { name: 'Vue', src: 'icons/vue.png' },
  { name: 'Tailwind', src: 'icons/laravel.png' },
  { name: 'Laravel', src: 'icons/git.png' },
  { name: 'HTML', src: 'icons/python.png' },
  { name: 'JS', src: 'icons/sql.png' },
    { name: 'Tailwind', src: 'icons/tailwind.png' },

];

const getIconStyle = (index) => {
  const angle = (index / techIcons.length) * 360;
  const radius = 260; // adjust distance from laptop
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);
  return {
    transform: `translate(${x}px, ${y}px)`,
    top: '50%',
    left: '50%',
  };
};
</script>

<style scoped>
/* @keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
} */

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}


</style>