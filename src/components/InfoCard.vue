<template>
  <div class="info-card">
    <p class="info-card__info">John Turner</p>
    <p class="info-card__label">Name</p>
    <p class="info-card__info">johnturner4004@gmail.com</p>
    <p class="info-card__label">Email</p>
    <p class="info-card__info">612.203.0666</p>
    <p class="info-card__label">Phone</p>
    <p class="info-card__info">17695 Exira Ave W</p>
    <p class="info-card__label">Address</p>
    <p class="info-card__info">Farmington, MN 55024</p>
    <p class="info-card__label">City, State Zip</p>
  </div>
</template>

<script>
  export default {
    name: 'InfoCard'
  }
</script>

<style scoped>
.info-card {
  border-radius: 0.9375rem;
  box-shadow: 0.3125rem 0.3125rem 0.9375rem #000;
  margin: 1.875rem 1.875rem 1.875rem 5.625rem;
  padding: 1.875rem;
}

.info-card__info {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.125rem;
  border-bottom: 1px solid #000;
}

.info-card__label {
  font-size: 0.625rem;
}
</style>