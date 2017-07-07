import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default (activeUserSlug) => {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                name: 'home',
                path: '/',
                component: require('./pages/FrontPage.vue')
                // resolve => require(['./pages/FrontPage.vue'], resolve)
            },
            {
                name: 'user',
                path: '/user/:userID',
                component: require('./pages/User.vue')
            },
            {
                name: 'search',
                path: '/search',
                component: require('./pages/Search.vue')
            },
            {
                name: 'post',
                path: '/post',
                component: require('./pages/Post.vue')
            },
            {
                name: 'tag',
                path: '/tag/:tagID/:reference?',
                component: require('./pages/Tag.vue')
            }
        ]
    });
};
