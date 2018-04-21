<template>
    <div id="app">
        <HelloWorld/>
    </div>
</template>

<script>
  import Random from './components/Random.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld: Random
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
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
