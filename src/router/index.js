import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import ManagerEditView from "../views/ManagerEditView.vue"
import ManagerHomeView from "../views/ManagerHomeView.vue"
import SignupView from "../views/SignupView.vue"
import ArticleIndexView from "../views/ArticleIndexView.vue"
import ArticleShowView from "../views/ArticleShowView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/manager",
    name: "manager",
    component: ManagerHomeView,
  },
  {
    path: "/edit",
    name: "edit",
    component: ManagerEditView,
  },
  {
    path: "/index",
    name: "index",
    component: ArticleIndexView,
  },
  {
    path: "/show",
    name: "show",
    component: ArticleShowView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
