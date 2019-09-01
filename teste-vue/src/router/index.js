import Vue from "vue";
import Router from "vue-router";

import EmployeeList from "@/components/employee/EmployeeList";
import EmployeeNew from "@/components/employee/EmployeeNew";
import Login from "@/components/login/Login";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Employee",
      component: EmployeeList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/create",
      name: "EmployeeNew",
      component: EmployeeNew,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth') === null || localStorage.getItem('auth') === 'false' ) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
      next()
  }
})

export default router;
