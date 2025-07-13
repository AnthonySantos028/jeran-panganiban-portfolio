<template>
  <!-- Navbar -->
    <NavBar />
  <!-- Main Content -->
  <div class="pt-20 ">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';




</script>
