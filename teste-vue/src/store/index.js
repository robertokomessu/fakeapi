import Vue from 'vue'
import Vuex from 'vuex'

import Auth from '@/containers/auth/store'
import Employee from '@/containers/employee/store'

Vue.use(Vuex)

const modules = {
    Auth,
    Employee
}

export default new Vuex.Store({
    modules
})