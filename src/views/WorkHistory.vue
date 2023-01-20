<template>
  <div class="work-history">
    <div class="work-history__monitor">
      <div class="work-history__monitor-screen">
        <h1 class="work-history__title">Work History<span class="work-history__cursor">|</span></h1>
        <ul class="work-history__list">
          <li class="work-history__job" v-for="(entry, index) in data" :key="index">
            <JobEntry :job="entry" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../data/resume.json";
import JobEntry from "../components/JobEntry.vue"

export default {
  name: 'WorkHistory',
  components: {
    JobEntry,
  },
  data() {
    return {
      data: json.work_history
    }
  }
}
</script>

<style>
.work-history {
  background-color: #dad1be;
  font-family: 'Share Tech Mono', monospace;
  height: calc(100vh - 6.25rem);
  width: calc(100vw - 6.25rem);
  padding: 3.125rem;
  position: relative;
}

.work-history__cursor {
  animation-name: cursor;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes cursor {
  0% {
    color: #000
  }

  50% {
    color: #0f0
  }

  100% {
    color: #000
  }
}

.work-history__monitor {
  background-color: #000;
  border: 0.9375rem inset #7a715e;
  height: calc(100% - 1.875rem);
  color: #0f0;
}

.work-history__monitor-screen {
  box-shadow: inset 0 -23px 25px 0 hsl(0deg 0% 100% / 17%), inset 0 -36px 30px 0 hsl(0deg 0% 100% / 15%), inset 0 -79px 40px 0 hsl(0deg 0% 100% / 10%), 0 2px 1px hsl(0deg 0% 100% / 6%), 0 4px 2px hsl(0deg 0% 100% / 9%), 0 8px 4px hsl(0deg 0% 100% / 9%), 0 16px 8px hsl(0deg 0% 100% / 9%), 0 32px 16px hsl(0deg 0% 100% / 9%);
  height: calc(100% - 3.125rem);
  overflow: auto;
  padding: 0 0 3.75rem 3.75rem;
}

.work-history__title {
  font-size: 3.75rem;
}

.work-history__list {
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.work-history__job {
  list-style: none;
  width: 50%;
}
</style>