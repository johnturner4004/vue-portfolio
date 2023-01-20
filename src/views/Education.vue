<template>
  <div class="education-page">
    <h1 class="education-page__title">Education</h1>
  </div>
</template>

<script>
  export default {
    name: "EducationVue"
  }
</script>

<style>
@font-face {
  font-family: 'Chalktastic';
  src: url(../assets/fonts/Chalktastic-x1nR.ttf);
}

.education-page {
  padding: 3.125rem;
  background-color: #2b2b2b;
  color: #ebeeec;
  font-family: 'Chalktastic', cursive;
}

.education-page__title {
  font-size: 3.75rem;
}
</style>