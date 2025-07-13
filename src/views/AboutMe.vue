<template>
    <div class="min-h-screen bg-[#222222] dark:bg-[#E9F1FA] py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <!-- Left side - Image -->
                <div class="w-full md:w-1/3">
                    <div class="rounded-lg overflow-hidden shadow-xl">
                        <img src="/public/images/about.jpg" alt="Profile" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                </div>
                
                <!-- Right side - Content -->
                <div class="w-full md:w-2/3 space-y-6">
                    <h1 class="text-4xl font-bold text-white dark:text-black">Jeran Panganiban</h1>
                    <h2 class="text-2xl text-[#1DCD9F] dark:text-[#00ABE4]">Full Stack Developer</h2>
                    <p class="text-white dark:text-black leading-relaxed">
                        Hi, I'm Jeran Anthony Panganiban, a passionate and detail-oriented fresh graduate with a Bachelor of Science in Information Systems from AMA Computer Learning Center College of Taytay.

                        I have hands-on experience as a full-stack web developer, building responsive and user-friendly web applications from the ground up.

                        My expertise lies in using Vue.js for dynamic frontends, Tailwind CSS for modern styling, and Laravel for developing secure and scalable backend APIs.

                        One of my most notable projects is our capstone called Web-Based E-Commerce Platform with a 3D PC Build and Quotation System, where I led the entire development process, from designing the user interface to implementing backend logic and database management using MySQL.

                        I’m also skilled in working with tools like Git, GitHub, Postman, and design platforms like Figma and Canva.

                        I take pride in writing clean, maintainable code and have a strong passion for creating digital solutions that make a real impact.

                        Now that I’ve graduated, I’m eager to bring my skills into a professional environment, grow with a collaborative team, and contribute to meaningful projects.
                    </p>
                        <router-link 
                            to="/contact" 
                            class="mt-4 inline-block px-4 py-2 bg-[#169976] text-white rounded hover:bg-[#147a5f] transition-colors duration-300"
                        >
                            Contact Me
                        </router-link>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>