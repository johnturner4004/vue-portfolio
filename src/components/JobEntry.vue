<template>
  <h2 class="job-entry__company">{{ job.company }}</h2>
  <p class="job-entry__date">{{ start_date }} - {{ end_date }}</p>
  <p class="job-entry__title">{{ job.title }}</p>
  <ul class="job-entry__list" v-if="job.description" >
    <li class="job-entry__description" v-for="(item, index) in job.description" :key="index">{{ item }}</li>
  </ul>
  <ul class="job-entry__list" v-else >
    <li class="job-entry__description" v-for="(item, count) in job.project" :key="count">{{ item.name }}
      <ul class="job-entry__list">
        <li class="job-entry__description" v-for="(description, number) in item.description" :key="number">{{ description }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
  import moment from 'moment';
  let start_date;
  let end_date;
  
  export default {
    name: 'JobEntry',
    props: [
      'job'
    ],
    setup(props) {
      start_date = moment(props.job.start_date, 'MM/YYYY').format("MMM YYYY");
      end_date = props.job.end_date === 'present' ? 'Present' : moment(props.job.end_date, 'MM/YYYY').format("MMM YYYY");
    },
    data() {
      return {
        start_date,
        end_date
      }
    }
  }
</script>

<style scoped>
  .job-entry__company {
    font-size: 2rem;
  }

  .job-entry__date {
    font-size: 1.5rem;
  }

  .job-entry__title {
    font-size: 1.5rem;
  }

  .job-entry__list {
    margin: 0;
    padding: 0;
  }

  .job-entry__description {
    font-size: 1.25rem;
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
</style>