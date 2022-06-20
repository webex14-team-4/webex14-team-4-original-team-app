import { createRouter, createWebHistory } from "vue-router"
import TopPageView from "../views/TopPageView.vue"

import LoginView from "../views/LoginView.vue"
import ManagerEditView from "../views/ManagerEditView.vue"
import ManagerHomeView from "../views/ManagerHomeView.vue"
import SignupView from "../views/SignupView.vue"
import ArticleIndexView from "../views/ArticleIndexView.vue"
import ArticleShowView from "../views/ArticleShowView.vue"
import UserTopPageView from "../views/UserTopPageView.vue"

const routes = [
  {
    path: "/:path(.*)*",
    name: "nothing",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: TopPageView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    // 動的インポート -> アクセス時にimportすることで実行時間を短縮できる
    // component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/user/:uid",
    name: "user",
    component: UserTopPageView,
    props: true,
  },
  {
    path: "/manager/:uid",
    name: "manager",
    component: ManagerHomeView,
    props: true,
  },
  {
    path: "/edit/:aid_uid",
    name: "edit",
    component: ManagerEditView,
    props: true,
  },
  {
    path: "/index",
    name: "index",
    component: ArticleIndexView,
  },
  {
    path: "/show:aid",
    name: "show",
    component: ArticleShowView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
