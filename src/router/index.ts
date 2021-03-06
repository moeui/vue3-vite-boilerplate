import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/dome',
        component: () => import('../views/dome.vue'),
        meta: { title: 'dome' }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
