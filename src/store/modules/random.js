const state = {
  name: {}
}

const getters = {
  randomName: (state) => state.name
}

const actions = {
  doRandom ({commit, getters}) {
    commit('setRandomName', getters.forenames[Math.floor(Math.random() * getters.forenames.length)])
  }
}

const mutations = {
  setRandomName (state, name) {
    state.name = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}