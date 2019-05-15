import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Welcome from './components/Welcome.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/code",
      name: "Code",
      component: () =>
      import("./views/Code.vue")
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: "/menu",
      name: "menu",
      component: () =>
      import("./views/Menu.vue")
    },
]
});
