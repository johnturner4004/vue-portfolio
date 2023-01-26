<template>
  <span @click="handleClick" class="material-symbols-outlined nav__button">menu</span>
  <nav :class="{'open-mobile': showMobile, 'close-mobile': !showMobile}">
    <router-link to="/vue/"><span class="nav__name">John Turner</span></router-link>
    <router-link to="/vue/work-history"><span class="nav__link">Work History</span></router-link>
    <router-link to="/vue/education"><span class="nav__link">Education</span></router-link>
    <router-link to="/vue/about"><span class="nav__link">About</span></router-link>
  </nav>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';
const showMobile = ref(false);

function handleClick() {
  showMobile.value = !showMobile.value;
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.125rem;
  z-index: 3;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 5px 10px #222;
  padding-left: 3.125rem;
  padding-top: 0.25rem;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .close-mobile {
    opacity: 0;
    height: 0;
    display: none;
  }

  .open-mobile {
    opacity: 1;
    height: 100%;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 1rem;
  }
}

.nav__button {
  position: fixed;
  background-color: #fff;
  z-index: 4;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  box-shadow: 0 5px 10px #222;
  border-radius: 0.5rem;
}

@media (min-width: 768px) {
  .nav__button {
    display: none;
  }
}

.nav__name,
.nav__link {
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  box-shadow: inset 0 0 10px 10px #fff;
  color: #000;
}

.nav__name:hover,
.nav__link:hover {
  background-color: #44444480;
}

.nav__name {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  padding-right: 0.9375rem;
}

.nav__link {
  padding: 0 0.9375rem;
  border-left: 1px solid #444;
  font-size: 1.5rem;
  margin: 0.625rem 0;
}

nav a {
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
</style>
