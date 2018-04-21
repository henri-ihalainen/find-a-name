import namedataApi from '../../api/namedata'

const state = {
  forenames: [],
  filters: {
    minCount: 1000
  }
}

const getters = {
  forenames: (state) => state.forenames.filter(name => name.total >= state.filters.minCount),
  minCount: (state) => state.filters.minCount
}

const actions = {
  async loadForenames ({commit}) {
    commit('setForenames', await namedataApi.getForenames())
  },

  setMinCount ({commit}, minCount) {
    commit('setMinCount', minCount)
  }
}

const mutations = {
  setForenames (state, forenames) {
    state.forenames = forenames
  },

  setMinCount (state, minCount) {
    state.filters.minCount = minCount
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}