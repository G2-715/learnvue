import Vue from 'vue'
import Router from 'vue-router'

import Main from "./pages/Main.vue";
import Select from "./pages/Select.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/select",
      name: "select",
      component: Select
    }
  ]
})
