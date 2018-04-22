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
                    <input :value="minCountFilter" @input="updateMinCountFilter" type="range" min="0" max="10000" step="100"/>
                </li>
                <li>
                    {{minCountFilter}} kpl
                </li>
            </ul>
            <ul>
                <li>
                    Naisten nimiä
                </li>
                <li>
                    <input :checked="femaleNamesFilter" @click="toggleFemaleNamesFilter" type="checkbox" />
                </li>
                <li>
                    Miesten nimiä
                </li>
                <li>
                    <input :checked="maleNamesFilter" @click="toggleMaleNamesFilter" type="checkbox" />
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
        'minCountFilter',
        'femaleNamesFilter',
        'maleNamesFilter'
      ])
    },
    methods: {
      random: function () {
        this.$store.dispatch('doRandom')
      },
      updateMinCountFilter: function (event) {
        this.$store.dispatch('setMinCountFilter', event.target.value)
      },
      toggleFemaleNamesFilter: function () {
        this.$store.dispatch('toggleFemaleNamesFilter')
      },
      toggleMaleNamesFilter: function () {
        this.$store.dispatch('toggleMaleNamesFilter')
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
