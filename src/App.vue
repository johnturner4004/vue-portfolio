<template>
  <span class="material-symbols-outlined">menu</span>
  <nav>
    <router-link to="/"><span class="nav__name">John Turner</span></router-link>
    <router-link to="/work-history"><span class="nav__link">Work History</span></router-link>
    <router-link to="/education"><span class="nav__link">Education</span></router-link>
    <router-link to="/about"><span class="nav__link">About</span></router-link>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
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

.material-symbols-outlined {
  padding: 0.25rem;
  box-shadow: 0 5px 10px #222;
  border-radius: 0.25rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 4;
  background-color: #fff;
}

@media (min-width: 768px) {
  .material-symbols-outlined {
    display: none;
  }
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.125rem;
  z-index: 3;
  background-color: #fff;
  box-shadow: 0 5px 10px #222;
  padding-left: 3.125rem;
  padding-top: 0.25rem;
  width: 100vw;
}

@media (max-width: 768px) {
  nav {
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
