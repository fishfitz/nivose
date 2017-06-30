import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default (activeUserSlug) => {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: require('./pages/FrontPage.vue'),
                props: { activeUserSlug }
            },
            {
                path: '/user/:userID',
                component: require('./pages/User.vue'),
                props: true
            },
            {
                path: '/search/',
                component: require('./pages/Search.vue')
            }
        ]
    });
};
