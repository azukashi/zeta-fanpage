import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router';
import NProgress from 'nprogress';

import Home from '../pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeResolve((to: RouteLocationNormalized, from, next: NavigationGuardNext) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
