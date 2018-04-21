import Vuex from 'vuex'
import Vue from 'vue'
import names from './modules/names'
import random from './modules/random'

Vue.use(Vuex)

const actions = {
  async init ({dispatch}) {
    await dispatch('loadForenames')
    dispatch('doRandom')
  }
}

export default new Vuex.Store({
  actions,
  modules: {
    names,
    random
  }
})