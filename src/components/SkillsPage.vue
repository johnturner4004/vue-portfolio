<template>
  <div class="skill">
    <div class='skill__page'>
      <div class='skill__page-inner'>
        <h2>Things I do:</h2>
        <ul class='skill__list'><span class='skill__line'></span>
          <li class='skill__list-item'>Make awesome websites</li><span class='skill__line'></span>
          <li class='skill__list-item'>Develop cool apps</li><span class='skill__line'></span>
          <li class='skill__list-item'>Design fun games</li><span class='skill__line'></span>
          <li class='skill__list-item'>Make 3d Models</li><span class='skill__line'></span>
          <li class='skill__list-item'>Read comic books</li><span class='skill__line'></span>
          <li class='skill__list-item'>Learn new things</li><span class='skill__line'></span>
          <li class='skill__list-item'>Integrate data</li><span class='skill__line'></span>
        </ul>
        <h2>Technologies I work with:</h2>
        <ul class='skill__list'><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>React</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>Javascript</li>
          <li class='skill__list-item skill__list-item-2'>HTML</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>CSS</li>
          <li class='skill__list-item skill__list-item-2'>SASS / SCSS</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>Node</li>
          <li class='skill__list-item skill__list-item-2'>Express</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>C++</li>
          <li class='skill__list-item skill__list-item-2'>C#</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>Java</li>
          <li class='skill__list-item skill__list-item-2'>Python</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>PostgreSQL</li>
          <li class='skill__list-item skill__list-item-2'>Blender</li><span class='skill__line'></span>
          <li class='skill__list-item skill__list-item-2'>Mongoose</li>
          <li class='skill__list-item skill__list-item-2'>MongoDB</li><span class='skill__line'></span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsPage'
}
</script>

<style>
.skill {
  width: 50vw;
}

.skill__page {
  background-color: #eef;
  box-shadow: 0.3125rem 0.3125rem 0.9375rem #000;
  padding: 0 3.125rem;
  transform: rotate(2.5deg);
}

.skill__page-inner {
  border-left: 1px solid #da6a8d;
  margin-left: 3.125rem;
  padding: 3.125rem 0;
  font-family: 'Gochi Hand', cursive;
}

.skill__page-inner h2 {
  line-height: 1.875rem;
  padding-left: 0.3125rem;
}

.skill__list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 1.875rem;
  margin: 0;
}

.skill__list-item {
  line-height: 1.875rem;
  width: 100%;
}

.skill__list-item-2 {
  width: 50%;
}

.skill__line {
  border-bottom: 1px solid #98b0b8;
  margin-left: -8.125rem;
  margin-right: -3.225rem;
  width: 50vw;
  height: 1px;
}
</style>