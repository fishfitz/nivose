import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default (activeUserSlug) => {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: require('./pages/FrontPage.vue')
                // resolve => require(['./pages/FrontPage.vue'], resolve)
            },
            {
                path: '/user/:userID',
                component: require('./pages/User.vue')
            },
            {
                path: '/search',
                component: require('./pages/Search.vue')
            },
            {
                path: '/post',
                component: require('./pages/Post.vue')
            },
            {
                path: '/tag/:tagID',
                component: require('./pages/Tag.vue')
            }
        ]
    });
};
