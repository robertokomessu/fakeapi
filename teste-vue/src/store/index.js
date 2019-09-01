import Vue from "vue";
import Vuex from "vuex";

import Login from "@/components/login/store";
import Employee from "@/components/employee/store";

Vue.use(Vuex);

const modules = {
  Login,
  Employee
};

export default new Vuex.Store({
  modules
});
