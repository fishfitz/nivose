import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default (activeUserSlug) => {
    return new VueRouter({
        mode: 'history',
        linkActiveClass: 'is-active',
        routes: [
            {
                name: 'home',
                path: '/',
                component: resolve => require(['./pages/FrontPage.vue'], resolve)
            },
            {
                name: 'user',
                path: '/user/:userID',
                component: resolve => require(['./pages/User.vue'], resolve)
            },
            {
                name: 'search',
                path: '/search',
                component: resolve => require(['./pages/Search.vue'], resolve)
            },
            {
                name: 'post',
                path: '/post',
                component: resolve => require(['./pages/Post.vue'], resolve)
            },
            {
                name: 'singlePost',
                path: '/post/:postID',
                component: resolve => require(['./pages/SinglePost.vue'], resolve)
            },
            {
                name: 'tag',
                path: '/tag/:tagID/:reference?',
                component: resolve => require(['./pages/Tag.vue'], resolve)
            }
        ]
    });
};
