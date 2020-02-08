import Vue from 'vue'
import Router from 'vue-router'
import mComponent from '../components/m-catalog'
import mCart from '../components/m-cart'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: mComponent
        },
        {
            path: '/cart',
            name: 'cart',
            component: mCart,
            props: true
        }
    ]
});

export default router
