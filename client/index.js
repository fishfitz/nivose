import Vue from 'vue';
import routes from './routes';
import createStore from './store/';
import AppRoot from './App.vue';
import './plugins/awesome-icons';
import routerHooks from './plugins/router-hooks';

export default function createApp(context = {}) {
    const {url, activeUser} = context;
    const router = routes(activeUser);
    const store = createStore();
    const app = new Vue({
        components: { AppRoot },
        router,
        store,
        render(create) {
            return create('div', {domProps: {id: 'app'}}, [
                create('app-root', [
                    create('router-view')
                ])
            ]);
        }
    });

    return new Promise((resolve, reject) => {
        store.dispatch('config/FETCH_CONFIG').then(() => {
            if (url) router.push(url);
            if (activeUser) store.commit('auth/SET_ACTIVE_USER', activeUser);
            if (typeof window !== 'undefined') store.replaceState(window.__INITIAL_STATE__);

            router.onReady(() => {
                routerHooks(router, store);
                const matchedComponents = router.getMatchedComponents();
                Promise.all(matchedComponents.map(({asyncData}) => {
                    if (asyncData) {
                        return asyncData({
                            store,
                            route: router.currentRoute
                        });
                    }
                })).then(() => {
                    context.state = store.state;
                    resolve(app);
                });
            });
        });
    });
}

if (typeof window !== 'undefined') {
    createApp({isAuth: window._AUTH}).then(app => app.$mount('#app'));
}
