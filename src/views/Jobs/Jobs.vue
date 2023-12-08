<template>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h3>{{ job.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {(this.jobs = data)
      
      console.log(data)} )
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
