import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/code",
      name: "Code",
      data:{
        plot: "really"
      },
      component: () =>
      import("./views/Code.vue")
    },
    {
      path: "/menu",
      name: "menu",
      component: () =>
      import("./views/Menu.vue")
    }
]
});