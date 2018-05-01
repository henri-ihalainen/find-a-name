<template>
    <section class="section is-medium has-text-centered">
        <h1 class="title">{{randomName.name}}</h1>
        <div class="has-padding-bottom-20">
            <p class="heading"><strong>Yhteensä</strong></p>
            <p class="subtitle is-5"><strong>{{randomName.total}}</strong></p>
        </div>
        <div class="has-padding-bottom-20">
            <p class="heading">Naisia</p>
            <p class="subtitle is-6"> {{randomName.femaleTotal}}</p>
        </div>
        <div class="has-padding-bottom-20">
            <p class="heading">Miehiä</p>
            <p class="subtitle is-6"> {{randomName.maleTotal}}</p>
        </div>
        <div class="has-padding-bottom-40">
            <a @click="random" class="button is-primary">
                <b-icon icon="refresh"></b-icon>
                <span>Uusi nimi</span>
            </a>
        </div>
        <p class="heading has-padding-bottom-10">Asetukset</p>
        <div class="has-padding-bottom-20">
            <b-checkbox :value="femaleNamesFilter" @input="toggleFemaleNamesFilter">
                Naisten nimiä
            </b-checkbox>

            <b-checkbox :value="maleNamesFilter" @input="toggleMaleNamesFilter">
                Miesten nimiä
            </b-checkbox>

        </div>
        <p>Vähimmäisesiintyvyys</p>
        <div>
            <input :value="minCountFilter"
                   @input="updateMinCountFilter"
                   type="range"
                   min="0"
                   max="10000"
                   step="100"/>
        </div>
        <div>
            {{minCountFilter}} kpl
        </div>
    </section>
</template>

<script>
  import {mapGetters} from 'vuex';

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
        this.$store.dispatch('doRandom');
      },
      updateMinCountFilter: function (event) {
        this.$store.dispatch('setMinCountFilter', event.target.value);
      },
      toggleFemaleNamesFilter: function () {
        this.$store.dispatch('toggleFemaleNamesFilter');
      },
      toggleMaleNamesFilter: function () {
        this.$store.dispatch('toggleMaleNamesFilter');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .has-padding-bottom-10 {
        padding-bottom: 10px;
    }

    .has-padding-bottom-20 {
        padding-bottom: 20px;
    }

    .has-padding-bottom-40 {
        padding-bottom: 40px;
    }
</style>
