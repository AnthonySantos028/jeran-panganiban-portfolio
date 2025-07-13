import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import Skills from '@/views/Skills.vue';
import Experience from '@/views/EducationAndExp.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: AboutMe },
  { path: '/exp', name: 'Experience', component: Experience },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },

    // Add more routes here as needed       
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
}); 

export default router;