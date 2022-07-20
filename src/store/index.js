import { createStore } from 'vuex'
import stayStore from './modules/stay-moduel'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayStore,
  },
})

export default store
