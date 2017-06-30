import api from '../api/';

export default {
    namespaced: true,
    state: {
        config: {}
    },
    mutations: {
        SET_CONFIG(state, config) {
            state.config = config;
        }
    },
    actions: {
        FETCH_CONFIG({commit}) {
            return api({
                path: 'GET_config'
            }).then(config => commit('SET_CONFIG', config));
        }
    }
};
