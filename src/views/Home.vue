<template>
  <div class="home__row">
    <div class="home__column">
      <NameCard />
      <InfoCard />
    </div>
    <div class="home__column">
      <SkillsPage />
    </div>
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue';
import InfoCard from '../components/InfoCard.vue';
import SkillsPage from '../components/SkillsPage.vue';

export default {
  name: 'HomeVue',
  components: {
    NameCard,
    InfoCard,
    SkillsPage,
  }
}
</script>

<style scoped>
.home__row {
  display: flex;
  padding-top: 3.125rem;
}

@media (max-width: 768px) {
  .home__row {
    flex-direction: column;
    width: 100vw;
  }
}
</style>