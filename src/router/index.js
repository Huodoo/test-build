import {createWebHashHistory,createRouter} from "vue-router"
export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            name:'test0',
            path:'/',
            component:()=>import('../views/test0.vue')
        },{
            name:'test1',
            path:'/t1',
            component:()=>import('../views/test1.vue')
        },
    ]
})