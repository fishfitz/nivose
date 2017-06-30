import api from '../api/';

export default {
    namespaced: true,
    state: {
        isAuth: false,
        activeUser: {}
    },
    mutations: {
        SET_ACTIVE_USER(state, user) {
            state.isAuth = true;
            const avatar = user.avatar.filename;
            state.activeUser = Object.assign({}, user, {
                avatar: avatar ? `/avatars/${avatar}` : 'http://bulma.io/images/jgthms.png'
            });
        },
        REMOVE_ACTIVE_USER(state) {
            state.isAuth = false;
            state.activeUser = {};
        }
    },
    actions: {
        FETCH_ACTIVE_USER({commit}, {slug}) {
            return api({
                path: 'GET_user-$userID',
                params: { userID: slug }
            }).then(user => commit('SET_ACTIVE_USER', user));
        },
        SIGN_IN({commit}, {name, password}) {
            return api({
                path: 'POST_signin',
                data: {
                    name: name,
                    password: password
                }
            }).then(user => commit('SET_ACTIVE_USER', user));
        },
        SIGN_OUT({commit}) {
            return api({
                path: 'POST_signout'
            }).then(() => commit('REMOVE_ACTIVE_USER'));
        },
        SIGN_UP({dispatch}, {name, email, password, passwordConfirm}) {
            return api({
                path: 'POST_user',
                data: {
                    name: name,
                    email: email,
                    password: password,
                    passwordConfirm: passwordConfirm
                }
            }).then(() => dispatch('SIGN_UP', {name, password}));
        }
    }
};
