import namedataApi from '../../api/namedata'
import _ from 'lodash'

const state = {
  forenames: [],
  filteredForenames: [],
  filters: {
    minCount: 1000,
    femaleNames: false,
    maleNames: false
  }
}

const getters = {
  forenames: (state) => state.filteredForenames,
  minCountFilter: (state) => state.filters.minCount,
  femaleNamesFilter: (state) => state.filters.femaleNames,
  maleNamesFilter: (state) => state.filters.maleNames
}

const debouncedFilter = _.debounce((commit) => commit('filter'), 500)

const actions = {
  async loadForenames ({commit}) {
    commit('setForenames', await namedataApi.getForenames())
    commit('filter')
  },

  setMinCountFilter ({commit}, minCount) {
    commit('setMinCountFilter', minCount)
    debouncedFilter(commit)
  },

  toggleFemaleNamesFilter ({commit}, femaleNames) {
    commit('toggleFemaleNamesFilter', femaleNames)
    commit('filter')
  },

  toggleMaleNamesFilter ({commit}, maleNames) {
    commit('toggleMaleNamesFilter', maleNames)
    commit('filter')
  }
}

const mutations = {
  setForenames (state, forenames) {
    state.forenames = forenames
  },

  setMinCountFilter (state, minCount) {
    state.filters.minCount = minCount
  },

  toggleFemaleNamesFilter (state) {
    state.filters.femaleNames = !state.filters.femaleNames
  },

  toggleMaleNamesFilter (state) {
    state.filters.maleNames = !state.filters.maleNames
  },

  filter (state) {
    state.filteredForenames = state.forenames
      .filter(name => name.total >= state.filters.minCount)
      .filter(name => !state.filters.femaleNames || name.femaleTotal > 0)
      .filter(name => !state.filters.maleNames || name.maleTotal > 0)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}