import Vue from 'vue'
import Router from 'vue-router'

import Main from "./pages/Main.vue";
import SelectGroup from "./pages/SelectGroup.vue";
import Header from "./pages/Header.vue";

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
      component: SelectGroup
    },
    {
      path: "/header",
      name: "header",
      component: Header
    }
  ]
})
