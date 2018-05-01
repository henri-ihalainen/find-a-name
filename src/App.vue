<template>
    <div id="app">
        <Random/>
    </div>
</template>

<script>
  import Random from './components/Random.vue'

  export default {
    name: 'app',
    components: {
      Random
    },
    created () {
      this.$store.dispatch('init')
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
