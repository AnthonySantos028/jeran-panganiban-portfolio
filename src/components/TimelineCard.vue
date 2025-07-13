<template>
    <div  :data-aos="'fade-up'"
     class="mb-8 flex justify-between items-center w-full right-timeline"
             :class="[
          'flex-col md:flex-row',
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        ]"
     >
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-[#169976] dark:bg-[#00ABE4] shadow-xl w-8 h-8 rounded-full mb-8 md:mb-0">
        <h1 class="mx-auto font-semibold text-lg text-white">{{ item.icon }}</h1>
      </div>
      <div class="order-1 rounded-lg shadow-xl md:w-5/12 px-6 py-4 bg-gray-800 dark:bg-white text-white dark:text-black shadow-lg transform hover:scale-105 transition-transform duration-300" >
        <h3 class="mb-3 font-bold text-xl ">{{ item.title }}</h3>
        <span class="font-semibold">{{ item.company }}</span> - {{ item.date }}
        <p class="text-sm  mb-2">{{ item.tools }}</p>
        <p class="text-sm leading-snug tracking-wide  " v-html="item.description"></p>
        <a v-if="item.certificates" :href="item.certificates" target="_blank" class="mt-4 inline-block px-4 py-2 bg-[#169976] text-white rounded hover:bg-[#147a5f] transition-colors duration-300">
          View Certificates
        </a>


      </div>
    </div>
</template>
<script setup>



defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
})
</script>