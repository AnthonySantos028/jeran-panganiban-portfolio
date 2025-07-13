<template>
<!-- component -->
<div class="bg-[#222222] dark:bg-[#E9F1FA]" >
<div class="container bg-[#222222] dark:bg-[#E9F1FA] mx-auto w-full h-full">
      <!-- <h1 class="text-3xl font-bold mb-10 flex items-center gap-2 py-4 text-white text-center">
      📅 Work Experience & Education Timeline
    </h1> -->
  <div class="relative  wrap overflow-hidden p-10 h-full">
    <div class="border-2-2 absolute border-opacity-20 border-[#169976] h-full border" style="left: 50%"></div>
    <!-- timeline card-->
    <TimelineCard v-for="(item, index) in timelineData" :key="index" :item="item" :index="index" />

  </div>
</div>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import TimelineCard from '@/components/TimelineCard.vue';
import TimelineCard from '../components/TimelineCard.vue'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const timelineData = [
  {
    title: 'BACHELOR OF SCIENCE IN INFORMATION SYSTEMS',
    company: 'AMA Computer Learning Center College of Taytay',
    date: '2021 -  2025',
    description:`
      I proudly graduated with a Bachelor of Science in Information Systems, earning the highest Latin honor, Summa Cum Laude, with a GWA of 1.15. Throughout my academic journey, I consistently strived for excellence — not only in my coursework but also in extracurricular competitions and recognition programs.<br><br>

      🏅 <strong>Achievements:</strong><br>
      🥇 Summa Cum Laude – Class of 2025<br>
      🥇 Programmer of the Year – 2025<br>
      🏆 Academic Festival 2025 Programming Contest – Champion<br>
      🏆 Academic Festival 2024 Programming Contest – Champion<br>
      🥈 Academic Festival 2023 C++ Programming Contest – 1st Runner-Up<br>
      🥈 Academic Festival 2023 Web Design Contest – 1st Runner-Up<br>
      🥇 Best in Computer Networking 1 – 2023<br>
      🥇 Computer Programming Excellence Award – 2023
    `,
    bgColor: 'bg-blue-400 text-white',
    certificates: "documents/certificates.pdf",
    icon: '🎓'
  },
  {
    title: 'FULL STACK WEB DEVELOPER INTERN',
    company: 'Circuit Solutions Inc.',
    tools: 'Vue, Laravel, Git, MySQL, Tailwind CSS,Bootstrap, Vuetify, Python',
    date: 'July 2024 - November 2024',
    description: `👩‍💻
      During my college internship, I worked as a Full-Stack Web Developer, where I was entrusted with building and maintaining web applications using Vue.js for the frontend and Laravel for the backend API. Over the course of 500 hours, I gained valuable real-world experience by developing a full-stack web application from the ground up, enhancing existing systems, fixing bugs, and providing technical support to employees when needed. This hands-on role allowed me to sharpen my problem-solving skills, write clean and efficient code, and collaborate effectively in a professional development environment. The experience solidified my passion for web development and equipped me with the practical skills needed to contribute meaningfully to any tech team.     `,
    bgColor: 'bg-gray-100 text-black',
    icon: '💼'
  },
  {
    title: 'ICT STRAND SHS',
    company: 'AMA Computer Learning Center College of Taytay',
    // tools: 'HTML, CSS, JavaScript, PHP, MySQL, Laravel, Vue.js',
    date: '2018 - 2020',
    description: `
      I pursued the ICT strand during my senior high school education, where I was first introduced to the fundamentals of programming through our Java-based curriculum. As part of our On-the-Job Training (OJT) program, I had the opportunity to intern at the Barangay Hall of San Juan near Meralco Village. During my internship, I supported the IT department by assisting with data entry, basic troubleshooting, and various technical tasks. This hands-on experience not only strengthened my understanding of IT operations but also helped me develop a strong work ethic and sense of responsibility. I successfully completed my OJT and graduated with confidence and a solid foundation for my future in tech.
    `,
    bgColor: 'bg-purple-500 text-white',
    icon: '🎓'
  }
]
</script>

<style scoped>
/* Optional: improve timeline line appearance */

</style>

