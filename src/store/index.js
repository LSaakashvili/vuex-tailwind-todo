import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Store({
    modules: {
        todos
    }
})
