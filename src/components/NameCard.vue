<template>
  <div class="name-card">
    <div class="name-card__border">
      <p class="name-card__line-1">HELLO</p>
      <p class="name-card__line-2">my name is</p>
      <h1 class="name-card__line-3">John</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NameCard'
}
</script>

<style scoped>
.name-card {
  padding: 3.125rem;
  text-align: center;
}

@media (max-width: 768px) {
  .name-card {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
  }
}

.name-card__border {
  background-color: #0000ff;
  color: #fff;
  max-width: 450px;
  width: 50vw;
  border-radius: 1.25rem;
  padding: .625rem;
  box-shadow: .3rem .3rem 1rem #000;
  transform: rotate(-15deg);
}

@media (max-width: 768px) {
  .name-card__border {
    width: 100vw;
  }
}
.name-card__line-1 {
  font-size: 3.125rem;
  font-weight: 700;
}

.name-card__line-2 {
  font-size: 2rem;
  line-height: 2rem;
}

.name-card__line-3 {
  font-family: 'Gochi Hand', cursive;
  font-size: 6.25rem;
  margin-top: .625rem;
  background-color: #fff;
  color: #000;
  border-radius: 1.25rem;
  padding: .7rem 0;
  font-weight: 800;
  }
</style>