<template>
  <div class="home__column">
    <NameCard />
    <InfoCard />
  </div>
  <div class="home__column">
    
  </div>
</template>

<script>
  import NameCard from '../components/NameCard.vue';
  import InfoCard from '../components/InfoCard.vue';

  export default {
    name: 'HomeVue',
    components: {
      NameCard,
      InfoCard,
    }
  }
</script>

