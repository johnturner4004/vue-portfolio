<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <NameCard />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NameCard from './components/NameCard.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NameCard
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
</style>
