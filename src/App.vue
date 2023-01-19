<template>
  <nav>
    <router-link to="/"><span class="nav__name">John Turner</span></router-link>
    <router-link to="/work-history"><span class="nav__link">Work History</span></router-link>
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
  padding-top: 3.125rem;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.125rem;
  z-index: 3;
  background-color: #fff;
  width: 100vw;
  box-shadow: 0 5px 10px #222;
  padding-left: 3.125rem;
  padding-top: 0.25rem;
}

.nav__name {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  padding-right: 0.9375rem;
  color: #000;
}

.nav__link {
  padding: 0 0.9375rem;
  color: #000;
  border-left: 1px solid #444;
  font-size: 1.5rem;
  margin: 0.625rem 0;
}

nav a {
  text-decoration: none;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
</style>
