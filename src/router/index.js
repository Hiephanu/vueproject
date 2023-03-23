import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import AboutPage from "@/views/AboutPage.vue"
import loginPage from "@/views/loginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import TransactionPage from "@/views/TransactionPage.vue"
import TransactionMain from "@/components/mainfunction/transactions/TransactionMain.vue"
import DasdBoardMain from "@/components/mainfunction/DasdBoard/DasdBoardMain"
import ReportMain from "@/components/mainfunction/report/ReportMain.vue"
import SettingAccount from "@/components/mainfunction/Setting/SettingAccount.vue"
import logoutPage from '@/views/logoutPage.vue'
import { projectAuth } from "@/config/firebase"
const requireAuth=(to,from,next)=>{
    const user = projectAuth.currentUser
    console.log("Hi" ,user);
    if(!user) next({
        path:'/loginPage',
        component:loginPage,
        meta:{
            layout:'LoginLayout'
        }
    });
    else next();
}
const routes =[
    {
        path:'/',
        component:HomePage,
        meta:{
            layout:'DefaultLayout'
        }
    },
    {
        path:'/AboutPage',
        component:AboutPage
    },
    {
        path:'/loginPage',
        component:loginPage,
        meta:{
            layout:'LoginLayout'
        }
    },
    {
        path:'/RegisterPage',
        component:RegisterPage,
        meta:{
            layout:'Loginlayout'
        }
    },
    {
        path:'/TransactionPage',
        component:TransactionPage,
        meta:{
            layout:'MainLayout'
        }
    },
    {
        path:'/TransactionMain',
        component:TransactionMain,
        meta:{
            layout:'MainLayout'
        },
        beforeEnter:requireAuth
    },
    {
        path:'/DasdBoardMain',
        component:DasdBoardMain,
        meta:{
            layout:'MainLayout'
        },

    },
    {
        path:'/ReportMain',
        component:ReportMain,
        meta:{
            layout:'MainLayout'
        }
    },
    {
        path:'/SettingAccount',
        component:SettingAccount,
        meta:{
            layout:'SettingLayout'
        }
    },
    {
        path:'/logoutPage',
        component:logoutPage,
        meta:{
            layout:'Loginlayout'
        }
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router