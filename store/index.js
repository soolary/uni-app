import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    shopCart: []
  },
  mutations: {
		addCart(state,id){
			console.log('test',id);
		}
  }
})

export default store