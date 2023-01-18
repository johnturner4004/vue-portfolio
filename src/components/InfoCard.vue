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
    <span class="info-card__holes"></span>
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
  padding: 1.875rem 1.875rem 3.75rem 1.875rem;
}

.info-card__info {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.125rem;
  border-bottom: 1px solid #000;
}

.info-card__label {
  font-size: 0.625rem;
}

.info-card__holes {
  border-top: 1.875rem solid transparent;
  border-left: 450px solid transparent;
  position: relative;
  width: 450px;
  padding-top: 1.875rem;
  content: "";
}

.info-card__holes:before,
.info-card__holes:after {
  content: "";
  position: absolute;
  bottom: -1.25rem;
  box-shadow: inset 0.3125rem 0.3125rem 0.9375rem #000;
  background-color: #fff;
  height: 1.875rem;
  width: 1.875rem;
  border-radius: 50%;
}

.info-card__holes:before {
  left: -292.5px;
}

.info-card__holes:after {
  right: 157.5px;
}
</style>