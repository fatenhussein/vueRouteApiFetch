<template>
  <h1>Job details</h1>

  <p>job id {{ id }}</p>

  <div v-if="job">
    <h5>{{ job.title }}</h5>
  </div>
</template>
<script>
export default {
  props: ['id'],

  data() {
    return {
      job: null,
    };
  },

  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.job = data;

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
