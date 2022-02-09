import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {},
        list: [],
    },
    getters: {
        fetchNews(state) {
            return state.news;
        },
        fetchAsk(state) {
            return state.ask;
        },
        fetchJobs(state) {
            return state.jobs;
        },
        fetchUser(state) {
            return state.user;
        },
        fetchItem(state) {
            return state.item;
        }
    },
    mutations,
    actions,
});