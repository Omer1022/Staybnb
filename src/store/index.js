import { createStore } from 'vuex'
import stayStore from './modules/stay-moduel'
import labelStore from './modules/labels-moduel'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayStore,
    labelStore
  },
})

export default store
