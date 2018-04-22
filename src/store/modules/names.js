import namedataApi from '../../api/namedata'
import _ from 'lodash'

const state = {
  forenames: [],
  filteredForenames: [],
  filters: {
    minCount: 1000
  }
}

const getters = {
  forenames: (state) => state.filteredForenames,
  minCount: (state) => state.filters.minCount
}

const debouncedFilter = _.debounce((commit) => commit('filter'), 500)

const actions = {
  async loadForenames ({commit}) {
    commit('setForenames', await namedataApi.getForenames())
    commit('filter')
  },

  setMinCount ({commit}, minCount) {
    commit('setMinCount', minCount)

    debouncedFilter(commit)
  }
}

const mutations = {
  setForenames (state, forenames) {
    state.forenames = forenames
  },

  setMinCount (state, minCount) {
    state.filters.minCount = minCount
  },

  filter (state) {
    state.filteredForenames = state.forenames.filter(name => name.total >= state.filters.minCount)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}