import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home.vue'
import list from './list.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:home
    },
    {
        path:'/list',
        component:list
    }
]

const router = new VueRouter({
    routes
})

export default router