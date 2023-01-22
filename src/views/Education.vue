<template>
  <div class="education-page">
    <h1 class="education-page__title">Education</h1>
    <ul class="education-page__list">
      <li class="education-page__school" v-for="(school, index) in data" :key="index">
        <EducationEntry :school="school" />
      </li>
    </ul>
  </div>
</template>

<script>
import EducationEntry from '../components/EducationEntry.vue'
import json from '../data/resume.json'

export default {
  name: "EducationVue",
  components: {
    EducationEntry
  },
  data() {
    return {
      data: json.education
    }
  }
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

@media (max-width: 768px) {
  .education-page__title {
    font-size: 1.875rem;
  }
}

.education-page__list {
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .education-page__list {
    flex-direction: column;
  }
}

.education-page__school {
  list-style: none;
  width: 50%;
  padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .education-page__school {
      width: 100%;
    }
  }
</style>