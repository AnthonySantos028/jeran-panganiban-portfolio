import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'

import '@/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// AOS import
import AOS from 'aos'
import 'aos/dist/aos.css'

// Create app
const app = createApp(App)

// Initialize AOS globally
AOS.init()

app.use(router)
app.mount('#app')
