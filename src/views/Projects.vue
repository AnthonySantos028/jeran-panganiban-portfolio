<template>
  <section class=" bg-[#222222] dark:bg-[#E9F1FA] py-12 px-4 lg:px-20">
    <h2 class="text-3xl font-bold text-center mb-12 text-white dark:text-black">FEATURED PROJECTS</h2>
<!--project 1-->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-12 mb-32" :data-aos="aosAnimation" >
      <!-- Left: Project Image with Sliding Effect -->
      <div class="w-full lg:w-1/2 max-w-lg shadow-xl rounded-lg overflow-hidden">
        <transition name="slide-fade" mode="out-in">
          <img :key="currentImageIndex" :src="images[currentImageIndex]"  alt="Project Image"
               class="object-cover w-full h-[400px] transition-all duration-1000 transform scale-105">
        </transition>
        
        <!-- <transition name="slide-fade" mode="out-in">
          <img :key="currentImageIndex" src="@/assets/projects/ecommerce/pic1.PNG" alt="Project Image"
               class="object-cover w-full h-[400px] transition-all duration-1000 transform scale-105">
 
        </transition> -->
      </div>

      <!-- Right: Project Description -->
      <div class="w-full lg:w-1/2 space-y-4">
        <h3 class="text-xl font-bold text-teal-600">Web Based E-commerce Platform with 3D PC Builder and Quotation System</h3>
        
        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in techStack[0]" :key="tech" class="px-3 py-1 text-xs rounded-full text-white font-medium"
                :class="techColors[tech] || 'bg-gray-400'">
            {{ tech }}
          </span>
        </div>

        <p class="text-white dark:text-black">
          Developed a comprehensive web-based e-commerce platform for JCPAS (Jay Computer Parts and Accessories Shop),
          a business that previously relied solely on social media for sales. The system includes a fully functional online store,
          allowing customers to browse, customize, and purchase PC components. A standout feature is the interactive 3D PC build system,
          which enables users to visualize their custom builds in real-time and receive instant quotations based on selected components.
          The platform supports three payment methods—Cash on Delivery (COD), Cash on Pickup, and Pay via GCash (integrated using PayMongo).
          It also features an in-house delivery system managed by the company’s own couriers.
          Role-based access is implemented for Admin, Sales Staff, Courier, and Customers to manage tasks efficiently. 
          The application ensures data security, user authentication, and smooth order tracking through RESTful API communication.
        </p>

        <span class="inline-block mt-4 bg-teal-500 text-white px-4 py-1 rounded-full text-sm">Coming soon</span>

      </div>
    </div>
    
<!--project 2-->
    <div class="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 mb-32" :data-aos="'fade-right'">
      <!-- Left: Project Image with Sliding Effect -->
      <div class="w-full lg:w-1/2 max-w-lg shadow-xl rounded-lg overflow-hidden">
        <transition name="slide-fade" mode="out-in">
          <img  src="/public/projects/portfolio/porfoliov1.PNG" alt="Project Image"
               class="object-cover w-full h-[400px] transition-all duration-1000 transform scale-105">
        </transition>
      </div>

      <!-- Right: Project Description -->
      <div class="w-full lg:w-1/2 space-y-4">
        <h3 class="text-xl font-bold text-teal-600">Portfolio Website v1  </h3>
        
        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in techStack[1]" :key="tech" class="px-3 py-1 text-xs rounded-full text-white font-medium"
                :class="techColors[tech] || 'bg-gray-400'">
            {{ tech }}
          </span>
        </div>

        <p class="text-white dark:text-black">
          This project is a personal profile website created during my 3rd year in college as part of our web development coursework. 
          It was built using only HTML, CSS, and JavaScript and is hosted on GitHub Pages. 
          The goal of this website was to showcase basic web design principles, responsive layouts, and client-side scripting using vanilla technologies.
          The site includes sections such as Home, About Me, Resume, Gallery, and Contact, giving visitors a clear overview of my background, skills, and interests.
          Animations, interactive UI elements, and styling were implemented manually with a little bit of bootstrap, highlighting a strong foundation in front-end development fundamentals.
          This project laid the groundwork for my passion in web development and served as my first live deployment experience using Git and GitHub.
        </p>

        <div class="flex gap-4">
          <span class="inline-block bg-teal-500 text-white px-4 py-1 rounded-full text-sm">
            <a href="https://jeran28.github.io/Panganiban_Jeran/" target="_blank">Live Demo</a>
          </span>
          <span class="inline-block bg-gray-800 text-white px-4 py-1 rounded-full text-sm">
            <a href="https://github.com/Jeran28/Panganiban_Jeran" target="_blank" class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Source Code
            </a>
          </span>
        </div>



      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted,  onBeforeUnmount, computed } from 'vue';
import AOS from 'aos'
import 'aos/dist/aos.css'


const techStack = [
  ['VUE.JS',  'JAVASCRIPT', 'HTML', 'THREE.JS', 'CSS', 'TAILWIND',
  'LARAVEL', 'MYSQL', 'DIGITAL OCEAN CLOUD', 'PAYMONGO API'],
  ['HTML','CSS','JAVASCRIPT','BOOTSTRAP']
]

const techColors = {
  'VUE.JS': 'bg-green-500',
  'NUXT.JS': 'bg-emerald-600',
  'THREE.JS': 'bg-blue-600',
  'JAVASCRIPT': 'bg-yellow-400 text-black',
  'HTML': 'bg-orange-500',
  'TAILWIND': 'bg-pink-500',
  'CSS': 'bg-blue-400',
  'BOOTSTRAP': 'bg-purple-600',
  'LARAVEL': 'bg-indigo-500',
  'MYSQL': 'bg-blue-700',
  'DIGITAL OCEAN CLOUD': 'bg-green-700',
  'PAYMONGO API': 'bg-emerald-700',
  'DJANGO CHANNELS': 'bg-green-800',
  'REDIS': 'bg-red-600',
  'POSTGRESQL': 'bg-indigo-800',
  'FIREBASE CLOUD MESSAGING': 'bg-orange-400 text-black'
}

// Image data
const images = [
  'projects/ecommerce/pic1.PNG',
  'projects/ecommerce/pic2.PNG',
  'projects/ecommerce/pic3.PNG',
  'projects/ecommerce/pic4.PNG',
];



const currentImageIndex = ref(0);

// Timer function to change images
const changeImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  AOS.init({ duration: 800, once: true })
  setInterval(changeImage, 5000); // Change image every 3 seconds
  window.addEventListener("resize", updateWindowWidth);

  console.log(images[currentImageIndex.value]);
});

// Track window width
const windowWidth = ref(window.innerWidth);

// Update window width on resize
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};



// Clean up the event listener
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

// Computed property for AOS animation based on screen width
const aosAnimation = computed(() => {
  return windowWidth.value >= 1024 ? "fade-left" : "fade-right"; // 1024px is commonly used for desktop breakpoint
});
</script>

<style scoped>
/* Sliding effect */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>






