<template>
  <h2 class="school__name">{{ school.name }}</h2>
  <p class="school__date">{{ start_date }} - {{ end_date }}</p>
  <p class="school__course">{{ school.course }}</p>
  <ul class="school__list">
    <li class="school__description" v-for="(entry, index) in school.description" :key="index">{{ entry }}</li>
  </ul>
</template>

<script>
  import moment from 'moment';

  let start_date;
  let end_date;

  export default {
    name: 'EducationEntry',
    props: [
      'school'
    ],
    setup(props) {
      start_date = moment(props.school.start_date, 'MM/YYYY').format("MMM YYYY");
      end_date = moment(props.school.end_date, 'MM/YYYY').format("MMM YYYY");
    },
    data() {
      return {
        start_date,
        end_date
      }
    }
  }
</script>

<style>
.school__name {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .school__name {
    font-size: 1.5rem;
  }
}

.school__date,
.school__course {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .school__date,
  .school__course {
    font-size: 1.25rem;
  }
}

.school__list {
  padding: 0;
  margin: 0;
}

.school__description {
  font-size: 1.25rem;
  margin-left: 1.5rem;
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .school__description {
    font-size: 1rem;
  }
}
</style>