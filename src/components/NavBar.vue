<template>
  <nav class="bg-[#169976] dark:bg-[#00ABE4] shadow-md fixed top-0 left-0 w-full z-50">
    <div class="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">

      <!-- Logo aligned -->
      <div class="flex-shrink-0 mr-4">
        <img src="/public/images/portfolioLogo.png" class="h-12 w-auto" alt="Portfolio Logo">
      </div>

      <!-- Nav Links -->
      <div class="hidden md:flex space-x-6 ml-auto text-white mx-4">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/exp">Education</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <!-- Dark Mode Toggle & Icons -->
      <div class="flex items-center space-x-2 text-white px-4">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
        <button @click="toggleDarkMode" class="w-12 h-6 rounded-full bg-gray-300 flex items-center transition-all duration-300 focus:outline-none" :class="{ 'bg-gray-600': darkMode }">
          <span class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300" :class="{ 'translate-x-6': darkMode }"></span>
        </button>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
        </svg>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden ml-auto">
        <button @click="toggleMenu" type="button" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out text-white"
      :class="isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
      <router-link to="/" class="block py-2" @click="closeMenu">Home</router-link>
      <router-link to="/about" class="block py-2" @click="closeMenu">About</router-link>
      <router-link to="/exp" class="block py-2" @click="closeMenu">Education</router-link>
      <router-link to="/skills" class="block py-2" @click="closeMenu">Skills</router-link>
      <router-link to="/projects" class="block py-2" @click="closeMenu">Projects</router-link>
      <router-link to="/contact" class="block py-2" @click="closeMenu">Contact</router-link>
    </div>
  </nav>
</template>
<script setup>
import { ref,watch } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

const darkMode = ref(false);
const isDarkMode = ref(false);
// Toggle dark mode on click
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');  // Enable dark mode
  } else {
    document.documentElement.classList.remove('dark'); // Disable dark mode
  }
};

// Toggle the mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close the menu
const closeMenu = () => {
  isMenuOpen.value = false;
};


// Watch for route changes to close the menu
watch(() => route.path, () => {
  isMenuOpen.value = false;
});
</script>