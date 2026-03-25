import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/students",
    name: "students",
    component: () => import("./views/students.vue"),
  },
  {
    path: "/student/add",
    name: "add-student",
    component: () => import("./views/student-add.vue"),
  },
  {
    path: "/student/edit/:id",
    name: "edit-student",
    component: () => import("./views/student-edit.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
