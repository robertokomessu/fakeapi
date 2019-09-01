import Vue from "vue";
import Router from "vue-router";

// Employee containers
import EmployeeList from "@/containers/employee/EmployeeList";
import EmployeeCreate from "@/containers/employee/EmployeeCreate";

// Auth containers
import Login from "@/containers/auth/Login";
import Register from "@/containers/auth/Register";

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
      name: "EmployeeCreate",
      component: EmployeeCreate,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
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
