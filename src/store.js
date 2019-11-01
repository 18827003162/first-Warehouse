import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:localStorage.getItem('count')
  },
  mutations: {
    count(state,num){
      localStorage.setItem('count',num)
      state.count = num
    }
  },
  actions: {
    setCount(context,num){
      context.commit('count',num)
    }
  }
})


export default store