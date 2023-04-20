import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import main from "@/views/mainContent.vue"
import allNews from "@/views/allNews.vue"
import newsItem from "@/views/newsItem.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/penguinnews',
    name: 'main',
    component: main
  },
  {
    path: '/penguinnews/all-news',
    name: 'allNews',
    component: allNews,
  },
  {
    path: '/penguinnews/:newsTitle',
    name: 'newsItem',
    component: newsItem,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
