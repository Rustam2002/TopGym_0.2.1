import VueRouter from 'vue-router'
import mainPage from '@/components/mainPage'
import catalog from '@/components/catalog'
import about from '@/components/about'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: mainPage
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: catalog
        },
        {
            path: '/about-us',
            name: 'about',
            component: about
        }
    ]
})
