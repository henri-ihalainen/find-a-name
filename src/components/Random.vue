<template>
    <div class="random">
        <h1>{{randomName.name}}</h1>
        <h3>{{randomName.total}} kpl</h3>
        <ul>
            <li>Naisia: {{randomName.femaleTotal}} kpl</li>
            <li>Miehiä: {{randomName.maleTotal}} kpl</li>
        </ul>
        <div>
            <button @click="random">Päivitä</button>
        </div>
        <div>
            <ul>
                <li>Nimiä vähintään:</li>
                <li>
                    <input :value="minCount" @input="updateMinCount" type="range" min="0" max="10000" step="100"/>
                </li>
                <li>
                    {{minCount}} kpl
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    name: 'Random',
    computed: {
      ...mapGetters([
        'randomName',
        'minCount'
      ])
    },
    methods: {
      random: function () {
        this.$store.dispatch('doRandom')
      },
      updateMinCount: function (event) {
        console.log(event)
        this.$store.dispatch('setMinCount', event.target.value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
