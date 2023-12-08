<template>
  <router-link to="/">home</router-link>
  <router-link :to="{ name: 'About' }">about</router-link>
  <router-view></router-view>

  <button @click="redirect">redirect</button>
  <button @click="back">back</button>
  <button @click="forword">forword</button>
</template>

<script>
export default {
  methods: {
    redirect() {


      this.$router.push({name: 'About'})

    },

    back() {

      this.$router.go(-1);
    },
    forword() {
     
      this.$router.go(1); 
    },
  },
};
</script>
