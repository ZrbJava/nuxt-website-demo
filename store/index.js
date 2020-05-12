import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      isPc: true
    },
    mutations: {
      SET_ISPC(state, data) {
        state.isPc = data
      }
    },
    actions: {}
  })
}

export default store
