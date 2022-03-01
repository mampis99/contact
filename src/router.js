import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/contact",
    name: "contact",
    component: () => import("./components/ContactList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddContact")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;