import { createRouter, createWebHistory } from "vue-router";
import OrdersAppVue from './components/OrdersApp.vue';
import ProfileApp from './components/Home/ProfileApp.vue';
import DetailCard from './components/DetailCard.vue';
import RegistApp from './components/auth/RegistApp.vue';
import LoginApp from './components/auth/LoginApp.vue';

import ListTovars from "./components/ListTovars.vue";
const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {path: "",component: ListTovars},
        {path: "/tovars",component: ListTovars},
        {path: "/tovars/:id",component: DetailCard, name: 'tovar'},
        {path: "/profile/:name?",component: ProfileApp, name: 'profile'},
        {path: "/orders",component: OrdersAppVue},
        {path: "/auth",component: RegistApp, name: 'auth'},
        {path: "/login",component: LoginApp, name: 'login'},
    ]
})
export default router