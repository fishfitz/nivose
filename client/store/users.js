import Vue from 'vue';
import api from '../api/';

export default {
    namespaced: true,
    state: {
        users: {}
    },
    mutations: {
        SET_USER(state, {slug, user}) {
            const avatar = user.avatar.filename;
            Vue.set(state.users, slug, Object.assign({}, user, {
                avatar: avatar ? `/avatars/${avatar}` : 'http://bulma.io/images/jgthms.png'
            }));
        },
        SET_DESCRIPTION(state, {slug, description}) {
            state.users[slug].description.md = description;
        }
    },
    actions: {
        FETCH_USER({commit}, {slug}) {
            return api({
                path: 'GET_user-$userID',
                params: { userID: slug }
            }).then(user => commit('SET_USER', {slug, user}));
        },
        MODIFY_USER({commit, rootState}, {slug, data, config}) {
            return api({
                path: 'PATCH_user-$userID',
                params: { userID: slug },
                data,
                config
            }).then(user => {
                commit('SET_USER', {slug, user});
                if (rootState.auth.activeUser.slug === slug) {
                    commit('auth/SET_ACTIVE_USER', user, { root: true });
                }
            });
        }
    }
};
